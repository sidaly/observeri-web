import { ProductNarrative } from "@/components/ProductNarrative";
import {
  aiGovernanceApproach,
  aiGovernanceCapabilities,
  aiGovernanceFeatures,
  aiGovernanceHero,
  aiGovernanceIcon,
  aiGovernanceOutcomes,
  aiGovernanceProblem,
  aiGovernanceStats,
  aiGovernanceWorkflow,
} from "@/data/aiGovernance";

const AiGovernance = () => (
  <ProductNarrative
    content={{
      path: "/products/ai-governance",
      icon: aiGovernanceIcon,
      image: {
        src: "/ai-risk-trust-attestation.webp",
        alt: "Observeri AI governance trust attestation for the model inventory",
      },
      hero: aiGovernanceHero,
      problem: aiGovernanceProblem,
      approach: aiGovernanceApproach,
      workflowTitle: "Seven stages from ISO/IEC 22989:2022",
      workflowBody:
        "Each public and private model moves from inception to retirement on one record. Continuous validation stays inside operation when the system keeps learning.",
      workflow: aiGovernanceWorkflow,
      featuresTitle: "What the AI inventory governs",
      features: aiGovernanceFeatures,
      outcomesTitle: "A model has a stage, an owner, and a record",
      outcomes: aiGovernanceOutcomes,
      capabilitiesTitle: "Inventory and life cycle on one record",
      capabilitiesBody:
        "The seven stages follow ISO/IEC 22989:2022. Continuous validation, named separately in the standard for systems that learn in production, runs inside operation and monitoring.",
      capabilities: aiGovernanceCapabilities,
      statsTitle: "Governance scope",
      stats: aiGovernanceStats,
      ctaTitle: "Know every model and the stage it is in",
      ctaBody:
        "Inventory public and private AI models, then govern each one through the ISO/IEC 22989:2022 life cycle until retirement.",
      secondary: { label: "Explore AI Risk", href: "/products/ai-risk" },
    }}
  />
);

export default AiGovernance;
