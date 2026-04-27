export interface Project {
  id: string
  title: string
  date: string
  tag: string
  tagline: string
  abstract: string
  description: string
  features: string[]
  technologies: string[]
  role: string
  organization: string
  achievement?: string
  githubUrl?: string
  videoUrl?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'hisaab-book',
    title: 'Hisaab-Book',
    date: 'Mar 2024',
    tag: 'AI / Voice Tech',
    tagline: 'Inventory management for small businesses with Indic language support',
    abstract:
      'National finalist at Bhashini Sprint — an AI-powered inventory system bringing voice and image recognition to SME accounting in regional Indian languages.',
    description:
      'Hisaab-Book bridges the digital divide for small business owners who are not comfortable with English-language software. Using FastAPI, React Native, and ML-based voice and image recognition, the app lets shopkeepers manage inventory, track expenses, and generate reports — entirely in their native language.',
    features: [
      'Indic language voice recognition for hands-free data entry',
      'Image-based product identification via ML',
      'Real-time inventory tracking and low-stock alerts',
      'Automated report generation in regional language',
      'Offline-first architecture for low-connectivity areas',
    ],
    technologies: ['React Native', 'FastAPI', 'Python', 'ML', 'Voice Recognition', 'Image Recognition'],
    role: 'Team Lead | Full Stack Developer',
    organization: 'Bhashini Sprint — National Hackathon',
    achievement: 'National Finalist — Bhashini Sprint 2024',
    githubUrl: 'https://github.com/mihireshjoshi',
  },
  {
    id: 'finverse',
    title: 'FinVerse',
    date: 'Dec 2024',
    tag: 'Fintech',
    tagline: 'LinkedIn meets Bloomberg — a fintech networking platform',
    abstract:
      'A React Native community platform connecting investors, advisors, and finance enthusiasts with real-time feeds, profile verification, and in-app networking.',
    description:
      'FinVerse addresses the fragmentation in personal finance communities by creating a purpose-built social platform for financial discourse. Users can share market insights, follow expert advisors, and build portfolios — all within a single mobile-native interface backed by Supabase real-time infrastructure.',
    features: [
      'Real-time financial feed with curated content',
      'Verified advisor profiles and follow system',
      'Portfolio showcase and project linking',
      'In-app direct messaging',
      'GitHub integration for developer-investors',
    ],
    technologies: ['React Native', 'Supabase', 'GitHub API', 'TypeScript'],
    role: 'App Developer',
    organization: 'Personal Project',
    githubUrl: 'https://github.com/mihireshjoshi',
  },
  {
    id: 'futurefund',
    title: 'FutureFund',
    date: 'May 2024',
    tag: 'ML Engineering',
    tagline: 'ML-powered retirement planning for every Indian',
    abstract:
      'TIAA Retire-Thon national finalist — a TensorFlow-driven investment guidance platform wrapped in a clean Next.js interface.',
    description:
      'FutureFund democratises retirement planning by providing personalised, ML-generated investment roadmaps based on income, risk appetite, and target corpus. The FastAPI backend runs TensorFlow models trained on historical market data to generate projections and recommend SIP allocations.',
    features: [
      'Personalised retirement corpus projection',
      'ML-based SIP and asset allocation recommendations',
      'Risk profiling questionnaire with adaptive output',
      'Historical market data visualisation',
      'PDF export of financial roadmap',
    ],
    technologies: ['Next.js', 'FastAPI', 'Python', 'TensorFlow', 'Chart.js'],
    role: 'ML Engineer',
    organization: 'TIAA Retire-Thon — National Hackathon',
    achievement: 'National Finalist — TIAA Retire-Thon 2024',
    githubUrl: 'https://github.com/mihireshjoshi',
  },
  {
    id: 'safeguard',
    title: 'SafeGuard',
    date: 'Aug 2024',
    tag: 'Computer Vision',
    tagline: 'YOLO-powered real-time workplace safety monitoring',
    abstract:
      'A CNN and YOLO object detection system that monitors construction sites for safety violations and fires instant Twilio SMS alerts.',
    description:
      'SafeGuard deploys a real-time computer vision pipeline to detect PPE violations, unsafe postures, and hazardous zones on construction sites. Alerts are dispatched via Twilio within seconds, giving site managers the ability to intervene before accidents occur.',
    features: [
      'Real-time YOLO object detection for PPE compliance',
      'Instant Twilio SMS/WhatsApp alerts on violation',
      'Live dashboard with camera feed and incident log',
      'Configurable detection zones and sensitivity',
      'Historical incident analytics and reporting',
    ],
    technologies: ['React Native', 'FastAPI', 'CNN', 'YOLO', 'Twilio', 'Supabase', 'Python'],
    role: 'Team Lead | Frontend Developer',
    organization: 'Hackathon Project',
    githubUrl: 'https://github.com/mihireshjoshi',
  },
  {
    id: 'aqi-nexus',
    title: 'AQI Nexus',
    date: 'Aug 2024',
    tag: 'Climate Tech',
    tagline: 'AI-powered air quality forecasting for urban India',
    abstract:
      'A FastAPI + Python ML pipeline delivering real-time AQI predictions and next-day forecasts through a React Native mobile dashboard.',
    description:
      'AQI Nexus aggregates sensor data from multiple government and private sources, feeds it through a trained forecasting model, and presents actionable air quality guidance to users via a clean mobile interface. Features include location-based alerts, historical trend charts, and health recommendations.',
    features: [
      'Real-time AQI data aggregation from multiple sources',
      'ML-based next-day AQI forecasting',
      'Location-aware push notifications for poor AQI',
      'Historical trend analysis and charts',
      'Health impact guidance per AQI level',
    ],
    technologies: ['React Native', 'FastAPI', 'Python', 'Machine Learning', 'Data Visualisation'],
    role: 'Team Lead | Fullstack Developer | ML Engineer',
    organization: 'Hackathon Project',
    githubUrl: 'https://github.com/mihireshjoshi',
  },
  {
    id: 'cartsy',
    title: 'Cartsy',
    date: 'Aug 2024',
    tag: 'Retail Tech',
    tagline: 'A* pathfinding meets retail — the smart shopping cart app',
    abstract:
      'Optimises in-store navigation using A* pathfinding to guide shoppers to items in the shortest route, integrated with Stripe for seamless checkout.',
    description:
      "Cartsy reimagines the supermarket experience by treating the store floor as a graph problem. Users add items to their cart, and the app computes the optimal walking path through the store to minimise time. Supabase powers the real-time product location database, and Stripe handles in-app checkout.",
    features: [
      'A* pathfinding algorithm for optimal in-store routing',
      'Real-time product location database via Supabase',
      'In-app Stripe checkout integration',
      'Store map visualisation with live path overlay',
      'Barcode scanner for quick product search',
    ],
    technologies: ['React Native', 'Supabase', 'Stripe', 'A* Algorithm', 'TypeScript'],
    role: 'App Developer | Frontend Developer',
    organization: 'Hackathon Project',
    githubUrl: 'https://github.com/mihireshjoshi',
  },
]
