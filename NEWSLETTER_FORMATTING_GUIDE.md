# Newsletter Formatting Guide

## All Available Formatting Options

Your newsletter supports rich formatting to make your content engaging and professional. Here's everything you can do:

---

## 1. ✅ **Bold Text**

**Syntax:** `**your text**`

**Example:**
```
The **festival industry** is evolving rapidly.
```

**Result:** The **festival industry** is evolving rapidly.

---

## 2. ✅ *Italic Text*

**Syntax:** `*your text*` or `_your text_`

**Example:**
```
After working with festivals across *25+ countries*, I've seen the impact.
```

**Result:** After working with festivals across *25+ countries*, I've seen the impact.

---

## 3. ✅ Block Quotes

**Syntax:** Start line with `>`

**Example:**
```
> Technology is best when it brings people together.
```

**Result:**
> Technology is best when it brings people together.

Quotes appear with:
- Microsoft green left border
- Light green background
- Italic styling
- Larger font size
- Perfect for highlighting key insights or testimonials

---

## 4. ✅ Featured Image (Hero Image)

**When:** During newsletter creation, you'll be prompted for a featured image URL

**What it does:**
- Displays as a large hero image at the top of your newsletter
- 400px height, full width
- Appears above your content

**Example URL:**
```
https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200
```

**Tips:**
- Use high-quality images (1200px+ width recommended)
- Festival crowds, technology, or relevant industry images work well
- Unsplash, Pexels are great free sources

---

## 5. ✅ Inline Images

**Syntax:** `![alt text](image-url)`

**Example:**
```
![Festival Crowd](https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800)
```

**Features:**
- Images are centered and responsive
- Rounded corners
- Shadow effect for depth
- Automatically sized to fit content width

**Best Practices:**
- Use descriptive alt text
- Keep images 800-1200px wide
- Use relevant, high-quality photos

---

## 6. ✅ YouTube Videos

**Syntax:** `[youtube](video-id)`

**Example:**
```
[youtube](dQw4w9WgXcQ)
```

**How to get video ID:**
1. Go to YouTube video
2. Look at URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
3. Copy the part after `v=` → `dQw4w9WgXcQ`

**Features:**
- Responsive 16:9 video player
- Rounded corners with shadow
- Fully embedded and playable
- Works on all devices

---

## Complete Example Newsletter

Here's a newsletter using ALL formatting options:

```
The festival industry is entering an exciting new era where **technology and innovation** are transforming every aspect of the event experience. After working with festivals across *25+ countries*, I've identified the key trends.

**The Evolution of Cashless Payments**

Modern systems now offer:
- Real-time analytics
- Integration with loyalty programs  
- Sustainable digital receipts

> The festivals that thrive are those that view technology not as a cost center, but as a revenue multiplier.

![Festival Crowd with Wristbands](https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800)

**AI-Powered Crowd Management**

Artificial intelligence is revolutionizing how we handle large-scale events. Platforms now use **machine learning** to predict crowd flow and prevent bottlenecks.

Watch this video on festival innovation:

[youtube](dQw4w9WgXcQ)

**Looking Ahead**

The future belongs to festivals that embrace innovation while maintaining the *human connection* that makes live events special.

> Technology should enhance - not replace - the magic of shared experiences.
```

---

## Formatting Tips

### For Best Results:

1. **Combine Formatting**
   - You can use `**bold**` and `*italic*` together: `***bold and italic***`
   - Mix text formatting within quotes

2. **Structure Your Content**
   - Use `**Section Headers**` for main topics
   - Use quotes for key insights or testimonials
   - Break up text with images every 3-4 paragraphs

3. **Visual Hierarchy**
   - Featured image sets the tone
   - Bold headers guide readers
   - Quotes highlight key points
   - Inline images provide visual breaks
   - Videos engage and educate

4. **Line Breaks**
   - Leave blank lines between paragraphs
   - Single line breaks become `<br />` tags
   - Double line breaks create paragraph spacing

---

## Quick Reference

| Format | Syntax | Use For |
|--------|--------|---------|
| Bold | `**text**` | Important points, headers |
| Italic | `*text*` or `_text_` | Emphasis, statistics |
| Quote | `> text` | Testimonials, key insights |
| Featured Image | URL prompt | Hero/banner image |
| Inline Image | `![alt](url)` | Supporting visuals |
| Video | `[youtube](id)` | Demonstrations, talks |

---

## Common Mistakes to Avoid

❌ **Don't:** Use HTML tags like `<b>` or `<i>`
✅ **Do:** Use markdown syntax `**bold**` and `*italic*`

❌ **Don't:** Forget alt text for images
✅ **Do:** `![Descriptive text](url)`

❌ **Don't:** Use YouTube full URLs
✅ **Do:** Extract just the video ID

❌ **Don't:** Overuse formatting
✅ **Do:** Use sparingly for emphasis

---

## Testing Your Newsletter

Before publishing:

1. **Preview Content**: Review formatting in your text editor
2. **Check Images**: Verify all image URLs work
3. **Test Video**: Confirm YouTube video ID is correct
4. **Read Aloud**: Check flow and readability
5. **Verify Links**: Test LinkedIn URL if provided

---

## Need Help?

Run the newsletter tool:
```bash
cd /app
python3 add_newsletter.py
```

The tool will guide you through each step and show you the formatting options available.

Happy writing! 📝
