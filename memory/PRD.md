# Andy Poulet Business Website - Product Requirements Document

## Original Problem Statement
Create a personal business website for Andy Poulet to showcase who he is, what he does, and the companies he works with to potential clients.

**Date Created:** January 17, 2025

## User Personas
- **Primary:** Potential business clients and partners looking to learn about Andy's work
- **Secondary:** Representatives from companies Andy works with
- **Tertiary:** Professional network connections exploring collaboration opportunities

## Core Requirements

### Pages Required
1. **Home Page**
   - Introduction to Andy Poulet
   - Career overview and current work
   - Links to company pages with brief descriptions
   
2. **Company Detail Pages** (4 pages)
   - WristCoin - Cashless payment solutions
   - conCHAIRto - Festival chair rental service
   - FanIQ One - Sports marketing platform
   - FanOS (WMT.Digital) - Fan engagement technology
   
3. **Contact Page**
   - Contact form for messages
   - Calendly calendar integration for booking calls

4. **Email Service** (Deferred)
   - To be configured later with custom domain

## Architecture & Tech Stack
- **Frontend:** React 19 with React Router
- **Backend:** FastAPI with Python (for future contact form handling)
- **Database:** MongoDB (for future contact submissions)
- **Design System:** Pixel Pushers inspired (lime green #d9fb06, dark backgrounds)
- **Components:** shadcn/ui components
- **Calendar:** Calendly integration via react-calendly package

## What's Been Implemented (January 17, 2025)

### ✅ Phase 1: Frontend with Mock Data

#### Pages Created
1. **Home Page** (`/app/frontend/src/pages/Home.jsx`)
   - Hero section with professional background image
   - Personal introduction and bio sections
   - Grid of 4 company cards with images and descriptions
   - Call-to-action section
   
2. **Company Detail Pages** (`/app/frontend/src/pages/CompanyDetail.jsx`)
   - Dynamic routing for each company (`/company/:companyId`)
   - Hero section with company branding
   - Full company description
   - Products & Services grid
   - Key features list
   - Industries served
   - **Case Studies/Success Stories section** (NEW)
   - Testimonials (where available)
   - CTA to contact
   
3. **Contact Page** (`/app/frontend/src/pages/Contact.jsx`)
   - Contact form with validation (Name, Email, Company, Message)
   - Calendly widget integration for call booking
   - Two-column layout (form + calendar)
   - Success message on form submission (mock)

#### Components
- **Header** (`/app/frontend/src/components/Header.jsx`)
  - Fixed navigation bar
  - Logo and navigation links
  - Mobile-responsive menu
  
- **Footer** (`/app/frontend/src/components/Footer.jsx`)
  - Quick links
  - Social media (LinkedIn)
  - Copyright notice

#### Data Layer
- **Mock Data** (`/app/frontend/src/data/mock.js`)
  - Personal information for Andy
  - Company details (4 companies)
  - **10+ case studies across all companies** (NEW)
    - WristCoin: 3 case studies (Hollerbach Oktoberfest, Oasiz Mall, Aniwa Gathering)
    - conCHAIRto: 2 case studies (Festival Safety, Major Festival Partnerships)
    - FanIQ One: 2 case studies (Sports Team Campaigns, Live Event Targeting)
    - FanOS: 3 case studies (Auburn Athletics, Aloompa Events, Syncing Calendar)
  - Contact form configuration
  - All content scraped from company websites

#### Styling
- **Custom CSS** (`/app/frontend/src/App.css`)
  - Pixel Pushers design system implemented
  - Lime green (#d9fb06) primary brand color
  - Dark backgrounds (#1a1c1b, #302f2c)
  - Typography system with Inter font
  - Pill-shaped buttons with hover effects
  - Responsive grid layouts
  - Mobile-first responsive design

#### Dependencies Installed
- `react-calendly@4.4.0` - For Calendly widget embedding

## Content Sources
- **WristCoin:** https://mywristcoin.com/
- **conCHAIRto:** https://conchairto.com/
- **FanIQ One:** https://faniq.one/
- **FanOS:** https://wmt.digital/products/fanos

## Prioritized Backlog

### P0 - Critical (Next Phase)
1. **Backend API Development**
   - Contact form submission endpoint
   - Email notification service
   - Form data storage in MongoDB
   
2. **Calendly Configuration**
   - Update with actual Calendly URL
   - Configure webhook for event logging (optional)

3. **LinkedIn Integration**
   - Verify LinkedIn profile link
   - Consider fetching actual LinkedIn data via API (if needed)

### P1 - High Priority
1. **Email Service Setup**
   - Configure email send/receive with custom domain
   - Implement transactional email service (SendGrid/AWS SES)
   
2. **Content Refinement**
   - Update bio with actual LinkedIn profile data
   - Add more detailed career history if needed
   - Professional photography/headshot
   
3. **SEO Optimization**
   - Meta tags for all pages
   - Open Graph images
   - Sitemap generation
   - Google Analytics integration

### P2 - Medium Priority
1. **Enhanced Features**
   - Blog section for industry insights
   - Case studies or success stories
   - Resources/downloads section
   
2. **Performance Optimization**
   - Image optimization and lazy loading
   - Code splitting for faster load times
   - CDN integration
   
3. **Analytics & Tracking**
   - Google Analytics or alternative
   - Conversion tracking
   - Heatmap analysis (Hotjar)

### P3 - Nice to Have
1. **Advanced Integrations**
   - CRM integration (HubSpot, Salesforce)
   - Newsletter subscription
   - Social media feed integration
   
2. **Content Management**
   - Admin panel for easy content updates
   - Dynamic company management
   
3. **Multi-language Support**
   - If targeting international clients

## Next Tasks
1. **User Review:** Get feedback on design and content
2. **Calendly Setup:** User needs to provide actual Calendly URL
3. **Backend Development:** Build contact form API endpoints
4. **Email Configuration:** Set up email service once domain is ready
5. **Testing:** End-to-end testing of all user flows
6. **Deployment:** Deploy to production with custom domain

## Technical Notes
- All routes working correctly with React Router
- Mock data easily replaceable with API calls
- Responsive design tested for mobile, tablet, desktop
- Design follows professional business aesthetic with lime green accent color
- Calendly widget configured for easy scheduling

## Success Metrics (Future)
- Contact form submission rate
- Calendly booking conversion rate
- Page engagement time
- Bounce rate
- LinkedIn profile clicks
- Company page visits

---

**Last Updated:** January 19, 2025 (Newsletter Page Added)
**Status:** Phase 1 Complete - Frontend with Mock Data + Case Studies + Newsletter ✅
