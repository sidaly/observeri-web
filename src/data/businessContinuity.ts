import {
  ClipboardList,
  Files,
  LifeBuoy,
  Play,
  Radio,
  Route,
  Siren,
  type LucideIcon,
} from "lucide-react";

export type BusinessContinuityStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export const businessContinuityIcon = LifeBuoy;

export const businessContinuityHero = {
  eyebrow: "Business Continuity",
  heroPills: [
    { label: "BIA register", icon: ClipboardList },
    { label: "DR and BCP plans", icon: Files },
    { label: "Crisis war room", icon: Radio },
    { label: "Exercises and simulation", icon: Play },
  ],
  outcomes: [
    { value: "BIA", label: "Register kept current" },
    { value: "Plans", label: "Tied to the BIA" },
    { value: "Live", label: "War room decisions" },
  ],
};

export const businessContinuityProblem = {
  eyebrow: "Why it matters",
  title: "The plan, the impact analysis, and the crisis are three different books",
  painPoints: [
    {
      title: "The BIA is a document",
      description:
        "Business impact sits in a register that was last edited for an audit. Processes, dependencies, and recovery needs drift after that.",
      icon: ClipboardList,
    },
    {
      title: "Plans are not tied to the impact",
      description:
        "DR and BCP plans live beside the BIA. A change in impact does not change the plan that is supposed to recover it.",
      icon: Files,
    },
    {
      title: "A crisis is a call chain",
      description:
        "When something fails, actions and decisions move through messages. The war room, if it exists, is a meeting rather than a record.",
      icon: Siren,
    },
    {
      title: "An exercise is a slide",
      description:
        "BCP and DR drills are scheduled, then described afterwards. The organisation never runs the whole exercise as a simulation.",
      icon: Play,
    },
  ],
};

export const businessContinuityApproach = {
  eyebrow: "The Observeri approach",
  title: "One BIA register, plans that hang off it, and a room that can rehearse",
  items: [
    {
      title: "A BIA register the organisation maintains",
      description:
        "Users create and keep the business impact analysis register: the processes, what they depend on, and what the impact is if they stop.",
      icon: ClipboardList,
    },
    {
      title: "DR and BCP plans tied to that register",
      description:
        "Each disaster recovery and business continuity plan is tied to the BIA entries it recovers. The plan and the impact stay on one record.",
      icon: Files,
    },
    {
      title: "A crisis war room in real time",
      description:
        "Crisis management opens a war room. Actions and decisions are taken there as the event moves, with the room as the record.",
      icon: Radio,
    },
    {
      title: "Exercises that simulate the whole event",
      description:
        "Teams conduct BCP and DR exercises, and they can simulate the whole exercise rather than walk through a fragment of it.",
      icon: Play,
    },
  ],
};

export const businessContinuityWorkflow: BusinessContinuityStep[] = [
  {
    step: 1,
    title: "Create the BIA register",
    subtitle: "Impact, process, and dependency",
    description:
      "Open the business impact analysis register and record the processes, their dependencies, and the impact if they stop. The register is what the plans and the exercises hang from.",
    icon: ClipboardList,
    signals: ["Processes", "Dependencies", "Impact", "Register"],
  },
  {
    step: 2,
    title: "Maintain the register",
    subtitle: "The BIA stays current",
    description:
      "Update the register when a process, a dependency, or an impact changes. Plans that are tied to those entries read the register as it stands.",
    icon: ClipboardList,
    signals: ["Update", "Process", "Impact", "Current register"],
  },
  {
    step: 3,
    title: "Tie the plans",
    subtitle: "DR and BCP on the BIA",
    description:
      "Maintain disaster recovery and business continuity plans against the BIA entries they cover. A plan is not a separate file. It is tied to the impact it is written to recover.",
    icon: Files,
    signals: ["DR plan", "BCP plan", "BIA entry", "Recovery"],
  },
  {
    step: 4,
    title: "Open the war room",
    subtitle: "Crisis management, live",
    description:
      "Crisis management opens a war room on the event. Actions and decisions are recorded there in real time, with the people who are taking them.",
    icon: Radio,
    signals: ["Crisis", "War room", "Actions", "Decisions"],
  },
  {
    step: 5,
    title: "Conduct the exercise",
    subtitle: "BCP and DR, on a plan",
    description:
      "Run a BCP or DR exercise against the plan and the BIA it is tied to. The exercise is a conducted event, with a start, the steps taken, and a result.",
    icon: Play,
    signals: ["BCP exercise", "DR exercise", "Plan", "Result"],
  },
  {
    step: 6,
    title: "Simulate the whole exercise",
    subtitle: "The event, end to end",
    description:
      "Simulate the whole exercise, from the first impact through the plan, the war room, and the decisions, so the organisation rehearses the event rather than a single step of it.",
    icon: Route,
    signals: ["Simulation", "End to end", "War room", "Decisions"],
  },
];

export const businessContinuityFeatures = [
  {
    title: "BIA register",
    description: "Create and maintain the business impact analysis: processes, dependencies, and impact.",
    icon: ClipboardList,
  },
  {
    title: "Plans tied to the BIA",
    description: "DR and BCP plans are maintained against the BIA entries they are written to recover.",
    icon: Files,
  },
  {
    title: "Crisis management",
    description: "A crisis is managed as an event, with the people, the impact, and the plan in one place.",
    icon: Siren,
  },
  {
    title: "War room",
    description: "The war room stays open on the crisis, with actions and decisions taken as the event moves.",
    icon: Radio,
  },
  {
    title: "Real-time actions",
    description: "Actions in the war room are recorded as they happen, on the crisis they belong to.",
    icon: Radio,
  },
  {
    title: "Real-time decisions",
    description: "Decisions are taken in the room and kept with the action they follow.",
    icon: LifeBuoy,
  },
  {
    title: "BCP and DR exercises",
    description: "Conduct exercises against the plans and the BIA entries those plans are tied to.",
    icon: Play,
  },
  {
    title: "Full simulation",
    description: "Simulate the whole exercise, from impact through the plan, the war room, and the decisions.",
    icon: Route,
  },
];

export const businessContinuityOutcomes = [
  {
    title: "The BIA is the register plans use",
    description: "Impact is maintained in one register, and DR and BCP plans are tied to the entries in it.",
  },
  {
    title: "A crisis has a room",
    description: "Crisis management runs in a war room, with actions and decisions taken in real time.",
  },
  {
    title: "An exercise can be the whole event",
    description: "Teams conduct BCP and DR exercises, and they can simulate the exercise from the first impact to the last decision.",
  },
];

export const businessContinuityCapabilities = [
  "BIA register created and maintained by the organisation",
  "DR and BCP plans tied to the BIA entries they recover",
  "Crisis management with a war room on the event",
  "Real-time actions and decisions inside the war room",
  "BCP and DR exercises conducted against the plans",
  "Simulation of the whole exercise, end to end",
];

export const businessContinuityStats = [
  { value: "BIA", label: "Register" },
  { value: "Plans", label: "Tied to the BIA" },
  { value: "Room", label: "Live decisions" },
  { value: "Drill", label: "Full simulation" },
];
