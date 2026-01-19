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
    
    print("\n" + "="*70)
    print("  ADD NEW NEWSLETTER - Andy Poulet Website")
    print("="*70 + "\n")
    
    title = input("📰 Newsletter Title: ").strip()
    if not title:
        print("❌ Title cannot be empty")
        sys.exit(1)
    
    preview_text = input("\n📝 Preview Text (2-3 sentences): ").strip()
    if not preview_text:
        print("❌ Preview text cannot be empty")
        sys.exit(1)
    
    featured_image = input("\n🖼️  Featured Image URL (optional, press Enter to skip): ").strip()
    
    print("\n" + "="*70)
    print("📄 FULL CONTENT - Formatting Guide:")
    print("="*70)
    print("  **bold text**           - Bold text")
    print("  *italic text*           - Italic text")
    print("  > Quote text            - Block quote (start line with >)")
    print("  ![alt](image-url)       - Insert image")
    print("  [youtube](video-id)     - Embed YouTube video")
    print("="*70)
    print("\nType your content below, press Ctrl+D (Mac/Linux) or Ctrl+Z then Enter (Windows) when finished:\n")
    
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
        "featured_image": featured_image if featured_image else "",
        "linkedin_url": linkedin_url if linkedin_url else "",
        "publish_date": datetime.utcnow().isoformat(),
        "author_name": "Andy Poulet",
        "tags": tags
    }
    
    # Insert into database
    try:
        await db.newsletters.insert_one(newsletter)
        print("\n" + "="*70)
        print("✅ Newsletter Published Successfully!")
        print("="*70)
        print(f"   Title: {newsletter['title']}")
        print(f"   ID: {newsletter['_id']}")
        print(f"   Date: {datetime.fromisoformat(newsletter['publish_date']).strftime('%B %d, %Y')}")
        print(f"   Featured Image: {'Yes' if featured_image else 'No'}")
        print(f"   Tags: {', '.join(tags) if tags else 'None'}")
        print("\n   View at: http://localhost:3000/newsletter")
        print("="*70 + "\n")
    except Exception as e:
        print(f"\n❌ Error adding newsletter: {e}")
        sys.exit(1)
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(add_newsletter())
