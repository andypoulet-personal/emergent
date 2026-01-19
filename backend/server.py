from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Newsletter Models
class Newsletter(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    title: str
    preview_text: str
    full_content: str
    featured_image: str = ""  # Main hero image URL
    linkedin_url: str
    publish_date: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    author_name: str = "Andy Poulet"
    tags: List[str] = Field(default_factory=list)

class NewsletterCreate(BaseModel):
    title: str
    preview_text: str
    full_content: str
    featured_image: str = ""
    linkedin_url: str
    tags: List[str] = Field(default_factory=list)

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Newsletter endpoints
@api_router.get("/newsletters")
async def get_newsletters(limit: int = 10, skip: int = 0):
    """Get all newsletters with pagination"""
    newsletters = await db.newsletters.find().sort("publish_date", -1).skip(skip).limit(limit).to_list(None)
    total = await db.newsletters.count_documents({})
    return {
        "newsletters": newsletters,
        "total": total,
        "skip": skip,
        "limit": limit
    }

@api_router.get("/newsletters/{newsletter_id}")
async def get_newsletter(newsletter_id: str):
    """Get a specific newsletter by ID"""
    newsletter = await db.newsletters.find_one({"_id": newsletter_id})
    if not newsletter:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Newsletter not found")
    return newsletter

@api_router.post("/newsletters", response_model=Newsletter)
async def create_newsletter(newsletter: NewsletterCreate):
    """Create a new newsletter (admin only - add auth later)"""
    newsletter_obj = Newsletter(**newsletter.model_dump())
    doc = newsletter_obj.model_dump(by_alias=True)
    doc['publish_date'] = doc['publish_date'].isoformat()
    await db.newsletters.insert_one(doc)
    return newsletter_obj

# Contact form endpoint
@api_router.post("/contact")
async def submit_contact_form(name: str, email: str, company: str = "", message: str = ""):
    """Handle contact form submission"""
    from datetime import datetime
    from fastapi import HTTPException
    import smtplib
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart
    
    # Store in database
    contact_submission = {
        "_id": str(uuid.uuid4()),
        "name": name,
        "email": email,
        "company": company,
        "message": message,
        "submitted_at": datetime.now(timezone.utc).isoformat()
    }
    await db.contact_submissions.insert_one(contact_submission)
    
    # Send email notification
    try:
        # Email configuration - using environment variables
        smtp_server = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER', '')
        smtp_password = os.environ.get('SMTP_PASSWORD', '')
        recipient_email = os.environ.get('CONTACT_EMAIL', 'andy@ultimate4all.com')
        
        # Create email
        msg = MIMEMultipart()
        msg['From'] = smtp_user if smtp_user else 'noreply@andypoulet.com'
        msg['To'] = recipient_email
        msg['Subject'] = f"New Contact Form Submission from {name}"
        
        body = f"""
New contact form submission from your website:

Name: {name}
Email: {email}
Company: {company if company else 'Not provided'}

Message:
{message}

---
Submitted at: {contact_submission['submitted_at']}
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email if SMTP is configured
        if smtp_user and smtp_password:
            server = smtplib.SMTP(smtp_server, smtp_port)
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
            server.quit()
            logger.info(f"Contact form email sent to {recipient_email}")
        else:
            logger.warning("SMTP not configured - email not sent, but stored in database")
            
    except Exception as e:
        logger.error(f"Error sending email: {e}")
        # Don't fail the request if email fails
    
    return {"status": "success", "message": "Your message has been received. We'll get back to you soon!"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()