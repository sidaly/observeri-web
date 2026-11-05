import {
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  Landmark,
  Scale,
  ShieldAlert,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type BudgetManagementStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export const budgetManagementIcon = Wallet;

export const budgetManagementHero = {
  eyebrow: "Budget Management",
  heroPills: [
    { label: "Every dollar tied to risk or compliance", icon: Wallet },
    { label: "Cost of impact", icon: ShieldAlert },
    { label: "Cost of mitigation", icon: CircleDollarSign },
    { label: "Board investment decision", icon: Landmark },
  ],
  outcomes: [
    { value: "Risk", label: "Drives the dollar" },
    { value: "Compliance", label: "Drives the dollar" },
    { value: "Board", label: "Compares the two costs" },
  ],
};

export const budgetManagementProblem = {
  eyebrow: "Why it matters",
  title: "Spend is approved before anyone prices the impact",
  painPoints: [
    {
      title: "The budget follows last year's lines",
      description:
        "Investment is renewed as a programme, not because a risk or a compliance obligation still needs the dollar.",
      icon: Wallet,
    },
    {
      title: "Impact and mitigation sit in different packs",
      description:
        "The loss if nothing is done, and the cost of the control that would reduce it, are never on the same page for the board.",
      icon: Scale,
    },
    {
      title: "Compliance spend is a checkbox",
      description:
        "An obligation is funded because it is due, without a stated cost of impact or a stated cost of mitigation.",
      icon: FileCheck2,
    },
    {
      title: "A declined dollar disappears",
      description:
        "When the board says no, the impact that remains is not kept beside the decision that left it open.",
      icon: ShieldAlert,
    },
  ],
};

export const budgetManagementApproach = {
  eyebrow: "The Observeri approach",
  title: "Price the impact, price the mitigation, then decide",
  items: [
    {
      title: "A dollar needs a driver",
      description:
        "Each investment is attached to a risk or a compliance obligation before it can be put to the board.",
      icon: Wallet,
    },
    {
      title: "Cost of impact",
      description:
        "State the loss, or the exposure from a missed obligation, if the investment is not made.",
      icon: ShieldAlert,
    },
    {
      title: "Cost of mitigation",
      description:
        "State what the control, project, or programme costs to reduce that impact.",
      icon: CircleDollarSign,
    },
    {
      title: "The board decides on the comparison",
      description:
        "Fund, defer, or accept, with both costs on the record and the residual impact kept if the dollar is not spent.",
      icon: Landmark,
    },
  ],
};

export const budgetManagementWorkflow: BudgetManagementStep[] = [
  {
    step: 1,
    title: "Tie the dollar to a driver",
    subtitle: "Risk or compliance",
    description:
      "Record the investment against the risk it reduces or the compliance obligation it closes. A request without that driver does not go forward.",
    icon: Wallet,
    signals: ["Investment", "Risk", "Obligation", "Owner"],
  },
  {
    step: 2,
    title: "State the cost of impact",
    subtitle: "What is left open",
    description:
      "Capture the expected loss, or the exposure if the obligation is missed, for the case where nothing is spent.",
    icon: ShieldAlert,
    signals: ["Expected loss", "Missed obligation", "Exposure", "Unfunded"],
  },
  {
    step: 3,
    title: "State the cost of mitigation",
    subtitle: "What the reduction costs",
    description:
      "Capture the cost of the control, project, or programme that would reduce the impact, including what it covers.",
    icon: CircleDollarSign,
    signals: ["Control", "Project", "Programme", "Cost"],
  },
  {
    step: 4,
    title: "Put both costs to the board",
    subtitle: "One comparison",
    description:
      "The board sees the cost of impact beside the cost of mitigation for that investment, not a line item on its own.",
    icon: Scale,
    signals: ["Impact", "Mitigation", "Side by side", "Board pack"],
  },
  {
    step: 5,
    title: "Record the decision",
    subtitle: "Fund, defer, or accept",
    description:
      "The board funds the investment, defers it, or accepts the impact. The decision stays on the same record as the two costs.",
    icon: Landmark,
    signals: ["Fund", "Defer", "Accept", "Decision"],
  },
  {
    step: 6,
    title: "Keep the residual in view",
    subtitle: "Spend and what remains",
    description:
      "Track what was spent against the decision, and keep the impact that remains when a dollar is deferred or the exposure is accepted.",
    icon: ClipboardCheck,
    signals: ["Spend", "Residual impact", "Deferred", "Accepted"],
  },
];

export const budgetManagementFeatures = [
  {
    title: "Risk-led investment",
    description: "Each dollar is attached to the risk it is meant to reduce before the board is asked to fund it.",
    icon: ShieldAlert,
  },
  {
    title: "Compliance-led investment",
    description: "Each dollar is attached to the obligation it closes, so compliance spend has the same record as risk spend.",
    icon: FileCheck2,
  },
  {
    title: "Cost of impact",
    description: "The loss or the missed-obligation exposure if the investment is not made.",
    icon: ShieldAlert,
  },
  {
    title: "Cost of mitigation",
    description: "The cost of the control, project, or programme that would reduce that impact.",
    icon: CircleDollarSign,
  },
  {
    title: "Board comparison",
    description: "Impact and mitigation are shown together, so the investment decision is made on that comparison.",
    icon: Scale,
  },
  {
    title: "Fund, defer, or accept",
    description: "The decision is recorded on the investment, with the residual impact kept when the dollar is not spent.",
    icon: Landmark,
  },
];

export const budgetManagementOutcomes = [
  {
    title: "The board decides from both costs",
    description: "Investment is approved, deferred, or accepted with the cost of impact and the cost of mitigation on the same record.",
  },
  {
    title: "A declined dollar stays visible",
    description: "When the board defers or accepts, the impact left open remains beside that decision.",
  },
  {
    title: "Risk and compliance share one case",
    description: "A control that reduces loss and a control that closes an obligation are funded from the same comparison.",
  },
];

export const budgetManagementCapabilities = [
  "Every investment dollar attached to a risk or a compliance obligation",
  "Cost of impact stated as the loss or exposure if nothing is spent",
  "Cost of mitigation stated as the cost of the control, project, or programme",
  "Board comparison of cost of impact and cost of mitigation on one record",
  "Decision recorded as fund, defer, or accept",
  "Residual impact kept when the investment is deferred or the exposure is accepted",
  "Spend tracked against the decision that released it",
];

export const budgetManagementStats = [
  { value: "Risk", label: "Or compliance" },
  { value: "Impact", label: "Cost if unfunded" },
  { value: "Mitigation", label: "Cost to reduce it" },
  { value: "Board", label: "Fund, defer, accept" },
];
