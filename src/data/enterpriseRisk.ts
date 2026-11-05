import {
  Bell,
  FileBarChart,
  GitBranch,
  LayoutGrid,
  Radio,
  Scale,
  ShieldAlert,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type EnterpriseRiskStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export const enterpriseRiskIcon = LayoutGrid;

export const enterpriseRiskHero = {
  eyebrow: "Enterprise Risk",
  heroPills: [
    { label: "Global risk index", icon: LayoutGrid },
    { label: "Taxonomy, appetite, and limits", icon: Scale },
    { label: "Breach response by design", icon: Bell },
    { label: "Live war rooms", icon: Radio },
  ],
  outcomes: [
    { value: "Index", label: "All domains" },
    { value: "Board", label: "Ready packs" },
    { value: "Live", label: "War rooms" },
  ],
};

export const enterpriseRiskProblem = {
  eyebrow: "Why it matters",
  title: "The board sees nine conversations and no index",
  painPoints: [
    {
      title: "Domains never meet",
      description:
        "Cyber, financial, operational, compliance, and the rest each report a score. Nothing adds them into one enterprise position.",
      icon: LayoutGrid,
    },
    {
      title: "Taxonomy is a slide",
      description:
        "Appetite, the matrix, and limits are redefined in every committee. A breach has no designed response.",
      icon: Scale,
    },
    {
      title: "A critical risk has no room",
      description:
        "When a risk turns critical, people open email. There is no live place to watch that risk until it moves.",
      icon: Radio,
    },
    {
      title: "The board pack is assembled late",
      description:
        "Integrated patterns across audit, cyber, and finance are written the night before the meeting.",
      icon: FileBarChart,
    },
  ],
};

export const enterpriseRiskApproach = {
  eyebrow: "The Observeri approach",
  title: "Every domain augments one global risk index",
  items: [
    {
      title: "One index from every domain",
      description:
        "Cyber, financial, reputational, operational, compliance, AI, geopolitical, supply chain, and ESG and technology each contribute. Together they are the global risk index.",
      icon: LayoutGrid,
    },
    {
      title: "The enterprise sets the rules",
      description:
        "Taxonomy, risk matrix, appetite, limits, enterprise KRIs, and workflows are defined once and applied to every domain.",
      icon: Scale,
    },
    {
      title: "A breach already has a design",
      description:
        "Each threshold carries the response designed for that breach: the workflow, the owner, and whether a war room opens.",
      icon: Bell,
    },
    {
      title: "Critical risks are watched live",
      description:
        "A war room stays on a critical risk in real time. The same view feeds the board-ready pack.",
      icon: Radio,
    },
  ],
};

export const enterpriseRiskWorkflow: EnterpriseRiskStep[] = [
  {
    step: 1,
    title: "Define the taxonomy",
    subtitle: "The enterprise language for risk",
    description:
      "Set the risk taxonomy the whole organisation uses, so cyber, financial, operational, and the other domains are classified the same way.",
    icon: GitBranch,
    signals: ["Taxonomy", "Domain", "Owner", "Shared language"],
  },
  {
    step: 2,
    title: "Set appetite, matrix, and limits",
    subtitle: "What the enterprise will accept",
    description:
      "Define risk appetite, the risk matrix, and the limits. A risk is placed on the matrix and tested against the limit for its place in the taxonomy.",
    icon: Scale,
    signals: ["Appetite", "Matrix", "Limit", "Threshold"],
  },
  {
    step: 3,
    title: "Roll up the global index",
    subtitle: "Every domain augments the index",
    description:
      "Each domain contributes its open risks and direction. The global risk index is that combined position, not a separate score written for the board.",
    icon: LayoutGrid,
    signals: ["Domain score", "Direction", "Open risks", "Global index"],
  },
  {
    step: 4,
    title: "Watch enterprise KRIs",
    subtitle: "Indicators on the index",
    description:
      "Enterprise KRIs sit on the taxonomy. When an indicator moves, the domain and the global index show it.",
    icon: ShieldAlert,
    signals: ["Enterprise KRI", "Threshold", "Domain", "Index"],
  },
  {
    step: 5,
    title: "Run the designed breach",
    subtitle: "The response is already specified",
    description:
      "Each threshold has a designed response. On breach, that workflow starts: owner, escalation, and the risk response the enterprise chose for that case.",
    icon: Workflow,
    signals: ["Threshold", "Designed response", "Workflow", "Owner"],
  },
  {
    step: 6,
    title: "Open the war room",
    subtitle: "Real time on a critical risk",
    description:
      "A critical risk opens a war room. The room stays on that risk, with the domains, indicators, and actions that are moving it.",
    icon: Radio,
    signals: ["Critical risk", "Live room", "Actions", "Domains"],
  },
  {
    step: 7,
    title: "Issue the board pack",
    subtitle: "The index, ready to read",
    description:
      "Board-ready packs take the global index, the domain heatmap, and the patterns that cross domains, including what internal audit is already seeing.",
    icon: FileBarChart,
    signals: ["Board pack", "Heatmap", "Cross-domain pattern", "Audit view"],
  },
];

export const enterpriseRiskFeatures = [
  {
    title: "Global risk index",
    description: "Every risk domain augments one index, with direction and open risks visible by domain.",
    icon: LayoutGrid,
  },
  {
    title: "Risk taxonomy",
    description: "The classification the enterprise defines, shared by cyber, financial, operational, and the other domains.",
    icon: GitBranch,
  },
  {
    title: "Thresholds and breach design",
    description: "Each threshold carries the response designed for that breach, including who acts and which workflow starts.",
    icon: Bell,
  },
  {
    title: "Enterprise KRIs",
    description: "Indicators defined for the enterprise and mapped onto the taxonomy and the index.",
    icon: ShieldAlert,
  },
  {
    title: "Risk appetite",
    description: "Appetite set by the enterprise and applied when a domain or a risk is placed.",
    icon: Scale,
  },
  {
    title: "Workflows",
    description: "The paths the enterprise designs for assessment, breach, escalation, and response.",
    icon: Workflow,
  },
  {
    title: "Risk matrix and limits",
    description: "The matrix and the limits the enterprise sets, used to place and test each risk.",
    icon: Scale,
  },
  {
    title: "Board-ready packs",
    description: "The index, the domain heatmap, and cross-domain patterns assembled for the board.",
    icon: FileBarChart,
  },
  {
    title: "Risk response",
    description: "The response chosen for the risk, kept on the record from the breach through to closure.",
    icon: Workflow,
  },
  {
    title: "Real-time war rooms",
    description: "A live room on a critical risk, so that risk is monitored until it is no longer critical.",
    icon: Radio,
  },
];

export const enterpriseRiskOutcomes = [
  {
    title: "The board sees one index",
    description: "Domains still have their own position. The global risk index is what they add up to.",
  },
  {
    title: "A breach is not improvised",
    description: "The threshold already holds the workflow, the owner, and the response designed for that breach.",
  },
  {
    title: "A critical risk has a room",
    description: "The war room stays on that risk in real time, and the same picture can go into the board pack.",
  },
];

export const enterpriseRiskCapabilities = [
  "Global risk index augmented by every risk domain",
  "Enterprise-defined risk taxonomy",
  "Risk thresholds with the response designed for each breach",
  "Enterprise KRIs mapped to the taxonomy and the index",
  "Risk appetite, risk matrix, and risk limits set by the enterprise",
  "Workflows for assessment, breach, escalation, and response",
  "Board-ready packs from the index, the heatmap, and cross-domain patterns",
  "Real-time war rooms to monitor a critical risk",
];

export const enterpriseRiskStats = [
  { value: "1", label: "Global risk index" },
  { value: "9", label: "Domains on the heatmap" },
  { value: "Live", label: "War rooms" },
  { value: "Board", label: "Ready packs" },
];
