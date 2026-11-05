import {
  Ban,
  Eye,
  FileUp,
  Lock,
  ScanSearch,
  ScrollText,
  ShieldAlert,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type AiDataMonitoringStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export const aiDataMonitoringIcon = Eye;

export const aiDataMonitoringHero = {
  eyebrow: "AI Data Monitoring",
  heroPills: [
    { label: "Prompt monitoring", icon: Eye },
    { label: "Prompt audit", icon: ScrollText },
    { label: "Block sensitive prompts", icon: Ban },
    { label: "File upload controls", icon: FileUp },
  ],
  outcomes: [
    { value: "Prompts", label: "Monitored and audited" },
    { value: "Block", label: "Before data leaves" },
    { value: "Files", label: "Uploads inspected" },
  ],
};

export const aiDataMonitoringProblem = {
  eyebrow: "Why it matters",
  title: "Sensitive data leaves in a prompt or a file",
  painPoints: [
    {
      title: "Prompts are invisible",
      description:
        "People paste customer records, source code, and contracts into public models, and security never sees the text.",
      icon: Eye,
    },
    {
      title: "There is no audit trail",
      description:
        "When a regulator or a customer asks what was sent to a model, the organization has the vendor invoice and nothing else.",
      icon: ScrollText,
    },
    {
      title: "Blocking happens after the leak",
      description:
        "A policy says not to share secrets. The prompt is already at the public model before anyone can stop it.",
      icon: Ban,
    },
    {
      title: "Files bypass the prompt box",
      description:
        "Spreadsheets, tickets, and PDFs are uploaded whole, carrying data that a typed prompt would have been too long to include.",
      icon: FileUp,
    },
  ],
};

export const aiDataMonitoringApproach = {
  eyebrow: "The Observeri approach",
  title: "Watch the prompt, stop the leak, keep the record",
  items: [
    {
      title: "Monitor prompts on sanctioned tools",
      description:
        "See prompts and the files attached to them across the AI tools the organization allows, including public models and private deployments.",
      icon: ScanSearch,
    },
    {
      title: "Audit what was asked",
      description:
        "Keep an audit trail of who prompted, which model received it, and whether sensitive data was detected, without turning the log into a second copy of the secret.",
      icon: ScrollText,
    },
    {
      title: "Block before it leaves",
      description:
        "Stop prompts and uploads that contain secrets, personal data, or other sensitive content before they reach a model outside the organization.",
      icon: Ban,
    },
    {
      title: "Hold sensitive data inside",
      description:
        "Allowed work stays on sanctioned tools and private models. Data that must not leave is blocked, not rewritten after the fact.",
      icon: Lock,
    },
  ],
};

export const aiDataMonitoringWorkflow: AiDataMonitoringStep[] = [
  {
    step: 1,
    title: "Monitor the prompt",
    subtitle: "See use across sanctioned AI tools",
    description:
      "Capture prompts as people use public and private models the organization has sanctioned, including the tool, the user, and the model.",
    icon: Eye,
    signals: ["User", "Tool", "Model", "Prompt event"],
  },
  {
    step: 2,
    title: "Audit the trail",
    subtitle: "A record for review, not a second leak",
    description:
      "Store who sent the prompt, when, and which policy matched. Sensitive values are recorded as findings, so the audit log does not become another copy of the data.",
    icon: ScrollText,
    signals: ["Actor", "Time", "Policy match", "Model destination"],
  },
  {
    step: 3,
    title: "Block the prompt",
    subtitle: "Stop sensitive text before it is sent",
    description:
      "When a prompt contains secrets, personal data, or other protected content, Observeri blocks it before the text reaches a model outside the organization.",
    icon: Ban,
    signals: ["Secrets", "Personal data", "Policy block", "User notice"],
  },
  {
    step: 4,
    title: "Inspect file uploads",
    subtitle: "The attachment is part of the prompt",
    description:
      "Scan files people attach or upload to AI tools. Spreadsheets, documents, and exports are blocked when they carry data that must stay inside the organization.",
    icon: FileUp,
    signals: ["File type", "Sensitive content", "Upload block", "Quarantine record"],
  },
  {
    step: 5,
    title: "Keep data in the organization",
    subtitle: "Sanctioned tools, private models",
    description:
      "Work that is allowed continues on sanctioned tools and private models. Content that fails policy never leaves, and the block is available for governance review.",
    icon: ShieldCheck,
    signals: ["Sanctioned tools", "Private models", "No egress", "Governance review"],
  },
];

export const aiDataMonitoringFeatures = [
  {
    title: "Prompt monitoring",
    description: "A live view of prompts sent to sanctioned public and private models, tied to the user and the tool.",
    icon: Eye,
  },
  {
    title: "Prompt audit",
    description: "An evidence trail of prompt events and policy matches that reviewers can use without storing a fresh copy of the secret.",
    icon: ScrollText,
  },
  {
    title: "Prompt blocking",
    description: "Prompts with secrets, personal data, or other sensitive content are stopped before they reach an external model.",
    icon: Ban,
  },
  {
    title: "File upload controls",
    description: "Uploads and attachments are inspected with the prompt, and files that carry protected data are blocked.",
    icon: FileUp,
  },
  {
    title: "Organization boundary",
    description: "Sensitive information stays on sanctioned tools and private models. Unsanctioned destinations do not receive it.",
    icon: Lock,
  },
  {
    title: "Review by AI governance",
    description: "Blocks and detections are available to the model inventory and the governance function, not only to a security queue.",
    icon: ShieldAlert,
  },
];

export const aiDataMonitoringOutcomes = [
  {
    title: "Leaks stop at the prompt",
    description: "Sensitive text and files are blocked before a public model can receive them.",
  },
  {
    title: "Audit has an answer",
    description: "Reviewers can show who prompted which model and which policy fired, without a spreadsheet of pasted secrets.",
  },
  {
    title: "The boundary holds",
    description: "Data that must stay inside the organization stays on sanctioned tools and private models.",
  },
];

export const aiDataMonitoringCapabilities = [
  "Monitoring of prompts on sanctioned public and private AI tools",
  "Audit trail of prompt events, actors, models, and policy matches",
  "Blocking of prompts that contain secrets, personal data, or other sensitive content",
  "Inspection and blocking of file uploads and attachments",
  "Sensitive information kept inside the organization",
  "Findings recorded without making a second copy of the protected value",
  "Handoff of detections to AI Governance and AI Risk",
];

export const aiDataMonitoringStats = [
  { value: "Live", label: "Prompt monitoring" },
  { value: "Audit", label: "Prompt trail" },
  { value: "Block", label: "Sensitive prompts" },
  { value: "Files", label: "Uploads included" },
];
