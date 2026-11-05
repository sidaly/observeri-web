import { Activity, Bot, Building2, ClipboardCheck, CloudCog, Eye, FileCheck2, Fingerprint, Gauge, Globe, Handshake, Landmark, Layers3, LayoutGrid, Library, LifeBuoy, ListChecks, Network, Radar, ShieldOff, Sparkles, Users, Wallet, type LucideIcon } from "lucide-react";

export type ProductPage = {
  slug: string;
  label: string;
  shortLabel: string;
  href: string;
  icon: LucideIcon;
  description: string;
  featured: boolean;
  image?: string;
};

export const productPages: ProductPage[] = [
  {
    slug: "platform",
    label: "Platform Overview",
    shortLabel: "All Modules",
    href: "/features",
    icon: Layers3,
    description: "Explore every AI-powered GRC module in one catalog.",
    featured: false,
  },
  {
    slug: "ai-risk-operations-center",
    label: "AI Risk Operations Center",
    shortLabel: "AI ROC",
    href: "/products/ai-risk-operations-center",
    icon: Sparkles,
    description: "Unified intelligence for incidents, risks, vulns, threats, compliance, and live asset risk scores.",
    featured: true,
    image: "/ai-risk-operations-center.webp",
  },
  {
    slug: "third-party-risk",
    label: "Third Party Risk Management",
    shortLabel: "TPRM",
    href: "/products/third-party-risk",
    icon: Handshake,
    description: "Continuous vendor discovery, AI prioritization, and evidence-backed closure.",
    featured: true,
    image: "/third_party_risk.webp",
  },
  {
    slug: "cyber-risk-management",
    label: "Cyber Risk Management",
    shortLabel: "Risk Management",
    href: "/products/cyber-risk-management",
    icon: Radar,
    description: "Live risk scoring, control mapping, FAIR quantification, and smart remediation.",
    featured: true,
    image: "/predictive_risk_intelligence.webp",
  },
  {
    slug: "operational-risk",
    label: "Operational Risk",
    shortLabel: "Operational Risk",
    href: "/products/operational-risk",
    icon: Gauge,
    description: "RCSA, live KRIs, loss events, and operational capital under Pillar 1 and Pillar 2, with back-testing.",
    featured: true,
    image: "/operational-risk.webp",
  },
  {
    slug: "financial-risk",
    label: "Financial Risk",
    shortLabel: "Financial Risk",
    href: "/products/financial-risk",
    icon: Landmark,
    description: "Capital, market, and liquidity risks monitored against organisation-defined limits, with regulatory capital impact.",
    featured: true,
    image: "/financial-risk.webp",
  },
  {
    slug: "enterprise-risk",
    label: "Enterprise Risk",
    shortLabel: "Enterprise Risk",
    href: "/products/enterprise-risk",
    icon: LayoutGrid,
    description: "Every risk domain augments one global index, with appetite, limits, breach response, board packs, and live war rooms.",
    featured: true,
    image: "/enterprise-risk.webp",
  },
  {
    slug: "business-continuity-management",
    label: "Business Continuity Management",
    shortLabel: "Continuity",
    href: "/products/business-continuity-management",
    icon: LifeBuoy,
    description: "BIA register, DR and BCP plans tied to it, a crisis war room, and simulated BCP and DR exercises.",
    featured: true,
    image: "/business-continuity.webp",
  },
  {
    slug: "ai-governance",
    label: "AI Governance",
    shortLabel: "AI Governance",
    href: "/products/ai-governance",
    icon: Library,
    description: "Inventory of public and private AI models, governed through the ISO/IEC 22989:2022 life cycle.",
    featured: true,
    image: "/ai-risk-trust-attestation.webp",
  },
  {
    slug: "ai-risk",
    label: "AI Risk",
    shortLabel: "AI Risk",
    href: "/products/ai-risk",
    icon: Bot,
    description: "Inventory public and private AI models, run STRIDE assessments, and classify them under the EU AI Act.",
    featured: true,
    image: "/ai-risk-dashboard.webp",
  },
  {
    slug: "ai-data-monitoring",
    label: "AI Data Monitoring",
    shortLabel: "AI Data",
    href: "/products/ai-data-monitoring",
    icon: Eye,
    description: "Monitor, audit, and block prompts and file uploads so sensitive data stays inside the organization.",
    featured: true,
    image: "/ai-data-monitoring.webp",
  },
  {
    slug: "vulnerability-operations",
    label: "Vulnerability Operations",
    shortLabel: "Vuln Ops",
    href: "/products/vulnerability-operations",
    icon: Activity,
    description: "API & Excel ingestion, exploitability prioritization, SLA tracking, and remediation programmes.",
    featured: true,
    image: "/vulnerability_operations.webp",
  },
  {
    slug: "security-governance",
    label: "Security Governance",
    shortLabel: "Governance",
    href: "/products/security-governance",
    icon: Building2,
    description: "KRI/KPI monitoring, policy management, AI budgeting, change management, and project delivery.",
    featured: true,
    image: "/governance_management.webp",
  },
  {
    slug: "budget-management",
    label: "Budget Management",
    shortLabel: "Budget",
    href: "/products/budget-management",
    icon: Wallet,
    description: "Every investment dollar is driven by risk or compliance, so the board can compare cost of impact with cost of mitigation.",
    featured: true,
    image: "/budget-management.webp",
  },
  {
    slug: "exposure-management",
    label: "Exposure Management",
    shortLabel: "Exposure",
    href: "/products/exposure-management",
    icon: Globe,
    description: "Assessment planning, issues hub, remediation hub, attack surface, and AI threat analysis.",
    featured: true,
    image: "/threats.webp",
  },
  {
    slug: "external-attack-surface-management",
    label: "External Attack Surface Management",
    shortLabel: "EASM",
    href: "/products/external-attack-surface-management",
    icon: Radar,
    description: "Continuous external discovery, shadow IT detection, attack paths, web pentest, and cloud posture.",
    featured: true,
    image: "/easm/slide-1.webp",
  },
  {
    slug: "compliance-management",
    label: "Compliance Management",
    shortLabel: "Compliance",
    href: "/products/compliance-management",
    icon: FileCheck2,
    description: "Regulations library, AI compliance register, horizon scanning, submissions, incidents, and policy gap analysis.",
    featured: true,
    image: "/compliance_management.webp",
  },
  {
    slug: "centralised-controls-management",
    label: "Centralised Controls Management",
    shortLabel: "Controls",
    href: "/products/centralised-controls-management",
    icon: ListChecks,
    description: "A library of 3,000+ controls, with applicability, testing workflows, evidence, and effectiveness that updates every mapped record.",
    featured: true,
    image: "/centralised-controls.webp",
  },
  {
    slug: "automated-compliance",
    label: "Automated Compliance",
    shortLabel: "Automation",
    href: "/products/automated-compliance",
    icon: CloudCog,
    description: "On-prem agent for Windows and Linux, virtual connector for Azure, GCP, AWS, and Oracle Cloud, and a scheduled real-time risk view.",
    featured: true,
    image: "/automated-compliance.webp",
  },
  {
    slug: "information-asset-management",
    label: "Information Asset Management",
    shortLabel: "Asset Mgmt",
    href: "/products/information-asset-management",
    icon: Network,
    description: "Asset ingestion, live AI risk scores, control effectiveness, CIA profiling, and unified exposure view.",
    featured: true,
    image: "/information_asset_management.webp",
  },
  {
    slug: "human-risk-management",
    label: "Human Risk Management",
    shortLabel: "Human Risk",
    href: "/products/human-risk-management",
    icon: Users,
    description: "AI privileged ID scanning, HRE scoring, ML analytics, automated controls, and financial exposure.",
    featured: true,
    image: "/human_risk_management.webp",
  },
  {
    slug: "data-privacy-protection",
    label: "Data Privacy & Protection",
    shortLabel: "Privacy",
    href: "/products/data-privacy-protection",
    icon: Fingerprint,
    description: "PII detection, sensitive data scanning, secret discovery, NER identification, and exposure scoring.",
    featured: true,
    image: "/data-privacy-dashboard.webp",
  },
  {
    slug: "data-loss-prevention",
    label: "Data Loss Prevention",
    shortLabel: "DLP",
    href: "/products/data-loss-prevention",
    icon: ShieldOff,
    description: "Approved email, cloud drive, and AI channels, with shadow mediums caught and violations opened as risk incidents.",
    featured: true,
    image: "/data-loss-prevention.webp",
  },
  {
    slug: "audit-management",
    label: "Audit Management",
    shortLabel: "Audit",
    href: "/products/audit-management",
    icon: ClipboardCheck,
    description: "Charter, planning, risk register, control assessment, reporting, capacity, and follow-up for internal audit.",
    featured: true,
    image: "/audit-management.webp",
  },
];

export const featuredProductPages = productPages.filter((product) => product.featured);

export type ProductMenuItem = {
  label: string;
  href: string;
};

export type ProductMenuGroup = {
  label: string;
  items: ProductMenuItem[];
};

export const artificialIntelligenceMenu: ProductMenuItem[] = [
  { label: "AI Governance", href: "/products/ai-governance" },
  { label: "AI Risk", href: "/products/ai-risk" },
  { label: "AI Data Monitoring", href: "/products/ai-data-monitoring" },
];

export const productMenuGroups: ProductMenuGroup[] = [
  {
    label: "Governance",
    items: [
      { label: "Security Governance", href: "/products/security-governance" },
      { label: "Information Asset Management", href: "/products/information-asset-management" },
      { label: "AI Risk Operations", href: "/products/ai-risk-operations-center" },
      { label: "Budget Management", href: "/products/budget-management" },
    ],
  },
  {
    label: "Risk",
    items: [
      { label: "Cyber Risk", href: "/products/cyber-risk-management" },
      { label: "Operational Risk", href: "/products/operational-risk" },
      { label: "Financial Risk", href: "/products/financial-risk" },
      { label: "Enterprise Risk", href: "/products/enterprise-risk" },
    ],
  },
  {
    label: "Compliance",
    items: [
      { label: "Compliance Management", href: "/products/compliance-management" },
      { label: "Centralised Controls Management", href: "/products/centralised-controls-management" },
      { label: "Automated Compliance", href: "/products/automated-compliance" },
    ],
  },
  {
    label: "Audit",
    items: [{ label: "Internal Audit", href: "/products/audit-management" }],
  },
  {
    label: "Data",
    items: [
      { label: "Data Privacy & Protection", href: "/products/data-privacy-protection" },
      { label: "Data Loss Prevention", href: "/products/data-loss-prevention" },
    ],
  },
  {
    label: "Exposure Management",
    items: [
      { label: "External Attack Surface Management", href: "/products/external-attack-surface-management" },
      { label: "Vulnerability Operations", href: "/products/vulnerability-operations" },
      { label: "Business Continuity Management", href: "/products/business-continuity-management" },
    ],
  },
];
