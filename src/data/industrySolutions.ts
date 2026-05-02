import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeDollarSign,
  Building2,
  Cpu,
  HeartPulse,
  ShoppingCart,
  Zap,
} from "lucide-react";

export interface IndustrySolution {
  slug: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  eyebrow: string;
  headline: string;
  summary: string;
  keyRegulations: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  workflowLabel: string;
  workflow: string[];
  outcomes: {
    value: string;
    label: string;
  }[];
  valueStory: {
    title: string;
    description: string;
  }[];
  executivePanel?: {
    title: string;
    description: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
}

export const industrySolutions: IndustrySolution[] = [
  {
    slug: "banking-financial-services",
    label: "Banking & Financial Services",
    shortLabel: "Financial Services",
    icon: BadgeDollarSign,
    eyebrow: "Industry Focus",
    headline: "AI-driven compliance and risk management for tightly regulated financial environments.",
    summary:
      "GRC Sphere helps financial institutions manage fast-moving obligations, improve remediation speed, and turn regulatory change into structured workflows instead of manual fire drills.",
    keyRegulations: ["CBUAE", "DFSA", "AML/CFT", "SOX", "PCI DSS", "Basel III"],
    capabilities: [
      {
        title: "Automated obligation register",
        description:
          "Map regulatory changes directly to internal controls so the obligation register stays current without manual spreadsheet maintenance.",
      },
      {
        title: "KYC / AML control testing",
        description:
          "AI agents test KYC sample sets against AML policies and surface inconsistencies before they become exam findings.",
      },
      {
        title: "Critical asset risk scoring",
        description:
          "Score core banking applications against vulnerability exposure and business criticality to prioritize what truly impacts operations.",
      },
      {
        title: "Exploit probability analysis",
        description:
          "Correlate vulnerabilities with live threat intelligence and exploit likelihood so remediation teams know what to fix first.",
      },
    ],
    workflowLabel: "Intelligent workflow",
    workflow: ["Regulatory ingestion", 'AI "four-eye" review', "Auto-escalation", "Submission ready"],
    outcomes: [
      { value: "60%", label: "Audit prep time reduction" },
      { value: "35%", label: "Reduction in MTTR" },
      { value: "< 24h", label: "High-risk vulnerability fix" },
    ],
    valueStory: [
      {
        title: "Board-ready financial risk posture",
        description:
          "Translate technical findings into business impact and budgeting decisions that CFOs and risk committees can act on quickly.",
      },
      {
        title: "Less regulatory drag",
        description:
          "Automated obligation mapping and evidence workflows cut manual review cycles and reduce deadline pressure across control owners.",
      },
      {
        title: "Faster issue closure",
        description:
          "Risk scoring and exploit probability focus remediation teams on exposures with the highest business consequence.",
      },
    ],
  },
  {
    slug: "healthcare-life-sciences",
    label: "Healthcare & Life Sciences",
    shortLabel: "Healthcare",
    icon: HeartPulse,
    eyebrow: "Industry Focus",
    headline: "Protect patient trust, secure IoMT ecosystems, and automate healthcare compliance at executive scale.",
    summary:
      "Healthcare is the one industry where the decks go deepest, so this page combines the sector slide with the executive ROI presentation to show both operational use cases and business value.",
    keyRegulations: ["HIPAA", "UAE PDPL", "HITECH", "FDA MedDev", "ISO 27799", "GDPR"],
    capabilities: [
      {
        title: "PHI data discovery",
        description:
          "Automatically identify and classify ePHI across storage systems so sensitive data is governed consistently.",
      },
      {
        title: "IoMT security",
        description:
          "Continuously assess medical devices and connected equipment with real-time vulnerability scanning and risk scoring.",
      },
      {
        title: "Access control testing",
        description:
          "Validate least-privilege access to patient records and detect drift before it becomes an audit or privacy event.",
      },
      {
        title: "Incident response automation",
        description:
          "Use pre-built healthcare playbooks for ransomware, unauthorized record access, and other high-impact scenarios.",
      },
    ],
    workflowLabel: "Intelligent workflow",
    workflow: ["Asset discovery", "Risk assessment", "Breach simulation", "Audit report"],
    outcomes: [
      { value: "50%", label: "Faster risk assessments" },
      { value: "30%", label: "Reduction in repeat incidents" },
      { value: "100%", label: "Audit readiness for PHI" },
    ],
    valueStory: [
      {
        title: "Quantified cyber loss reduction",
        description:
          "The executive ROI deck models reducing expected annual loss from $12.4M to $2.1M by prioritizing healthcare-specific exposure.",
      },
      {
        title: "Resilience for clinical operations",
        description:
          "Continuous visibility into critical systems helps reduce downtime risk across care delivery and connected infrastructure.",
      },
      {
        title: "Leadership-ready reporting",
        description:
          "Dashboards give CEOs, CFOs, CIOs, and boards a live view of ransomware exposure, compliance posture, and cost avoidance.",
      },
    ],
    executivePanel: {
      title: "Executive ROI narrative from the healthcare presentation",
      description:
        "The earlier deck positions healthcare cyber risk as a board-level financial issue, with modeled payback in 21 days and $9.11M net year 1 ROI.",
      stats: [
        { value: "$10.93M", label: "Average healthcare breach cost" },
        { value: "$9.66M", label: "Modeled year 1 benefit" },
        { value: "1,656%", label: "Modeled ROI percentage" },
        { value: "21 Days", label: "Payback period" },
      ],
    },
  },
  {
    slug: "government-public-sector",
    label: "Government & Public Sector",
    shortLabel: "Government",
    icon: Building2,
    eyebrow: "Industry Focus",
    headline: "Unified governance, sovereign data protection, and automated assurance for public-sector operations.",
    summary:
      "GRC Sphere helps ministries and public entities standardize governance, protect citizen data, and accelerate NESA-style reporting without losing agency-level autonomy.",
    keyRegulations: ["NESA / NIA", "Data Sovereignty", "ISR", "CIP", "ISO 22301", "NIST 800-53"],
    capabilities: [
      {
        title: "Multi-agency governance",
        description:
          "Run centralized reporting with tenant isolation so agencies remain independent while leadership still gets a unified view.",
      },
      {
        title: "NESA compliance automation",
        description:
          "Use pre-mapped controls and automated evidence collection to streamline assurance against national standards.",
      },
      {
        title: "Sovereign data protection",
        description:
          "Continuously verify that sensitive citizen data remains within allowed borders and residency requirements.",
      },
      {
        title: "Critical infrastructure risk management",
        description:
          "Manage OT and IT convergence risks across energy, water, and transport under one operating model.",
      },
    ],
    workflowLabel: "Intelligent workflow",
    workflow: ["Asset discovery", "Criticality tagging", "NESA gap analysis", "Audit report"],
    outcomes: [
      { value: "90%", label: "Faster NESA reporting" },
      { value: "100%", label: "Audit readiness" },
      { value: "40%", label: "Government OpEx reduction" },
    ],
    valueStory: [
      {
        title: "Sovereignty with visibility",
        description:
          "Public-sector teams can keep strong agency boundaries while still giving executive leadership a cross-government posture view.",
      },
      {
        title: "Faster assurance cycles",
        description:
          "Pre-mapped controls and evidence automation reduce the manual effort required for formal reporting and audit response.",
      },
      {
        title: "Critical infrastructure awareness",
        description:
          "Integrated OT/IT risk views help public organizations prioritize services with the greatest operational and societal impact.",
      },
    ],
  },
  {
    slug: "technology-saas",
    label: "Technology & SaaS",
    shortLabel: "Technology & SaaS",
    icon: Cpu,
    eyebrow: "Industry Focus",
    headline: "Support rapid product delivery without sacrificing privacy, vendor oversight, or secure engineering discipline.",
    summary:
      "For software and platform companies, GRC Sphere embeds compliance into product operations through API visibility, DevSecOps integration, and privacy workflows.",
    keyRegulations: ["PDPL", "GDPR", "SOC 2", "ISO 27001", "CSA STAR"],
    capabilities: [
      {
        title: "Vendor risk management",
        description:
          "Automate third-party assessments and DPA tracking to keep supply chain risk aligned with growth.",
      },
      {
        title: "API security intelligence",
        description:
          "Continuously discover shadow APIs and score them by exposure and sensitivity so teams can secure what they actually run.",
      },
      {
        title: "DevSecOps integration",
        description:
          "Map controls to CI/CD checks with policy-as-code so engineering teams catch compliance issues before release.",
      },
      {
        title: "Privacy by design",
        description:
          "Generate ROPA records and support DSAR fulfillment with AI-assisted workflows that scale with product velocity.",
      },
    ],
    workflowLabel: "Secure software lifecycle",
    workflow: ["Code commit", "Auto-control test", "Compliance gate", "Release"],
    outcomes: [
      { value: "50%", label: "Shorter SOC 2 audits" },
      { value: "100%", label: "API visibility" },
      { value: "Zero", label: "Config drift target state" },
    ],
    valueStory: [
      {
        title: "Compliance inside delivery pipelines",
        description:
          "Instead of treating compliance as a release blocker, controls become part of the engineering system itself.",
      },
      {
        title: "Vendor and privacy confidence",
        description:
          "Product teams gain better visibility into third parties, data processing, and privacy obligations as they scale into new markets.",
      },
      {
        title: "Fewer blind spots",
        description:
          "API discovery and runtime exposure intelligence close gaps that traditional audit-centric tooling misses.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    label: "Retail & E-commerce",
    shortLabel: "Retail & E-commerce",
    icon: ShoppingCart,
    eyebrow: "Industry Focus",
    headline: "Protect transaction-heavy environments, vendor ecosystems, and customer data during peak-volume operations.",
    summary:
      "Retail teams use GRC Sphere to manage PCI scope, third-party dependencies, and fraud-sensitive infrastructure with more continuity during demand spikes.",
    keyRegulations: ["PCI DSS", "GDPR", "CCPA", "ISO 27001", "SOC 2", "Consumer Rights"],
    capabilities: [
      {
        title: "CDE mapping and scope control",
        description:
          "Automatically discover cardholder data environments so PCI scope stays accurate as infrastructure changes.",
      },
      {
        title: "Supply chain risk",
        description:
          "Assess vendor and logistics partner posture continuously to reduce the chance of indirect breaches.",
      },
      {
        title: "POS and e-commerce scanning",
        description:
          "Monitor web gateways and point-of-sale environments for skimming and transaction-path vulnerabilities.",
      },
      {
        title: "Seasonal surge protection",
        description:
          "Scale monitoring during periods like Black Friday to maintain resilience when transaction volume spikes.",
      },
    ],
    workflowLabel: "Intelligent workflow",
    workflow: ["Asset discovery", "PCI control check", "Gap analysis", "Remediation ticket"],
    outcomes: [
      { value: "99.9%", label: "PCI compliance rate" },
      { value: "40%", label: "Reduced fraud risk" },
      { value: "2x", label: "Faster vendor onboarding" },
    ],
    valueStory: [
      {
        title: "Cleaner PCI operations",
        description:
          "Dynamic scope visibility reduces rework and improves confidence around where cardholder data actually lives.",
      },
      {
        title: "More resilient high-volume periods",
        description:
          "Teams can monitor the systems that matter most during seasonal spikes instead of reacting after incidents hit revenue.",
      },
      {
        title: "Faster partner enablement",
        description:
          "Structured vendor workflows help retail operations move quickly without sidelining due diligence.",
      },
    ],
  },
  {
    slug: "energy-utilities",
    label: "Energy & Utilities",
    shortLabel: "Energy & Utilities",
    icon: Zap,
    eyebrow: "Industry Focus",
    headline: "Secure critical infrastructure with OT-aware risk intelligence and compliance automation built for operational continuity.",
    summary:
      "Energy and utilities need more than IT-centric GRC. GRC Sphere correlates cyber threats to physical assets so teams can defend availability, safety, and regulatory obligations together.",
    keyRegulations: ["NERC CIP", "IEC 62443", "NIST CSF", "ISO 27001", "TSA Pipeline", "NIS2 Directive"],
    capabilities: [
      {
        title: "OT / ICS asset discovery",
        description:
          "Passively identify industrial control systems and map dependencies without interrupting operations.",
      },
      {
        title: "Threat-to-asset correlation",
        description:
          "Connect threat signals directly to turbines, substations, and other operational assets to prioritize action.",
      },
      {
        title: "Safety-critical risk scoring",
        description:
          "Score risk using both digital vulnerability and potential physical safety impact, not cyber metrics alone.",
      },
      {
        title: "Exploit probability analysis",
        description:
          "Use EPSS-informed modeling to understand which OT vulnerabilities are most likely to be weaponized.",
      },
    ],
    workflowLabel: "Intelligent workflow",
    workflow: ["Threat signal", "Asset correlation", "Risk trigger", "Containment"],
    outcomes: [
      { value: "100%", label: "Audit readiness for NERC" },
      { value: "60%", label: "Faster containment" },
      { value: "Zero", label: "Critical downtime events" },
    ],
    valueStory: [
      {
        title: "Operational continuity first",
        description:
          "Risk decisions reflect the consequences of outages and safety events, not just patch queues and technical severity.",
      },
      {
        title: "OT-aware prioritization",
        description:
          "Teams can act on the assets and vulnerabilities that matter most to reliability and field operations.",
      },
      {
        title: "Faster regulator confidence",
        description:
          "Automated evidence and control visibility support stronger readiness for infrastructure-focused mandates.",
      },
    ],
  },
];

export const industrySolutionsBySlug = Object.fromEntries(
  industrySolutions.map((industry) => [industry.slug, industry]),
) as Record<string, IndustrySolution>;

export const platformHighlights = [
  {
    title: "3,000+ pre-mapped controls",
    description: "Automated control assessments mapped across global regulations and standards.",
    icon: Activity,
  },
  {
    title: "80+ dashboards",
    description: "Executive, operational, and compliance visualization across the whole platform.",
    icon: Building2,
  },
  {
    title: "API-first integrations",
    description: "Connect SIEM, CMDB, vulnerability scanners, HRIS, and cloud platforms.",
    icon: Cpu,
  },
];
