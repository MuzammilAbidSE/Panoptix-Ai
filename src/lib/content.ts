export const site = {
  name: "Panoptix",
  fullName: "Panoptix",
  epithet: "Fleet Intelligence",
  tagline: "Partner Fleet Platform",
  description:
    "AI-powered client communication for GPS tracking companies. Your customers get instant answers by phone and WhatsApp — without growing your support team.",
  phone: "+1 (774) 459-3054",
  email: "business@codexpsolutions.com",
  website: "https://fleet.codexpsolutions.com",
};

export const company = {
  name: "Codexp Solutions",
  url: "https://codexpsolutions.com",
  intro:
    "Panoptix is built by Codexp Solutions — we help GPS tracking companies automate client support, sales, and follow-ups with AI.",
};

export const hero = {
  headline: "Your Entire Fleet.",
  headlineAccent: "One Intelligence.",
  subheadline:
    "Give your tracking company an AI that answers client calls, follows up proactively, and handles WhatsApp — so your team focuses on growth, not hold queues.",
  cta: { primary: "Partner Plans", secondary: "See Platform" },
  stats: [
    { value: "24/7", label: "Client Coverage" },
    { value: "3", label: "Channels" },
    { value: "<3s", label: "Live Lookup" },
    { value: "2", label: "AI Agents" },
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

export const channels = [
  {
    id: "inbound",
    label: "Inbound Calls",
    description: "AI picks up when your clients call — support, GPS lookup, billing, and sales.",
  },
  {
    id: "outbound",
    label: "Outbound Calls",
    description: "AI calls your clients — renewal reminders, installation follow-ups, and lead callbacks.",
  },
  {
    id: "whatsapp",
    label: "WhatsApp AI",
    description: "AI handles client messages on WhatsApp — location requests, account help, and alerts.",
  },
];

export const capabilities = [
  {
    label: "Live Vehicle Location",
    description: "Clients ask where their vehicle is — AI gives speed, location, and status instantly.",
  },
  {
    label: "Account Verification",
    description: "Caller identity confirmed by phone or account number before any data is shared.",
  },
  {
    label: "Billing & Renewals",
    description: "Plan details, renewal dates, and balances answered on the call or chat.",
  },
  {
    label: "AI Sales & Quotes",
    description: "Prospects get package pricing tailored to their operation, with automated discount handling.",
  },
  {
    label: "Lead Capture",
    description: "New customer details captured and routed to your team for installation within 24 hours.",
  },
  {
    label: "Emergency Escalation",
    description: "Theft, SOS, or urgent issues escalated to your ops team immediately.",
  },
  {
    label: "Fleet Surveillance",
    description: "Monitor multiple vehicles, depots, and geofence alerts across your network.",
  },
];

export const features = [
  {
    icon: "PhoneIncoming",
    title: "Inbound AI Calls",
    description:
      "Every client call answered instantly — location lookups, billing questions, and new sales inquiries.",
  },
  {
    icon: "PhoneOutgoing",
    title: "Outbound AI Calls",
    description:
      "Proactive renewal reminders, installation follow-ups, and callbacks on missed leads — handled by AI.",
  },
  {
    icon: "MessageCircle",
    title: "WhatsApp AI",
    description:
      "Clients message on WhatsApp and get the same smart support — vehicle status, billing, and account help.",
  },
  {
    icon: "MapPin",
    title: "Live GPS on Demand",
    description:
      "Real-time vehicle location, speed, and status — shared naturally on a call or in chat.",
  },
  {
    icon: "BarChart3",
    title: "Automated Sales",
    description:
      "AI quotes packages, negotiates within your rules, and books new installations without a sales rep.",
  },
  {
    icon: "Shield",
    title: "Emergency Handoff",
    description:
      "Stolen vehicle or SOS situations escalated to your team with live coordinates — AI stays calm throughout.",
  },
];

export const agents = [
  {
    name: "Panoptix",
    epithet: "Client Support & Sales",
    language: "Voice · Inbound & Outbound",
    role: "Primary AI Agent",
    greeting:
      "Hey, thanks for calling. Panoptix here. Existing customer, or looking to get trackers for your fleet?",
    capabilities: [
      "Answers inbound client calls 24/7",
      "Live vehicle location on call",
      "Billing and renewal inquiries",
      "Package quotes and sales",
      "Outbound renewal and follow-up calls",
      "Emergency escalation to your team",
    ],
    accent: "from-red-600 to-neutral-900",
  },
  {
    name: "Lynceus",
    epithet: "Fleet Operations AI",
    language: "Voice · Fleet Intelligence",
    role: "Fleet Surveillance Agent",
    greeting:
      "Lynceus online. I'm tracking 847 units across your network. Which region or depot should I focus on?",
    capabilities: [
      "Multi-vehicle fleet monitoring",
      "Geofence and route alerts",
      "Driver behavior insights",
      "Cross-region status reports",
      "Priority security escalation",
    ],
    accent: "from-neutral-800 to-black",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Client Reaches Out",
    description:
      "They call in, get an outbound callback, or message on WhatsApp — Panoptix responds instantly.",
  },
  {
    step: "02",
    title: "AI Identifies & Helps",
    description:
      "Account verified, vehicle located, billing checked — all in one conversation, no hold music.",
  },
  {
    step: "03",
    title: "Sell or Support",
    description:
      "New prospects get quoted and booked. Existing clients get answers, renewals, and follow-ups handled.",
  },
  {
    step: "04",
    title: "Escalate When Needed",
    description:
      "Theft, SOS, or complex issues go straight to your team with full context — AI never leaves them hanging.",
  },
];

export type PackageChannel = "inbound" | "outbound" | "whatsapp";

export const usageNote =
  "All plans include a monthly AI usage allowance. Additional minutes and messages are available as top-up packs — usage is metered, not unlimited.";

export const packages = [
  {
    id: "inbound",
    name: "Inbound",
    tagline: "AI answers every client call",
    price: 220,
    usageAllowance: "2,000 AI minutes / month included",
    popular: false,
    channels: ["inbound"] as PackageChannel[],
    features: [
      "24/7 inbound call answering",
      "Live vehicle location on call",
      "Billing and renewal inquiries",
      "AI sales quotes on incoming calls",
      "Lead capture for new installations",
      "Emergency escalation to your team",
      "Top-up packs for extra minutes",
    ],
  },
  {
    id: "inbound-outbound",
    name: "Inbound + Outbound",
    tagline: "Calls in and calls out",
    price: 290,
    usageAllowance: "5,000 AI minutes / month included",
    popular: true,
    channels: ["inbound", "outbound"] as PackageChannel[],
    features: [
      "Everything in Inbound",
      "Outbound renewal reminder calls",
      "Installation follow-up calls",
      "Missed-call callback automation",
      "Lead re-engagement campaigns",
      "Priority partner support",
      "Top-up packs for extra minutes",
    ],
  },
  {
    id: "omnichannel",
    name: "Omnichannel",
    tagline: "Voice + WhatsApp AI",
    price: 380,
    usageAllowance: "8,000 AI minutes + 3,000 WhatsApp messages / month",
    popular: false,
    channels: ["inbound", "outbound", "whatsapp"] as PackageChannel[],
    features: [
      "Everything in Inbound + Outbound",
      "WhatsApp AI for client support",
      "Vehicle location via WhatsApp",
      "Billing queries on WhatsApp",
      "Client alerts via WhatsApp",
      "Dedicated account manager",
      "Top-up packs for voice & chat",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Built around your operation",
    price: 0,
    usageAllowance: "Custom usage pool — tailored to your call & chat volume",
    custom: true,
    popular: false,
    channels: ["inbound", "outbound", "whatsapp"] as PackageChannel[],
    features: [
      "Custom monthly usage allowance",
      "White-label under your brand",
      "Multi-region deployment",
      "Custom conversation workflows",
      "Enterprise SLA and compliance",
      "24/7 dedicated ops line",
      "Volume discounts on overage",
    ],
  },
];

export const channelLabels: Record<PackageChannel, string> = {
  inbound: "Inbound",
  outbound: "Outbound",
  whatsapp: "WhatsApp",
};

export const useCases = [
  {
    title: "Your clients call for vehicle location",
    description:
      "They dial your support line — AI verifies them and reads live GPS in seconds. No agent needed.",
    icon: "Truck",
  },
  {
    title: "Renewal reminders go out automatically",
    description:
      "Outbound AI calls clients before their plan expires, confirms payment, and books reinstalls if needed.",
    icon: "Wrench",
  },
  {
    title: "WhatsApp becomes your support desk",
    description:
      "Clients message asking where their truck is — AI replies with live location, speed, and ETA in chat.",
    icon: "MessageCircle",
  },
  {
    title: "Stolen vehicle — instant escalation",
    description:
      "Caller reports theft — AI pulls live coordinates, stays calm, and alerts your recovery team immediately.",
    icon: "Shield",
  },
];

export const valueProps = [
  "Start with inbound — add outbound & WhatsApp as you grow",
  "Monthly AI usage allowance on every plan",
  "Top-up packs when you need more capacity",
  "Your brand, your clients, our AI behind the scenes",
  "Emergency situations always reach a human",
];

export const navLinks = [
  { label: "Platform", href: "#features" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "AI Agents", href: "#agents" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Plans", href: "#packages" },
  { label: "Industries", href: "#use-cases" },
];
