import {
  Bell,
  Droplets,
  Landmark,
  LineChart,
  Scale,
  ShieldAlert,
  Siren,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type FinancialRiskStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export const financialRiskIcon = Landmark;

export const financialRiskHero = {
  eyebrow: "Financial Risk",
  heroPills: [
    { label: "Capital, market, and liquidity", icon: Landmark },
    { label: "Limits the organisation sets", icon: Scale },
    { label: "Early warning before breach", icon: Bell },
    { label: "Regulatory capital impact", icon: Wallet },
  ],
  outcomes: [
    { value: "Limits", label: "Organisation defined" },
    { value: "Warn", label: "Before a breach" },
    { value: "Capital", label: "Regulatory impact" },
  ],
};

export const financialRiskProblem = {
  eyebrow: "Why it matters",
  title: "A limit is breached before capital is in the conversation",
  painPoints: [
    {
      title: "Capital, market, and liquidity sit apart",
      description:
        "Treasury, markets, and finance each keep a book. Nobody sees one position against the limits the organisation actually set.",
      icon: Landmark,
    },
    {
      title: "A reading has no threshold",
      description:
        "NSFR, funding concentration, and trading-book VaR are reported as numbers, not as utilisation against a limit.",
      icon: LineChart,
    },
    {
      title: "Warning arrives as a breach",
      description:
        "The first signal is that a limit is already broken. There is no early-warning band and no path to the person who must act.",
      icon: Bell,
    },
    {
      title: "Capital impact is reconstructed later",
      description:
        "Regulatory capital is explained after the breach, from a spreadsheet that was not attached to the limit.",
      icon: Wallet,
    },
  ],
};

export const financialRiskApproach = {
  eyebrow: "The Observeri approach",
  title: "Test every financial risk against the limit that governs it",
  items: [
    {
      title: "One register for the financial book",
      description:
        "Capital, market, liquidity, and credit risks share one taxonomy, one appetite, and one place to see the position.",
      icon: Landmark,
    },
    {
      title: "Limits the organisation defines",
      description:
        "Each limit has a threshold, the risk it applies to, and a reading. Utilisation is the reading against that threshold, not a separate report.",
      icon: Scale,
    },
    {
      title: "Early warning, then breach",
      description:
        "A position can be within limit, in early warning, or breached. The status changes as the reading moves.",
      icon: Bell,
    },
    {
      title: "Regulatory capital on the same limit",
      description:
        "When a limit warns or breaches, the regulatory capital impact stays on that record, with the escalation path already named.",
      icon: Wallet,
    },
  ],
};

export const financialRiskWorkflow: FinancialRiskStep[] = [
  {
    step: 1,
    title: "Register the risk",
    subtitle: "Capital, market, liquidity, and credit",
    description:
      "Bring capital, market, liquidity, and credit risks onto one register, scored on the shared taxonomy and the organisation's appetite.",
    icon: Landmark,
    signals: ["Capital", "Market", "Liquidity", "Credit"],
  },
  {
    step: 2,
    title: "Set the limit",
    subtitle: "The threshold the organisation owns",
    description:
      "Define the limit on the taxonomy node: what it applies to, the threshold, and who is on the escalation path if it moves.",
    icon: Scale,
    signals: ["Threshold", "Applies to", "Owner", "Escalation path"],
  },
  {
    step: 3,
    title: "Read utilisation",
    subtitle: "The position against the limit",
    description:
      "Each limit shows its reading and how much of the threshold is used. A risk is tested against its own limit and against every limit above it in the taxonomy.",
    icon: LineChart,
    signals: ["Reading", "Utilisation", "Taxonomy node", "Parent limit"],
  },
  {
    step: 4,
    title: "Raise the warning",
    subtitle: "Before the limit is broken",
    description:
      "Early warning opens while the position is still inside the limit, so Treasury, the CFO, or the CRO sees it before the status turns to breach.",
    icon: Bell,
    signals: ["Within limit", "Early warning", "Owner", "Open warning"],
  },
  {
    step: 5,
    title: "Escalate the breach",
    subtitle: "A named path, not a mailbox",
    description:
      "A hard breach or a severe reading follows the escalation path on the limit, from the risk owner to Treasury, the CFO, ALCO, or the board.",
    icon: Siren,
    signals: ["Hard breach", "Severe", "Escalation path", "Breach open"],
  },
  {
    step: 6,
    title: "Show capital impact",
    subtitle: "Regulatory capital on the record",
    description:
      "The regulatory capital impact of the position sits with the limit, so a funding, market, or capital reading is not explained later from another book.",
    icon: Wallet,
    signals: ["Regulatory capital", "Limit", "Reading", "Impact"],
  },
];

export const financialRiskFeatures = [
  {
    title: "Capital risk",
    description: "Capital and financial-reporting limits, including headroom and ceilings the organisation sets.",
    icon: Landmark,
  },
  {
    title: "Market risk",
    description: "Market limits, including trading-book measures, tested against the threshold on that risk.",
    icon: LineChart,
  },
  {
    title: "Liquidity risk",
    description: "Liquidity and funding limits, with the reading and utilisation against the floor or cap.",
    icon: Droplets,
  },
  {
    title: "Credit exposure",
    description: "Concentration and single-name exposure on the same register as capital, market, and liquidity.",
    icon: ShieldAlert,
  },
  {
    title: "Organisation-defined limits",
    description: "Thresholds the organisation sets on the taxonomy. A risk is tested on its node and on every node above it.",
    icon: Scale,
  },
  {
    title: "Early warning and breach",
    description: "Within limit, early warning, hard breach, and severe, updated from the current reading.",
    icon: Bell,
  },
  {
    title: "Escalation path",
    description: "The route a warning or breach follows, from the risk owner through Treasury, finance, ALCO, or the board.",
    icon: Siren,
  },
  {
    title: "Regulatory capital impact",
    description: "The capital consequence of the position, kept on the limit instead of reconstructed after the fact.",
    icon: Wallet,
  },
];

export const financialRiskOutcomes = [
  {
    title: "One book for the financial risks",
    description: "Capital, market, liquidity, and credit are scored on the same taxonomy and the same appetite.",
  },
  {
    title: "A limit has a status",
    description: "Leaders see how many limits are within threshold, in early warning, or breached, and which path is open.",
  },
  {
    title: "Capital moves with the reading",
    description: "Regulatory capital impact is visible when a limit warns or breaches, on that same record.",
  },
];

export const financialRiskCapabilities = [
  "Register of capital, market, liquidity, and credit risks on one taxonomy",
  "Limits defined by the organisation, with threshold, reading, and utilisation",
  "A risk tested against its own limit and every limit above it",
  "Status of within limit, early warning, hard breach, and severe",
  "Escalation path opened with the warning or the breach",
  "Regulatory capital impact held on the limit",
  "Market, funding, and capital readings monitored as they move",
];

export const financialRiskStats = [
  { value: "4", label: "Risk domains" },
  { value: "Limit", label: "Organisation defined" },
  { value: "Warn", label: "Before breach" },
  { value: "Capital", label: "Regulatory impact" },
];
