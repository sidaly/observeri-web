import {
  AlertTriangle,
  BarChart3,
  Bot,
  Brain,
  DollarSign,
  Gauge,
  KeyRound,
  Radar,
  ShieldAlert,
  Sparkles,
  UserCog,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type HrWorkflowStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export type HrSubModule = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HrBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HrFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HrUseCase = {
  title: string;
  description: string;
  icon: LucideIcon;
  audience: string;
};

export const hrHero = {
  eyebrow: "Human Risk Management",
  headline: "Quantify people risk—AI scans privileged IDs before attackers do",
  subheadline:
    "Observeri Human Risk Management continuously profiles identities, monitors high-risk privileged accounts, and calculates Human Risk Exposure (HRE) scores using asset risk, privilege impact, access probability, trust factors, and environmental risk—so teams act on the users driving the greatest cyber exposure.",
  heroPills: [
    { label: "Continuous privileged ID scanning", icon: Radar },
    { label: "Human Risk Exposure (HRE) scoring", icon: Gauge },
    { label: "ML analytics & anomaly detection", icon: Brain },
    { label: "Automated control triggers", icon: Zap },
    { label: "Financial exposure quantification", icon: DollarSign },
  ],
  outcomes: [
    { value: "24/7", label: "Privileged ID scanning" },
    { value: "HRE", label: "Risk quantification" },
    { value: "$M", label: "Financial exposure" },
  ],
};

export const hrProblem = {
  eyebrow: "Why it matters",
  title: "People are the largest attack surface—and the least measured",
  painPoints: [
    {
      title: "Privileged accounts go unchecked",
      description:
        "Admin, service, and elevated-access identities accumulate across systems without continuous monitoring—creating blind spots attackers exploit through credential theft and privilege escalation.",
      icon: KeyRound,
    },
    {
      title: "User risk is subjective, not scored",
      description:
        "Access reviews treat every identity equally instead of prioritizing the privileged users whose compromise would cause the greatest business impact.",
      icon: Gauge,
    },
    {
      title: "Insider signals are buried in logs",
      description:
        "Behavioral anomalies, trust degradation, and environmental risk factors sit in disconnected IAM and SIEM tools—with no unified human risk score teams can act on.",
      icon: AlertTriangle,
    },
    {
      title: "Leadership can't quantify people risk",
      description:
        "Boards ask for financial exposure from human cyber risk, but teams deliver narrative assessments instead of quantified HRE scores tied to business impact.",
      icon: DollarSign,
    },
  ],
};

export const hrValueProp = {
  eyebrow: "What it is",
  title: "The Human Cyber Risk Model—AI-powered identity exposure intelligence",
  description:
    "Human Risk Management applies Observeri's Human Risk Exposure (HRE) formula—Asset Risk × Privilege Impact × Access Probability × Trust Factor × Environmental Risk—to every identity in your organization. AI continuously scans privileged IDs, recalculates scores as posture changes, and triggers automated controls when exposure exceeds thresholds.",
  pillars: [
    { label: "Scan privileged IDs", icon: Radar },
    { label: "Score with HRE formula", icon: Gauge },
    { label: "Act with automation", icon: Zap },
  ],
};

export const hrSubModules: HrSubModule[] = [
  {
    title: "Identity Profiling",
    description:
      "Build rich identity profiles with department, role, privilege level, asset access, authentication patterns, and device posture—forming the foundation for accurate HRE calculation.",
    icon: Users,
  },
  {
    title: "Privileged ID Monitoring",
    description:
      "AI continuously scans admin, service, and elevated-access accounts—detecting stale privileges, excessive permissions, dormant admins, and accounts with anomalous access patterns.",
    icon: KeyRound,
  },
  {
    title: "HRE Scoring Engine",
    description:
      "Calculate Human Risk Exposure using Asset Risk (AR), Privilege Impact (PI), Access Probability (AP), Trust Factor (TF), and Environmental Risk (ER)—producing a quantified score per identity.",
    icon: Gauge,
  },
  {
    title: "ML Analytics Dashboard",
    description:
      "Risk distribution charts, top-10 highest-risk identity rankings, department exposure heatmaps, and multi-dimensional risk profile comparisons powered by machine learning.",
    icon: BarChart3,
  },
  {
    title: "Automated Controls",
    description:
      "When HRE scores exceed defined thresholds, trigger automated access reviews, privilege reduction, MFA enforcement, security awareness training, or account suspension workflows.",
    icon: Zap,
  },
  {
    title: "Financial Exposure Quantification",
    description:
      "Translate human cyber risk into financial exposure dollars—giving boards and executives a business-language view of people-driven cyber risk alongside operational metrics.",
    icon: DollarSign,
  },
];

export const hrWorkflow: HrWorkflowStep[] = [
  {
    step: 1,
    title: "Profile",
    subtitle: "Ingest and enrich identity context",
    description:
      "Connect identity sources—Active Directory, Okta, Azure AD, HR systems, and IAM platforms—to build living identity profiles with role, department, privilege level, and asset access context.",
    icon: Users,
    signals: ["IAM & IdP connectors", "HR system sync", "Role & department mapping", "Privilege classification"],
  },
  {
    step: 2,
    title: "Scan",
    subtitle: "AI monitors high-risk privileged IDs",
    description:
      "AI continuously scans privileged and elevated-access identities—flagging stale admins, excessive permissions, dormant accounts, and anomalous authentication or data access patterns in real time.",
    icon: Radar,
    signals: ["Continuous privileged ID scanning", "Stale privilege detection", "Dormant admin alerts", "Anomaly signal ingestion"],
  },
  {
    step: 3,
    title: "Score",
    subtitle: "Calculate Human Risk Exposure (HRE)",
    description:
      "The HRE engine computes scores using Asset Risk × Privilege Impact × Access Probability × Trust Factor × Environmental Risk—recalculating automatically as identity posture, assets, or environment changes.",
    icon: Gauge,
    signals: ["HRE formula calculation", "AR × PI × AP × TF × ER", "Risk tier classification", "Auto-recalculation"],
  },
  {
    step: 4,
    title: "Analyze",
    subtitle: "ML analytics and department exposure",
    description:
      "ML analytics surfaces risk distribution, top-10 highest-risk identities, department-level exposure averages, and multi-dimensional risk profile comparisons—helping teams prioritize access reviews and remediation.",
    icon: Brain,
    signals: ["Risk distribution charts", "Top-N identity ranking", "Department heatmaps", "Risk profile radar"],
  },
  {
    step: 5,
    title: "Act",
    subtitle: "Automated controls and financial reporting",
    description:
      "Trigger automated access reviews, privilege reduction, MFA enforcement, or training when thresholds breach. Report financial exposure to leadership with quantified people-risk dollars.",
    icon: Zap,
    signals: ["Threshold-based automation", "Access review triggers", "Financial exposure reporting", "Audit trail & evidence"],
  },
];

export const hrHreShowcase = {
  title: "Human Risk Exposure—quantified, visualized, actionable",
  description:
    "The HRE dashboard combines the Human Cyber Risk Model formula with live identity metrics—showing critical and high-risk counts, average and maximum HRE scores, financial exposure, and the identities requiring immediate action.",
  image: "/human_risk_management.png",
  formula: "HRE = Asset Risk × Privilege Impact × Access Probability × Trust Factor × Environmental Risk",
  formulaFactors: [
    { abbr: "AR", label: "Asset Risk", color: "text-sky-400" },
    { abbr: "PI", label: "Privilege Impact", color: "text-violet-400" },
    { abbr: "AP", label: "Access Probability", color: "text-cyan-400" },
    { abbr: "TF", label: "Trust Factor", color: "text-amber-400" },
    { abbr: "ER", label: "Environmental Risk", color: "text-emerald-400" },
  ],
  dashboardTabs: ["Dashboard", "Identities", "ML Analytics", "Automated Controls"],
  metrics: [
    { label: "Total Identities", value: "12" },
    { label: "Critical Risk", value: "7", accent: "text-red-400" },
    { label: "High Risk", value: "0", accent: "text-orange-400" },
    { label: "Avg HRE Score", value: "1,720", accent: "text-primary" },
    { label: "Max HRE Score", value: "7,141", accent: "text-red-400" },
    { label: "Financial Exposure", value: "$51,552K", accent: "text-amber-400" },
  ],
  topRiskIdentities: [
    { name: "syedahsan", score: 7141 },
    { name: "user1", score: 6200 },
    { name: "ames.wilson@techcorp.com", score: 5100 },
    { name: "admin.service", score: 4800 },
    { name: "db.root", score: 4200 },
  ],
};

export const hrUseCases: HrUseCase[] = [
  {
    title: "Privileged access review prioritization",
    description:
      "Security teams rank access reviews by HRE score instead of reviewing every identity equally—focusing effort on the 7 critical-risk privileged accounts that drive the most exposure.",
    icon: KeyRound,
    audience: "Identity & Access Management",
  },
  {
    title: "Insider threat early warning",
    description:
      "ML analytics detect trust factor degradation and environmental risk spikes on privileged IDs—surfacing potential insider threats before data exfiltration or sabotage occurs.",
    icon: ShieldAlert,
    audience: "SOC & Threat Intelligence",
  },
  {
    title: "Board-ready financial exposure reporting",
    description:
      "Translate human cyber risk into dollar-denominated financial exposure—giving CISOs and boards a quantified people-risk metric alongside technical vulnerability and compliance scores.",
    icon: DollarSign,
    audience: "CISO & Board Reporting",
  },
  {
    title: "Automated privilege reduction",
    description:
      "When HRE scores breach critical thresholds on dormant or over-privileged accounts, automated controls trigger access reviews or privilege reduction—closing gaps without manual ticket creation.",
    icon: Zap,
    audience: "GRC & Security Operations",
  },
  {
    title: "Department risk benchmarking",
    description:
      "Compare average HRE scores across departments—identifying business units with elevated people risk due to excessive admin access, weak MFA adoption, or high environmental risk factors.",
    icon: BarChart3,
    audience: "Risk Management",
  },
  {
    title: "M&A identity risk assessment",
    description:
      "During mergers and acquisitions, rapidly profile incoming identities, scan privileged accounts, and quantify human risk exposure before integrating IAM environments.",
    icon: UserCog,
    audience: "M&A & Integration Teams",
  },
];

export const hrFeatures: HrFeature[] = [
  {
    title: "Continuous privileged ID scanning",
    description:
      "AI never sleeps—continuously monitoring admin, service, and elevated-access accounts for stale privileges, dormant access, and anomalous behavior patterns.",
    icon: Radar,
  },
  {
    title: "HRE scoring engine",
    description:
      "Five-factor Human Risk Exposure formula combines asset context, privilege level, access probability, trust indicators, and environmental risk into one actionable score.",
    icon: Gauge,
  },
  {
    title: "ML-powered analytics",
    description:
      "Risk distribution, top-N identity rankings, department heatmaps, and multi-dimensional risk profile comparisons powered by machine learning models.",
    icon: Brain,
  },
  {
    title: "Automated control triggers",
    description:
      "Threshold-based automation launches access reviews, MFA enforcement, privilege reduction, or security training when identity exposure exceeds defined limits.",
    icon: Zap,
  },
  {
    title: "Financial exposure quantification",
    description:
      "Convert human cyber risk scores into dollar-denominated financial exposure—bridging the gap between technical identity metrics and business language.",
    icon: DollarSign,
  },
  {
    title: "AI Risk Operations Center integration",
    description:
      "HRE scores feed into the AI Risk Operations Center—correlating people risk with asset exposure, vulnerabilities, and compliance gaps for unified enterprise risk intelligence.",
    icon: Sparkles,
  },
];

export const hrBenefits: HrBenefit[] = [
  {
    title: "Focus on the privileged few",
    description:
      "Instead of reviewing thousands of identities equally, teams concentrate on the critical-risk privileged accounts that would cause the greatest damage if compromised.",
    icon: KeyRound,
  },
  {
    title: "Quantified people risk",
    description:
      "HRE scores replace subjective assessments with a repeatable, defensible formula—giving auditors, regulators, and boards a consistent metric for human cyber exposure.",
    icon: Gauge,
  },
  {
    title: "Proactive, not reactive",
    description:
      "Continuous AI scanning detects privilege drift, dormant admins, and trust degradation before incidents occur—shifting identity security from periodic reviews to always-on monitoring.",
    icon: Radar,
  },
  {
    title: "Automated risk reduction",
    description:
      "Automated controls close exposure gaps immediately when thresholds breach—reducing mean time to remediate for high-risk identities without waiting for manual triage.",
    icon: Bot,
  },
];

export const hrOrgOutcomes = [
  {
    title: "Faster privileged access reviews",
    description:
      "HRE-ranked identity lists cut access review cycles from months to weeks—by focusing reviewers on the accounts that matter most.",
  },
  {
    title: "Board-level people risk visibility",
    description:
      "Financial exposure metrics and department heatmaps give leadership a clear, quantified view of human cyber risk alongside technical and compliance posture.",
  },
  {
    title: "Reduced insider and credential risk",
    description:
      "Continuous scanning and automated controls shrink the window of exposure for over-privileged, dormant, and anomalous identities across the enterprise.",
  },
];

export const hrCapabilities = [
  "Identity profiling with role, department, privilege level, and asset access context",
  "AI continuous scanning of high-risk privileged IDs—admin, service, and elevated-access accounts",
  "Human Risk Exposure (HRE) scoring: Asset Risk × Privilege Impact × Access Probability × Trust Factor × Environmental Risk",
  "Risk tier classification—Critical, High, Medium, Low—with threshold-based alerting",
  "ML analytics dashboard with risk distribution, top-N rankings, and department exposure heatmaps",
  "Multi-dimensional risk profile comparison (radar charts) for top identities",
  "Automated control triggers—access reviews, privilege reduction, MFA enforcement, training assignment",
  "Financial exposure quantification in dollar-denominated people-risk metrics",
  "Identity source connectors—Active Directory, Okta, Azure AD, HR systems, IAM platforms",
  "Anomaly detection for unusual authentication, access patterns, and data movement",
  "Integration with AI Risk Operations Center, Information Asset Management, and Security Governance",
  "Audit-ready evidence trails for access reviews, control triggers, and HRE score history",
];

export const hrStats = [
  { value: "24/7", label: "Privileged ID scanning" },
  { value: "5-factor", label: "HRE formula" },
  { value: "Auto", label: "Control triggers" },
  { value: "$M", label: "Financial exposure" },
];
