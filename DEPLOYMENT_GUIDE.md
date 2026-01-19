# Deploying Your Website to andypoulet.com

## Overview
Your website is currently running locally. To make it accessible at andypoulet.com, you need to:
1. Set up email for the contact form
2. Deploy to a hosting service
3. Point your domain to the hosting service

---

## STEP 1: Set Up Contact Form Email

### Option A: Using Gmail (Easiest for Testing)

1. **Enable 2-Factor Authentication on your Gmail**
   - Go to https://myaccount.google.com/security
   - Turn on 2-Step Verification

2. **Create an App Password**
   - Visit https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

3. **Update Backend Environment File**
   - Open `/app/backend/.env`
   - Add these lines:
   ```
   SMTP_SERVER=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-gmail@gmail.com
   SMTP_PASSWORD=your-app-password-here
   CONTACT_EMAIL=andy@ultimate4all.com
   ```

4. **Restart Backend**
   ```bash
   sudo supervisorctl restart backend
   ```

### Option B: Using SendGrid (Recommended for Production)

1. **Sign up for SendGrid**
   - Go to https://sendgrid.com
   - Free tier: 100 emails/day

2. **Get API Key**
   - Dashboard → Settings → API Keys → Create API Key
   - Copy the key

3. **Update Backend Environment**
   - Open `/app/backend/.env`
   - Add:
   ```
   SMTP_SERVER=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASSWORD=your-sendgrid-api-key
   CONTACT_EMAIL=andy@ultimate4all.com
   ```

4. **Restart Backend**

---

## STEP 2: Choose a Hosting Platform

I recommend **three options** based on your needs:

### Option A: Vercel + Railway (Easiest - Recommended)

**Best for:** Quick deployment, automatic updates

**Frontend (Vercel):**
1. Go to https://vercel.com and sign up
2. Click "New Project"
3. Connect your GitHub (you'll need to push code to GitHub first)
4. Select your repository
5. Settings:
   - Framework: Create React App
   - Build Command: `cd frontend && yarn build`
   - Output Directory: `frontend/build`
   - Environment Variable: `REACT_APP_BACKEND_URL` = (Railway URL from next step)

**Backend (Railway):**
1. Go to https://railway.app and sign up
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Settings:
   - Root Directory: `/backend`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
5. Add Environment Variables (copy from `/app/backend/.env`):
   - MONGO_URL
   - DB_NAME
   - SMTP_SERVER, SMTP_PORT, SMTP_USER, SMTP_PASSWORD
   - CONTACT_EMAIL=andy@ultimate4all.com
6. Copy the generated URL (e.g., `https://your-app.railway.app`)

**Connect Domain:**
- In Vercel: Settings → Domains → Add `andypoulet.com`
- Follow Vercel's DNS instructions

**Cost:** Free tier available

---

### Option B: AWS (More Control, More Complex)

**Best for:** Professional production environment

**You'll Need:**
1. AWS account
2. Elastic Beanstalk for backend
3. S3 + CloudFront for frontend
4. Route 53 for domain

**Complexity:** High - recommend hiring a DevOps consultant

---

### Option C: Traditional Hosting (Simple but Limited)

**Best for:** If you have existing hosting with cPanel

**Requirements:**
- VPS or dedicated server with SSH access
- Node.js and Python support
- Domain access

**Complexity:** Medium

---

## STEP 3: Point Your Domain

### If Using Vercel (Recommended):

1. **Login to Your Domain Registrar** (where you bought andypoulet.com)
   - GoDaddy, Namecheap, Google Domains, etc.

2. **Update DNS Settings**
   - Add a CNAME record:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
   - Add A records for root domain:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

3. **Wait for Propagation** (can take 24-48 hours)

4. **Verify in Vercel**
   - Settings → Domains → Should show "Active"

---

## STEP 4: Test Everything

### Test Contact Form:
1. Visit your site
2. Fill out contact form
3. Check andy@ultimate4all.com for email

### Test Newsletter:
1. Visit `/newsletter`
2. Check all formatting displays correctly

### Test Calendly:
1. Visit `/contact`
2. Verify Calendly widget loads

---

## Quick Start (Recommended Path)

**For the fastest deployment:**

1. **Set up email** (30 mins)
   - Use Gmail App Password method above
   - Test locally first

2. **Push to GitHub** (15 mins)
   ```bash
   cd /app
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

3. **Deploy to Vercel** (30 mins)
   - Follow Option A above
   - Connect GitHub repo
   - Add environment variables

4. **Update DNS** (5 mins)
   - Add Vercel DNS records to your domain registrar

5. **Wait & Test** (24-48 hours for DNS)
   - Test all features once DNS propagates

---

## Need Help?

**Common Issues:**

**Email not sending:**
- Check SMTP credentials in `/app/backend/.env`
- Check backend logs: `tail -f /var/log/supervisor/backend.err.log`
- Test with: `curl -X POST http://localhost:8001/api/contact -d "name=Test&email=test@test.com&message=Hello"`

**Domain not working:**
- DNS takes 24-48 hours
- Use https://dnschecker.org to check propagation
- Verify SSL certificate in Vercel

**Backend connection failed:**
- Update `REACT_APP_BACKEND_URL` in Vercel environment variables
- Make sure Railway backend URL is correct
- Check CORS settings in backend

---

## Cost Estimate

**Minimal Setup (Recommended):**
- Domain: $10-15/year (you already have this)
- Vercel: FREE
- Railway: FREE tier (100GB bandwidth)
- SendGrid: FREE (100 emails/day)
- **Total: ~$0/month to start**

**When you grow:**
- Railway Pro: $5-20/month
- SendGrid paid: $15/month (40k emails)
- **Total: ~$20-35/month**

---

## What I've Set Up For You

✅ Contact form backend connected to `andy@ultimate4all.com`
✅ Newsletter system with formatting
✅ Calendly integration
✅ MongoDB database
✅ All pages responsive and working

**Next Steps:** Choose a hosting option and I can guide you through it!