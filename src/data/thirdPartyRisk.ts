import {
  AlertTriangle,
  Bot,
  Building2,
  ClipboardCheck,
  Eye,
  FileCheck2,
  Handshake,
  Radar,
  RefreshCw,
  Search,
  ShieldAlert,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";

export type WorkflowStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export type RiskCategory = {
  title: string;
  description: string;
  impact: string;
  icon: LucideIcon;
};

export type TprmBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const tprmHero = {
  eyebrow: "Third Party Risk Management",
  headline: "Your vendors. Their exposure. Your problem.",
  subheadline:
    "Observeri GRC autonomously maintains a live inventory and risk profile for every vendor, so you can answer one question anytime: are we safe to depend on them right now?",
  outcomes: [
    { value: "24/7", label: "Continuous monitoring" },
    { value: "AI", label: "Risk prioritization" },
    { value: "100%", label: "Evidence-backed closure" },
  ],
};

export const tprmProblem = {
  eyebrow: "Why it matters",
  title: "Periodic reviews can't track constant vendor change",
  description:
    "Vendor exposure changes constantly: new tools get adopted, access expands, and suppliers change their security posture. If you only review on a schedule, risk accumulates quietly until it shows up as an urgent scramble—or a breach.",
  painPoints: [
    "Shadow vendors discovered only during audits or incidents",
    "Questionnaires that go stale the moment they're submitted",
    "No clear ownership when supplier risk shifts mid-contract",
    "Remediation tracked in email threads without verified proof",
  ],
};

export const tprmValueProp = {
  eyebrow: "What it is",
  title: "Third party trust, continuously verified",
  description:
    "Observeri Third Party Risk keeps vendor posture up to date autonomously. It finds vendors as they show up, assigns a risk tier with AI-assisted scoring, and keeps checking for changes. When something shifts, it starts the right review and tracks it until closure—with evidence.",
  pillars: [
    { label: "Always-on discovery", icon: Search },
    { label: "Live posture scoring", icon: Radar },
    { label: "Automated guardrails", icon: ShieldAlert },
  ],
};

export const tprmWorkflow: WorkflowStep[] = [
  {
    step: 1,
    title: "Discover",
    subtitle: "Spot vendors the moment they appear",
    description:
      "Observeri ingests vendor signals from onboarding workflows, asset inventory, SSO integrations, and manual intake—building a living vendor register aligned to what is actually in use, with ownership and business context attached.",
    icon: Search,
    signals: ["Vendor onboarding forms", "Asset & dependency mapping", "Contract intake", "SSO & access telemetry"],
  },
  {
    step: 2,
    title: "Assess",
    subtitle: "Keep a live risk profile per vendor",
    description:
      "AI risk prioritization scores each supplier based on data touched, access level, business criticality, assessment results, and external signals. High-exposure vendors surface first; low-risk suppliers move through lightweight review paths.",
    icon: Sparkles,
    signals: ["Tiered risk classification", "Questionnaire & automated assessments", "FAIR-aligned exposure scoring", "Fourth-party dependency mapping"],
  },
  {
    step: 3,
    title: "Act",
    subtitle: "Trigger the right review when risk changes",
    description:
      "When posture shifts—new data types, expired certifications, or control gaps—Observeri launches the appropriate review workflow, assigns owners, sets SLAs, and routes follow-ups without manual spreadsheet chasing.",
    icon: Target,
    signals: ["Automated review triggers", "Owner assignment & SLAs", "Gap remediation queues", "Contract renewal alerts"],
  },
  {
    step: 4,
    title: "Close",
    subtitle: "Verify completion with evidence, not assumptions",
    description:
      "Closures require verified evidence—assessment attestations, remediation proof, and updated posture records. Observeri updates the vendor risk profile autonomously and keeps audit-ready documentation linked to every decision.",
    icon: FileCheck2,
    signals: ["Automated evidence collection", "Verified closure workflows", "Posture recalculation", "Audit-ready vendor dossiers"],
  },
];

export const tprmRisks: RiskCategory[] = [
  {
    title: "Shadow vendor adoption",
    description: "Teams onboard SaaS tools without security review, expanding your attack surface invisibly.",
    impact: "Unmonitored data flows and unassessed suppliers bypass your control framework.",
    icon: Eye,
  },
  {
    title: "Supplier data breach",
    description: "A compromised vendor becomes the entry point to your customer data, IP, or credentials.",
    impact: "Regulatory fines, contractual liability, and reputational damage scale with data sensitivity.",
    icon: ShieldAlert,
  },
  {
    title: "Compliance & contractual gaps",
    description: "DPAs, SOC 2 reports, and ISO attestations expire without triggering reassessment.",
    impact: "Audit findings and customer security questionnaires expose stale vendor evidence.",
    icon: ClipboardCheck,
  },
  {
    title: "Fourth-party concentration",
    description: "Critical vendors depend on sub-processors you never assessed or inventoried.",
    impact: "Supply chain blind spots create single points of failure across your ecosystem.",
    icon: Building2,
  },
  {
    title: "Access creep & privilege drift",
    description: "Vendor accounts accumulate permissions beyond what the original engagement required.",
    impact: "Over-privileged third-party access becomes a persistent insider-threat vector.",
    icon: AlertTriangle,
  },
  {
    title: "Remediation without proof",
    description: "Vendor gaps are marked closed in spreadsheets without verified corrective evidence.",
    impact: "Leadership and auditors cannot defend closure decisions during scrutiny.",
    icon: RefreshCw,
  },
];

export const tprmBenefits: TprmBenefit[] = [
  {
    title: "Keep your vendor inventory accurate",
    description:
      "Autonomously align your vendor list to what is actually in use, with ownership, tier classification, and service dependency context attached to every record.",
    icon: Handshake,
  },
  {
    title: "Focus effort where it matters",
    description:
      "AI risk prioritization ranks suppliers by real exposure—data touched, access level, business criticality—so review depth matches actual consequence.",
    icon: Bot,
  },
  {
    title: "Faster reviews with consistent decisions",
    description:
      "Standardize what gets reviewed and who signs off. Low-risk vendors move quickly; higher-risk suppliers get the right depth without reinventing the process each time.",
    icon: ClipboardCheck,
  },
  {
    title: "Close issues with verified completion",
    description:
      "Track remediation to completion with automated evidence collection. Closures are confirmed, defensible, and easy to stand behind in audits and customer diligence.",
    icon: FileCheck2,
  },
];

export const tprmCapabilities = [
  "Vendor onboarding with tiered risk classification and business owner assignment",
  "Contract and SLA management with renewal tracking and obligation mapping",
  "Questionnaire-based and automated vendor security assessments",
  "AI-assisted risk scoring with FAIR-aligned exposure quantification",
  "Continuous monitoring with posture change alerts and reassessment triggers",
  "Gap remediation workflows with SLA tracking and verified evidence closure",
  "Fourth-party and sub-processor dependency mapping",
  "Audit-ready vendor dossiers linked to compliance frameworks (SOC 2, ISO 27001, GDPR, DORA)",
];

export const tprmStats = [
  { value: "60%", label: "Less manual TPRM effort" },
  { value: "3x", label: "Faster vendor reviews" },
  { value: "100%", label: "Evidence-linked closures" },
  { value: "24/7", label: "Posture monitoring" },
];
