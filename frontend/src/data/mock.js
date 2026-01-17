// Mock data for Andy Poulet's business website

export const personalInfo = {
  name: "Andy Poulet",
  title: "Business Development & Strategic Partnerships",
  tagline: "Connecting innovative companies with growth opportunities",
  bio: {
    intro: "With a passion for building meaningful partnerships and driving business growth, I specialize in connecting innovative technology companies with opportunities that accelerate their success.",
    career: "Throughout my career, I've focused on strategic business development, forging partnerships that create value for all stakeholders. My experience spans the technology, events, and fintech sectors, where I've helped companies expand their reach and maximize their potential.",
    current: "Today, I work with four exceptional companies at the forefront of their industries - from cashless payment solutions and event logistics to sports marketing and fan engagement platforms. Each partnership represents my commitment to innovation and excellence in business development."
  },
  linkedIn: "https://www.linkedin.com/in/andypoulet/",
  email: "contact@andypoulet.com",
  calendlyUrl: "https://calendly.com/andypoulet"
};

export const companies = [
  {
    id: "wristcoin",
    name: "WristCoin",
    tagline: "Secure Cashless Payment Solutions",
    description: "Revolutionizing cashless transactions at events, festivals, and venues",
    fullDescription: "WristCoin is a cutting-edge cashless payment and mobile POS solution designed for seamless operations at events, festivals, clubs, hotels, resorts, theme parks, and venues. The platform empowers businesses to boost sales and elevate guest experiences through secure, efficient transactions.",
    website: "https://mywristcoin.com/",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=srgb&fm=jpg&q=85",
    industries: [
      "Events & Festivals",
      "Venues & Stadiums", 
      "Hotels & Resorts",
      "Theme Parks",
      "Entertainment"
    ],
    products: [
      {
        name: "Complete Mobile POS + Cashless Solution",
        description: "Turn-key system with mobile POS terminals and NFC wristbands, up and running in just 24 hours"
      },
      {
        name: "Cashless Payment Integration",
        description: "Seamlessly integrate cashless payments with existing POS, PMS, and access control systems"
      },
      {
        name: "NFC Technology",
        description: "Bank-grade security with custom wristbands, premium NFC cards, and offline transaction capability"
      }
    ],
    keyFeatures: [
      "Transactions processed in 1 second or less",
      "Works offline to guarantee balance accuracy",
      "Self-serve top-ups without app installation",
      "Dynamic dashboards and comprehensive reporting",
      "Staff and vendor management tools",
      "Inventory management capabilities"
    ],
    testimonials: [
      {
        quote: "By eliminating cash and credit card transactions at the bars we have been able to increase our sales by 20% on average.",
        author: "Antonio Flores",
        company: "Musikone Events"
      },
      {
        quote: "The system itself is very intuitive and easy to use. Implementation was easier than expected.",
        author: "Rory B",
        company: "St. Francis Episcopal School Houston"
      }
    ]
  },
  {
    id: "conchairto",
    name: "conCHAIRto",
    tagline: "Smart Chair Rental Solutions for Festivals",
    description: "Streamlined chair rental service for outdoor festivals",
    fullDescription: "conCHAIRto offers a streamlined, efficient, and affordable approach to chair rentals for destination outdoor music festivals, film festivals, and food festivals. The service eliminates the hassle of bringing personal chairs while enhancing venue safety and guest experience.",
    website: "https://conchairto.com/",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?crop=entropy&cs=srgb&fm=jpg&q=85",
    industries: [
      "Music Festivals",
      "Film Festivals",
      "Food Festivals",
      "Outdoor Events",
      "Entertainment Venues"
    ],
    products: [
      {
        name: "Priority Reservation System",
        description: "Online ordering with early bird pricing - $15 when reserved 7+ days in advance"
      },
      {
        name: "Quality Festival Chairs",
        description: "Lightweight design with cup holders, 350lbs weight capacity, multiple color options"
      },
      {
        name: "Turnkey Solution for Venues",
        description: "Revenue-sharing program with complete logistics management"
      }
    ],
    keyFeatures: [
      "Get through security faster - no personal chair searches",
      "Leave chairs at drop zones when done",
      "Reduces dangerous contraband smuggling risks",
      "Maximizes venue space efficiency",
      "Multiple color options for visibility",
      "Cup holders and comfortable design"
    ],
    testimonials: [],
    partners: [
      "Rock The South",
      "Blue Note Jazz Fest",
      "Monterey Jazz Festival",
      "Rock The Country",
      "Honeyland Festival"
    ]
  },
  {
    id: "faniq",
    name: "FanIQ One",
    tagline: "Smarter Paid Social for Live Events",
    description: "Cross-platform ad management for sports and entertainment",
    fullDescription: "FanIQ One is a unified platform for creating and managing advertising campaigns across Facebook, Instagram, Snapchat, and TikTok. Built specifically for live events, it helps sports and entertainment brands drive ticket sales, merchandise revenue, sponsorships, and fan engagement.",
    website: "https://faniq.one/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&q=85",
    industries: [
      "Sports Teams & Leagues",
      "Live Entertainment",
      "Concert Venues",
      "Event Marketing",
      "Ticketing Platforms"
    ],
    products: [
      {
        name: "Unified Campaign Dashboard",
        description: "Create and manage campaigns across all major social platforms from one interface"
      },
      {
        name: "Advanced Audience Targeting",
        description: "Target known user lists, build custom audiences, or use pre-built lifestyle audiences"
      },
      {
        name: "Creative Management Suite",
        description: "Upload, tag, transcribe video assets and deploy to all platforms with a single click"
      }
    ],
    keyFeatures: [
      "One platform for Facebook, Instagram, Snapchat, and TikTok",
      "Unified campaign reporting and analytics",
      "Ticketing platform integrations (Ticketmaster, SeatGeek, AXS, Tixr)",
      "CRM and CDP sync capabilities",
      "Lead capture and SMS platform integration",
      "Real-time inventory and sales tracking"
    ],
    testimonials: [],
    integrations: [
      "Ticketmaster",
      "SeatGeek", 
      "Salesforce",
      "HubSpot",
      "Mailchimp",
      "Laylo"
    ]
  },
  {
    id: "fanos",
    name: "FanOS by WMT.Digital",
    tagline: "Interactive Fan Experiences",
    description: "Bespoke digital platforms for sports and entertainment brands",
    fullDescription: "FanOS is WMT.Digital's comprehensive platform for creating interactive fan experiences that drive engagement. With a bespoke approach, FanOS allows organizations to engage their niche audiences with one-of-one digital platforms including team sites, mobile apps, and Smart TV applications.",
    website: "https://wmt.digital/products/fanos",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=srgb&fm=jpg&q=85",
    industries: [
      "Sports Teams & Leagues",
      "Entertainment Brands",
      "Media Companies",
      "Event Organizations",
      "Digital Publishing"
    ],
    products: [
      {
        name: "Team & Brand Websites",
        description: "Flexible, innovative digital presence with custom development and design options"
      },
      {
        name: "Story Telling Sites",
        description: "Stand-alone digital experiences with cutting-edge multimedia storytelling features"
      },
      {
        name: "Native Mobile Apps",
        description: "Fully native builds for iOS and Android with robust account management"
      },
      {
        name: "Smart TV Apps",
        description: "Apps for Roku, Apple TV, Android TV & Amazon Fire with live and on-demand streaming"
      },
      {
        name: "Syncing Calendar App",
        description: "Master schedule that automatically syncs to fans' devices when events change"
      },
      {
        name: "Event Mobile Apps (Aloompa)",
        description: "Premium event mobile app platform with interactive maps and personalized schedules"
      }
    ],
    keyFeatures: [
      "99.9% uptime guarantee",
      "Flat fee pricing model",
      "Open and agnostic to all integrations",
      "Industry-leading SEO support",
      "Cross-platform authentication",
      "High definition, low latency streaming"
    ],
    testimonials: [
      {
        quote: "The customization and personalization for the user is truly a first-class experience.",
        author: "Daniel Watkins",
        company: "Auburn Senior Associate AD"
      }
    ]
  }
];

export const contactInfo = {
  calendlyUrl: "https://calendly.com/andypoulet",
  formFields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "company", label: "Company", type: "text", required: false },
    { name: "message", label: "Message", type: "textarea", required: true }
  ]
};
