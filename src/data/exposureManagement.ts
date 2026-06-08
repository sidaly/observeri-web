import {
  AlertTriangle,
  Bot,
  ClipboardCheck,
  Clock,
  Globe,
  Layers,
  Radar,
  ScanSearch,
  ShieldAlert,
  Sparkles,
  Target,
  TriangleAlert,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ExpWorkflowStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export type ExpSubModule = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ExpBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ExpFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const expHero = {
  eyebrow: "Exposure Management",
  headline: "See your full exposure. Close it with precision.",
  subheadline:
    "Observeri Exposure Management unifies assessment planning, centralized issue tracking, a dedicated remediation hub, external attack surface visibility, and AI-powered threat analysis—so teams plan tests, prioritize findings, and reduce exposure from the perimeter to the core.",
  heroPills: [
    { label: "Assessment planning", icon: ClipboardCheck },
    { label: "Issues tracking & SLA", icon: Clock },
    { label: "Remediation hub", icon: Target },
    { label: "Attack surface management", icon: Globe },
    { label: "AI threat analysis", icon: Bot },
  ],
  outcomes: [
    { value: "360°", label: "Exposure visibility" },
    { value: "AI", label: "Threat & risk priority" },
    { value: "SLA", label: "Tracked remediation" },
  ],
};

export const expProblem = {
  eyebrow: "Why it matters",
  title: "Exposure is managed in fragments—not as a programme",
  painPoints: [
    {
      title: "Assessments planned in spreadsheets",
      description:
        "Security and risk assessments are scheduled manually with no tie to automated compliance testing—so coverage gaps appear only when auditors arrive.",
      icon: ClipboardCheck,
    },
    {
      title: "Issues scattered across tools",
      description:
        "Audit findings, security assessment results, and compliance deficiencies live in different systems—with no unified queue, risk priority, or SLA enforcement.",
      icon: Layers,
    },
    {
      title: "Remediation without a command center",
      description:
        "Fixes are tracked in email threads and ticket backlogs instead of a dedicated hub with ownership, evidence, and measurable closure against exposure reduction.",
      icon: Workflow,
    },
    {
      title: "External exposure stays invisible",
      description:
        "Attack surface changes—new subdomains, exposed services, misconfigurations—go undetected until threat actors or researchers find them first.",
      icon: Globe,
    },
  ],
};

export const expValueProp = {
  eyebrow: "What it is",
  title: "End-to-end exposure reduction from plan to proof",
  description:
    "Exposure Management is Observeri's operational layer for reducing cyber exposure across the enterprise. Five integrated sub-modules connect assessment planning and automated compliance testing to centralized issue tracking, SLA-driven prioritization, a dedicated remediation hub, external attack surface management, and AI analysis of emerging threats.",
  pillars: [
    { label: "Plan with automation", icon: ScanSearch },
    { label: "Track with priority", icon: AlertTriangle },
    { label: "Close with evidence", icon: Target },
  ],
};

export const expSubModules: ExpSubModule[] = [
  {
    title: "Assessment Planning",
    description:
      "Plan security and risk assessments on configurable schedules, trigger automated compliance control tests, and align assessment cadence to frameworks—ISO 27001, SOC 2, NIST, and more—without manual calendar management.",
    icon: ClipboardCheck,
  },
  {
    title: "Issues Hub",
    description:
      "Centralize audit, security, and compliance issues in one workspace with AI risk prioritization, configurable SLAs, aging alerts, and clear ownership—replacing fragmented finding trackers.",
    icon: ShieldAlert,
  },
  {
    title: "Remediation Hub",
    description:
      "A dedicated remediation command center to track fixes from assignment through evidence-based closure—linking every remediation to the exposure it reduces and the SLA it must meet.",
    icon: Target,
  },
  {
    title: "Attack Surface Management",
    description:
      "Discover and monitor your external attack surface—domains, subdomains, exposed services, and misconfigurations—with continuous visibility into what adversaries can see from outside your perimeter.",
    icon: Globe,
  },
  {
    title: "Threats Management",
    description:
      "Run AI-powered threat analysis on emerging threats, correlate actors and campaigns to your assets, and prioritize response based on what is actively targeting your industry and technology stack.",
    icon: TriangleAlert,
  },
];

export const expWorkflow: ExpWorkflowStep[] = [
  {
    step: 1,
    title: "Plan",
    subtitle: "Schedule assessments and automated compliance tests",
    description:
      "Define your security and risk assessment programme—framework scope, control test schedules, and assessment ownership. Observeri triggers automated compliance testing on cadence and routes results directly into the issues hub.",
    icon: ClipboardCheck,
    signals: ["Assessment scheduling", "Automated compliance control tests", "Framework-aligned scoping", "Evidence collection triggers"],
  },
  {
    step: 2,
    title: "Detect",
    subtitle: "Surface issues from every exposure channel",
    description:
      "Findings from audits, security assessments, compliance tests, attack surface scans, and threat intelligence flow into a centralized issues register—deduplicated, classified, and linked to affected assets.",
    icon: ScanSearch,
    signals: ["Audit & assessment findings", "Compliance test failures", "Attack surface discoveries", "Threat correlation alerts"],
  },
  {
    step: 3,
    title: "Prioritize",
    subtitle: "Rank by risk with AI and SLA rules",
    description:
      "AI risk prioritization scores every issue by business impact, exploitability, asset criticality, and threat context. Configurable SLAs set remediation deadlines by severity and source—with automated alerts when targets slip.",
    icon: Sparkles,
    signals: ["AI risk prioritization", "SLA configuration", "Near-breach & overdue alerts", "Crown-jewel asset weighting"],
  },
  {
    step: 4,
    title: "Remediate",
    subtitle: "Track fixes in the dedicated remediation hub",
    description:
      "The remediation hub assigns ownership, tracks progress against SLAs, collects closure evidence, and measures exposure reduction per fix—turning findings into accountable, auditable remediation programmes.",
    icon: Target,
    signals: ["Dedicated remediation queues", "Owner assignment", "Evidence-based closure", "Programme management"],
  },
  {
    step: 5,
    title: "Monitor",
    subtitle: "Watch attack surface and emerging threats",
    description:
      "Continuous external attack surface monitoring detects new exposure as it appears. AI threat analysis evaluates emerging threats against your asset inventory—keeping the exposure picture current between assessment cycles.",
    icon: Radar,
    signals: ["External ASM monitoring", "AI emerging threat analysis", "Exposure trend dashboards", "Continuous reassessment triggers"],
  },
];

export const expFeatures: ExpFeature[] = [
  {
    title: "Automated compliance testing",
    description:
      "Schedule and run automated control tests against your compliance frameworks—feeding failures directly into the issues hub with evidence attached.",
    icon: ClipboardCheck,
  },
  {
    title: "Unified issues register",
    description:
      "Audit, security assessment, compliance, and external findings consolidate into one prioritized queue—eliminating duplicate trackers and conflicting severities.",
    icon: ShieldAlert,
  },
  {
    title: "SLA-driven issue management",
    description:
      "Define remediation SLAs by severity, source, and framework. Track aging, send breach alerts, and expose SLA performance to leadership dashboards.",
    icon: Clock,
  },
  {
    title: "Dedicated remediation hub",
    description:
      "Manage every fix from triage to verified closure in a purpose-built workspace—with milestones, evidence, and linkage to exposure reduction metrics.",
    icon: Target,
  },
  {
    title: "External attack surface management",
    description:
      "Continuously discover and monitor externally visible assets, services, and misconfigurations—closing the gap between internal inventory and internet-facing reality.",
    icon: Globe,
  },
  {
    title: "AI emerging threat analysis",
    description:
      "Observeri AI analyzes threat feeds, actor campaigns, and industry-specific attack patterns—correlating emerging threats to your assets and prioritizing defensive response.",
    icon: Bot,
  },
];

export const expBenefits: ExpBenefit[] = [
  {
    title: "One programme for the full exposure lifecycle",
    description:
      "From assessment planning through remediation and continuous monitoring—teams work in a single exposure management programme instead of juggling disconnected tools and spreadsheets.",
    icon: Workflow,
  },
  {
    title: "Prioritize what reduces exposure fastest",
    description:
      "AI risk scoring and SLA enforcement ensure the highest-consequence audit, security, and compliance issues get remediated first—protecting crown-jewel assets under pressure.",
    icon: Sparkles,
  },
  {
    title: "Prove closure with evidence, not status updates",
    description:
      "The remediation hub requires verified evidence before closure—giving auditors and leadership defensible proof that exposure was actually reduced.",
    icon: Target,
  },
  {
    title: "See what attackers see before they act",
    description:
      "External attack surface management and AI threat analysis keep teams ahead of newly exposed services and emerging adversary activity—closing the outer layer of defence proactively.",
    icon: Globe,
  },
];

export const expOrgOutcomes = [
  {
    title: "Faster path from finding to verified fix",
    description:
      "Centralized issues, SLA tracking, and a dedicated remediation hub compress the time from discovery to evidence-based closure—without handoffs lost between audit, security, and ops teams.",
  },
  {
    title: "Assessment coverage you can defend",
    description:
      "Automated compliance testing and scheduled assessments produce a continuous evidence trail—so regulators and auditors see a programme that runs between formal review cycles.",
  },
  {
    title: "Exposure reduction leadership can measure",
    description:
      "Remediation hub metrics, SLA adherence, and attack surface trend data give CISOs and boards quantified proof of exposure reduction—not just ticket volume.",
  },
];

export const expCapabilities = [
  "Security and risk assessment planning with framework-aligned scoping and scheduling",
  "Automated compliance control testing with scheduled cadence and evidence capture",
  "Centralized audit, security, and compliance issues register with deduplication",
  "AI risk prioritization scoring by impact, exploitability, asset tier, and threat context",
  "Configurable remediation SLAs by severity, assessment type, and compliance framework",
  "SLA aging dashboards with near-breach and overdue automated notifications",
  "Dedicated remediation hub with ownership, milestones, and evidence-based closure",
  "External attack surface discovery and continuous monitoring of internet-facing assets",
  "Threat register with actor, campaign, and indicator tracking",
  "AI-powered emerging threat analysis correlated to asset inventory and industry context",
  "Integration with AI Risk Operations Center for live asset risk score updates",
  "Executive exposure dashboards combining issues, remediation, ASM, and threat posture",
];

export const expStats = [
  { value: "80%", label: "Faster issue prioritization" },
  { value: "5", label: "Integrated sub-modules" },
  { value: "100%", label: "SLA-tracked remediations" },
  { value: "24/7", label: "Attack surface monitoring" },
];
