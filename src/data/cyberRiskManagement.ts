import {
  BarChart3,
  Bot,
  ClipboardList,
  FileBarChart,
  GitBranch,
  Layers,
  Link2,
  Radar,
  RefreshCw,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type CrmWorkflowStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export type CrmPainPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CrmSmartWay = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CrmFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const crmHero = {
  eyebrow: "Cyber Risk Management",
  headline: "Act on the risk that matters most",
  subheadline:
    "Observeri GRC connects risks to live controls, assets, and signals—updates scores as your security posture changes, and gives you a clear view of what to tackle next.",
  heroPills: [
    { label: "Audit-ready reporting", icon: FileBarChart },
    { label: "Autonomous control mapping", icon: Link2 },
    { label: "Guided risk program setup", icon: ClipboardList },
    { label: "Autonomous risk monitoring", icon: Radar },
    { label: "Smart risk remediation", icon: Target },
  ],
  outcomes: [
    { value: "FAIR", label: "Risk quantification" },
    { value: "Live", label: "Heatmap scoring" },
    { value: "AI", label: "Prioritization engine" },
  ],
};

export const crmProblem = {
  eyebrow: "Why it matters",
  title: "Why managing risk still feels like guesswork",
  painPoints: [
    {
      title: "Risk registers stay disconnected",
      description:
        "Risks sit in spreadsheets while activity lives in tools, systems, and audits—so your register falls behind reality.",
      icon: ClipboardList,
    },
    {
      title: "Scores drift from reality",
      description:
        "Controls change, checks fail, incidents occur, but impact and likelihood rarely update with what is actually happening.",
      icon: RefreshCw,
    },
    {
      title: "Plans do not turn into action",
      description:
        "Remediation lives in documents with no clear owner, no tracking, and no connection to monitored controls.",
      icon: Workflow,
    },
    {
      title: "Reports lag behind the moment",
      description:
        "By the time you rebuild heatmaps and decks, the risk picture inside the business has already moved on.",
      icon: BarChart3,
    },
  ],
};

export const crmSmartWay = {
  eyebrow: "The Observeri approach",
  title: "Run risk the smart way with Observeri GRC",
  items: [
    {
      title: "A live, connected risk register",
      description:
        "Tie every type of risk to real controls and checks so your view reflects what is actually happening across the enterprise.",
      icon: Layers,
    },
    {
      title: "Risks linked to what you actually run",
      description:
        "Map every risk scenario to controls and automated checks so posture stays aligned with real control health.",
      icon: Link2,
    },
    {
      title: "AI that makes risk easier to act on",
      description:
        "Observeri AI reads live signals, highlights what changed, and helps teams move faster on the risks that matter most.",
      icon: Bot,
    },
    {
      title: "A risk picture that updates itself",
      description:
        "As controls and checks run, Observeri keeps scores and heatmaps current—so you know what to watch next.",
      icon: TrendingUp,
    },
  ],
};

export const crmWorkflow: CrmWorkflowStep[] = [
  {
    step: 1,
    title: "Shape how you see risk",
    subtitle: "Configure risk types, scoring, and approvals",
    description:
      "Set up risk types, categories, custom fields, scoring formulas, and approval workflows so Observeri matches how your organization already thinks and talks about risk.",
    icon: ClipboardList,
    signals: ["Risk taxonomy setup", "Custom scoring formulas", "Approval routing", "Framework alignment (ISO, NIST, FAIR)"],
  },
  {
    step: 2,
    title: "Bring in what you already have",
    subtitle: "Import registers without losing context",
    description:
      "Import existing risk registers from spreadsheets or legacy tools and group risks into one or many views—without losing historical context or ownership.",
    icon: GitBranch,
    signals: ["Spreadsheet import", "Legacy GRC migration", "Multi-view grouping", "Owner assignment"],
  },
  {
    step: 3,
    title: "Connect to real controls and checks",
    subtitle: "Map risks to live control health",
    description:
      "Map every risk to the controls behind it and connect automated checks across cloud, identity, device, and code systems so scores stay aligned with what is actually happening.",
    icon: Link2,
    signals: ["Control-to-risk mapping", "Automated control checks", "Gap detection", "Real-time score recalculation"],
  },
  {
    step: 4,
    title: "Link assets where risk actually lives",
    subtitle: "See every connected asset in one view",
    description:
      "Attach vendors, findings, systems, devices, people, policies, and custom assets to each scenario—and see every linked asset and its details in a single operational view.",
    icon: Shield,
    signals: ["Asset linkage", "Vendor dependencies", "Vulnerability context", "People & policy mapping"],
  },
  {
    step: 5,
    title: "Monitor, treat, and sign off",
    subtitle: "Track inherent, residual, and effective risk",
    description:
      "Track inherent, residual, and effective risk; turn treatments into tasks; route them for approval; and share one clear, current picture with leaders and auditors whenever they ask.",
    icon: Target,
    signals: ["Inherent & residual scoring", "Treatment task workflows", "Accept-risk inventory", "Executive heatmaps"],
  },
];

export const crmFeatures: CrmFeature[] = [
  {
    title: "Audit-ready reporting",
    description:
      "Create clear risk summaries and heatmaps for leadership or auditors in minutes—not weeks of spreadsheet work.",
    icon: FileBarChart,
  },
  {
    title: "Autonomous control mapping",
    description:
      "Connect risks to controls and systems so status changes and failed checks flow straight into updated scores.",
    icon: Link2,
  },
  {
    title: "Guided risk program setup",
    description:
      "Import your existing register or start fresh, then shape categories, fields, and scoring so Observeri mirrors how you manage risk.",
    icon: ClipboardList,
  },
  {
    title: "Autonomous risk monitoring",
    description:
      "Track impact, likelihood, trends, and treatments in real time so priorities stay clear as things change.",
    icon: Radar,
  },
  {
    title: "Workflow automation and approvals",
    description:
      "Route reviews to the right owners, capture decisions, and keep every action traceable without manual coordination.",
    icon: Workflow,
  },
  {
    title: "Smart risk remediation",
    description:
      "Spot emerging risks early and get AI-focused recommendations so teams know what to address and where to start.",
    icon: Sparkles,
  },
];

export const crmLiveOutcomes = [
  {
    title: "Decisions stay grounded in today",
    description:
      "Teams see current heatmaps, impact, and treatment status instead of old decks—so budget and attention move to the risks that matter now.",
  },
  {
    title: "Issues move faster from seen to solved",
    description:
      "Risks flow from identification to scoring, approval, and tasks in a single path—so gaps close without weeks lost in handoffs.",
  },
  {
    title: "Trust becomes easy to show",
    description:
      "Each risk is tied to controls, assets, and live monitoring—so auditors and partners see a program that runs every day, not just at reporting time.",
  },
];

export const crmCapabilities = [
  "Unified risk register connected to controls, assets, and compliance frameworks",
  "Framework-selectable assessments including ISO 27001, NIST CSF, and FAIR risk quantification",
  "AI-assisted risk prioritization with predictive incident likelihood scoring",
  "Accept-risk inventory with approval workflows, compensating controls, and expiry tracking",
  "Automated evidence collection linked to control tests and assessment outcomes",
  "Executive heatmaps and board-ready risk dashboards with drill-down capability",
  "Focused remediation integration for treatment tasks with SLA tracking",
  "Continuous risk score recalculation as vulnerabilities, threats, and controls change",
];

export const crmStats = [
  { value: "80%", label: "Risk reduction targeting" },
  { value: "60%", label: "Process automation" },
  { value: "3,000+", label: "Mapped controls" },
  { value: "80+", label: "Risk dashboards" },
];
