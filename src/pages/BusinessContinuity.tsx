import { ProductNarrative } from "@/components/ProductNarrative";
import {
  businessContinuityApproach,
  businessContinuityCapabilities,
  businessContinuityFeatures,
  businessContinuityHero,
  businessContinuityIcon,
  businessContinuityOutcomes,
  businessContinuityProblem,
  businessContinuityStats,
  businessContinuityWorkflow,
} from "@/data/businessContinuity";

const BusinessContinuity = () => (
  <ProductNarrative
    content={{
      path: "/products/business-continuity-management",
      icon: businessContinuityIcon,
      image: {
        src: "/business-continuity.webp",
        alt: "Observeri business continuity dashboard with resilience score, BIA completion, drill completion, and recovery objective compliance",
      },
      hero: businessContinuityHero,
      problem: businessContinuityProblem,
      approach: businessContinuityApproach,
      workflowTitle: "From the BIA register to a simulated exercise",
      workflowBody:
        "Maintain the BIA register, tie DR and BCP plans to it, run crisis management in a war room, and simulate the whole BCP or DR exercise.",
      workflow: businessContinuityWorkflow,
      featuresTitle: "What business continuity management holds together",
      features: businessContinuityFeatures,
      outcomesTitle: "Impact, plans, and the room that rehearses them",
      outcomes: businessContinuityOutcomes,
      capabilitiesTitle: "Register, plans, war room, and the exercise",
      capabilitiesBody:
        "The BIA register is the record. DR and BCP plans are tied to it. Crisis management uses a war room for real-time actions and decisions, and an exercise can simulate that whole path.",
      capabilities: businessContinuityCapabilities,
      statsTitle: "Continuity scope",
      stats: businessContinuityStats,
      ctaTitle: "Rehearse the event before it is the event",
      ctaBody:
        "Keep a BIA register, tie DR and BCP plans to it, run a crisis war room, and simulate the whole exercise.",
      secondary: { label: "Explore Operational Risk", href: "/products/operational-risk" },
    }}
  />
);

export default BusinessContinuity;
