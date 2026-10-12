export const websitePlans = [
  {
    id: 'starter',
    name: 'Starter Plan',
    subtitle: 'Best for Small Businesses & Personal Brands',
    originalPrice: '₹8,999',
    price: '₹5,999',
    discount: '33% OFF',
    headerColor: 'from-slate-800 to-slate-900',
    accentColor: 'border-slate-700',
    popular: false,
    deliveryTime: '2 Days Delivery',
    badge: 'Fast Delivery',
    features: [
      { text: 'Pages: 4-6 Custom Pages', included: true },
      { text: 'Domain & Hosting Included (1 Year)', included: true },
      { text: 'Dynamic & Interactive Content', included: true },
      { text: 'Support: 11 AM - 6 PM IST', included: true },
      { text: 'Website Delivered within 2 Days', included: true },
      { text: '100% Mobile & Tablet Responsive', included: true },
      { text: 'Best for Small Businesses & Startups', included: true },
      { text: 'Social Media & WhatsApp Integration', included: true },
      { text: 'Android App', included: false },
      { text: 'iOS App (App Store)', included: false },
      { text: 'Full SEO Optimization', included: false },
    ],
    ctaText: 'Choose Starter Plan',
    colorTheme: 'slate'
  },
  {
    id: 'silver',
    name: 'Silver Plan',
    subtitle: 'Ideal for Growing Companies & Professional Services',
    originalPrice: '₹14,999',
    price: '₹9,999',
    discount: '33% OFF',
    headerColor: 'from-gray-500 to-slate-700',
    accentColor: 'border-blue-500/50',
    popular: true,
    deliveryTime: '5 Days Delivery',
    badge: 'Most Popular',
    features: [
      { text: 'Pages: 8-10 Custom Pages', included: true },
      { text: 'High Speed Domain & Cloud Hosting', included: true },
      { text: 'Dynamic Content + CMS Control', included: true },
      { text: 'Support: 11 AM - 6 PM Dedicated', included: true },
      { text: 'Website Delivered within 5 Days', included: true },
      { text: 'Ultra Responsive Fluid Design', included: true },
      { text: 'Best for Growing & Medium Businesses', included: true },
      { text: 'Social Media + Contact Leads Capture', included: true },
      { text: 'Basic SEO & Google Search Console', included: true },
      { text: 'Android App', included: false },
      { text: 'iOS Application', included: false },
    ],
    ctaText: 'Get Silver Plan',
    colorTheme: 'blue'
  },
  {
    id: 'gold',
    name: 'Gold Plan',
    subtitle: 'High Impact Web Presence with Priority Support',
    originalPrice: '₹19,999',
    price: '₹14,999',
    discount: '25% OFF',
    headerColor: 'from-amber-500 to-amber-700',
    accentColor: 'border-amber-500/50',
    popular: false,
    deliveryTime: '10-15 Days',
    badge: 'High Performance',
    features: [
      { text: 'Pages: 12-15 Premium Pages', included: true },
      { text: 'Ultra Fast Cloud Server & SSL Included', included: true },
      { text: 'Advanced Dynamic Content & Admin Dashboard', included: true },
      { text: 'Support: 24/7 Priority Emergency Support', included: true },
      { text: 'Website Delivered within 10-15 Days', included: true },
      { text: 'Mobile, Tablet & 4K Display Responsive', included: true },
      { text: 'Best for Small & Medium Enterprises', included: true },
      { text: 'Social Media, Live Chat & CRM Integration', included: true },
      { text: 'Web-to-App Android Wrapper Setup', included: true },
      { text: 'Advanced SEO & Speed Optimization', included: true },
      { text: 'iOS Application (Available as Add-on)', included: false, isAddon: true },
    ],
    ctaText: 'Choose Gold Plan',
    colorTheme: 'amber'
  },
  {
    id: 'diamond',
    name: 'Diamond Plan',
    subtitle: 'Custom Full-Stack Enterprise & Customized Solution',
    originalPrice: 'Custom Quote',
    price: 'Customized',
    discount: 'Tailored Scope',
    headerColor: 'from-indigo-600 to-purple-800',
    accentColor: 'border-purple-500/60',
    popular: false,
    deliveryTime: '25-30 Days',
    badge: 'Enterprise Grade',
    features: [
      { text: 'Customized Pages (Unlimited as per scope)', included: true },
      { text: 'Dedicated Scalable Cloud Hosting & Domain', included: true },
      { text: 'Full Dynamic Database & Headless CMS', included: true },
      { text: 'Support: 24/7 Dedicated Account Manager', included: true },
      { text: 'Website Delivered within 25-30 Days', included: true },
      { text: 'Custom Micro-Interactions & Animations', included: true },
      { text: 'Best for Medium & Big Corporate Businesses', included: true },
      { text: 'Social Media, Payment Gateway & ERP Sync', included: true },
      { text: 'Native Android App Included', included: true },
      { text: 'Native / Flutter iOS Application Included', included: true },
      { text: 'Full 360° SEO & Conversion Rate Optimization', included: true },
    ],
    ctaText: 'Request Custom Quote',
    colorTheme: 'purple'
  }
];

export const mobileAppPlans = [
  {
    id: 'ios-starter',
    name: 'iOS Starter App',
    subtitle: 'Dedicated Native/Flutter App for iPhone & iPad',
    originalPrice: '₹34,999',
    price: '₹24,999',
    discount: '28% OFF',
    headerColor: 'from-blue-600 to-indigo-900',
    accentColor: 'border-blue-500/50',
    popular: false,
    deliveryTime: '15-20 Days',
    badge: 'Apple iOS Focus',
    features: [
      { text: 'Custom iOS App (iPhone & iPad Optimized)', included: true },
      { text: 'Apple Human Interface Guidelines Design', included: true },
      { text: 'Apple App Store Submission Assistance', included: true },
      { text: 'Push Notifications & Deep Linking', included: true },
      { text: 'APNs & Apple Sign-In Integration', included: true },
      { text: 'Secure Backend API & Admin Panel', included: true },
      { text: '3 Months Free Bug-Fixing & Maintenance', included: true },
      { text: 'Source Code & Intellectual Property Rights', included: true },
      { text: 'Android App included', included: false }
    ],
    ctaText: 'Build iOS App',
    colorTheme: 'blue'
  },
  {
    id: 'dual-pro',
    name: 'Dual App Pro (iOS + Android)',
    subtitle: 'Complete Cross-Platform App for App Store & Google Play',
    originalPrice: '₹59,999',
    price: '₹39,999',
    discount: '33% OFF',
    headerColor: 'from-indigo-600 to-violet-800',
    accentColor: 'border-indigo-500/60',
    popular: true,
    deliveryTime: '25-35 Days',
    badge: 'Best Value for Startups',
    features: [
      { text: 'Both iOS (App Store) & Android (Google Play)', included: true },
      { text: 'Single High-Performance Flutter / React Native Codebase', included: true },
      { text: 'Complete Store Deployment & Approval Guarantee', included: true },
      { text: 'Razorpay / Stripe Payment Gateway Integration', included: true },
      { text: 'Push Notifications, WhatsApp & SMS OTP Login', included: true },
      { text: 'Modern Admin Web Dashboard to Manage Users', included: true },
      { text: 'Realtime Database, Cloud Storage & Analytics', included: true },
      { text: '6 Months Free Maintenance & Monitoring', included: true },
      { text: 'Full Source Code & Documentation Provided', included: true }
    ],
    ctaText: 'Get Dual App Suite',
    colorTheme: 'purple'
  },
  {
    id: 'enterprise-app',
    name: 'Enterprise App Ecosystem',
    subtitle: 'High Scalability, Custom AI / E-Commerce / Fintech Logic',
    originalPrice: '₹99,999+',
    price: '₹69,999+',
    discount: 'Premium Custom',
    headerColor: 'from-amber-600 to-rose-700',
    accentColor: 'border-amber-500/60',
    popular: false,
    deliveryTime: '45-60 Days',
    badge: 'Scale Ready',
    features: [
      { text: 'Custom iOS + Android + Web Admin Architecture', included: true },
      { text: 'Custom UI/UX with Figma Prototypes & User Testing', included: true },
      { text: 'Biometric Auth (FaceID / Fingerprint) & Top Security', included: true },
      { text: 'High Traffic Microservices / Firebase / AWS Setup', included: true },
      { text: 'Live GPS Tracking / Realtime Chat / Video SDK (Optional)', included: true },
      { text: 'Full App Store Optimization (ASO) for Ranking', included: true },
      { text: '1 Year SLA Support & Dedicated Tech Team', included: true },
      { text: 'Continuous Integration & Automated Testing', included: true }
    ],
    ctaText: 'Discuss Enterprise App',
    colorTheme: 'amber'
  }
];

export const comboPlans = [
  {
    id: 'all-in-one-growth',
    name: 'All-In-One Business Launch',
    subtitle: 'Dynamic Website + Android App + iOS App Bundle',
    originalPrice: '₹64,999',
    price: '₹44,999',
    discount: '30% OFF BUNDLE',
    headerColor: 'from-cyan-600 to-blue-800',
    accentColor: 'border-cyan-500/50',
    popular: true,
    deliveryTime: '20-25 Days',
    badge: 'Complete Digital Presence',
    features: [
      { text: 'Premium Dynamic Website (Up to 10 Pages)', included: true },
      { text: 'Native-feel iOS Application for iPhone & iPad', included: true },
      { text: 'Native-feel Android Application on Google Play', included: true },
      { text: 'Shared Centralized Admin Dashboard', included: true },
      { text: '1 Year High Speed Hosting + Domain + SSL', included: true },
      { text: 'App Store & Play Store Publishing Support', included: true },
      { text: 'Payment Gateway (UPI, Cards, NetBanking)', included: true },
      { text: '6 Months Dedicated Priority Support', included: true }
    ],
    ctaText: 'Get All-in-One Bundle',
    colorTheme: 'cyan'
  },
  {
    id: 'ultimate-ecommerce',
    name: 'Omni-Channel E-Commerce Suite',
    subtitle: 'Sell on Web, Android App & iOS App simultaneously',
    originalPrice: '₹89,999',
    price: '₹59,999',
    discount: 'Super Value',
    headerColor: 'from-emerald-600 to-teal-800',
    accentColor: 'border-emerald-500/50',
    popular: false,
    deliveryTime: '30-40 Days',
    badge: 'Direct Sales Machine',
    features: [
      { text: 'Full E-commerce Web Store with Cart & Checkout', included: true },
      { text: 'iOS Shopping App with Apple Pay & Fast Checkout', included: true },
      { text: 'Android Shopping App with UPI Instant Checkout', included: true },
      { text: 'Automated Order Sync & Inventory Management', included: true },
      { text: 'Abandoned Cart Notifications & Push Offers', included: true },
      { text: 'Coupons, Loyalty Rewards & Customer Accounts', included: true },
      { text: 'Full SEO + Store Launch Marketing Kit', included: true },
      { text: '1 Year VIP Tech Maintenance', included: true }
    ],
    ctaText: 'Launch Omni E-Commerce',
    colorTheme: 'emerald'
  }
];

export const portfolioProjects = [
  {
    id: 1,
    title: 'NovaHealth Telemedicine',
    category: 'iOS & Android App',
    description: 'HIPAA compliant iOS & Android app with instant doctor video consultation, prescription sync and Apple HealthKit integration.',
    tags: ['iOS (Swift/SwiftUI)', 'Android', 'WebRTC', 'Node.js'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    demoUrl: '#',
    accent: 'blue'
  },
  {
    id: 2,
    title: 'Apex Logistics Tracker',
    category: 'Web & Mobile Suite',
    description: 'Fleet management web portal with real-time GPS mobile driver app for iOS and Android with offline dispatching.',
    tags: ['React', 'iOS App', 'Google Maps API', 'Tailwind'],
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
    demoUrl: '#',
    accent: 'purple'
  },
  {
    id: 3,
    title: 'UrbanBoutique E-Commerce',
    category: 'Website & iOS App',
    description: 'Luxury apparel marketplace with instantaneous web shop, iOS App with AR try-on preview, and payment gateway.',
    tags: ['Next.js', 'iOS SwiftUI', 'Razorpay', 'Tailwind'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
    demoUrl: '#',
    accent: 'amber'
  },
  {
    id: 4,
    title: 'FinEdge Wealth Management',
    category: 'iOS Application',
    description: 'Fintech investment application featuring biometric FaceID login, portfolio charts, and real-time stock alerts.',
    tags: ['iOS Native', 'Charts', 'Bank-grade Security', 'APNs'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    demoUrl: '#',
    accent: 'cyan'
  },
  {
    id: 5,
    title: 'Zestify Food Delivery',
    category: 'Dual Mobile Apps',
    description: 'Hyperlocal food ordering system with customer iOS/Android apps, restaurant partner portal, and rider GPS tracking.',
    tags: ['Flutter (iOS/Android)', 'React Admin', 'Socket.io', 'UPI'],
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80',
    demoUrl: '#',
    accent: 'emerald'
  },
  {
    id: 6,
    title: 'Horizon Real Estate Portal',
    category: 'Website',
    description: 'Property search web application with 360° virtual tours, interactive EMI mortgage calculator, and WhatsApp lead capture.',
    tags: ['React', 'Fast Delivery (5 Days)', 'SEO Optimized', 'Tailwind'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80',
    demoUrl: '#',
    accent: 'rose'
  }
];

export const faqs = [
  {
    q: 'Can you develop native iOS apps for iPhones and submit them to the Apple App Store?',
    a: 'Yes, absolutely! Gaurav Associates has extensive expertise in iOS development. We build iOS apps using Swift, SwiftUI, or cross-platform Flutter/React Native. We assist end-to-end: from UI design conforming to Apple Human Interface Guidelines, TestFlight beta testing, to publishing your app onto the Apple App Store.'
  },
  {
    q: 'How long will it take to build and deliver my website?',
    a: 'Our Starter Website is delivered within 2 days! The Silver Plan takes 5 days, Gold takes 10-15 days, and custom Diamond projects typically take 25-30 days. We adhere strictly to delivery timelines.'
  },
  {
    q: 'Are domain, SSL, and hosting included in the plans?',
    a: 'Yes! All our website packages include 1 year of high-speed cloud hosting, a free domain setup, SSL security certificate, and business email integration so you can get online right away with zero technical hassle.'
  },
  {
    q: 'What is the advantage of choosing a Combo Pack (Website + Mobile App)?',
    a: 'Choosing a Combo bundle saves you up to 35% compared to purchasing separately! Furthermore, your website and mobile applications will share a single unified database and admin control dashboard, making inventory and customer management completely seamless.'
  },
  {
    q: 'What kind of post-launch maintenance and technical support do you provide?',
    a: 'Depending on your selected plan, we provide support ranging from dedicated 11 AM - 6 PM assistance up to 24/7 priority emergency support. We also provide ongoing bug fixes, security patch updates, and feature enhancements.'
  }
];

export const clientReviews = [
  {
    name: 'Rajesh Sharma',
    role: 'Founder, QuickRetail India',
    feedback: 'Gaurav Associates delivered our business website in just 48 hours as promised in the Starter Plan, and later built an iOS and Android app for our store. Our sales have grown 3x!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Pooja Agarwal',
    role: 'Managing Director, Agarwal Real Estate',
    feedback: 'The team developed a sleek iOS app and web dashboard for our properties. Apple App Store approval was seamless within 3 days. Extremely professional work and great prices!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Vikram Mehta',
    role: 'CEO, Horizon Logistics',
    feedback: 'We selected the Diamond customized plan. They built our cloud portal and cross-platform mobile apps with real-time tracking. Gaurav Associates is now our permanent tech partner.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  }
];
