import {
  CalendarClock,
  Cloud,
  CloudCog,
  Monitor,
  Radar,
  Server,
  type LucideIcon,
} from "lucide-react";

export type AutomatedComplianceStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export const automatedComplianceIcon = CloudCog;

export const automatedComplianceHero = {
  eyebrow: "Automated Compliance",
  heroPills: [
    { label: "On-prem agent", icon: Server },
    { label: "Virtual connector", icon: CloudCog },
    { label: "Scheduled assessment", icon: CalendarClock },
    { label: "Real-time risk view", icon: Radar },
  ],
  outcomes: [
    { value: "Agent", label: "Windows and Linux" },
    { value: "Cloud", label: "Azure, GCP, AWS, Oracle" },
    { value: "Live", label: "Real-time risk view" },
  ],
};

export const automatedComplianceProblem = {
  eyebrow: "Why it matters",
  title: "Posture is checked by hand, and the risk view is already old",
  painPoints: [
    {
      title: "Windows and Linux wait for a visit",
      description:
        "Someone logs in, runs a checklist, and files the result. The next change on the host is invisible until the next visit.",
      icon: Monitor,
    },
    {
      title: "Four clouds, four consoles",
      description:
        "Azure, GCP, AWS, and Oracle Cloud each have their own posture screen. Nobody is looking at the stack as one assessment.",
      icon: CloudCog,
    },
    {
      title: "The assessment has no schedule",
      description:
        "A check runs when a team has time. On-prem and cloud drift between those moments, and the last report is what leaders still see.",
      icon: CalendarClock,
    },
    {
      title: "Risk is a slide from last quarter",
      description:
        "The organisation asks what the stack looks like now. The answer is a spreadsheet that was true when it was exported.",
      icon: Radar,
    },
  ],
};

export const automatedComplianceApproach = {
  eyebrow: "The Observeri approach",
  title: "An agent on the hosts, a connector in the cloud, a risk view that moves",
  items: [
    {
      title: "An on-prem agent for Windows and Linux",
      description:
        "The organisation runs automated compliance on Windows and Linux environments from an agent that stays on the premises.",
      icon: Server,
    },
    {
      title: "A virtual connector for the four clouds",
      description:
        "The virtual connector runs compliance on Azure, GCP, AWS, and Oracle Cloud, on the same assessment as the hosts.",
      icon: CloudCog,
    },
    {
      title: "Assessments on a schedule",
      description:
        "Users schedule the assessment. On-prem and cloud posture is checked when the schedule says, not when someone remembers.",
      icon: CalendarClock,
    },
    {
      title: "A real-time risk view of the stack",
      description:
        "As the checks finish, the organisation sees the posture of the on-prem and cloud stack in one risk view.",
      icon: Radar,
    },
  ],
};

export const automatedComplianceWorkflow: AutomatedComplianceStep[] = [
  {
    step: 1,
    title: "Place the on-prem agent",
    subtitle: "Windows and Linux environments",
    description:
      "Install the agent where the organisation runs Windows and Linux. Automated compliance on those environments starts from that agent.",
    icon: Server,
    signals: ["Windows", "Linux", "On-prem agent", "Hosts"],
  },
  {
    step: 2,
    title: "Connect the clouds",
    subtitle: "Azure, GCP, AWS, and Oracle Cloud",
    description:
      "Attach the virtual connector to Azure, GCP, AWS, and Oracle Cloud. The connector runs compliance on those accounts from the same place as the agent.",
    icon: CloudCog,
    signals: ["Azure", "GCP", "AWS", "Oracle Cloud"],
  },
  {
    step: 3,
    title: "Schedule the assessment",
    subtitle: "The check has a time",
    description:
      "Set when the assessment runs for the on-prem stack, the cloud stack, or both. The schedule is what keeps posture from waiting on a manual pass.",
    icon: CalendarClock,
    signals: ["Schedule", "On-prem", "Cloud", "Repeat"],
  },
  {
    step: 4,
    title: "Read on-prem posture",
    subtitle: "What the agent found",
    description:
      "Each run records the posture of the Windows and Linux environments the agent covers, so a host that needs review is visible on that assessment.",
    icon: Monitor,
    signals: ["Windows", "Linux", "Posture", "Review"],
  },
  {
    step: 5,
    title: "Read cloud posture",
    subtitle: "What the connector found",
    description:
      "The same assessment records Azure, GCP, AWS, and Oracle Cloud. Cloud posture sits next to the hosts, not in a separate console.",
    icon: CloudCog,
    signals: ["Azure", "GCP", "AWS", "Oracle Cloud"],
  },
  {
    step: 6,
    title: "Open the risk view",
    subtitle: "The stack, as the checks finish",
    description:
      "The organisation gets a real-time risk view of on-prem and cloud posture. The view moves when an assessment completes, so the stack is not described by last quarter's export.",
    icon: Radar,
    signals: ["Real-time", "On-prem", "Cloud", "Risk view"],
  },
];

export const automatedComplianceFeatures = [
  {
    title: "On-prem agent",
    description: "Automated compliance on the environments the organisation runs inside its own network.",
    icon: Server,
  },
  {
    title: "Windows and Linux",
    description: "The agent runs the assessment on Windows and Linux environments.",
    icon: Monitor,
  },
  {
    title: "Virtual connector",
    description: "A connector that runs compliance on the cloud accounts, beside the on-prem agent.",
    icon: CloudCog,
  },
  {
    title: "Azure, GCP, AWS, Oracle Cloud",
    description: "The virtual connector covers Microsoft Azure, Google Cloud, Amazon Web Services, and Oracle Cloud.",
    icon: Cloud,
  },
  {
    title: "Scheduled assessments",
    description: "Users schedule the assessment so on-prem and cloud posture is checked on a cadence.",
    icon: CalendarClock,
  },
  {
    title: "Posture management",
    description: "Each run shows the posture of the on-prem stack and the cloud stack on one assessment.",
    icon: Radar,
  },
  {
    title: "Real-time risk view",
    description: "As checks finish, the organisation sees the risk view of the whole stack, not a stale export.",
    icon: Radar,
  },
];

export const automatedComplianceOutcomes = [
  {
    title: "Hosts and clouds on one assessment",
    description: "Windows, Linux, Azure, GCP, AWS, and Oracle Cloud are checked from the agent and the virtual connector.",
  },
  {
    title: "The schedule keeps the posture current",
    description: "Assessments run when they are scheduled, for the on-prem stack, the cloud stack, or both.",
  },
  {
    title: "Leaders see the stack as it stands",
    description: "The real-time risk view updates as the checks finish, across on-prem and cloud.",
  },
];

export const automatedComplianceCapabilities = [
  "On-prem agent for automated compliance on Windows and Linux",
  "Virtual connector for Azure, GCP, AWS, and Oracle Cloud",
  "Scheduled assessments for the on-prem stack and the cloud stack",
  "Posture from each run, for hosts and for cloud accounts",
  "A real-time risk view of the on-prem and cloud stack",
  "One assessment that covers the environments the organisation actually runs",
];

export const automatedComplianceStats = [
  { value: "Agent", label: "Windows and Linux" },
  { value: "4", label: "Clouds on the connector" },
  { value: "Set", label: "Scheduled assessments" },
  { value: "Live", label: "Real-time risk view" },
];
