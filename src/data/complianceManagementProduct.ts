import {
  AlertTriangle,
  BookOpen,
  Bot,
  Clock,
  FileCheck2,
  FileText,
  Gauge,
  Layers,
  Radar,
  Scale,
  Send,
  ShieldAlert,
  Sparkles,
  Upload,
  type LucideIcon,
} from "lucide-react";

export type CmWorkflowStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export type CmSubModule = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CmBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CmFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const cmHero = {
  eyebrow: "Compliance Management",
  headline: "From regulation to evidence—compliance that runs itself",
  subheadline:
    "Observeri Compliance Management lets teams maintain regulations and standards, auto-build compliance registers from uploaded documentation, run AI self-assessments with confidence-scored results, track regulatory submissions, manage incidents and breaches, and compare policies against requirements with AI remediation guidance.",
  heroPills: [
    { label: "Regulations & standards library", icon: BookOpen },
    { label: "AI compliance register", icon: Upload },
    { label: "Automated self-assessment", icon: Radar },
    { label: "Regulatory submissions", icon: Send },
    { label: "Policy gap analysis", icon: FileText },
  ],
  outcomes: [
    { value: "AI", label: "Register generation" },
    { value: "Live", label: "Compliance scores" },
    { value: "SLA", label: "Submission tracking" },
  ],
};

export const cmProblem = {
  eyebrow: "Why it matters",
  title: "Compliance programmes drown in manual mapping and stale registers",
  painPoints: [
    {
      title: "Registers built by hand, once a year",
      description:
        "Teams manually transpose regulation text into spreadsheets—missing implementation guidance, expected evidence, and updates when standards change.",
      icon: Layers,
    },
    {
      title: "Assessments are point-in-time snapshots",
      description:
        "Self-assessments happen before audits but rarely between cycles—so control drift and document gaps accumulate unnoticed.",
      icon: Gauge,
    },
    {
      title: "Regulatory submissions slip through cracks",
      description:
        "Filings and notifications to regulators lack centralized SLA tracking, ownership, and escalation when deadlines approach.",
      icon: Clock,
    },
    {
      title: "Policies diverge from requirements",
      description:
        "Procedural documents age without systematic comparison against current regulations—creating audit findings and regulatory exposure.",
      icon: FileText,
    },
  ],
};

export const cmValueProp = {
  eyebrow: "What it is",
  title: "AI-powered compliance operations from register to remediation",
  description:
    "Compliance Management is Observeri's end-to-end module for regulatory adherence. Upload a regulation or standard and AI builds your compliance register with implementation guidance and expected evidence. Horizon scanning self-assessments score control and document compliance with confidence levels—while submission tracking, incident management, and policy comparison keep the programme current.",
  pillars: [
    { label: "Auto-build registers", icon: Sparkles },
    { label: "Score with confidence", icon: Scale },
    { label: "Close gaps with AI", icon: Bot },
  ],
};

export const cmSubModules: CmSubModule[] = [
  {
    title: "Regulations & Standards Library",
    description:
      "Maintain a living library of compliance regulations and standards—ISO 27001, SOC 2, NIST, GDPR, PDPL, HIPAA, PCI DSS, SWIFT, DORA, and regional frameworks—with version history and applicability scope.",
    icon: BookOpen,
  },
  {
    title: "AI Compliance Register",
    description:
      "Upload regulation or standard documentation and AI automatically generates a structured compliance register—requirements, implementation guidance, expected evidence, and control mappings ready for assessment.",
    icon: Upload,
  },
  {
    title: "AI Self-Assessment & Horizon Scanning",
    description:
      "Automated horizon scanning across controls and documents produces compliance scores with confidence levels—showing how existing controls measure against each regulatory requirement in real time.",
    icon: Radar,
  },
  {
    title: "Regulatory Submissions Tracking",
    description:
      "Track regulatory submissions and filings to authorities with defined SLAs, assigned ownership, status workflows, and automated alerts when submission deadlines approach or breach.",
    icon: Send,
  },
  {
    title: "Compliance Incidents & Breaches",
    description:
      "Maintain a register of compliance incidents and breaches—from intake and classification through investigation, regulatory notification, and verified closure with evidence.",
    icon: ShieldAlert,
  },
  {
    title: "AI Policy Comparison & Guidance",
    description:
      "Compare company policy and procedural documents against regulations and standards. AI identifies gaps, explains misalignment, and provides actionable remediation guidance to close deficiencies.",
    icon: FileText,
  },
];

export const cmWorkflow: CmWorkflowStep[] = [
  {
    step: 1,
    title: "Maintain",
    subtitle: "Curate your regulations and standards library",
    description:
      "Build and maintain the regulatory frameworks your organization must adhere to—selecting applicable standards, tracking versions, and defining scope by business unit, geography, or entity.",
    icon: BookOpen,
    signals: ["Multi-framework library", "Version tracking", "Applicability scoping", "ISO, SOC 2, NIST, GDPR, PDPL"],
  },
  {
    step: 2,
    title: "Register",
    subtitle: "AI builds the compliance register from uploads",
    description:
      "Upload regulation or standard documentation and Observeri AI parses requirements into a structured register—complete with implementation guidance, expected evidence types, and suggested control mappings for each obligation.",
    icon: Upload,
    signals: ["Document upload & parsing", "Auto-generated register", "Implementation guidance", "Expected evidence mapping"],
  },
  {
    step: 3,
    title: "Assess",
    subtitle: "Horizon scanning with scored confidence",
    description:
      "AI performs automated self-assessment through horizon scanning on controls and linked documents—delivering a compliance score and confidence level for each requirement based on evidence quality and control effectiveness.",
    icon: Radar,
    signals: ["Horizon scanning", "Control & document analysis", "Compliance score per requirement", "Confidence level indicators"],
  },
  {
    step: 4,
    title: "Track",
    subtitle: "Submissions, incidents, and breaches",
    description:
      "Track regulatory submissions to authorities with SLA deadlines and ownership. Maintain compliance incidents and breaches with classification, investigation workflows, and regulatory notification timelines.",
    icon: Send,
    signals: ["Submission SLA tracking", "Owner assignment", "Incident & breach register", "Regulatory notification workflows"],
  },
  {
    step: 5,
    title: "Remediate",
    subtitle: "AI policy comparison and gap closure",
    description:
      "AI compares company policies and procedural documents against regulations and standards—highlighting gaps and providing remediation guidance. Findings route into remediation programmes with evidence-based closure.",
    icon: Bot,
    signals: ["Policy vs regulation comparison", "AI remediation guidance", "Gap register updates", "Evidence-linked closure"],
  },
];

export const cmFeatures: CmFeature[] = [
  {
    title: "Living regulations library",
    description:
      "Centralize every regulation and standard your organization follows—with version control, applicability tags, and links to generated registers.",
    icon: BookOpen,
  },
  {
    title: "Upload-to-register AI",
    description:
      "Drop in a regulation PDF or standard document and AI extracts obligations, implementation steps, and expected evidence into an audit-ready register.",
    icon: Upload,
  },
  {
    title: "Confidence-scored assessments",
    description:
      "Horizon scanning evaluates controls and documents against each requirement—outputting compliance scores with AI confidence levels teams can defend to auditors.",
    icon: Gauge,
  },
  {
    title: "Submission SLA management",
    description:
      "Never miss a regulatory filing—track submissions with owners, deadlines, SLA aging alerts, and status from draft through accepted.",
    icon: Clock,
  },
  {
    title: "Incident & breach management",
    description:
      "Manage compliance incidents and breaches end-to-end—with severity classification, regulatory notification tracking, and closure evidence.",
    icon: AlertTriangle,
  },
  {
    title: "AI policy gap analysis",
    description:
      "Side-by-side comparison of policies and procedures against regulatory text—with AI-generated remediation guidance for every identified gap.",
    icon: FileText,
  },
];

export const cmBenefits: CmBenefit[] = [
  {
    title: "Registers in hours, not months",
    description:
      "AI register generation from uploaded documentation eliminates manual transcription—giving teams implementation guidance and expected evidence from day one.",
    icon: Sparkles,
  },
  {
    title: "Continuous compliance visibility",
    description:
      "Horizon scanning and confidence-scored self-assessments replace annual checkbox exercises—surfacing control drift and document gaps between formal audits.",
    icon: Radar,
  },
  {
    title: "Regulatory obligations never missed",
    description:
      "Submission tracking with SLAs and ownership ensures filings and notifications reach regulators on time—with full audit trails of who submitted what and when.",
    icon: Send,
  },
  {
    title: "Policies aligned to current regulation",
    description:
      "AI policy comparison keeps procedural documents synchronized with evolving standards—closing the gap between what is written and what regulators expect.",
    icon: FileCheck2,
  },
];

export const cmOrgOutcomes = [
  {
    title: "Audit-ready evidence on demand",
    description:
      "Compliance registers link requirements to controls, documents, and evidence—so auditors receive structured proof instead of last-minute document hunts.",
  },
  {
    title: "Faster breach and incident response",
    description:
      "Centralized compliance incident and breach management with regulatory notification workflows compresses response time when obligations are triggered.",
  },
  {
    title: "Measurable programme maturity",
    description:
      "Compliance scores with confidence levels trend over time—giving boards and regulators quantified proof of programme improvement, not narrative alone.",
  },
];

export const cmCapabilities = [
  "Regulations and standards library with multi-framework support and version tracking",
  "AI compliance register generation from uploaded regulation and standard documentation",
  "Implementation guidance and expected evidence auto-mapped to each requirement",
  "Automated self-assessment through AI horizon scanning on controls and documents",
  "Compliance score and confidence level per requirement against existing controls",
  "Regulatory submission tracking with SLA deadlines, ownership, and aging alerts",
  "Compliance incidents and breaches register with investigation and notification workflows",
  "AI comparison of company policies and procedures against regulations and standards",
  "AI-generated remediation guidance for policy and control gaps",
  "Gap registers with prioritization and linkage to Focused Remediation programmes",
  "Scheduled assessment cadence with trend tracking and executive dashboards",
  "Integration with Security Governance, Exposure Management, and AI Risk Operations Center",
];

export const cmStats = [
  { value: "200+", label: "Supported frameworks" },
  { value: "AI", label: "Register & assessment" },
  { value: "100%", label: "SLA-tracked submissions" },
  { value: "24/7", label: "Horizon scanning" },
];
