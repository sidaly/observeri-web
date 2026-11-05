import {
  Ban,
  Bot,
  Cloud,
  Fingerprint,
  Mail,
  ScanSearch,
  Send,
  ShieldOff,
  Siren,
  type LucideIcon,
} from "lucide-react";

export type DataLossPreventionStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export const dataLossPreventionIcon = ShieldOff;

export const dataLossPreventionHero = {
  eyebrow: "Data Loss Prevention",
  heroPills: [
    { label: "Approved email, drive, and AI", icon: Mail },
    { label: "Shadow mediums caught", icon: ScanSearch },
    { label: "Infotypes and policies", icon: Fingerprint },
    { label: "Violation to risk incident", icon: Siren },
  ],
  outcomes: [
    { value: "Approved", label: "Email, drive, and AI" },
    { value: "Shadow", label: "Mediums caught" },
    { value: "Incident", label: "From a violation" },
  ],
};

export const dataLossPreventionProblem = {
  eyebrow: "Why it matters",
  title: "Sensitive data leaves on a channel nobody approved",
  painPoints: [
    {
      title: "Approved tools are a list in a policy",
      description:
        "Email, cloud drives, and AI models the organisation allows live in a document. People still send files from a personal mailbox or a drive that was never on the list.",
      icon: Mail,
    },
    {
      title: "Shadow mediums stay invisible",
      description:
        "A dormant AI tool, an unknown drive, or a personal mail account moves data without appearing next to the approved providers.",
      icon: ScanSearch,
    },
    {
      title: "Policies name the rule, not the data",
      description:
        "A rule says not to share customer data. It does not say which infotypes to block, which keywords to audit, or which files to inspect.",
      icon: Fingerprint,
    },
    {
      title: "A block ends at the alert",
      description:
        "The violation is sent, then it sits in a feed. It never becomes a risk incident with an owner and a treatment.",
      icon: Siren,
    },
  ],
};

export const dataLossPreventionApproach = {
  eyebrow: "The Observeri approach",
  title: "Approve the channels, then catch everything else",
  items: [
    {
      title: "Start with the approved providers",
      description:
        "The organisation lists the email service providers, cloud drive providers, and AI models that are allowed. That list is the boundary.",
      icon: Mail,
    },
    {
      title: "Catch the shadow medium",
      description:
        "When someone uses an email service, a cloud drive, or an AI model outside the approved list, the system catches that shadow medium.",
      icon: ScanSearch,
    },
    {
      title: "Infotypes and policies decide the action",
      description:
        "Teams define the infotypes, then policies that block, audit keywords, or audit files. Each match sends a violation.",
      icon: Ban,
    },
    {
      title: "A violation can become a risk incident",
      description:
        "From the violation, the team opens a risk incident, so the blocked or audited event has an owner and a treatment path.",
      icon: Siren,
    },
  ],
};

export const dataLossPreventionWorkflow: DataLossPreventionStep[] = [
  {
    step: 1,
    title: "Approve the channels",
    subtitle: "Email, cloud drive, and AI models",
    description:
      "Record the email service providers, cloud drive providers, and AI models the organisation allows. Everything the policies watch is measured against that list.",
    icon: Mail,
    signals: ["Email providers", "Cloud drives", "AI models", "Approved list"],
  },
  {
    step: 2,
    title: "Catch the shadow medium",
    subtitle: "Use outside the approved list",
    description:
      "If someone reaches for an email service, a cloud drive, or an AI model that is not approved, the system catches it, including a tool that has gone dormant.",
    icon: ScanSearch,
    signals: ["Unapproved email", "Unapproved drive", "Shadow AI", "Dormant tool"],
  },
  {
    step: 3,
    title: "Define the infotypes",
    subtitle: "The data the policy looks for",
    description:
      "Name the infotypes the organisation cares about, such as email addresses, phone numbers, payment cards, national IDs, and secrets, and apply them to keywords and to files.",
    icon: Fingerprint,
    signals: ["Email", "Phone number", "Payment card", "National ID", "Secrets"],
  },
  {
    step: 4,
    title: "Set the policy",
    subtitle: "Block, audit, or warn",
    description:
      "Each policy says what it does when an infotype matches: block the action, audit the keywords, or audit the file. A policy can be enabled or left disabled until the organisation is ready.",
    icon: Ban,
    signals: ["Block", "Audit keywords", "Audit files", "Warn"],
  },
  {
    step: 5,
    title: "Send the violation",
    subtitle: "The match leaves a record",
    description:
      "When a policy matches, the violation is sent with the tool, the time, and the outcome, so a block or an audit is visible to the team that owns the channel.",
    icon: Send,
    signals: ["Tool", "Time", "Blocked", "Audited"],
  },
  {
    step: 6,
    title: "Open a risk incident",
    subtitle: "The violation gets an owner",
    description:
      "Convert the violation into a risk incident. The incident carries the channel, the infotype, and the policy, and it follows the same treatment path as any other risk.",
    icon: Siren,
    signals: ["Violation", "Risk incident", "Owner", "Treatment"],
  },
];

export const dataLossPreventionFeatures = [
  {
    title: "Approved email providers",
    description: "The email services the organisation allows, used as the boundary for outbound mail.",
    icon: Mail,
  },
  {
    title: "Approved cloud drives",
    description: "The cloud drive providers the organisation allows, so files leave only through those drives.",
    icon: Cloud,
  },
  {
    title: "Approved AI models",
    description: "The AI models the organisation allows, public or private, named before anyone can use them.",
    icon: Bot,
  },
  {
    title: "Shadow mediums",
    description: "An email service, cloud drive, or AI model outside the approved list is caught when someone uses it.",
    icon: ScanSearch,
  },
  {
    title: "Infotypes",
    description: "The data types a policy looks for in keywords and in files, defined by the organisation.",
    icon: Fingerprint,
  },
  {
    title: "Block, audit, and warn",
    description: "A policy blocks the action, audits the keywords, audits the file, or warns, and records which it did.",
    icon: Ban,
  },
  {
    title: "Violations sent",
    description: "Each match is sent with the tool, the time, and the outcome, for the team that owns the channel.",
    icon: Send,
  },
  {
    title: "Risk incident",
    description: "A violation converts into a risk incident, with the channel, the infotype, and the policy on the record.",
    icon: Siren,
  },
];

export const dataLossPreventionOutcomes = [
  {
    title: "The approved list is the boundary",
    description: "Email providers, cloud drives, and AI models the organisation allows are named in one place.",
  },
  {
    title: "Shadow use is caught",
    description: "A medium outside that list shows up when someone uses it, including a tool that had gone quiet.",
  },
  {
    title: "A violation can be worked as a risk",
    description: "Block, audit, and warn each send a violation, and that violation can be opened as a risk incident.",
  },
];

export const dataLossPreventionCapabilities = [
  "Approved email service providers, cloud drive providers, and AI models",
  "Shadow mediums caught when someone uses a channel outside that list",
  "Infotypes defined by the organisation for keywords and for files",
  "Policies that block, audit keywords, audit files, or warn",
  "A violation sent with the tool, the time, and the outcome",
  "A violation converted into a risk incident",
  "Dormant tools kept visible beside the channels still in use",
];

export const dataLossPreventionStats = [
  { value: "3", label: "Approved channel types" },
  { value: "Catch", label: "Shadow mediums" },
  { value: "Policy", label: "Block or audit" },
  { value: "Incident", label: "From a violation" },
];
