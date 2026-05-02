import {
  Activity,
  Building2,
  FileCheck2,
  FileText,
  Handshake,
  LayoutDashboard,
  Network,
  Radar,
  ScanSearch,
  ShieldAlert,
  Sparkles,
  Target,
  TriangleAlert,
  Users,
  type LucideIcon,
} from "lucide-react";

export type PlatformModule = {
  title: string;
  code: string;
  icon: LucideIcon;
  image: string;
  summary: string;
  lifecycle: string[];
};

export const platformModules: PlatformModule[] = [
  {
    title: "AI Risk Operations Center",
    code: "CORE_SYSTEM",
    icon: Radar,
    image: "/ai_risk_operation.png",
    summary:
      "Connects asset inventory, exposure scanning, automated assessments, control mapping, and predictive AI into one risk intelligence engine.",
    lifecycle: ["Aggregate risk signals", "Trigger assessments", "Recommend fixes", "Plan budget"],
  },
  {
    title: "Predictive Risk Intelligence",
    code: "PREDICT_V2",
    icon: Sparkles,
    image: "/predictive_risk_intelligence.png",
    summary:
      "Generates risk exposure scores, incident likelihood predictions, control effectiveness scores, and compliance risk forecasts.",
    lifecycle: ["Score exposure", "Forecast incidents", "Assess controls", "Explain failure paths"],
  },
  {
    title: "Focused Remediation",
    code: "REMEDIATION",
    icon: Target,
    image: "/focused_remediation.png",
    summary:
      "Prioritizes fixes by exploit probability, asset criticality, threat activity, and vulnerability aging so teams remove the most exposure first.",
    lifecycle: ["Analyze exploitability", "Rank risk", "Plan treatment", "Reduce exposure"],
  },
  {
    title: "Risk Incidents",
    code: "RISK_INCIDENT",
    icon: ShieldAlert,
    image: "/risk_incidents.png",
    summary:
      "Centralizes incident reporting, classification, assignment, investigation, remediation, and executive oversight.",
    lifecycle: ["Capture incidents", "Classify severity", "Assign responders", "Track closure"],
  },
  {
    title: "Third Party Risk",
    code: "3RD_PARTY",
    icon: Handshake,
    image: "/third_party_risk.png",
    summary:
      "Manages vendor onboarding, contracts, assessments, risk prioritization, gap remediation, and continuous monitoring.",
    lifecycle: ["Onboard vendors", "Manage contracts", "Assess risk", "Monitor gaps"],
  },
  {
    title: "Threats",
    code: "THREAT",
    icon: TriangleAlert,
    image: "/threats.png",
    summary:
      "Combines threat registration, attack surface visibility, threat intelligence, and AI-assisted analysis for faster prioritization.",
    lifecycle: ["Register threats", "Enrich context", "Analyze impact", "Treat exposure"],
  },
  {
    title: "Vulnerability Operations",
    code: "VULNERABILITIES",
    icon: Activity,
    image: "/vulnerability_operations.png",
    summary:
      "Tracks vulnerabilities with CVE, CVSS, EPSS, exploit context, SLA aging, remediation queues, and program health analytics.",
    lifecycle: ["Register CVEs", "Prioritize by EPSS", "Manage queues", "Measure SLAs"],
  },
  {
    title: "Vulnerability Scanner",
    code: "VUL_SCANNING",
    icon: ScanSearch,
    image: "/vulnerability_scanner.png",
    summary:
      "Launches authorized web scans, reviews findings by severity, and pushes validated results into the vulnerability workflow.",
    lifecycle: ["Define targets", "Select scanner", "Test endpoints", "Export findings"],
  },
  {
    title: "Governance Management",
    code: "IS_GOVERNANCE",
    icon: Building2,
    image: "/governance_management.png",
    summary:
      "Unifies governance KPIs, budgets, control assessments, document repositories, and AI-supported policy comparison.",
    lifecycle: ["Define KPIs", "Track performance", "Manage budgets", "Govern documents"],
  },
  {
    title: "Human Risk",
    code: "HUMAN_RISK",
    icon: Users,
    image: "/human_risk.png",
    summary:
      "Quantifies user exposure using identity context, privilege impact, trust indicators, anomaly signals, and environmental risk.",
    lifecycle: ["Profile users", "Quantify exposure", "Detect anomalies", "Trigger controls"],
  },
  {
    title: "Compliance Management",
    code: "COMPLIANCE_MGMT",
    icon: FileCheck2,
    image: "/compliance_management.png",
    summary:
      "Selects frameworks, maps requirements, runs assessments, produces gap registers, and suggests remediation plans.",
    lifecycle: ["Select framework", "Map requirements", "Assess compliance", "Plan remediation"],
  },
  {
    title: "Asset Management",
    code: "ASSET_MGMT",
    icon: Network,
    image: "/asset_management.png",
    summary:
      "Ingests assets through API, ETL, or entry, then scores risk using business value, data classification, CIA impact, and exposure data.",
    lifecycle: ["Ingest assets", "Analyze risk", "Maintain register", "Score exposure"],
  },
  {
    title: "Policy Management",
    code: "POLICY_MGMT",
    icon: FileText,
    image: "/policy_management.png",
    summary:
      "Generates framework-aligned policies, compares documents against regulations, identifies gaps, and builds compliance reports.",
    lifecycle: ["Upload documents", "Generate policies", "Compare compliance", "Report gaps"],
  },
  {
    title: "Executive Dashboards",
    code: "DASHBOARDS",
    icon: LayoutDashboard,
    image: "/executive_dashboards.png",
    summary:
      "Surfaces live metrics for asset risk trees, human risk exposure, heat maps, SLA monitoring, remediation, and predictive risk.",
    lifecycle: ["Monitor live metrics", "Review heat maps", "Track SLAs", "Brief leadership"],
  },
];

export const featureOutcomes = [
  { value: "80%", label: "Risk reduction", detail: "Targeted remediation removes the highest exposure first." },
  { value: "60%", label: "Process automation", detail: "Evidence, assessment, reporting, and routing work move out of spreadsheets." },
  { value: "3,000+", label: "Mapped controls", detail: "Pre-mapped libraries across security, compliance, cloud, and governance." },
  { value: "80+", label: "Dashboards", detail: "Operational and executive views for risk, compliance, assets, SLAs, and incidents." },
];
