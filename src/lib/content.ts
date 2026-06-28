export const site = {
  name: "Panoptix",
  fullName: "Panoptix",
  epithet: "Fleet Intelligence",
  tagline: "Partner Fleet Platform",
  description:
    "AI-powered fleet platform for GPS tracking companies. White-label ready, API-first, with voice agents that answer your clients' calls — 24/7.",
  phone: "+1 (774) 459-3054",
  email: "business@codexpsolutions.com",
  website: "https://fleet.codexpsolutions.com",
};

export const company = {
  name: "Codexp Solutions",
  url: "https://codexpsolutions.com",
  intro:
    "Panoptix is built by Codexp Solutions — we design AI-powered platforms for GPS tracking companies and fleet operators worldwide.",
};

export const hero = {
  headline: "Your Entire Fleet.",
  headlineAccent: "One Intelligence.",
  subheadline:
    "Built for GPS tracking companies and fleet operators. White-label ready platform, AI phone ops, and per-vehicle pricing that scales with the complexity you manage.",
  cta: { primary: "Partner Plans", secondary: "See Platform" },
  stats: [
    { value: "500+", label: "Vehicles / Account" },
    { value: "24/7", label: "Ops Support" },
    { value: "<3s", label: "Live Lookup" },
    { value: "40%", label: "Avg. Idle Reduction" },
  ],
};

export const industries = [
  "Logistics & 3PL",
  "Field Services",
  "Construction",
  "Oil & Gas",
  "Rental Fleets",
  "Corporate Transport",
];

export const features = [
  {
    icon: "MapPin",
    title: "Live Fleet Command",
    description:
      "See every vehicle on one map — status, speed, ETA, and exceptions across regions in real time.",
  },
  {
    icon: "Shield",
    title: "Asset Protection",
    description:
      "Theft, unauthorized use, or route deviation? Panoptix flags it and escalates to your security team instantly.",
  },
  {
    icon: "BarChart3",
    title: "Executive Analytics",
    description:
      "Monthly fleet reports, fuel waste analysis, driver scoring, and idle-time ROI dashboards for leadership.",
  },
  {
    icon: "Bell",
    title: "Automated Alerts",
    description:
      "Geofence breaches, overspeeding, maintenance due, and SLA violations — routed to the right team.",
  },
  {
    icon: "Truck",
    title: "Dispatch & Routing",
    description:
      "Optimize dispatch views, monitor route adherence, and reduce empty miles across your operation.",
  },
  {
    icon: "Zap",
    title: "AI Phone Ops",
    description:
      "Fleet managers call in for live status, billing, or escalations — no portal login, no hold queue.",
  },
];

export const agents = [
  {
    name: "Panoptix",
    epithet: "Fleet Command AI",
    language: "Global · 50+ Languages",
    role: "Partner Support AI",
    greeting:
      "Panoptix here. I have eyes on your full fleet. Need a vehicle location, account summary, or escalation?",
    capabilities: [
      "Multi-account fleet verification",
      "Live vehicle & unit lookup",
      "Contract & billing inquiries",
      "Enterprise plan consultation",
      "Priority incident escalation",
    ],
    accent: "from-red-600 to-neutral-900",
  },
  {
    name: "Lynceus",
    epithet: "Fleet Surveillance AI",
    language: "Ops & Security Teams",
    role: "Fleet Intelligence Agent",
    greeting:
      "Lynceus online. I'm tracking 847 units across your network. Which region or depot should I focus on?",
    capabilities: [
      "Fleet-wide anomaly detection",
      "Depot & geofence monitoring",
      "Driver behavior scoring",
      "Cross-region status reports",
      "Security incident handoff",
    ],
    accent: "from-neutral-800 to-black",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Connect Fleet",
    description:
      "We onboard your vehicles, depots, and teams. API or turnkey install — built for 10 to 10,000+ units.",
  },
  {
    step: "02",
    title: "Monitor Live",
    description:
      "Operations dashboards and AI phone access give every manager instant fleet visibility.",
  },
  {
    step: "03",
    title: "Optimize Ops",
    description:
      "Cut idle time, improve route compliance, and reduce fuel waste with automated insights.",
  },
  {
    step: "04",
    title: "Scale Globally",
    description:
      "Multi-region support, dedicated account managers, and custom SLAs for enterprise accounts.",
  },
];

export const packages = [
  {
    id: "partner-starter",
    name: "Partner Starter",
    fleet: "10–49 vehicles",
    price: 220,
    popular: false,
    features: [
      "Fleet dashboard & live map",
      "Driver scoring & alerts",
      "Geofence & speed monitoring",
      "Weekly ops reports",
      "AI phone support 24/7",
    ],
  },
  {
    id: "partner-pro",
    name: "Partner Pro",
    fleet: "50–199 vehicles",
    price: 290,
    popular: true,
    features: [
      "Everything in Starter",
      "Multi-depot views & dispatch",
      "Route & idle-time analytics",
      "API access (read)",
      "Priority support SLA",
    ],
  },
  {
    id: "partner-scale",
    name: "Partner Scale",
    fleet: "200–999 vehicles",
    price: 380,
    popular: false,
    features: [
      "Everything in Pro",
      "White-label client portal",
      "Full API & webhooks",
      "Dedicated success manager",
      "Custom geofence zones",
    ],
  },
  {
    id: "partner-enterprise",
    name: "Partner Enterprise",
    fleet: "1,000+ vehicles",
    price: 0,
    custom: true,
    popular: false,
    features: [
      "Global multi-region rollout",
      "White-label + custom domain",
      "SSO & enterprise compliance",
      "24/7 dedicated ops line",
      "Tailored contract & SLA",
    ],
  },
];

export const useCases = [
  {
    title: "Logistics & last-mile delivery",
    description:
      "Track 200+ delivery vans across cities. Monitor SLAs, driver behavior, and route compliance from one command center.",
    icon: "Truck",
  },
  {
    title: "Field service operations",
    description:
      "Give dispatchers live technician locations, idle alerts, and instant AI status lookups without opening a dashboard.",
    icon: "Wrench",
  },
  {
    title: "Construction & heavy equipment",
    description:
      "Monitor excavators, trucks, and generators across job sites. Geofence sites and flag unauthorized movement.",
    icon: "Building2",
  },
  {
    title: "Corporate & executive fleets",
    description:
      "Secure high-value vehicles with 24/7 monitoring, instant escalation, and executive-level reporting.",
    icon: "Shield",
  },
];

export const valueProps = [
  "Built for GPS tracking & fleet service providers",
  "Per-vehicle pricing scales with fleet complexity",
  "White-label portal for your end customers",
  "AI phone ops — your clients call, we answer",
  "API & webhooks for your existing stack",
];

export const navLinks = [
  { label: "Platform", href: "#features" },
  { label: "AI Agents", href: "#agents" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Plans", href: "#packages" },
  { label: "Industries", href: "#use-cases" },
];
