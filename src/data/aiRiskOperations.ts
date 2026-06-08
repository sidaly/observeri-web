import {
  AlertTriangle,
  Bot,
  Crown,
  FileCheck2,
  Gauge,
  Layers,
  Network,
  Radar,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingDown,
  TriangleAlert,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type ArocWorkflowStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export type ArocSignalDomain = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ArocBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ArocFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const arocHero = {
  eyebrow: "AI Risk Operations Center",
  headline: "One intelligence engine for every signal that drives exposure",
  subheadline:
    "The AI Risk Operations Center augments incidents, risks, vulnerabilities, threats, and compliance issues into a single operational view—calculating a live asset risk score for every asset and telling your team exactly where to remediate to protect the crown jewels.",
  heroPills: [
    { label: "Incidents & risks unified", icon: ShieldAlert },
    { label: "Vulnerability & threat context", icon: TriangleAlert },
    { label: "Compliance issue linkage", icon: FileCheck2 },
    { label: "Per-asset risk scoring", icon: Gauge },
    { label: "AI remediation focus", icon: Bot },
  ],
  outcomes: [
    { value: "80%", label: "Risk reduction focus" },
    { value: "Live", label: "Asset risk scores" },
    { value: "24/7", label: "Exposure monitoring" },
  ],
};

export const arocProblem = {
  eyebrow: "Why it matters",
  title: "Security data is everywhere. Risk intelligence is nowhere.",
  painPoints: [
    {
      title: "Signals live in silos",
      description:
        "Incidents, CVEs, threats, compliance gaps, and risk register entries each sit in separate tools—with no unified view of what they mean for a given asset.",
      icon: Layers,
    },
    {
      title: "Asset exposure is invisible",
      description:
        "Teams know vulnerabilities exist and incidents occurred, but cannot answer how much total risk a specific server, application, or data store carries right now.",
      icon: Network,
    },
    {
      title: "Remediation lacks focus",
      description:
        "Without correlated intelligence, teams spread effort across low-impact fixes while crown-jewel assets carrying compound exposure stay under-prioritized.",
      icon: Target,
    },
    {
      title: "Risk reduction is unmeasurable",
      description:
        "Leadership cannot tie security investment to quantified exposure reduction because there is no continuous score that updates as remediations land.",
      icon: TrendingDown,
    },
  ],
};

export const arocValueProp = {
  eyebrow: "What it is",
  title: "Continuous risk exposure intelligence for every asset",
  description:
    "The AI Risk Operations Center is Observeri's central intelligence hub. It ingests and augments signals from across the platform—incidents, enterprise risks, vulnerabilities, active threats, and compliance deficiencies—then calculates a live asset risk score for each asset in your inventory. Predictive AI surfaces the remediation paths that deliver the greatest exposure reduction, helping teams focus on the 80% of risk that actually matters.",
  pillars: [
    { label: "Unified signal augmentation", icon: Radar },
    { label: "Live asset risk scoring", icon: Gauge },
    { label: "Crown-jewel protection", icon: Crown },
  ],
};

export const arocSignalDomains: ArocSignalDomain[] = [
  {
    title: "Incidents",
    description:
      "Open and historical incidents enrich asset profiles with active compromise context, severity history, and recurrence patterns that elevate exposure scores.",
    icon: ShieldAlert,
  },
  {
    title: "Risks",
    description:
      "Enterprise risk register entries map to affected assets—connecting inherent, residual, and treatment status to the systems where risk actually lives.",
    icon: AlertTriangle,
  },
  {
    title: "Vulnerabilities",
    description:
      "CVE findings with CVSS, EPSS, and exploit context flow into asset scores—so patch backlog priority reflects real exploitability on each asset.",
    icon: Zap,
  },
  {
    title: "Threats",
    description:
      "Threat intelligence, attack surface visibility, and registered threat actors correlate to assets under active or emerging adversary interest.",
    icon: TriangleAlert,
  },
  {
    title: "Compliance issues",
    description:
      "Control gaps, assessment deficiencies, and framework non-conformities attach to the assets and processes they affect—closing the loop between compliance and exposure.",
    icon: FileCheck2,
  },
];

export const arocWorkflow: ArocWorkflowStep[] = [
  {
    step: 1,
    title: "Aggregate",
    subtitle: "Augment signals from every risk domain",
    description:
      "Observeri continuously ingests incidents, risks, vulnerabilities, threats, and compliance issues from across the platform and connected integrations—building a unified signal layer instead of fragmented dashboards.",
    icon: Radar,
    signals: ["Incident telemetry", "Risk register linkage", "CVE & exploit data", "Threat intelligence feeds", "Compliance gap registers"],
  },
  {
    step: 2,
    title: "Correlate",
    subtitle: "Map every signal to the assets it affects",
    description:
      "Each signal is correlated to your asset inventory—servers, applications, cloud resources, data stores, and crown-jewel systems—so exposure is understood in business context, not abstract severity scores.",
    icon: Network,
    signals: ["Asset inventory mapping", "Business value classification", "Data sensitivity tagging", "Dependency chain analysis"],
  },
  {
    step: 3,
    title: "Score",
    subtitle: "Calculate live asset risk scores",
    description:
      "Observeri computes a continuous asset risk score for every asset by weighting vulnerabilities, threats, control coverage, incident history, and compliance posture—recalculating automatically as remediations close gaps.",
    icon: Gauge,
    signals: ["Composite exposure scoring", "Before/after remediation tracking", "Crown-jewel tier weighting", "Real-time score updates"],
  },
  {
    step: 4,
    title: "Prioritize",
    subtitle: "AI focuses effort on maximum risk reduction",
    description:
      "Predictive AI analyzes the full signal landscape and recommends remediation sequences targeting the highest-impact exposure—helping teams achieve up to 80% risk reduction by focusing on the fixes that matter most, not the longest lists.",
    icon: Sparkles,
    signals: ["AI remediation sequencing", "80% risk reduction targeting", "Crown-jewel protection paths", "Budget-aware treatment plans"],
  },
  {
    step: 5,
    title: "Act",
    subtitle: "Trigger assessments and route remediation",
    description:
      "Exposure thresholds automatically trigger assessments, route remediation to Focused Remediation programmes, and update executive dashboards—so the intelligence engine drives action, not just reporting.",
    icon: Target,
    signals: ["Automated assessment triggers", "Remediation programme routing", "Executive dashboard feeds", "Continuous exposure monitoring"],
  },
];

export const arocFeatures: ArocFeature[] = [
  {
    title: "Cross-domain signal augmentation",
    description:
      "Incidents, risks, vulnerabilities, threats, and compliance issues are augmented into one intelligence layer—eliminating blind spots between GRC, SecOps, and vulnerability teams.",
    icon: Layers,
  },
  {
    title: "Live asset risk scoring",
    description:
      "Every asset receives a continuously updated risk score reflecting its current exposure from all connected signal domains—not a static annual assessment.",
    icon: Gauge,
  },
  {
    title: "Crown-jewel identification",
    description:
      "Business-critical assets are tiered and weighted so remediation priority always protects the systems and data that matter most to the organization.",
    icon: Crown,
  },
  {
    title: "80% risk reduction targeting",
    description:
      "AI prioritization focuses remediation on the subset of issues driving the majority of enterprise exposure—delivering measurable risk reduction without chasing every low-impact finding.",
    icon: TrendingDown,
  },
  {
    title: "Automated assessment triggers",
    description:
      "When asset exposure crosses defined thresholds, Observeri launches the right assessment or review workflow automatically—keeping governance aligned with live posture.",
    icon: Bot,
  },
  {
    title: "Executive-ready exposure views",
    description:
      "Board and CISO dashboards show asset risk trees, exposure trends, and remediation progress—translating operational signals into leadership decisions.",
    icon: Radar,
  },
];

export const arocBenefits: ArocBenefit[] = [
  {
    title: "Focus remediation where it cuts the most risk",
    description:
      "Instead of equal attention across thousands of findings, AI sequencing directs teams to the fixes that collapse the most exposure—targeting up to 80% of organizational risk with focused effort.",
    icon: Target,
  },
  {
    title: "Protect the crown jewels first",
    description:
      "Crown-jewel assets carrying the highest business value and data sensitivity always surface at the top of the queue—so critical systems never hide behind low-priority noise.",
    icon: Crown,
  },
  {
    title: "Continuous exposure, not periodic snapshots",
    description:
      "Asset risk scores update as patches land, incidents close, threats evolve, and compliance gaps remediate—giving the organization an always-current picture of residual exposure.",
    icon: Gauge,
  },
  {
    title: "One view for security, GRC, and leadership",
    description:
      "Incidents, risks, vulnerabilities, threats, and compliance issues converge into a single operational intelligence engine—so every team works from the same exposure truth.",
    icon: Radar,
  },
];

export const arocOrgOutcomes = [
  {
    title: "Measurable risk reduction with less effort",
    description:
      "Organizations report up to 80% risk reduction by prioritizing remediation through AI-guided sequencing—achieving more exposure collapse with fewer wasted cycles on low-consequence fixes.",
  },
  {
    title: "Crown-jewel assets stay protected under pressure",
    description:
      "When attack surfaces expand or incident volume spikes, crown-jewel tiering ensures the assets that carry the most business consequence receive immediate attention and sustained monitoring.",
  },
  {
    title: "Investment decisions backed by live data",
    description:
      "Budget and resource allocation tie directly to quantified asset exposure and predicted risk reduction—so leadership funds what moves the needle, not what looks busy.",
  },
];

export const arocCapabilities = [
  "Unified augmentation of incidents, risks, vulnerabilities, threats, and compliance issues",
  "Continuous asset risk score calculation for every asset in the inventory",
  "Automatic score recalculation when patches, remediations, and control fixes are applied",
  "Crown-jewel asset tiering with elevated exposure weighting and priority routing",
  "AI remediation sequencing targeting up to 80% organizational risk reduction",
  "Predictive AI recommendations for risk treatment and security budget allocation",
  "Automated assessment triggers based on configurable exposure thresholds",
  "Control mapping with gap detection and remediation routing to Focused Remediation",
  "Before-and-after exposure tracking to measure remediation impact per asset",
  "Executive asset risk tree visualizations with drill-down to underlying signals",
];

export const arocStats = [
  { value: "80%", label: "Targeted risk reduction" },
  { value: "5", label: "Signal domains unified" },
  { value: "100%", label: "Assets scored continuously" },
  { value: "24/7", label: "Exposure intelligence" },
];
