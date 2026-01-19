# How to Add a Newsletter to Your Website

## Quick Start

Run the newsletter tool from your project root:

```bash
cd /app
python3 add_newsletter.py
```

## Step-by-Step Instructions

### 1. Open Your Terminal
Navigate to your project directory:
```bash
cd /app
```

### 2. Run the Newsletter Tool
```bash
python3 add_newsletter.py
```

### 3. Follow the Prompts

The tool will ask you for:

**📰 Newsletter Title**
```
Example: "The Future of Festival Chair Rentals"
```
- Keep it catchy and descriptive
- Use title case

**📝 Preview Text (2-3 sentences)**
```
Example: "Discover how conCHAIRto is revolutionizing festival seating with innovative rental solutions that enhance safety and guest experience while generating new revenue streams for event organizers."
```
- This appears on the newsletter card
- Keep it engaging and concise
- Aim for 150-200 characters

**📄 Full Content**
```
Type your full newsletter article
Press Ctrl+D (Mac/Linux) or Ctrl+Z then Enter (Windows) when finished
```

Tips for content:
- Use `**text**` for bold sections (will be styled)
- Leave blank lines between paragraphs
- Use bullet points with `-` or `*`
- Write naturally - it will be formatted automatically

**🔗 LinkedIn URL (optional)**
```
Example: https://www.linkedin.com/in/andypoulet/
```
- Link to your LinkedIn post (if you published it there)
- Press Enter to skip if not applicable

**🏷️ Tags (comma-separated)**
```
Example: Festivals, Events, conCHAIRto, Innovation
```
- Use 3-5 relevant tags
- Separate with commas
- Helps with SEO and categorization

### 4. Confirm Success

You'll see a confirmation message:
```
✅ Newsletter Published Successfully!
   Title: Your Newsletter Title
   ID: abc-123-xyz
   Date: January 19, 2026
   Tags: Tag1, Tag2, Tag3
   
   View at: http://localhost:3000/newsletter
```

### 5. View Your Newsletter

Open your website and click "Newsletter" in the navigation menu to see your new post!

## Content Writing Tips

### Good Newsletter Structure

1. **Engaging Opening**
   - Hook readers with a compelling first paragraph
   - State the problem or opportunity

2. **Main Content**
   - Break into clear sections
   - Use subheadings with `**Section Title**`
   - Include specific examples and data
   - Tell stories from your experience

3. **Key Takeaways**
   - Bullet points work great
   - Highlight important statistics
   - Include actionable insights

4. **Strong Closing**
   - Summarize key points
   - Call to action (ask for comments/thoughts)
   - Link to related topics

### Example Newsletter Structure

```
The festival industry is evolving rapidly, and technology is at the forefront...

**The Challenge**
Festival organizers face three main problems:
- Long entry times with personal chair searches
- Safety concerns with contraband hidden in chairs
- Lost revenue from inefficient space utilization

**The Solution**
conCHAIRto's rental system addresses all these issues...

[Continue with details, examples, and results]

**Looking Ahead**
The future of festival seating lies in...

What's your experience with festival logistics? I'd love to hear your thoughts!
```

## Formatting Guidelines

- **Bold text**: Use `**text**` in your content
- **Paragraphs**: Leave blank lines between them
- **Lists**: Start lines with `-` or `*`
- **Line breaks**: The tool automatically converts single line breaks to `<br />` tags

## Troubleshooting

**"Error: MONGO_URL or DB_NAME not found"**
- Make sure you're in the `/app` directory
- The tool needs access to backend/.env file

**Newsletter doesn't appear on website**
- Refresh the page (browser might be caching)
- Check that you're on http://localhost:3000/newsletter

**Content formatting looks wrong**
- Use `**text**` for bold (not markdown `#` headers)
- Leave blank lines between paragraphs
- Avoid HTML tags (use simple formatting)

## Best Practices

1. **Weekly Consistency**: Publish every Wednesday (or your chosen day)
2. **Length**: Aim for 500-800 words for optimal engagement
3. **Value First**: Focus on insights, not promotion
4. **SEO Keywords**: Naturally include industry terms (festivals, events, technology)
5. **Link to LinkedIn**: Always include your LinkedIn URL if you post there too

## Need Help?

The newsletter tool is located at `/app/add_newsletter.py` if you need to modify it or check the code.

Your newsletters are stored in MongoDB and will persist across server restarts.
