export interface Project {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tech: string[];
  features: string[];
  gradient: string;
  icon?: string;
  screenshots: string[];
  stats?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
}

export interface PublishedApp {
  title: string;
  category: string;
  description: string;
  gradient: string;
  icon?: string;
  screenshots: string[];
  playStoreUrl: string;
}

export const featuredProjects: Project[] = [
  {
    title: "Tapsy",
    subtitle: "TikTok-Style Video Marketplace",
    category: "Social Video / SaaS",
    description:
      "A video-first brand discovery platform with in-app video recording and editing, real-time messaging and calling, QR-based review system, Google Maps integration, and AI-assisted onboarding.",
    tech: ["Flutter", "Node.js", "PostgreSQL", "WebRTC", "Stripe", "Gemini AI"],
    features: [
      "In-app video recording & editing",
      "Real-time messaging & calling",
      "QR-based review system",
      "Google Maps integration",
      "AI-assisted onboarding",
    ],
    gradient: "from-purple-600 via-pink-500 to-rose-500",
    icon: "/icons/tapsy.png",
    screenshots: [
      "/projects/tapsy/1.png",
      "/projects/tapsy/2.png",
      "/projects/tapsy/3.png",
      "/projects/tapsy/4.png",
      "/projects/tapsy/5.png",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tapsy.android",
    appStoreUrl: "https://apps.apple.com/in/app/tapsy-brand-review/id6754841809",
  },
  {
    title: "Krijuna",
    subtitle: "Stock Market & Automated Trading",
    category: "FinTech",
    description:
      "A high-performance stock market and automated trading application with master-slave order routing, real-time market alerts, subscription payments, and native Kotlin background processing.",
    tech: ["Flutter", "Firebase", "Kotlin Bridges", "Razorpay", "Apple Pay"],
    features: [
      "Master-slave order routing",
      "Real-time market alerts",
      "Subscription payments",
      "Native Kotlin background processing",
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: "/icons/krijuna.png",
    screenshots: [
      "/projects/krijuna/1.png",
      "/projects/krijuna/2.png",
    ],
    stats: undefined,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.synilogic.krijuna",
    appStoreUrl: "https://apps.apple.com/in/app/krijuna/id6502996424",
  },
  {
    title: "Jyotisham Astrologer",
    subtitle: "Voice/Video Consultation Platform",
    category: "Astrology SaaS",
    description:
      "A live consultation platform with booking, voice and video calls, live streaming, wallet-based payments, and real-time session management.",
    tech: ["Flutter", "Agora", "Twilio", "Wallet Payments", "Firebase"],
    features: [
      "Consultation booking",
      "Voice & video calls",
      "Live streaming",
      "Wallet & payment system",
    ],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    icon: "/icons/jyotisham.png",
    screenshots: [
      "/projects/jyotisham/1.png",
      "/projects/jyotisham/2.png",
      "/projects/jyotisham/3.png",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.zendapps.jyotisham.astrologer",
    appStoreUrl: "https://apps.apple.com/in/app/only-for-astrologer-login/id1483774995",
  },
];

export const publishedApps: PublishedApp[] = [
  {
    title: "Chokidaar HRM",
    category: "HRM",
    description: "Workforce management, attendance tracking, and employee operations platform.",
    gradient: "from-blue-600 via-indigo-500 to-violet-500",
    icon: "/icons/chokidaar.png",
    screenshots: [
      "/apps/chokidaar/1.png",
      "/apps/chokidaar/2.png",
      "/apps/chokidaar/3.png",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sainiweb.chokidaar.hrm",
  },
  {
    title: "App Builder",
    category: "SaaS / No-code",
    description: "Application creation and business tools platform for non-technical users.",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    icon: "/icons/appbuilder.png",
    screenshots: [
      "/apps/appbuilder/1.png",
      "/apps/appbuilder/2.png",
      "/apps/appbuilder/3.png",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sainiweb.appbuilder",
  },
  {
    title: "Mobix Commerce",
    category: "E-commerce",
    description: "Mobile commerce and business management application for online sellers.",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: "/icons/mobix.png",
    screenshots: [
      "/apps/mobix/1.png",
      "/apps/mobix/2.png",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sainiweb.mobix.commerce",
  },
];

export const reactNativeProjects: Project[] = [
  {
    title: "Avendy",
    subtitle: "Event Management & Vendor Platform",
    category: "Marketplace / Events",
    description:
      "A comprehensive event management platform where shoppers discover, book, and manage vendors in one place - with built-in rewards, ratings, and a personalized brand assessment tool for vendors.",
    tech: ["React Native", "Firebase", "Node.js", "Stripe"],
    features: [
      "Vendor discovery & booking",
      "Rewards on every transaction",
      "Vendor ratings & reviews",
      "Brand assessment tool",
      "Event bidding system",
    ],
    gradient: "from-purple-500 via-cyan-400 to-teal-400",
    icon: "/icons/avendy.png",
    screenshots: [
      "/projects/avendy/1.png",
      "/projects/avendy/2.png",
      "/projects/avendy/3.png",
      "/projects/avendy/4.png",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.avendy",
    appStoreUrl: "https://apps.apple.com/in/app/avendy-app/id6471898675",
  },
];
