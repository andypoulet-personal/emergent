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
    ],
    caseStudies: [
      {
        title: "Hollerbach Oktoberfest",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?crop=entropy&cs=srgb&fm=jpg&q=85",
        challenge: "The Hollerbach Oktoberfest, a popular annual event in Florida attracting thousands of visitors, faced significant operational challenges including long lines, delays for attendees, and difficulties in tracking sales and revenue accurately with their ticket-based system.",
        solution: "After implementing WristCoin's cashless payment solution, the event organizers were able to eliminate bottlenecks and streamline operations with NFC wristbands.",
        results: [
          "Dramatically reduced wait times at bars and vendors",
          "Real-time sales tracking and comprehensive reporting",
          "Improved guest experience with faster transactions",
          "Increased sales through faster service"
        ]
      },
      {
        title: "Oasiz Mall Madrid",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?crop=entropy&cs=srgb&fm=jpg&q=85",
        challenge: "Oasiz Mall, a luxury suburban mall in Madrid, needed a seamless cashless solution for its year-round amusement park activities that could handle high volume transactions without requiring complex app downloads or user registration.",
        solution: "WristCoin's user-friendly self-serve top-up system with no app or username required impressed the mall management. The solution provided a frictionless experience for visitors.",
        results: [
          "Fleet of mPOS terminals managing all park sales",
          "Self-serve top-up stations with no app required",
          "Integrated banking services ensuring regular payouts",
          "Seamless guest experience for year-round operations"
        ]
      },
      {
        title: "Aniwa Gathering",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=srgb&fm=jpg&q=85",
        challenge: "The organizing team behind Aniwa Gathering faced a unique challenge: hosting a cashless event in the remote wilderness of Big Bear, California, several hours from Los Angeles. With no reliable internet or mobile data service available except satellite internet at the central station, they needed a cashless solution that could work offline.",
        solution: "WristCoin's offline transaction capability was the perfect solution. The system could process payments without internet connectivity, syncing data when connection was available.",
        results: [
          "Successful cashless event in remote wilderness location",
          "Offline transaction processing guaranteed balance accuracy",
          "Vendor sales increased due to ease of payment",
          "Saved money on internet infrastructure across the site",
          "Beautifully printed wristbands delivered on time"
        ],
        testimonial: {
          quote: "The WristCoin team were attentive and available throughout pre production and our event itself. The wristbands were printed beautifully and delivered on time. Our vendors' sales went up due to ease of payment. We saved money on internet access across site due to the ability to operate transactions without wifi/service. Affordable, consistent and reliable",
          author: "Victoria Keon-Cohen",
          role: "Aniwa Gathering Producer"
        }
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
    ],
    caseStudies: [
      {
        title: "Festival Safety & Security Enhancement",
        image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=srgb&fm=jpg&q=85",
        challenge: "Music festivals were experiencing security bottlenecks as attendees brought personal chairs that needed thorough searches. This created long entry lines and potential safety risks from contraband hidden in chair frames and cushions.",
        solution: "conCHAIRto implemented a pre-reserved chair rental system that eliminates the need for personal chairs. Attendees order online, pick up their chairs after security, and drop them off at designated zones when leaving.",
        results: [
          "Faster security processing with fewer items to search",
          "Reduced contraband smuggling incidents",
          "Improved space utilization within festival grounds",
          "Enhanced guest experience with quality, comfortable seating",
          "Additional revenue stream for festival organizers"
        ]
      },
      {
        title: "Major Festival Partnership Success",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=srgb&fm=jpg&q=85",
        challenge: "Large-scale festivals like Rock The South and Monterey Jazz Festival needed a logistics solution that could handle thousands of chair rentals while maintaining quality and eliminating the hassle for attendees traveling from out of town.",
        solution: "conCHAIRto's turnkey approach provides complete logistics management with online ordering, early bird discounts ($15 vs $20), multiple color options for visibility, and convenient drop-off zones throughout the venue.",
        results: [
          "Successfully serving major festivals including Rock The South and Blue Note Jazz Fest",
          "High customer satisfaction with 350lbs weight capacity chairs",
          "Revenue-sharing model creating win-win partnerships",
          "Streamlined operations for festival organizers",
          "Enhanced brand visibility with custom color options"
        ]
      }
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
    ],
    caseStudies: [
      {
        title: "Sports Team Ticket Sales Campaign",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=srgb&fm=jpg&q=85",
        challenge: "Sports teams were managing separate advertising campaigns across Facebook, Instagram, Snapchat, and TikTok using different platforms, leading to fragmented data, inconsistent messaging, and difficulty tracking which platforms drove actual ticket sales.",
        solution: "FanIQ One unified all social advertising into a single dashboard with direct ticketing integrations. Teams could create campaigns once, deploy across all platforms, and track performance with unified reporting tied directly to ticket sales.",
        results: [
          "Single dashboard replacing 4+ separate platforms",
          "Direct attribution from ad spend to ticket sales",
          "Reduced campaign creation time by 60%",
          "Improved ROAS with unified audience insights",
          "Real-time inventory updates across all platforms"
        ]
      },
      {
        title: "Live Event Audience Targeting",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=srgb&fm=jpg&q=85",
        challenge: "Concert promoters struggled to reach the right audiences for niche events. Generic social media targeting resulted in wasted ad spend and low conversion rates. They needed access to pre-built lifestyle audiences interested in specific event types.",
        solution: "FanIQ One's platform includes pre-built lifestyle audiences combined with custom audience building tools. Promoters could target known fans, lookalike audiences, and specialized interest groups across all major social platforms simultaneously.",
        results: [
          "Higher conversion rates with better audience targeting",
          "Access to pre-built lifestyle audiences for live events",
          "Reduced cost per ticket acquisition",
          "Increased event sellout rates",
          "Better ROI on social advertising spend"
        ]
      }
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
        quote: "The customization and personalization for the user is truly a first-class experience. As exciting as this launch is, it represents only the beginning of what's to come as we will constantly add more features during this partnership.",
        author: "Daniel Watkins",
        company: "Auburn Senior Associate AD of Marketing & Revenue Generation"
      }
    ],
    caseStudies: [
      {
        title: "Auburn Athletics Digital Transformation",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?crop=entropy&cs=srgb&fm=jpg&q=85",
        challenge: "Auburn Athletics needed a comprehensive digital platform that could engage fans across multiple touchpoints - website, mobile apps, and connected TV devices - while maintaining brand consistency and providing personalized experiences for thousands of fans.",
        solution: "WMT.Digital's FanOS platform provided a complete ecosystem including a custom team website, native mobile apps for iOS and Android, and Smart TV applications for Roku, Apple TV, and Amazon Fire. All platforms shared unified authentication and content management.",
        results: [
          "First-class personalized user experience across all devices",
          "Unified platform with cross-device authentication",
          "99.9% uptime for critical game days",
          "Seamless integration with existing Auburn systems",
          "Foundation for ongoing feature development and innovation"
        ],
        testimonial: {
          quote: "The customization and personalization for the user is truly a first-class experience. As exciting as this launch is, it represents only the beginning of what's to come as we will constantly add more features during this partnership.",
          author: "Daniel Watkins",
          role: "Auburn Senior Associate AD of Marketing & Revenue Generation"
        }
      },
      {
        title: "Event Mobile App with Aloompa",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=srgb&fm=jpg&q=85",
        challenge: "Large-scale events needed a comprehensive mobile app solution that could handle interactive maps, personalized schedules, push notifications, and in-app advertising while providing robust analytics - all while ensuring the app performed flawlessly with thousands of simultaneous users.",
        solution: "WMT.Digital's Aloompa event platform provides a white-label mobile app solution with all essential event features. Attendees get customizable schedules, interactive venue maps, real-time updates, and personalized recommendations.",
        results: [
          "Enhanced live event experience for all attendees",
          "Customizable schedules for personalized planning",
          "Interactive maps reducing attendee confusion",
          "In-app advertising creating new revenue opportunities",
          "Comprehensive analytics for event organizers",
          "Push notifications for real-time event updates"
        ]
      },
      {
        title: "Syncing Calendar Technology",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=srgb&fm=jpg&q=85",
        challenge: "During the pandemic, event schedules became highly fluid with constant changes to times, locations, and virtual/in-person formats. Traditional calendar solutions couldn't automatically update events already saved to attendees' personal calendars, causing confusion and missed events.",
        solution: "WMT.Digital developed a unique syncing calendar app that maintains a master schedule and automatically updates events on fans' devices when details change. The solution supports Apple Calendar, Google Calendar, Outlook, and other major platforms.",
        results: [
          "Automatic event updates synced to personal calendars",
          "Eliminated confusion from schedule changes",
          "Easy-to-use CMS for schedule management",
          "Embeddable widgets for external website integration",
          "Support for all major calendar platforms",
          "Reduced no-shows from outdated event information"
        ]
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
