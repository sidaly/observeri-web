import {
  Bot,
  ClipboardList,
  Database,
  Eye,
  Fingerprint,
  Gauge,
  Globe,
  Key,
  Layers,
  Link2,
  Lock,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Tags,
  type LucideIcon,
} from "lucide-react";

export type DppWorkflowStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export type DppSubModule = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type DppBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type DppFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const dppHero = {
  eyebrow: "Data Privacy & Protection",
  headline: "Find sensitive data. Classify it. Score the exposure.",
  subheadline:
    "Observeri Data Privacy & Protection delivers PII detection and classification, sensitive data discovery, secret and credential scanning, NER-based identification, data exposure scoring, and unified classification across every connected source—so privacy teams know what data exists, where it lives, and how exposed it is.",
  heroPills: [
    { label: "PII detection & classification", icon: Fingerprint },
    { label: "Register of Processing Activities", icon: ClipboardList },
    { label: "Secret & credential scanning", icon: Key },
    { label: "NER-based identification", icon: Bot },
    { label: "Data exposure scoring", icon: Gauge },
  ],
  outcomes: [
    { value: "ROPA", label: "Processing register" },
    { value: "Live", label: "Data flow maps" },
    { value: "360°", label: "Source coverage" },
  ],
};

export const dppRopaShowcase = {
  title: "Register of Processing Activities",
  description:
    "Central repository of personal data processing activities for compliance and transparency—switch between a structured data register and interactive data flow diagrams for every processing activity.",
  image: "/data_privacy_protection.png",
  stats: [
    { label: "Total Activities", icon: Database },
    { label: "Active", icon: ClipboardList },
    { label: "Cross-border", icon: Globe },
    { label: "Special Category", icon: ShieldCheck },
  ],
  views: ["Data Register", "Data Flow Diagram"],
  flowStages: [
    {
      title: "Data Sources",
      items: ["ID cards", "Emirates ID / UAE Pass"],
      accent: "border-sky-500/40 bg-sky-500/5",
    },
    {
      title: "Processing",
      items: ["Customer KYC data", "AML screening per local regulations"],
      accent: "border-primary/40 bg-primary/5",
    },
    {
      title: "Storage",
      items: ["AWS eu-west", "Retention: 7 years"],
      accent: "border-emerald-500/40 bg-emerald-500/5",
    },
    {
      title: "Recipients",
      items: ["Documented third-party recipients", "Transfer safeguards tracked"],
      accent: "border-orange-500/40 bg-orange-500/5",
    },
  ],
  crossBorder: {
    title: "International / Cross-border Transfer",
    countries: "United Kingdom",
    safeguard: "Standard Contractual Clauses (SCCs)",
  },
  activityExample: {
    id: "ropa-2026-0001",
    name: "Customer KYC data",
    legalBasis: "Legitimate Interests",
    riskLevel: "High",
  },
};

export const dppProblem = {
  eyebrow: "Why it matters",
  title: "You cannot protect data you cannot see",
  painPoints: [
    {
      title: "PII is scattered and unclassified",
      description:
        "Personal data sits in databases, file shares, SaaS apps, and code repos—with no consistent classification or ownership map for privacy teams to act on.",
      icon: Layers,
    },
    {
      title: "Secrets leak into the wrong places",
      description:
        "API keys, credentials, and tokens end up in repositories, configs, and logs—creating breach paths that traditional DLP misses until it is too late.",
      icon: Key,
    },
    {
      title: "Discovery tools lack context",
      description:
        "Regex-based scanners generate false positives and miss contextual sensitive data that named-entity recognition and semantic analysis would catch.",
      icon: Eye,
    },
    {
      title: "Exposure has no score",
      description:
        "Teams know data exists somewhere but cannot quantify how exposed it is—by location, access level, encryption status, or regulatory sensitivity.",
      icon: Gauge,
    },
  ],
};

export const dppValueProp = {
  eyebrow: "What it is",
  title: "Continuous data privacy intelligence across your estate",
  description:
    "Data Privacy & Protection is Observeri's module for discovering, classifying, and scoring sensitive data across connected sources. From PII and credentials to regulated data types identified through NER, every finding feeds a data exposure score that prioritizes remediation and supports GDPR, PDPL, HIPAA, and other privacy programmes.",
  pillars: [
    { label: "Discover everywhere", icon: ScanSearch },
    { label: "Classify with AI", icon: Sparkles },
    { label: "Score the exposure", icon: Gauge },
  ],
};

export const dppSubModules: DppSubModule[] = [
  {
    title: "PII Detection & Classification",
    description:
      "Automatically detect personally identifiable information—names, emails, national IDs, phone numbers, and addresses—and assign privacy classification labels aligned to your data taxonomy and regulatory obligations.",
    icon: Fingerprint,
  },
  {
    title: "Sensitive Data Discovery",
    description:
      "Scan connected databases, file stores, cloud buckets, and applications for sensitive data patterns—health records, financial data, biometrics, and custom sensitive categories defined by your organization.",
    icon: ScanSearch,
  },
  {
    title: "Secret & Credential Scanning",
    description:
      "Find exposed API keys, passwords, tokens, certificates, and connection strings across repositories, configs, and logs—before adversaries or researchers discover them first.",
    icon: Key,
  },
  {
    title: "NER-Based Identification",
    description:
      "Named Entity Recognition models identify contextual sensitive data that pattern matching misses—person names in unstructured text, organization references, locations, and domain-specific entity types.",
    icon: Bot,
  },
  {
    title: "Data Exposure Scoring",
    description:
      "Calculate a data exposure score for every finding based on sensitivity, location, access controls, encryption status, and business context—prioritizing remediation by actual privacy risk.",
    icon: Gauge,
  },
  {
    title: "Cross-Source Classification",
    description:
      "Apply consistent data classification labels across all connected sources—unifying taxonomy, ownership, and retention rules whether data lives in cloud, on-prem, or SaaS environments.",
    icon: Tags,
  },
  {
    title: "Register of Processing Activities",
    description:
      "Maintain a central ROPA with data register and interactive flow diagrams—mapping sources, processing, storage, recipients, and cross-border transfers with risk scoring per activity.",
    icon: ClipboardList,
  },
];

export const dppWorkflow: DppWorkflowStep[] = [
  {
    step: 1,
    title: "Connect",
    subtitle: "Link data sources across your estate",
    description:
      "Connect databases, cloud storage, file shares, SaaS applications, code repositories, and collaboration platforms. Observeri inventories data stores and establishes continuous scanning coverage across your connected source landscape.",
    icon: Database,
    signals: ["Database connectors", "Cloud storage integration", "SaaS & repo scanning", "Unified source inventory"],
  },
  {
    step: 2,
    title: "Discover",
    subtitle: "Scan for PII, secrets, and sensitive data",
    description:
      "Automated discovery scans run across connected sources—detecting PII, sensitive data categories, exposed secrets, and credentials. NER models augment pattern matching to catch contextual entities in unstructured content.",
    icon: ScanSearch,
    signals: ["PII pattern detection", "Sensitive data scanning", "Secret & credential discovery", "NER entity extraction"],
  },
  {
    step: 3,
    title: "Classify",
    subtitle: "Label data with unified taxonomy",
    description:
      "Every discovered data element receives a classification label from your organization's taxonomy—public, internal, confidential, restricted, or custom categories mapped to GDPR, PDPL, HIPAA, and other regulatory data types.",
    icon: Tags,
    signals: ["Automated classification", "Custom taxonomy mapping", "Regulatory data type tagging", "Cross-source consistency"],
  },
  {
    step: 4,
    title: "Score",
    subtitle: "Calculate data exposure for every finding",
    description:
      "Data exposure scoring weighs sensitivity, location, access breadth, encryption, retention status, and business criticality—surfacing the findings that represent the highest privacy and breach risk.",
    icon: Gauge,
    signals: ["Composite exposure scoring", "Access & encryption context", "Regulatory sensitivity weighting", "Priority ranking"],
  },
  {
    step: 5,
    title: "Act",
    subtitle: "Remediate, mask, or govern exposed data",
    description:
      "High-exposure findings route into remediation workflows—masking, relocation, access restriction, or deletion—with evidence captured for privacy audits and breach readiness programmes.",
    icon: ShieldCheck,
    signals: ["Remediation routing", "Access restriction workflows", "Privacy audit evidence", "Continuous rescanning"],
  },
];

export const dppFeatures: DppFeature[] = [
  {
    title: "Automated PII detection",
    description:
      "Detect and classify PII across structured and unstructured data using pattern libraries and AI—covering global identity formats, contact data, and financial identifiers.",
    icon: Fingerprint,
  },
  {
    title: "Deep sensitive data scanning",
    description:
      "Go beyond PII to discover health records, payment data, biometrics, and organization-defined sensitive categories across every connected source.",
    icon: ScanSearch,
  },
  {
    title: "Secret and credential discovery",
    description:
      "Scan repositories, configs, logs, and collaboration tools for exposed secrets—API keys, passwords, tokens, and certificates—with severity scoring and owner routing.",
    icon: Key,
  },
  {
    title: "NER-powered entity recognition",
    description:
      "Named Entity Recognition identifies people, organizations, locations, and custom entities in free text—reducing false negatives that regex-only tools miss.",
    icon: Bot,
  },
  {
    title: "Live data exposure scores",
    description:
      "Every classified finding receives a continuously updated exposure score reflecting access, encryption, location, and regulatory sensitivity.",
    icon: Gauge,
  },
  {
    title: "ROPA & data flow diagrams",
    description:
      "Build and maintain a Register of Processing Activities with visual data flow maps—from sources through processing and storage to recipients and cross-border transfer safeguards.",
    icon: Link2,
  },
];

export const dppBenefits: DppBenefit[] = [
  {
    title: "Privacy compliance you can demonstrate",
    description:
      "Discovery, classification, and exposure evidence support GDPR, PDPL, HIPAA, and UAE data protection programmes—with audit-ready records of what data exists and how it is protected.",
    icon: ShieldCheck,
  },
  {
    title: "Stop secrets before they become breaches",
    description:
      "Continuous credential and secret scanning catches exposed keys and tokens in code and configs—closing a common breach vector before external discovery.",
    icon: Lock,
  },
  {
    title: "Prioritize by exposure, not volume",
    description:
      "Data exposure scoring focuses remediation on the highest-risk findings—restricted data in open buckets, unencrypted PII, and credentials in public repos—not every low-sensitivity match.",
    icon: Sparkles,
  },
  {
    title: "One classification model across all sources",
    description:
      "Cross-source classification eliminates taxonomy drift between cloud, on-prem, and SaaS—giving privacy and security teams a single data map they can govern.",
    icon: Database,
  },
];

export const dppOrgOutcomes = [
  {
    title: "Faster data subject and breach response",
    description:
      "When privacy incidents occur, teams already know where PII lives, how it is classified, and who owns it—compressing investigation and notification timelines.",
  },
  {
    title: "Reduced regulatory and audit friction",
    description:
      "Continuous discovery and classification produce the data inventory regulators expect—replacing manual spreadsheets assembled before each audit cycle.",
  },
  {
    title: "Measurable reduction in data exposure",
    description:
      "Exposure scores track improvement as teams mask, relocate, and restrict sensitive data—giving leadership quantified proof of privacy programme progress.",
  },
];

export const dppCapabilities = [
  "PII detection and automated classification across structured and unstructured data",
  "Sensitive data discovery scanning for databases, file stores, cloud buckets, and SaaS apps",
  "Secret and credential scanning across code repositories, configs, logs, and collaboration tools",
  "NER-based data identification for contextual entities in free text and documents",
  "Data exposure scoring based on sensitivity, access, encryption, and regulatory context",
  "Register of Processing Activities (ROPA) with data register and interactive flow diagrams",
  "Cross-border transfer tracking with safeguard documentation (e.g. SCCs)",
  "Custom sensitive data category definitions aligned to organizational policy",
  "Regulatory data type mapping for GDPR, PDPL, HIPAA, and regional privacy frameworks",
  "Continuous rescanning with change detection when new sensitive data appears",
  "Remediation routing for high-exposure findings with evidence-based closure",
  "Integration with Exposure Management and AI Risk Operations Center for enterprise risk context",
  "Privacy audit dashboards showing discovery coverage, classification status, and exposure trends",
];

export const dppStats = [
  { value: "7", label: "Privacy capabilities" },
  { value: "NER", label: "AI entity recognition" },
  { value: "100%", label: "Source classification" },
  { value: "24/7", label: "Continuous scanning" },
];
