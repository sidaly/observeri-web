import {
  Bot,
  ClipboardCheck,
  Layers,
  Library,
  Scale,
  Shield,
  ShieldAlert,
  Sparkles,
  Target,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type AiRiskWorkflowStep = {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  signals: string[];
};

export const aiRiskHero = {
  eyebrow: "AI Risk",
  heroPills: [
    { label: "Public and private model inventory", icon: Library },
    { label: "STRIDE threat models", icon: ShieldAlert },
    { label: "AI-suggested controls", icon: Sparkles },
    { label: "Risk treatment", icon: Target },
    { label: "EU AI Act classification", icon: Scale },
  ],
  outcomes: [
    { value: "EU Act", label: "Automatic classification" },
    { value: "STRIDE", label: "Threat model" },
    { value: "Treat", label: "Risk decisions" },
  ],
};

export const aiRiskProblem = {
  eyebrow: "Why it matters",
  title: "AI models reach production before the risk is known",
  painPoints: [
    {
      title: "No single model inventory",
      description:
        "Public APIs, vendor models, and private fine-tunes live in different teams, so nobody can say which models the enterprise actually runs.",
      icon: Library,
    },
    {
      title: "Threat models stay generic",
      description:
        "Assessments stop at a questionnaire. Spoofing, data leakage, and privilege paths through prompts, tools, and integrations are never mapped.",
      icon: ShieldAlert,
    },
    {
      title: "Controls are chosen by guesswork",
      description:
        "Teams pick safeguards after an incident. Suggested controls are not tied to the threat, the model, or the obligation that triggered them.",
      icon: Shield,
    },
    {
      title: "EU AI Act class is assigned too late",
      description:
        "Purpose changes, a model moves from experiment to customer use, and the risk tier is still a slide from the last review.",
      icon: Scale,
    },
  ],
};

export const aiRiskApproach = {
  eyebrow: "The Observeri approach",
  title: "Run AI risk from inventory through treatment",
  items: [
    {
      title: "One inventory for every model",
      description:
        "Register public foundation models and vendor APIs next to private fine-tunes and internal deployments, with owner, purpose, data, and hosting on each record.",
      icon: Library,
    },
    {
      title: "STRIDE on the system, not just the model",
      description:
        "Map spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege across data, prompts, tools, and operators.",
      icon: ShieldAlert,
    },
    {
      title: "Controls suggested from the assessment",
      description:
        "Observeri proposes controls for the threats and the EU AI Act tier, so mitigation starts from the finding instead of a generic checklist.",
      icon: Sparkles,
    },
    {
      title: "Treatment with an owner and a record",
      description:
        "Mitigate, accept, transfer, or avoid. Each decision keeps its tasks, evidence, and residual risk on the model record.",
      icon: Workflow,
    },
  ],
};

export const aiRiskWorkflow: AiRiskWorkflowStep[] = [
  {
    step: 1,
    title: "Build the model inventory",
    subtitle: "Public and private models in one register",
    description:
      "Add foundation models, vendor APIs, fine-tunes, and internal deployments. Capture purpose, owner, training and prompt data, hosting, and the systems the model can reach.",
    icon: Library,
    signals: ["Public model catalogue", "Private model register", "Owner and purpose", "Data and hosting context"],
  },
  {
    step: 2,
    title: "Classify under the EU AI Act",
    subtitle: "Automatic tier from intended use",
    description:
      "Observeri classifies each model from its purpose and deployment context into prohibited, high-risk, limited-risk transparency, or minimal-risk tiers, and refreshes the class when use changes.",
    icon: Scale,
    signals: ["Prohibited uses", "High-risk systems", "Transparency obligations", "Purpose-change review"],
  },
  {
    step: 3,
    title: "Run the STRIDE assessment",
    subtitle: "End-to-end threat model",
    description:
      "Walk spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege across the model, its data, integrations, and operators. Findings stay on the inventory record.",
    icon: ShieldAlert,
    signals: ["STRIDE categories", "Prompt and data paths", "Tool and API abuse", "Operator privilege"],
  },
  {
    step: 4,
    title: "Apply suggested controls",
    subtitle: "Safeguards matched to the finding",
    description:
      "AI proposes controls for each threat and for the EU AI Act tier — access limits, evaluation, logging, human oversight, and data boundaries — ready for the owner to accept or adjust.",
    icon: Sparkles,
    signals: ["Control suggestions", "Human oversight", "Evaluation and logging", "Data boundaries"],
  },
  {
    step: 5,
    title: "Treat the risk",
    subtitle: "Mitigate, accept, transfer, or avoid",
    description:
      "Turn the decision into tasks, route approval, and keep residual risk, evidence, and the current EU AI Act class on the model until the treatment is closed.",
    icon: Target,
    signals: ["Treatment decision", "Approval workflow", "Residual risk", "Evidence of closure"],
  },
];

export const aiRiskFeatures = [
  {
    title: "Public and private inventory",
    description: "Track vendor models and models you train or host, with purpose, data, owner, and deployment status on every record.",
    icon: Library,
  },
  {
    title: "EU AI Act classification",
    description: "Classify models automatically from intended purpose into prohibited, high-risk, limited-risk, or minimal-risk tiers.",
    icon: Scale,
  },
  {
    title: "STRIDE threat models",
    description: "Assess the model and the system around it across all six STRIDE categories, not a single generic risk score.",
    icon: ShieldAlert,
  },
  {
    title: "AI-suggested controls",
    description: "Receive controls mapped to the threat and the regulatory tier, then accept, edit, or reject each suggestion.",
    icon: Sparkles,
  },
  {
    title: "Risk treatment",
    description: "Record mitigate, accept, transfer, or avoid, with owners, tasks, and residual risk that stays attached to the model.",
    icon: ClipboardCheck,
  },
  {
    title: "Connected to the GRC program",
    description: "Feed treated AI risks into cyber risk, compliance evidence, and the AI Risk Operations Center without a second register.",
    icon: Layers,
  },
];

export const aiRiskOutcomes = [
  {
    title: "The estate is visible",
    description: "Leaders can see every public and private model, who owns it, and whether it is still an experiment or in production.",
  },
  {
    title: "Assessments finish in one path",
    description: "Classification, STRIDE, suggested controls, and treatment happen on the same record, so reviews do not restart in a spreadsheet.",
  },
  {
    title: "Obligations move with the model",
    description: "When purpose or deployment changes, the EU AI Act tier and the open treatments update with it.",
  },
];

export const aiRiskCapabilities = [
  "Inventory of public foundation models, vendor APIs, private fine-tunes, and internal deployments",
  "Automatic EU AI Act classification into prohibited, high-risk, limited-risk, and minimal-risk tiers",
  "STRIDE threat modeling across model, data, prompts, tools, and operators",
  "AI-suggested controls tied to each threat and to the regulatory tier",
  "Risk treatment for mitigate, accept, transfer, and avoid, with approval and evidence",
  "Residual risk kept on the model record after treatment",
  "Reclassification when intended purpose or deployment changes",
  "Handoff into cyber risk, compliance evidence, and the AI Risk Operations Center",
];

export const aiRiskStats = [
  { value: "4", label: "EU AI Act tiers" },
  { value: "6", label: "STRIDE categories" },
  { value: "2", label: "Inventory classes" },
  { value: "1", label: "Treatment record" },
];

export const aiRiskIcon = Bot;
