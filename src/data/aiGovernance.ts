import {
  ClipboardCheck,
  Library,
  Lock,
  RefreshCw,
  Rocket,
  Scale,
  SearchCheck,
  Shield,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type AiGovernanceStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export const aiGovernanceIcon = Library;

export const aiGovernanceHero = {
  eyebrow: "AI Governance",
  heroPills: [
    { label: "Public and private model inventory", icon: Library },
    { label: "ISO/IEC 22989 life cycle", icon: Workflow },
    { label: "Owner on every model", icon: Shield },
    { label: "Stage gates before release", icon: ClipboardCheck },
  ],
  outcomes: [
    { value: "2", label: "Inventory classes" },
    { value: "7", label: "Life cycle stages" },
    { value: "1", label: "Record per model" },
  ],
};

export const aiGovernanceProblem = {
  eyebrow: "Why it matters",
  title: "Models are adopted before anyone governs them",
  painPoints: [
    {
      title: "Public and private models are split",
      description:
        "Vendor APIs sit in one spreadsheet and internal fine-tunes in another, so the estate has no single owner.",
      icon: Library,
    },
    {
      title: "Life cycle stops at go-live",
      description:
        "Teams record a launch and then lose the thread through operation, re-evaluation, and retirement.",
      icon: Workflow,
    },
    {
      title: "Stage decisions are informal",
      description:
        "A model moves from design to production because a project is late, not because verification is complete.",
      icon: Rocket,
    },
    {
      title: "Retirement leaves data behind",
      description:
        "When a model is replaced, access, prompts, and training data stay live with no decommission record.",
      icon: Lock,
    },
  ],
};

export const aiGovernanceApproach = {
  eyebrow: "The Observeri approach",
  title: "Govern every model from the inventory through retirement",
  items: [
    {
      title: "One inventory for public and private models",
      description:
        "Register foundation models and vendor APIs beside fine-tunes and internal deployments, with purpose, owner, data, and hosting on each record.",
      icon: Library,
    },
    {
      title: "The ISO/IEC 22989:2022 life cycle",
      description:
        "Move each model through inception, design and development, verification and validation, deployment, operation and monitoring, re-evaluation, and retirement.",
      icon: Workflow,
    },
    {
      title: "Continuous validation while it learns",
      description:
        "When a system keeps learning in operation, validation continues on production data inside operation and monitoring, as clause 6.2.7 of the standard describes.",
      icon: RefreshCw,
    },
    {
      title: "A gate before the next stage",
      description:
        "Each stage keeps its evidence, owner, and decision, so a model does not advance on a missing record.",
      icon: ClipboardCheck,
    },
  ],
};

export const aiGovernanceWorkflow: AiGovernanceStep[] = [
  {
    step: 1,
    title: "Inception",
    subtitle: "Purpose, owner, and feasibility",
    description:
      "Open the record with the business objective, intended use, data needs, and whether a public or private model is the right path.",
    icon: Sparkles,
    signals: ["Objective", "Intended use", "Owner", "Feasibility"],
  },
  {
    step: 2,
    title: "Design and development",
    subtitle: "Architecture, data, and build",
    description:
      "Record the architecture, training and prompt data, and how the model will be built or configured before any release.",
    icon: Workflow,
    signals: ["Architecture", "Training data", "Prompt data", "Build owner"],
  },
  {
    step: 3,
    title: "Verification and validation",
    subtitle: "Evidence before release",
    description:
      "Confirm the system meets its requirements and performs as intended. The stage stays open until the evidence is on the record.",
    icon: SearchCheck,
    signals: ["Requirements", "Test evidence", "Acceptance", "Open gaps"],
  },
  {
    step: 4,
    title: "Deployment",
    subtitle: "Release into the target environment",
    description:
      "Record where the model runs, who can reach it, and the configuration that left design. Public APIs and private hosting are both first-class.",
    icon: Rocket,
    signals: ["Environment", "Configuration", "Access", "Release decision"],
  },
  {
    step: 5,
    title: "Operation and monitoring",
    subtitle: "Run, watch, and keep validating",
    description:
      "Operate the model with logs, incidents, and outcome checks. Systems that keep learning stay under continuous validation on production data.",
    icon: Shield,
    signals: ["Operating logs", "Incidents", "Continuous validation", "Model updates"],
  },
  {
    step: 6,
    title: "Re-evaluation",
    subtitle: "Revisit objectives from results",
    description:
      "Use operating results to revisit the original objectives and requirements, and decide whether the model still belongs in production.",
    icon: Scale,
    signals: ["Operating results", "Objective review", "Requirement changes", "Continue or change"],
  },
  {
    step: 7,
    title: "Retirement",
    subtitle: "Decommission the model and the data",
    description:
      "Retire or replace the model, remove access, and dispose of training data, prompts, and files so a closed model cannot still be used.",
    icon: Lock,
    signals: ["Decommission", "Access removal", "Data disposal", "Replacement record"],
  },
];

export const aiGovernanceFeatures = [
  {
    title: "Public model inventory",
    description: "Foundation models, vendor APIs, and sanctioned tools, each with purpose, owner, and where prompts are sent.",
    icon: Library,
  },
  {
    title: "Private model inventory",
    description: "Fine-tunes and internal deployments, with hosting, data sources, and the systems the model can reach.",
    icon: Lock,
  },
  {
    title: "Life cycle stage on the record",
    description: "Every model shows its current ISO/IEC 22989:2022 stage, the owner of that stage, and the evidence still open.",
    icon: Workflow,
  },
  {
    title: "Stage gates",
    description: "Verification, deployment, and retirement wait on a recorded decision instead of a project date.",
    icon: ClipboardCheck,
  },
  {
    title: "Handoff to AI Risk",
    description: "The same inventory feeds STRIDE assessment, EU AI Act classification, and risk treatment without a second register.",
    icon: Scale,
  },
  {
    title: "Retirement with data disposal",
    description: "Closing a model records access removal and disposal of training data, prompts, and uploaded files.",
    icon: RefreshCw,
  },
];

export const aiGovernanceOutcomes = [
  {
    title: "The estate is one list",
    description: "Leaders see every public and private model, who owns it, and which life cycle stage it is in.",
  },
  {
    title: "Release follows evidence",
    description: "A model reaches deployment when verification and validation are recorded, not when a deadline arrives.",
  },
  {
    title: "Nothing retires on paper only",
    description: "Replacement includes access removal and data disposal, so a retired model cannot still accept prompts.",
  },
];

export const aiGovernanceCapabilities = [
  "Inventory of public foundation models, vendor APIs, private fine-tunes, and internal deployments",
  "ISO/IEC 22989:2022 stages from inception through retirement on each model record",
  "Continuous validation inside operation and monitoring when a system keeps learning",
  "Stage gates with owner, evidence, and an explicit decision",
  "Purpose, data, hosting, and access kept current as the model moves",
  "Retirement that covers decommission, access removal, and data disposal",
  "Shared record with AI Risk and AI Data Monitoring",
];

export const aiGovernanceStats = [
  { value: "7", label: "ISO/IEC 22989 stages" },
  { value: "2", label: "Public and private classes" },
  { value: "1", label: "Inventory record" },
  { value: "3", label: "Gates with evidence" },
];
