import {
  Database,
  Gauge,
  Layers,
  Link2,
  Network,
  Radar,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Upload,
  type LucideIcon,
} from "lucide-react";

export type IamWorkflowStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export type IamSubModule = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IamBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IamFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const iamHero = {
  eyebrow: "Information Asset Management",
  headline: "Every asset scored, every control measured—exposure in one view",
  subheadline:
    "Observeri Information Asset Management ingests assets through API, ETL, or manual entry—then pulls live AI risk scores and control effectiveness from the AI Risk Operations Center. Teams explore a unified exposure graph, drill into CIA triad impact, and prioritize remediation on the assets that matter most.",
  heroPills: [
    { label: "Multi-channel asset ingestion", icon: Upload },
    { label: "Live AI risk scores", icon: Gauge },
    { label: "Control effectiveness per asset", icon: ShieldCheck },
    { label: "Unified exposure view", icon: Network },
    { label: "CIA & criticality profiling", icon: Shield },
  ],
  outcomes: [
    { value: "Live", label: "AI risk scores" },
    { value: "Per-asset", label: "Control effectiveness" },
    { value: "360°", label: "Exposure view" },
  ],
};

export const iamProblem = {
  eyebrow: "Why it matters",
  title: "Asset inventories go stale—and risk lives where nobody is looking",
  painPoints: [
    {
      title: "Spreadsheets can't keep up with change",
      description:
        "Manual asset registers lag behind cloud deployments, shadow IT, and vendor changes—leaving teams blind to what is actually in production.",
      icon: Layers,
    },
    {
      title: "Risk scores disconnected from assets",
      description:
        "Vulnerabilities, threats, and compliance gaps sit in separate tools with no per-asset risk score teams can act on in business context.",
      icon: Gauge,
    },
    {
      title: "Control coverage is invisible per asset",
      description:
        "Without asset-level control effectiveness, teams cannot tell which crown-jewel systems lack compensating controls or carry the highest residual risk.",
      icon: ShieldCheck,
    },
    {
      title: "No unified view of exposure",
      description:
        "Relationships between assets, zones, environments, and risk tiers are buried in siloed dashboards—making it impossible to see how exposure propagates across the estate.",
      icon: Network,
    },
  ],
};

export const iamValueProp = {
  eyebrow: "What it is",
  title: "The living asset register powered by AI Risk Operations Center intelligence",
  description:
    "Information Asset Management is Observeri's authoritative inventory for every technology asset in the enterprise. Ingest via API, ETL pipelines, or manual entry—then let the AI Risk Operations Center calculate live risk scores, control effectiveness, residual risk, and AI criticality for each asset. A unified exposure graph shows how risk flows across network zones, environments, and classifications.",
  pillars: [
    { label: "Ingest from anywhere", icon: Upload },
    { label: "Score with AI ROC", icon: Sparkles },
    { label: "See exposure holistically", icon: Network },
  ],
};

export const iamSubModules: IamSubModule[] = [
  {
    title: "Asset Ingestion & Register",
    description:
      "Bring assets in through REST API, ETL connectors, CMDB sync, or manual entry—building a living register with deduplication, ownership assignment, and continuous refresh as infrastructure changes.",
    icon: Upload,
  },
  {
    title: "Asset Profile & Classification",
    description:
      "Maintain rich asset profiles—type, vendor, owner, custodian, status, data classification, business value tier, and network context including IP, hostname, zone, environment, and location.",
    icon: Server,
  },
  {
    title: "AI Risk Scoring (AI ROC)",
    description:
      "Every asset receives a live AI risk score from the AI Risk Operations Center—correlating vulnerabilities, threats, incidents, and compliance gaps into a continuously updated exposure metric.",
    icon: Gauge,
  },
  {
    title: "Control Effectiveness per Asset",
    description:
      "Linked control assessments show control effectiveness for each asset—surfacing gaps, residual risk, and which compensating controls are in place or missing.",
    icon: ShieldCheck,
  },
  {
    title: "Unified Exposure View",
    description:
      "An interactive exposure graph maps assets by risk tier, type, environment, network zone, and classification—giving teams a single visual of how exposure propagates across the estate.",
    icon: Network,
  },
  {
    title: "CIA Triad & AI Criticality",
    description:
      "Confidentiality, integrity, and availability impact ratings combine with AI criticality scoring to tier assets by business consequence—so crown-jewel systems always surface first.",
    icon: Shield,
  },
];

export const iamWorkflow: IamWorkflowStep[] = [
  {
    step: 1,
    title: "Ingest",
    subtitle: "Bring every asset into one register",
    description:
      "Connect asset sources via API, ETL pipelines, cloud inventory sync, or manual entry. Observeri deduplicates records, normalizes metadata, and keeps the register current as infrastructure evolves.",
    icon: Upload,
    signals: ["REST API connectors", "ETL & CMDB sync", "Manual entry", "Deduplication & normalization"],
  },
  {
    step: 2,
    title: "Profile",
    subtitle: "Enrich with ownership, network, and classification",
    description:
      "Assign owners, custodians, vendors, and business value tiers. Capture network context—IP, hostname, zone, environment, location—and tag data classification and CIA triad impact for each asset.",
    icon: Server,
    signals: ["Owner & custodian assignment", "Network zone & environment", "Data classification tags", "CIA triad ratings"],
  },
  {
    step: 3,
    title: "Score",
    subtitle: "Live AI risk scores from the AI ROC",
    description:
      "The AI Risk Operations Center calculates a live AI risk score, residual risk, and AI criticality for every asset—recalculating automatically as vulnerabilities close, threats evolve, and incidents resolve.",
    icon: Gauge,
    signals: ["Live AI risk score", "Residual risk calculation", "AI criticality tiering", "Auto-recalculation on change"],
  },
  {
    step: 4,
    title: "Assess",
    subtitle: "Control effectiveness per asset",
    description:
      "Linked control assessments show how effective controls are for each asset—highlighting gaps that drive residual risk and routing findings into remediation programmes with evidence-based closure.",
    icon: ShieldCheck,
    signals: ["Per-asset control effectiveness", "Linked control assessments", "Gap detection", "Remediation routing"],
  },
  {
    step: 5,
    title: "Visualize",
    subtitle: "Unified exposure graph across the estate",
    description:
      "Explore the unified exposure view—filter by risk tier, asset type, environment, network zone, and classification. Drill into any node to see full profile, scores, CIA triad, and linked assessments.",
    icon: Network,
    signals: ["Interactive exposure graph", "Multi-dimensional filters", "Drill-down asset detail", "Zone & environment overlays"],
  },
];

export const iamExposureShowcase = {
  title: "Unified asset exposure—see risk across your entire estate",
  description:
    "The exposure graph connects every asset by risk tier, network zone, and classification. Select any node to reveal live AI risk score, control effectiveness, residual risk, AI criticality, CIA triad impact, and linked control assessments—all in one panel.",
  image: "/information_asset_management.png",
  assetExample: {
    id: "AST-Z546IA",
    name: "Core Banking Application Server",
    riskTier: "Medium Risk",
    classification: "Confidential",
    businessValue: "BV — High",
  },
  metrics: [
    { label: "AI Risk Score", value: "45.0", icon: Gauge },
    { label: "Control Effectiveness", value: "Linked", icon: ShieldCheck },
    { label: "Residual Risk", value: "23.0", icon: Radar },
    { label: "AI Criticality", value: "50.0", icon: Sparkles },
  ],
  profileFields: [
    { group: "Profile", fields: ["Type: Software", "Vendor: Temenos", "Owner: IT Infrastructure", "Exposure: Corporate network"] },
    { group: "Network", fields: ["IP: 10.10.45.23", "Zone: Private Zone", "Env: Production", "Classification: Confidential"] },
    { group: "CIA Triad", fields: ["Confidentiality: 5 — High", "Integrity: 5 — High", "Availability: 5 — High"] },
  ],
  filterDimensions: [
    { label: "Risk tier", icon: Gauge },
    { label: "Asset type", icon: Server },
    { label: "Environment", icon: Layers },
    { label: "Network zone", icon: Network },
    { label: "Classification", icon: Shield },
  ],
};

export const iamFeatures: IamFeature[] = [
  {
    title: "Multi-channel ingestion",
    description:
      "API, ETL, CMDB sync, and manual entry keep the asset register aligned with what is actually deployed—without spreadsheet reconciliation.",
    icon: Upload,
  },
  {
    title: "Live AI risk scores",
    description:
      "Every asset carries a continuously updated AI risk score from the AI Risk Operations Center—reflecting current vulnerability, threat, and compliance posture.",
    icon: Gauge,
  },
  {
    title: "Control effectiveness tracking",
    description:
      "See which controls protect each asset and how effective they are—surfacing gaps that drive residual risk on business-critical systems.",
    icon: ShieldCheck,
  },
  {
    title: "Interactive exposure graph",
    description:
      "A unified visual map of assets colored by risk tier—with filters for type, environment, zone, and classification to focus on what matters.",
    icon: Network,
  },
  {
    title: "CIA triad profiling",
    description:
      "Confidentiality, integrity, and availability impact ratings ensure crown-jewel assets with the highest business consequence are always prioritized.",
    icon: Shield,
  },
  {
    title: "AI ROC integration",
    description:
      "Risk scores, criticality, and exposure signals flow directly from the AI Risk Operations Center—so asset intelligence stays synchronized with enterprise risk posture.",
    icon: Link2,
  },
];

export const iamBenefits: IamBenefit[] = [
  {
    title: "Always-current asset inventory",
    description:
      "Automated ingestion and deduplication eliminate stale spreadsheets—giving security, risk, and audit teams a register they can trust.",
    icon: Database,
  },
  {
    title: "Risk in business context",
    description:
      "Live AI risk scores tied to business value, classification, and CIA impact mean teams prioritize the assets that carry the greatest organizational consequence.",
    icon: Gauge,
  },
  {
    title: "Control gaps visible per asset",
    description:
      "Per-asset control effectiveness shows exactly where compensating controls are missing—before auditors or attackers find the gap.",
    icon: ShieldCheck,
  },
  {
    title: "Exposure you can see and act on",
    description:
      "The unified exposure graph replaces fragmented dashboards—showing how risk propagates across zones, environments, and asset relationships.",
    icon: Network,
  },
];

export const iamOrgOutcomes = [
  {
    title: "Faster remediation targeting",
    description:
      "When every asset has a live risk score and control effectiveness rating, remediation programmes focus on the 20% of assets driving 80% of exposure.",
  },
  {
    title: "Audit-ready asset evidence",
    description:
      "Asset profiles link to control assessments, vulnerability findings, and compliance evidence—so auditors receive structured proof instead of ad-hoc exports.",
  },
  {
    title: "Board-level exposure clarity",
    description:
      "Unified exposure views and AI criticality tiering translate operational asset data into executive dashboards leadership can act on immediately.",
  },
];

export const iamCapabilities = [
  "Multi-channel asset ingestion via REST API, ETL pipelines, CMDB sync, and manual entry",
  "Living asset register with deduplication, ownership, custodian, and vendor tracking",
  "Live AI risk score per asset from the AI Risk Operations Center",
  "Control effectiveness scoring and linked control assessments for every asset",
  "Residual risk and AI criticality calculations with automatic recalculation on change",
  "CIA triad impact ratings—confidentiality, integrity, and availability",
  "Business value tiering and data classification tagging",
  "Network context capture—IP, hostname, zone, environment, and location",
  "Unified interactive exposure graph with multi-dimensional filtering",
  "Drill-down asset detail panel with scores, profile, network, and CIA triad",
  "Before-and-after exposure tracking to measure remediation impact per asset",
  "Integration with Vulnerability Operations, Exposure Management, and Compliance Management",
];

export const iamStats = [
  { value: "Live", label: "AI risk scoring" },
  { value: "100%", label: "Asset coverage" },
  { value: "360°", label: "Exposure visibility" },
  { value: "24/7", label: "Score recalculation" },
];
