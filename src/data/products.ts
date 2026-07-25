import { Activity, Building2, FileCheck2, Fingerprint, Globe, Handshake, Layers3, Network, Radar, Sparkles, Users, type LucideIcon } from "lucide-react";

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
    image: "/ai-risk-operations-center.png",
  },
  {
    slug: "third-party-risk",
    label: "Third Party Risk Management",
    shortLabel: "TPRM",
    href: "/products/third-party-risk",
    icon: Handshake,
    description: "Continuous vendor discovery, AI prioritization, and evidence-backed closure.",
    featured: true,
    image: "/third_party_risk.png",
  },
  {
    slug: "cyber-risk-management",
    label: "Cyber Risk Management",
    shortLabel: "Risk Management",
    href: "/products/cyber-risk-management",
    icon: Radar,
    description: "Live risk scoring, control mapping, FAIR quantification, and smart remediation.",
    featured: true,
    image: "/predictive_risk_intelligence.png",
  },
  {
    slug: "vulnerability-operations",
    label: "Vulnerability Operations",
    shortLabel: "Vuln Ops",
    href: "/products/vulnerability-operations",
    icon: Activity,
    description: "API & Excel ingestion, exploitability prioritization, SLA tracking, and remediation programmes.",
    featured: true,
    image: "/vulnerability_operations.png",
  },
  {
    slug: "security-governance",
    label: "Security Governance",
    shortLabel: "Governance",
    href: "/products/security-governance",
    icon: Building2,
    description: "KRI/KPI monitoring, policy management, AI budgeting, change management, and project delivery.",
    featured: true,
    image: "/governance_management.png",
  },
  {
    slug: "exposure-management",
    label: "Exposure Management",
    shortLabel: "Exposure",
    href: "/products/exposure-management",
    icon: Globe,
    description: "Assessment planning, issues hub, remediation hub, attack surface, and AI threat analysis.",
    featured: true,
    image: "/threats.png",
  },
  {
    slug: "external-attack-surface-management",
    label: "External Attack Surface Management",
    shortLabel: "EASM",
    href: "/products/external-attack-surface-management",
    icon: Radar,
    description: "Continuous external discovery, shadow IT detection, attack paths, web pentest, and cloud posture.",
    featured: true,
    image: "/easm/slide-1.png",
  },
  {
    slug: "compliance-management",
    label: "Compliance Management",
    shortLabel: "Compliance",
    href: "/products/compliance-management",
    icon: FileCheck2,
    description: "Regulations library, AI compliance register, horizon scanning, submissions, incidents, and policy gap analysis.",
    featured: true,
    image: "/compliance_management.png",
  },
  {
    slug: "information-asset-management",
    label: "Information Asset Management",
    shortLabel: "Asset Mgmt",
    href: "/products/information-asset-management",
    icon: Network,
    description: "Asset ingestion, live AI risk scores, control effectiveness, CIA profiling, and unified exposure view.",
    featured: true,
    image: "/information_asset_management.png",
  },
  {
    slug: "human-risk-management",
    label: "Human Risk Management",
    shortLabel: "Human Risk",
    href: "/products/human-risk-management",
    icon: Users,
    description: "AI privileged ID scanning, HRE scoring, ML analytics, automated controls, and financial exposure.",
    featured: true,
    image: "/human_risk_management.png",
  },
  {
    slug: "data-privacy-protection",
    label: "Data Privacy & Protection",
    shortLabel: "Privacy",
    href: "/products/data-privacy-protection",
    icon: Fingerprint,
    description: "PII detection, sensitive data scanning, secret discovery, NER identification, and exposure scoring.",
    featured: true,
    image: "/data_privacy_protection.png",
  },
];

export const featuredProductPages = productPages.filter((product) => product.featured);
