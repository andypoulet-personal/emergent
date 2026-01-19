#!/usr/bin/env python3
"""
Simple tool to add a new newsletter to Andy Poulet's website
Usage: python3 add_newsletter.py
"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
import sys
from datetime import datetime
import uuid

# Load environment from backend .env file
from pathlib import Path
from dotenv import load_dotenv

backend_dir = Path(__file__).parent / 'backend'
load_dotenv(backend_dir / '.env')

MONGO_URL = os.environ.get('MONGO_URL')
DB_NAME = os.environ.get('DB_NAME')

async def add_newsletter():
    if not MONGO_URL or not DB_NAME:
        print("❌ Error: MONGO_URL or DB_NAME not found in environment")
        print("   Make sure /app/backend/.env file exists with these variables")
        sys.exit(1)
    
    print("\n" + "="*60)
    print("  ADD NEW NEWSLETTER - Andy Poulet Website")
    print("="*60 + "\n")
    
    title = input("📰 Newsletter Title: ").strip()
    if not title:
        print("❌ Title cannot be empty")
        sys.exit(1)
    
    preview_text = input("\n📝 Preview Text (2-3 sentences): ").strip()
    if not preview_text:
        print("❌ Preview text cannot be empty")
        sys.exit(1)
    
    print("\n📄 Full Content (type your content, press Ctrl+D when finished):")
    print("   Tip: Use **text** for bold, and blank lines for paragraphs\n")
    lines = []
    try:
        while True:
            line = input()
            lines.append(line)
    except EOFError:
        pass
    
    full_content = "\n".join(lines).strip()
    if not full_content:
        print("❌ Full content cannot be empty")
        sys.exit(1)
    
    linkedin_url = input("\n🔗 LinkedIn URL (or press Enter to skip): ").strip()
    
    tags_input = input("\n🏷️  Tags (comma-separated, e.g., 'Festivals, Technology'): ").strip()
    tags = [tag.strip() for tag in tags_input.split(",")] if tags_input else []
    
    # Connect to MongoDB
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]
    
    # Create newsletter document
    newsletter = {
        "_id": str(uuid.uuid4()),
        "title": title,
        "preview_text": preview_text,
        "full_content": full_content,
        "linkedin_url": linkedin_url if linkedin_url else "",
        "publish_date": datetime.utcnow().isoformat(),
        "author_name": "Andy Poulet",
        "tags": tags
    }
    
    # Insert into database
    try:
        await db.newsletters.insert_one(newsletter)
        print("\n" + "="*60)
        print("✅ Newsletter Published Successfully!")
        print("="*60)
        print(f"   Title: {newsletter['title']}")
        print(f"   ID: {newsletter['_id']}")
        print(f"   Date: {datetime.fromisoformat(newsletter['publish_date']).strftime('%B %d, %Y')}")
        print(f"   Tags: {', '.join(tags) if tags else 'None'}")
        print("\n   View at: http://localhost:3000/newsletter")
        print("="*60 + "\n")
    except Exception as e:
        print(f"\n❌ Error adding newsletter: {e}")
        sys.exit(1)
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(add_newsletter())
