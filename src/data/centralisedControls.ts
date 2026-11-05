import {
  BadgeCheck,
  Gauge,
  Library,
  ListChecks,
  ShieldAlert,
  Siren,
  Upload,
  Waypoints,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type CentralisedControlsStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export const centralisedControlsIcon = ListChecks;

export const centralisedControlsHero = {
  eyebrow: "Centralised Controls",
  heroPills: [
    { label: "3,000+ control library", icon: Library },
    { label: "Applicability approved", icon: BadgeCheck },
    { label: "Testing, evidence, rating", icon: Workflow },
    { label: "Mapped records update", icon: Waypoints },
  ],
  outcomes: [
    { value: "3,000+", label: "Controls in the library" },
    { value: "Test", label: "Workflow and evidence" },
    { value: "Live", label: "Risk, compliance, incidents" },
  ],
};

export const centralisedControlsProblem = {
  eyebrow: "Why it matters",
  title: "A control is tested in one place and stale everywhere else",
  painPoints: [
    {
      title: "The library is a spreadsheet",
      description:
        "Thousands of controls sit in copies. Nobody can say which ones the organisation has actually approved as applicable.",
      icon: Library,
    },
    {
      title: "Testing leaves the workflow",
      description:
        "A test is an email thread and a folder of files. The result never lands on the control that was supposed to be tested.",
      icon: Workflow,
    },
    {
      title: "Evidence and the rating drift apart",
      description:
        "Files are uploaded somewhere, and the effectiveness rating is typed somewhere else. The two are not the same record.",
      icon: Upload,
    },
    {
      title: "Mapped records keep the old score",
      description:
        "Risk, compliance, and incidents still show the effectiveness from the last time someone remembered to copy it across.",
      icon: Waypoints,
    },
  ],
};

export const centralisedControlsApproach = {
  eyebrow: "The Observeri approach",
  title: "One library, one test, and every mapped record moves with it",
  items: [
    {
      title: "A library of 3,000+ controls",
      description:
        "The controls library is the inventory. Each control is available to the organisation before anyone decides that it applies.",
      icon: Library,
    },
    {
      title: "The organisation approves applicability",
      description:
        "Applicability is a decision on the control: it applies, or it does not. Only an applicable control enters testing.",
      icon: BadgeCheck,
    },
    {
      title: "Test, evidence, and a rating",
      description:
        "Users run the test through a workflow, upload the evidence, and rate the control effectiveness on that same control.",
      icon: Gauge,
    },
    {
      title: "Mapped records update with the rating",
      description:
        "When effectiveness changes, every risk, compliance item, and incident the control maps to updates with it.",
      icon: Waypoints,
    },
  ],
};

export const centralisedControlsWorkflow: CentralisedControlsStep[] = [
  {
    step: 1,
    title: "Open the library",
    subtitle: "An inventory of 3,000+ controls",
    description:
      "Start from the controls library. The inventory holds more than 3,000 controls, ready for the organisation to decide which ones apply.",
    icon: Library,
    signals: ["Control library", "3,000+ controls", "Inventory", "Shared catalogue"],
  },
  {
    step: 2,
    title: "Approve applicability",
    subtitle: "The organisation decides what applies",
    description:
      "Mark each control applicable or not. That decision is the organisation's, and it is what admits a control into the testing workflow.",
    icon: BadgeCheck,
    signals: ["Applicable", "Not applicable", "Organisation decision", "In scope"],
  },
  {
    step: 3,
    title: "Run the test",
    subtitle: "A workflow, not a side channel",
    description:
      "Users perform control testing through a workflow: who tests, what is in scope, and where the test stands, from open to complete.",
    icon: Workflow,
    signals: ["Test workflow", "Tester", "In progress", "Completed"],
  },
  {
    step: 4,
    title: "Upload the evidence",
    subtitle: "The proof sits on the test",
    description:
      "Evidence is uploaded to the test. The files stay with the control they support, so a later review opens the same record.",
    icon: Upload,
    signals: ["Evidence", "Upload", "Control", "Test record"],
  },
  {
    step: 5,
    title: "Rate effectiveness",
    subtitle: "The control gets a current score",
    description:
      "The tester rates control effectiveness. The rating replaces the previous one on that control, and it is the figure the rest of the platform reads.",
    icon: Gauge,
    signals: ["Effectiveness", "Rating", "Control", "Current score"],
  },
  {
    step: 6,
    title: "Update every mapping",
    subtitle: "Risk, compliance, and incidents",
    description:
      "Once effectiveness is updated, every risk, compliance item, and incident the control maps to updates automatically. The mapped records do not keep the old rating.",
    icon: Waypoints,
    signals: ["Risk", "Compliance", "Incidents", "Automatic update"],
  },
];

export const centralisedControlsFeatures = [
  {
    title: "Controls library",
    description: "An inventory of more than 3,000 controls, held in one library rather than in copied lists.",
    icon: Library,
  },
  {
    title: "Applicability",
    description: "The organisation approves whether each control applies before it enters testing.",
    icon: BadgeCheck,
  },
  {
    title: "Testing workflows",
    description: "Users perform control testing through a workflow, with the test status on the control.",
    icon: Workflow,
  },
  {
    title: "Evidence upload",
    description: "Evidence is uploaded to the test, so the files and the control stay on one record.",
    icon: Upload,
  },
  {
    title: "Effectiveness rating",
    description: "The tester rates control effectiveness, and that rating becomes the current score on the control.",
    icon: Gauge,
  },
  {
    title: "Mapped risk",
    description: "A changed effectiveness rating updates every risk the control maps to.",
    icon: ShieldAlert,
  },
  {
    title: "Mapped compliance",
    description: "Compliance items mapped to the control take the new effectiveness with the same update.",
    icon: ListChecks,
  },
  {
    title: "Mapped incidents",
    description: "Incidents mapped to the control update when the effectiveness rating changes.",
    icon: Siren,
  },
];

export const centralisedControlsOutcomes = [
  {
    title: "Applicability is a decision",
    description: "The library is large. The organisation approves which controls apply, and testing follows that decision.",
  },
  {
    title: "The test carries its evidence",
    description: "Workflow, uploaded evidence, and the effectiveness rating live on the control that was tested.",
  },
  {
    title: "Mappings stay current",
    description: "Risk, compliance, and incidents that use the control receive the new effectiveness when it is updated.",
  },
];

export const centralisedControlsCapabilities = [
  "Controls library with an inventory of more than 3,000 controls",
  "Applicability approved by the organisation before a control is tested",
  "Control testing performed through a workflow",
  "Evidence uploaded to the test",
  "Control effectiveness rated on the control",
  "Automatic update of every mapped risk, compliance item, and incident",
  "One current effectiveness score, read by every record the control maps to",
];

export const centralisedControlsStats = [
  { value: "3,000+", label: "Controls in the library" },
  { value: "Apply", label: "Organisation approved" },
  { value: "Test", label: "Workflow and evidence" },
  { value: "Live", label: "Mapped records update" },
];
