import {
  Activity,
  ClipboardCheck,
  Gauge,
  LineChart,
  Scale,
  ShieldAlert,
  Siren,
  Target,
  type LucideIcon,
} from "lucide-react";

export type OperationalRiskStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export const operationalRiskIcon = Gauge;

export const operationalRiskHero = {
  eyebrow: "Operational Risk",
  heroPills: [
    { label: "End-to-end risk assessment", icon: ShieldAlert },
    { label: "RCSA", icon: ClipboardCheck },
    { label: "Live KRIs on each risk", icon: Activity },
    { label: "Pillar 1 and Pillar 2 capital", icon: Scale },
  ],
  outcomes: [
    { value: "RCSA", label: "Self-assessment" },
    { value: "KRIs", label: "Mapped to risk" },
    { value: "P1 / P2", label: "Capital view" },
  ],
};

export const operationalRiskProblem = {
  eyebrow: "Why it matters",
  title: "Operational risk is assessed once and then left behind",
  painPoints: [
    {
      title: "RCSA sits in a workshop pack",
      description:
        "Inherent risk, controls, and residual risk are scored in a session, then the register does not change until the next cycle.",
      icon: ClipboardCheck,
    },
    {
      title: "KRIs are not tied to a risk",
      description:
        "Indicators move on a dashboard while the risk they were meant to warn about stays at last quarter's rating.",
      icon: Activity,
    },
    {
      title: "Losses and capital are separate books",
      description:
        "Loss events are logged for finance. Capital and the risk register never see the same event.",
      icon: LineChart,
    },
    {
      title: "Capital is a number without a test",
      description:
        "Pillar 1 and Pillar 2 figures are produced, then nobody checks them against the losses that actually occurred.",
      icon: Scale,
    },
  ],
};

export const operationalRiskApproach = {
  eyebrow: "The Observeri approach",
  title: "Assess, indicate, quantify, and test on one risk",
  items: [
    {
      title: "Assessment through to treatment",
      description:
        "Identify the operational risk, score inherent and residual exposure, and keep the treatment on the same record as the business unit that owns it.",
      icon: ShieldAlert,
    },
    {
      title: "RCSA that stays current",
      description:
        "Business units assess risks and controls, and the residual result updates the register instead of waiting for the next workshop.",
      icon: ClipboardCheck,
    },
    {
      title: "KRIs mapped to the risk",
      description:
        "Each indicator is attached to a risk. When the KRI crosses a threshold, that risk shows the breach, not a separate chart.",
      icon: Activity,
    },
    {
      title: "Capital with a back-test",
      description:
        "Monitor operational capital on a Pillar 1 minimum view and a Pillar 2 internal view, then compare both with recorded loss events.",
      icon: Scale,
    },
  ],
};

export const operationalRiskWorkflow: OperationalRiskStep[] = [
  {
    step: 1,
    title: "Assess the risk",
    subtitle: "End to end, on one record",
    description:
      "Capture the operational risk, the business unit, the inherent score, the residual score, and where it sits against appetite: within appetite, tolerable, above appetite, or unacceptable.",
    icon: ShieldAlert,
    signals: ["Business unit", "Inherent", "Residual", "Appetite"],
  },
  {
    step: 2,
    title: "Run the RCSA",
    subtitle: "Risk and control self-assessment",
    description:
      "The owning unit assesses the risk and the controls that reduce it. Control gaps and the residual result stay on the risk, ready for the next review.",
    icon: ClipboardCheck,
    signals: ["Owning unit", "Controls", "Gaps", "Residual result"],
  },
  {
    step: 3,
    title: "Map the KRIs",
    subtitle: "Live indicators on the risk",
    description:
      "Attach key risk indicators to the risk they describe. Threshold breaches update that risk as the indicator moves, rather than waiting for the next assessment.",
    icon: Activity,
    signals: ["Indicator", "Threshold", "Breach", "Linked risk"],
  },
  {
    step: 4,
    title: "Track loss events",
    subtitle: "What actually happened",
    description:
      "Record operational loss events against the risk, the business unit, and the category, and keep them available for capital monitoring and back-testing.",
    icon: Siren,
    signals: ["Loss event", "Amount", "Category", "Linked risk"],
  },
  {
    step: 5,
    title: "Quantify capital",
    subtitle: "Pillar 1 and Pillar 2",
    description:
      "Hold a Pillar 1 view of minimum operational-risk capital and a Pillar 2 view of the capital the firm assesses for its own risk profile and appetite. Pillar 2 can sit above the Pillar 1 minimum.",
    icon: Scale,
    signals: ["Pillar 1 minimum", "Pillar 2 internal", "Appetite", "Business unit"],
  },
  {
    step: 6,
    title: "Monitor operational capital",
    subtitle: "Capital against the live book",
    description:
      "Watch operational capital as assessments, KRIs, and loss events change, by risk and by the business units that carry the exposure.",
    icon: Gauge,
    signals: ["Capital", "Business unit", "Movement", "Appetite"],
  },
  {
    step: 7,
    title: "Back-test the estimate",
    subtitle: "Capital compared with losses",
    description:
      "Compare the capital view with the loss events that occurred, so a Pillar 1 or Pillar 2 figure is checked against experience instead of left untested.",
    icon: LineChart,
    signals: ["Estimate", "Actual losses", "Gap", "Review"],
  },
];

export const operationalRiskFeatures = [
  {
    title: "End-to-end risk assessment",
    description: "Inherent score, residual score, appetite position, owner, and business unit on every operational risk.",
    icon: ShieldAlert,
  },
  {
    title: "RCSA",
    description: "Business units assess risks and controls, and the residual result updates the register from that assessment.",
    icon: ClipboardCheck,
  },
  {
    title: "KRIs mapped to risk",
    description: "Live key risk indicators attached to the risk they describe, with threshold breaches shown on that risk.",
    icon: Activity,
  },
  {
    title: "Loss events",
    description: "Operational losses tracked and monitored against the risk, the business unit, and the loss category.",
    icon: Siren,
  },
  {
    title: "Pillar 1 quantification",
    description: "A minimum operational-risk capital view, held beside the risks and losses that sit underneath it.",
    icon: Scale,
  },
  {
    title: "Pillar 2 quantification",
    description: "An internal capital view against the firm's own risk profile and appetite, which can exceed the Pillar 1 minimum.",
    icon: Target,
  },
  {
    title: "Back-testing",
    description: "Capital estimates compared with recorded loss events, so the quantification is tested against what happened.",
    icon: LineChart,
  },
  {
    title: "Operational capital monitoring",
    description: "Capital watched as KRIs, assessments, and losses move, including which business units carry the highest exposure.",
    icon: Gauge,
  },
];

export const operationalRiskOutcomes = [
  {
    title: "Appetite is visible by risk",
    description: "Leaders see which risks are within appetite, tolerable, above appetite, or unacceptable, and which business units carry them.",
  },
  {
    title: "A KRI moves the risk",
    description: "An indicator breach shows on the risk it is mapped to, so monitoring is not a chart that nobody connects to the register.",
  },
  {
    title: "Capital has a loss history",
    description: "Pillar 1 and Pillar 2 figures sit next to the loss events used to back-test them.",
  },
];

export const operationalRiskCapabilities = [
  "End-to-end operational risk assessment with inherent, residual, and appetite position",
  "RCSA by the business unit that owns the risk and its controls",
  "Real-time KRIs mapped to the risk, with threshold breaches on that record",
  "Loss event tracking and monitoring, linked to risk and business unit",
  "Pillar 1 minimum operational-risk capital view",
  "Pillar 2 internal capital view against the firm's risk profile and appetite",
  "Back-testing of capital estimates against recorded loss events",
  "Operational capital monitoring as assessments, KRIs, and losses change",
];

export const operationalRiskStats = [
  { value: "RCSA", label: "Risk and control" },
  { value: "KRI", label: "On the risk" },
  { value: "P1", label: "Minimum capital" },
  { value: "P2", label: "Internal capital" },
];
