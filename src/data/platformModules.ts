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
  details: string;
  capabilities: string[];
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
    details:
      "The AI Risk Operations Center is the central intelligence hub of Observeri. It ingests signals from assets, vulnerabilities, threats, controls, and compliance posture, then applies predictive AI to surface the highest-impact risks across the enterprise. Teams move from fragmented dashboards to a single operational view where assessments are triggered automatically, remediation is prioritized by exposure, and budget planning is tied directly to quantified risk reduction.",
    capabilities: [
      "Unified risk signal aggregation across all platform modules",
      "Automated assessment triggers based on exposure thresholds",
      "Control mapping with gap detection and remediation routing",
      "Predictive AI recommendations for risk treatment and budget allocation",
    ],
  },
  {
    title: "Predictive Risk Intelligence",
    code: "PREDICT_V2",
    icon: Sparkles,
    image: "/predictive_risk_intelligence.png",
    summary:
      "Generates risk exposure scores, incident likelihood predictions, control effectiveness scores, and compliance risk forecasts.",
    lifecycle: ["Score exposure", "Forecast incidents", "Assess controls", "Explain failure paths"],
    details:
      "Predictive Risk Intelligence transforms historical and live telemetry into forward-looking risk scores. Machine learning models evaluate exposure patterns, control effectiveness, and threat activity to forecast incident likelihood before breaches occur. Users can select a risk methodology and framework—such as ISO 27001, NIST, or FAIR—to run end-to-end risk assessments aligned to their organization's standards. The platform maintains a saved accept-risk inventory with a full process flow to document risk acceptance decisions, record changes over time, attach compensating controls, and track expiry dates so accepted risks are reviewed and renewed before they lapse.",
    capabilities: [
      "Framework-selectable assessments including ISO 27001, NIST, and FAIR risk quantification",
      "End-to-end risk assessment workflows from scoping through scoring and reporting",
      "Accept-risk inventory with approval workflows and full change history",
      "Compensating control tracking and accepted-risk expiry monitoring with renewal alerts",
    ],
  },
  {
    title: "Focused Remediation",
    code: "REMEDIATION",
    icon: Target,
    image: "/focused_remediation.png",
    summary:
      "Centrally manages remediation issues from audits, regulatory inspections, security assessments, and external assessments with configurable SLAs and automated expiry alerts.",
    lifecycle: ["Capture issues", "Assign ownership", "Track SLAs", "Close with evidence"],
    details:
      "Focused Remediation gives teams a single workspace to manage every issue surfaced through internal audits, regulatory inspections, security assessments, and external assessments. Findings from all sources are consolidated into one remediation queue with clear ownership, priority, and status tracking. Organizations configure SLA rules for issue remediation by severity, source, or framework, and the system sends automated notifications when issues are approaching expiry or become overdue—keeping teams accountable and audit-ready without manual follow-up.",
    capabilities: [
      "Centralized issue management across audit, regulatory, security, and external assessments",
      "Configurable remediation SLAs by severity, assessment type, or compliance framework",
      "Automated notifications for near-expiry and overdue issues",
      "End-to-end tracking from issue assignment through evidence-based closure",
    ],
  },
  {
    title: "Risk Incidents",
    code: "RISK_INCIDENT",
    icon: ShieldAlert,
    image: "/risk_incidents.png",
    summary:
      "Centralizes incident reporting, classification, assignment, investigation, remediation, and executive oversight.",
    lifecycle: ["Capture incidents", "Classify severity", "Assign responders", "Track closure"],
    details:
      "Risk Incidents provides end-to-end incident lifecycle management from initial report through investigation, remediation, and executive closure. Structured classification workflows ensure consistent severity scoring, while assignment rules route incidents to the right responders. Leadership dashboards give real-time visibility into open incidents, SLA adherence, and root-cause trends.",
    capabilities: [
      "Structured incident reporting with customizable intake forms",
      "Automated severity classification and escalation rules",
      "Investigation workflows with evidence attachment and timeline tracking",
      "Executive oversight dashboards with SLA and closure analytics",
    ],
  },
  {
    title: "Third Party Risk",
    code: "3RD_PARTY",
    icon: Handshake,
    image: "/third_party_risk.png",
    summary:
      "Manages vendor onboarding, contracts, assessments, risk prioritization, gap remediation, and continuous monitoring.",
    lifecycle: ["Onboard vendors", "Manage contracts", "Assess risk", "Monitor gaps"],
    details:
      "Third Party Risk extends your security posture beyond the corporate perimeter. Vendor onboarding captures critical supplier data, contract terms, and service dependencies. Risk assessments score third-party exposure, gap remediation tracks vendor corrective actions, and continuous monitoring alerts teams when a supplier's risk profile changes.",
    capabilities: [
      "Vendor onboarding with tiered risk classification",
      "Contract and SLA management with renewal tracking",
      "Questionnaire-based and automated vendor risk assessments",
      "Continuous monitoring with gap remediation workflows",
    ],
  },
  {
    title: "Threats",
    code: "THREAT",
    icon: TriangleAlert,
    image: "/threats.png",
    summary:
      "Combines threat registration, attack surface visibility, threat intelligence, and AI-assisted analysis for faster prioritization.",
    lifecycle: ["Register threats", "Enrich context", "Analyze impact", "Treat exposure"],
    details:
      "The Threats module combines internal threat registration with external intelligence feeds and attack surface visibility. AI-assisted analysis correlates threat actors, indicators of compromise, and affected assets to accelerate prioritization. Teams can trace impact paths from a registered threat through to specific vulnerabilities and controls that need attention.",
    capabilities: [
      "Centralized threat register with actor and campaign tracking",
      "Attack surface visibility mapped to asset inventory",
      "Threat intelligence enrichment from external feed integrations",
      "AI-assisted impact analysis linking threats to assets and controls",
    ],
  },
  {
    title: "Vulnerability Operations",
    code: "VULNERABILITIES",
    icon: Activity,
    image: "/vulnerability_operations.png",
    summary:
      "Tracks vulnerabilities with CVE, CVSS, EPSS, exploit context, SLA aging, remediation queues, and program health analytics.",
    lifecycle: ["Register CVEs", "Prioritize by EPSS", "Manage queues", "Measure SLAs"],
    details:
      "Vulnerability Operations is the operational backbone for CVE management at scale. Each finding is enriched with CVSS, EPSS, exploit-in-the-wild context, and asset linkage. Remediation queues organize work by team and priority, while SLA aging analytics expose bottlenecks and program health metrics keep leadership informed on patch velocity and exposure trends.",
    capabilities: [
      "CVE tracking with CVSS, EPSS, and exploit context enrichment",
      "Priority queues organized by team, severity, and SLA status",
      "SLA aging dashboards with breach alerting",
      "Program health analytics for patch velocity and exposure trends",
    ],
  },
  {
    title: "Vulnerability Scanner",
    code: "VUL_SCANNING",
    icon: ScanSearch,
    image: "/vulnerability_scanner.png",
    summary:
      "Launches authorized web scans, reviews findings by severity, and pushes validated results into the vulnerability workflow.",
    lifecycle: ["Define targets", "Select scanner", "Test endpoints", "Export findings"],
    details:
      "The Vulnerability Scanner launches authorized web application scans against defined targets using integrated scanning engines. Findings are reviewed by severity with deduplication against existing CVE records, and validated results flow directly into the Vulnerability Operations workflow for prioritization and remediation tracking.",
    capabilities: [
      "Target scope definition with authorization controls",
      "Multi-engine scanner selection for web application testing",
      "Severity-based finding review with false-positive marking",
      "One-click export of validated findings into vulnerability workflows",
    ],
  },
  {
    title: "Governance Management",
    code: "IS_GOVERNANCE",
    icon: Building2,
    image: "/governance_management.png",
    summary:
      "Unifies governance KPIs, budgets, control assessments, document repositories, and AI-supported policy comparison.",
    lifecycle: ["Define KPIs", "Track performance", "Manage budgets", "Govern documents"],
    details:
      "Governance Management unifies the strategic layer of GRC—KPIs, budgets, control assessments, and document governance—into one workspace. Performance tracking against defined metrics gives boards and CISOs clear visibility, while AI-supported policy comparison accelerates document reviews and highlights regulatory alignment gaps.",
    capabilities: [
      "Governance KPI definition with performance tracking dashboards",
      "Security budget planning and spend-vs-risk analysis",
      "Control assessment scheduling with evidence collection",
      "Document repository with AI-powered policy comparison",
    ],
  },
  {
    title: "Human Risk",
    code: "HUMAN_RISK",
    icon: Users,
    image: "/human_risk.png",
    summary:
      "Quantifies user exposure using identity context, privilege impact, trust indicators, anomaly signals, and environmental risk.",
    lifecycle: ["Profile users", "Quantify exposure", "Detect anomalies", "Trigger controls"],
    details:
      "Human Risk quantifies the people dimension of cyber exposure. Identity context, privilege levels, trust indicators, and behavioral anomaly signals are combined into user-level risk scores. When exposure exceeds thresholds, automated controls—such as access reviews or training assignments—are triggered to reduce insider and credential-based risk.",
    capabilities: [
      "User risk profiling with identity and privilege context",
      "Trust scoring based on authentication patterns and device posture",
      "Anomaly detection for unusual access and data movement",
      "Automated control triggers for access reviews and training",
    ],
  },
  {
    title: "Compliance Management",
    code: "COMPLIANCE_MGMT",
    icon: FileCheck2,
    image: "/compliance_management.png",
    summary:
      "Selects frameworks, maps requirements, runs assessments, produces gap registers, and suggests remediation plans.",
    lifecycle: ["Select framework", "Map requirements", "Assess compliance", "Plan remediation"],
    details:
      "Compliance Management streamlines the path from framework selection to audit readiness. Requirements are mapped to controls and evidence sources, assessments run on configurable schedules, and gap registers highlight areas needing attention. AI-suggested remediation plans accelerate closure of compliance deficiencies before audit deadlines.",
    capabilities: [
      "Multi-framework support including ISO 27001, SOC 2, NIST, and GDPR",
      "Requirement-to-control mapping with evidence linking",
      "Scheduled compliance assessments with scoring and trend tracking",
      "Gap registers with AI-generated remediation plan suggestions",
    ],
  },
  {
    title: "Asset Management",
    code: "ASSET_MGMT",
    icon: Network,
    image: "/asset_management.png",
    summary:
      "Ingests assets through API, ETL, or entry, then scores risk using business value, data classification, CIA impact, and exposure data.",
    lifecycle: ["Ingest assets", "Analyze risk", "Maintain register", "Score exposure"],
    details:
      "Asset Management maintains a living register of every technology asset in the enterprise. Ingestion via API, ETL pipelines, or manual entry keeps inventory current. Observeri GRC continuously assesses asset risk exposure by correlating business value, data classification, CIA impact, vulnerability findings, threat activity, and control coverage in real time. As patching and remediation work closes vulnerabilities, asset risk scores update automatically to reflect reduced exposure—giving teams an always-current view of which assets are improving and which still carry the highest residual risk.",
    capabilities: [
      "Continuous asset risk exposure scoring driven by live vulnerability and threat data",
      "Automatic risk score recalculation when patches and remediations are applied",
      "Multi-channel asset ingestion via API, ETL, and manual entry",
      "Before-and-after exposure tracking to measure remediation impact per asset",
    ],
  },
  {
    title: "Policy Management",
    code: "POLICY_MGMT",
    icon: FileText,
    image: "/policy_management.png",
    summary:
      "Generates framework-aligned policies, compares documents against regulations, identifies gaps, and builds compliance reports.",
    lifecycle: ["Upload documents", "Generate policies", "Compare compliance", "Report gaps"],
    details:
      "Policy Management accelerates document governance with AI-generated, framework-aligned policies. Uploaded documents are compared against regulatory requirements to identify gaps, and compliance reports summarize alignment status for auditors and leadership. Version control and approval workflows keep policy libraries current and auditable.",
    capabilities: [
      "AI-generated policies aligned to selected compliance frameworks",
      "Document upload with automated regulatory gap analysis",
      "Side-by-side policy comparison against framework requirements",
      "Compliance reporting with gap summaries for audit preparation",
    ],
  },
  {
    title: "Executive Dashboards",
    code: "DASHBOARDS",
    icon: LayoutDashboard,
    image: "/executive_dashboards.png",
    summary:
      "Surfaces live metrics for high-risk assets, human risk exposure, heat maps, SLA monitoring, and predictive risk to drive investment and remediation decisions.",
    lifecycle: ["Identify high-risk assets", "Prioritize investments", "Allocate resources", "Plan remediation"],
    details:
      "Executive Dashboards translate operational risk data into board-ready visualizations that leadership can act on immediately. High-risk asset management views highlight the assets carrying the greatest exposure, business impact, and remediation gaps—giving executives the clarity to make better decisions on security investments, allocate resources to the areas that need them most, and create targeted remediation plans with measurable risk reduction outcomes. Live metrics also cover asset risk trees, human risk exposure, heat maps, SLA performance, and predictive risk forecasts, so CISOs, CIOs, and board members can drill from strategic overview to operational detail in a single view.",
    capabilities: [
      "High-risk asset dashboards for investment prioritization and resource allocation",
      "Remediation plan views linked to asset exposure and expected risk reduction",
      "Live asset risk tree visualizations with drill-down capability",
      "Predictive risk widgets and SLA monitoring for leadership briefings",
    ],
  },
];

export const featureOutcomes = [
  { value: "80%", label: "Risk reduction", detail: "Targeted remediation removes the highest exposure first." },
  { value: "60%", label: "Process automation", detail: "Evidence, assessment, reporting, and routing work move out of spreadsheets." },
  { value: "3,000+", label: "Mapped controls", detail: "Pre-mapped libraries across security, compliance, cloud, and governance." },
  { value: "80+", label: "Dashboards", detail: "Operational and executive views for risk, compliance, assets, SLAs, and incidents." },
];
