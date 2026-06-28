export const site = {
  name: "Panoptix",
  fullName: "Panoptix",
  epithet: "Fleet Intelligence",
  tagline: "Partner Fleet Platform",
  description:
    "AI-powered fleet platform for GPS tracking companies. White-label ready, API-first, with Vapi voice agents that handle support, sales, and escalations — 24/7.",
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
    "Built for GPS tracking companies and fleet operators. Vapi AI agents answer your clients' calls — verify accounts, pull live GPS, close sales, and escalate emergencies — all without a hold queue.",
  cta: { primary: "Partner Plans", secondary: "See Platform" },
  stats: [
    { value: "7", label: "Vapi AI Tools" },
    { value: "24/7", label: "Voice Ops" },
    { value: "<3s", label: "Live Lookup" },
    { value: "2", label: "Languages" },
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

/** What we actually built — live in Vapi + n8n today */
export const vapiPlatform = {
  stack: ["Vapi", "GPT-4o", "n8n", "PostgreSQL", "Slack"],
  tools: [
    {
      name: "verify_customer",
      label: "Customer Verification",
      description: "Match callers by phone number or account ID (VT-xxxxx) before sharing any data.",
    },
    {
      name: "lookup_vehicles",
      label: "Fleet Lookup",
      description: "List every vehicle on an account — plate, make, model, and tracker status.",
    },
    {
      name: "get_live_tracking",
      label: "Live GPS on Call",
      description: "Pull real-time location, speed, and vehicle state (moving, parked, offline) in seconds.",
    },
    {
      name: "get_billing_info",
      label: "Billing & Renewals",
      description: "Plan name, renewal date, balance due, and payment status — spoken naturally on the call.",
    },
    {
      name: "get_sales_packages",
      label: "AI Sales Management",
      description: "Quote packages by fleet size, recommend tiers, and negotiate discounts up to 10% — no human needed.",
    },
    {
      name: "submit_sales_lead",
      label: "Lead Capture",
      description: "Capture name, phone, fleet size, and package interest → Slack alert. Team follows up within 24h.",
    },
    {
      name: "escalate_to_human",
      label: "Emergency Escalation",
      description: "Stolen vehicle, SOS, or technical issues → instant Slack handoff to your ops team. Sales never escalates.",
    },
  ],
};

export const features = [
  {
    icon: "MapPin",
    title: "Live GPS on Call",
    description:
      "Vapi tool get_live_tracking — callers get speed, location, and status without opening a dashboard.",
  },
  {
    icon: "Shield",
    title: "Emergency Escalation",
    description:
      "Stolen vehicle or SOS triggers escalate_to_human → your Slack ops channel in real time.",
  },
  {
    icon: "BarChart3",
    title: "AI Sales Management",
    description:
      "get_sales_packages quotes by fleet size, negotiates discounts, and submit_sales_lead captures the deal.",
  },
  {
    icon: "Bell",
    title: "Account Verification",
    description:
      "verify_customer confirms identity by phone or account ID before any location or billing data is shared.",
  },
  {
    icon: "Truck",
    title: "Fleet Vehicle Lookup",
    description:
      "lookup_vehicles returns every unit on file — plate, make, model, and online/offline tracker status.",
  },
  {
    icon: "Zap",
    title: "Billing on Call",
    description:
      "get_billing_info reads plan, renewal window, balance, and payment status — no hold music.",
  },
];

export const agents = [
  {
    name: "Panoptix",
    epithet: "English Voice Agent",
    language: "English · GPT-4o",
    role: "Support & Sales AI",
    greeting:
      "Hey, thanks for calling. Panoptix here. Existing customer, or looking to get trackers for your fleet?",
    capabilities: [
      "verify_customer — account lookup by phone",
      "get_live_tracking — GPS on call",
      "get_billing_info — plan & renewal",
      "get_sales_packages — quote & negotiate",
      "submit_sales_lead — capture & close",
      "escalate_to_human — emergencies only",
    ],
    accent: "from-red-600 to-neutral-900",
  },
  {
    name: "Ayesha",
    epithet: "Urdu Voice Agent",
    language: "Roman Urdu · Multilingual",
    role: "Bilingual Support AI",
    greeting:
      "Assalam o alaikum ji, main Ayesha bol rahi hoon. Aap customer hain ya naya tracker lagwana chahte hain?",
    capabilities: [
      "Same 7 Vapi tools as English agent",
      "Natural Roman Urdu conversation",
      "Sales flow — no human escalation",
      "Emergency Slack handoff in Urdu",
      "Deepgram Nova-3 transcription",
    ],
    accent: "from-neutral-800 to-black",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Caller Dials In",
    description:
      "Vapi picks up instantly — English (Panoptix) or Urdu (Ayesha). No IVR menus, no hold queue.",
  },
  {
    step: "02",
    title: "AI Verifies & Looks Up",
    description:
      "verify_customer confirms identity → lookup_vehicles or get_live_tracking pulls data from PostgreSQL.",
  },
  {
    step: "03",
    title: "Sales or Support",
    description:
      "Prospects get get_sales_packages + submit_sales_lead. Customers get billing, tracking, and answers on the call.",
  },
  {
    step: "04",
    title: "Escalate if Needed",
    description:
      "Theft, SOS, or unresolvable issues hit escalate_to_human → Slack alert to your team in seconds.",
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
      "Vapi AI voice agent (English)",
      "verify_customer + lookup_vehicles",
      "get_live_tracking on call",
      "get_billing_info on call",
      "PostgreSQL customer database",
      "n8n workflow automation",
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
      "AI sales management (get_sales_packages)",
      "Automated discount negotiation",
      "submit_sales_lead → Slack alerts",
      "Sales never escalates to human",
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
      "Bilingual agents (English + Urdu)",
      "escalate_to_human → Slack ops",
      "Emergency & theft recovery flow",
      "API access + webhooks",
      "Dedicated success manager",
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
      "Full Vapi tool suite — custom workflows",
      "Multi-region agent deployment",
      "Custom Slack escalation routing",
      "White-label + custom domain",
      "SSO & enterprise compliance",
      "24/7 dedicated ops line",
    ],
  },
];

export const useCases = [
  {
    title: "GPS tracking company support line",
    description:
      "Your clients call in — AI verifies them, reads live GPS, and answers billing without your team picking up.",
    icon: "Truck",
  },
  {
    title: "Automated sales pipeline",
    description:
      "Prospects ask for pricing → AI quotes by fleet size, negotiates discount, captures lead to Slack. Team installs within 24h.",
    icon: "Wrench",
  },
  {
    title: "Stolen vehicle emergency",
    description:
      "Caller reports theft → AI pulls live coordinates, stays calm, and escalate_to_human fires to your recovery team on Slack.",
    icon: "Shield",
  },
  {
    title: "Multi-language fleet ops",
    description:
      "English and Urdu agents share the same 7 tools — one platform, two languages, zero extra headcount.",
    icon: "Building2",
  },
];

export const valueProps = [
  "7 live Vapi AI tools — not a roadmap",
  "Sales fully automated — no human handoff",
  "Slack escalation for emergencies only",
  "PostgreSQL + n8n backend included",
  "Bilingual English & Urdu agents",
];

export const navLinks = [
  { label: "Platform", href: "#features" },
  { label: "Vapi Tools", href: "#vapi-tools" },
  { label: "AI Agents", href: "#agents" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Plans", href: "#packages" },
  { label: "Industries", href: "#use-cases" },
];
