import {
  BarChart3,
  Bot,
  Building2,
  ClipboardList,
  FileText,
  FolderKanban,
  Gauge,
  GitBranch,
  LineChart,
  RefreshCw,
  Scale,
  Settings,
  Sparkles,
  Target,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type GovWorkflowStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export type GovSubModule = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type GovBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type GovFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const govHero = {
  eyebrow: "Security Governance",
  headline: "Govern security with metrics, policies, budgets, and controlled change",
  subheadline:
    "Observeri Security Governance unifies KRI/KPI monitoring, policy management, AI budgeting, change management for security tools and processes, and dedicated project management—giving boards and CISOs one workspace to steer the security programme with evidence.",
  heroPills: [
    { label: "KRI / KPI monitoring", icon: LineChart },
    { label: "Policy management", icon: FileText },
    { label: "AI budgeting", icon: Wallet },
    { label: "Change management", icon: RefreshCw },
    { label: "Project management", icon: FolderKanban },
  ],
  outcomes: [
    { value: "Live", label: "KRI/KPI dashboards" },
    { value: "AI", label: "Budget optimization" },
    { value: "100%", label: "Governed change trail" },
  ],
};

export const govProblem = {
  eyebrow: "Why it matters",
  title: "Security governance still runs on decks, not data",
  painPoints: [
    {
      title: "KRIs and KPIs live in slide decks",
      description:
        "Governance metrics are rebuilt manually each quarter from scattered sources—so boards see lagging indicators, not live programme health.",
      icon: BarChart3,
    },
    {
      title: "Policies drift from reality",
      description:
        "Policy libraries age without systematic review, gap analysis against frameworks is manual, and teams cannot prove alignment when auditors ask.",
      icon: FileText,
    },
    {
      title: "Budgets disconnected from risk",
      description:
        "Security spend is allocated by history and politics—not by quantified exposure, expected risk reduction, or AI-informed investment scenarios.",
      icon: Wallet,
    },
    {
      title: "Tool and process changes go untracked",
      description:
        "New security tools, configuration shifts, and process updates happen without structured change management—creating governance gaps and audit findings.",
      icon: Settings,
    },
  ],
};

export const govValueProp = {
  eyebrow: "What it is",
  title: "The strategic control plane for your security programme",
  description:
    "Security Governance is Observeri's executive and operational layer for steering cyber security. Five integrated sub-modules—KRI/KPI monitoring, policy management, AI budgeting, change management, and project management—connect governance metrics to the tools, spend, and programmes that actually reduce risk.",
  pillars: [
    { label: "Measure what matters", icon: Gauge },
    { label: "Govern with evidence", icon: Scale },
    { label: "Invest with intelligence", icon: Sparkles },
  ],
};

export const govSubModules: GovSubModule[] = [
  {
    title: "KRI / KPI Monitoring",
    description:
      "Define governance key risk and performance indicators, track them on live dashboards, and alert leadership when metrics breach thresholds—replacing quarterly slide rebuilds with continuous programme visibility.",
    icon: LineChart,
  },
  {
    title: "Policy Management",
    description:
      "Generate framework-aligned policies with AI, compare documents against regulatory requirements, manage version control and approvals, and produce gap reports auditors can trust.",
    icon: FileText,
  },
  {
    title: "AI Budgeting",
    description:
      "Plan security budgets with AI-informed scenarios that tie spend to quantified risk reduction—comparing investment options by expected exposure collapse, not spreadsheet guesswork.",
    icon: Wallet,
  },
  {
    title: "Change Management",
    description:
      "Govern changes to security tools, configurations, and operational processes with structured intake, impact assessment, approval workflows, and a complete audit trail.",
    icon: RefreshCw,
  },
  {
    title: "Project Management",
    description:
      "Run dedicated security governance and improvement projects with milestones, ownership, dependencies, and linkage to KRI/KPI outcomes—so initiatives deliver measurable programme progress.",
    icon: FolderKanban,
  },
];

export const govWorkflow: GovWorkflowStep[] = [
  {
    step: 1,
    title: "Define",
    subtitle: "Set KRIs, KPIs, and policy baselines",
    description:
      "Establish the governance metrics that matter to your board and regulators, upload or generate policies aligned to your frameworks, and configure the indicators that will measure programme health going forward.",
    icon: ClipboardList,
    signals: ["KRI/KPI definition", "Policy library setup", "Framework alignment", "Threshold & target configuration"],
  },
  {
    step: 2,
    title: "Plan",
    subtitle: "Budget and project with AI guidance",
    description:
      "Use AI budgeting to model security investment scenarios against quantified risk outcomes, then stand up dedicated governance projects with clear milestones, owners, and expected KRI/KPI impact.",
    icon: Bot,
    signals: ["AI budget scenarios", "Spend-vs-risk analysis", "Project chartering", "Milestone planning"],
  },
  {
    step: 3,
    title: "Govern",
    subtitle: "Manage policies and controlled change",
    description:
      "Keep policies current with automated gap analysis and approval workflows. Route every change to security tools and processes through structured change management with impact assessment and sign-off.",
    icon: Scale,
    signals: ["Policy review cycles", "AI gap comparison", "Change intake & approval", "Configuration governance"],
  },
  {
    step: 4,
    title: "Monitor",
    subtitle: "Track live KRI/KPI performance",
    description:
      "Dashboards refresh as operational data flows in—patch velocity, control effectiveness, incident trends, compliance posture, and project progress—giving CISOs and boards a current view of programme health.",
    icon: LineChart,
    signals: ["Live KRI/KPI dashboards", "Threshold breach alerts", "Trend analysis", "Board-ready reporting"],
  },
  {
    step: 5,
    title: "Improve",
    subtitle: "Close the loop with projects and budget reallocation",
    description:
      "When metrics miss targets, launch improvement projects, reallocate budget through AI-informed recommendations, and update policies and change controls—creating a continuous governance improvement cycle.",
    icon: Target,
    signals: ["Improvement project triggers", "Budget reallocation", "Policy updates", "Governance cycle reporting"],
  },
];

export const govFeatures: GovFeature[] = [
  {
    title: "Live KRI/KPI dashboards",
    description:
      "Board and CISO dashboards track governance metrics continuously—incident rates, control effectiveness, remediation velocity, compliance scores, and custom KRIs you define.",
    icon: LineChart,
  },
  {
    title: "AI-powered policy lifecycle",
    description:
      "Generate, compare, and gap-analyze policies against ISO 27001, NIST, SOC 2, and other frameworks—with version control and approval workflows built in.",
    icon: FileText,
  },
  {
    title: "Risk-informed AI budgeting",
    description:
      "Model security spend scenarios with AI that connects investment options to expected risk reduction—helping CFOs and CISOs justify budgets with quantified outcomes.",
    icon: Wallet,
  },
  {
    title: "Security change management",
    description:
      "Structured workflows for changes to security tools, cloud configurations, access models, and operational processes—with impact assessment and full audit trails.",
    icon: RefreshCw,
  },
  {
    title: "Governance project management",
    description:
      "Dedicated project workspaces for security initiatives—with tasks, milestones, dependencies, and linkage to the KRI/KPI metrics they are designed to improve.",
    icon: FolderKanban,
  },
  {
    title: "Unified governance reporting",
    description:
      "Combine metrics, policy status, budget utilization, change records, and project progress into executive reports—replacing fragmented governance packs.",
    icon: BarChart3,
  },
];

export const govBenefits: GovBenefit[] = [
  {
    title: "Board-ready visibility without manual rebuilds",
    description:
      "KRIs and KPIs update from live platform data—so governance reporting reflects current programme health instead of stale quarterly snapshots assembled in PowerPoint.",
    icon: Gauge,
  },
  {
    title: "Policies that stay aligned to regulation",
    description:
      "AI comparison and scheduled review cycles keep policy libraries current—closing the gap between what is documented and what auditors and regulators expect.",
    icon: FileText,
  },
  {
    title: "Security budgets tied to risk outcomes",
    description:
      "AI budgeting connects spend decisions to quantified exposure reduction—so investment conversations shift from cost centers to measurable risk management.",
    icon: Wallet,
  },
  {
    title: "Controlled change with complete audit trails",
    description:
      "Every change to security tools and processes is documented, assessed, approved, and traceable—reducing governance gaps and strengthening audit defensibility.",
    icon: GitBranch,
  },
];

export const govOrgOutcomes = [
  {
    title: "Governance that runs every day, not once a quarter",
    description:
      "Continuous KRI/KPI monitoring, live policy status, and active project tracking mean governance is operational—not a periodic reporting exercise disconnected from SecOps reality.",
  },
  {
    title: "Faster, evidence-based board conversations",
    description:
      "CISOs walk into board meetings with current metrics, budget scenarios, and project progress—grounding strategic decisions in data instead of narrative alone.",
  },
  {
    title: "Programme improvements with accountable delivery",
    description:
      "Dedicated project management linked to governance metrics ensures security initiatives have owners, milestones, and measurable outcomes—not open-ended task lists.",
  },
];

export const govCapabilities = [
  "KRI and KPI definition with configurable thresholds, targets, and breach alerting",
  "Live governance dashboards fed by operational data across the Observeri platform",
  "AI-generated policies aligned to selected compliance and security frameworks",
  "Document upload with automated regulatory gap analysis and side-by-side comparison",
  "Policy version control, approval workflows, and audit-ready change history",
  "AI budgeting with spend-vs-risk scenarios and investment optimization recommendations",
  "Change management workflows for security tools, configurations, and processes",
  "Impact assessment and multi-stage approval routing for governed changes",
  "Dedicated security project management with milestones, tasks, and dependencies",
  "Project-to-KRI/KPI linkage for measurable governance improvement tracking",
  "Executive governance reporting combining metrics, policies, budgets, and projects",
];

export const govStats = [
  { value: "80+", label: "Governance dashboards" },
  { value: "5", label: "Integrated sub-modules" },
  { value: "AI", label: "Budget & policy intelligence" },
  { value: "24/7", label: "KRI/KPI monitoring" },
];
