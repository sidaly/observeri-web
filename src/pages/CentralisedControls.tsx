import { ProductNarrative } from "@/components/ProductNarrative";
import {
  centralisedControlsApproach,
  centralisedControlsCapabilities,
  centralisedControlsFeatures,
  centralisedControlsHero,
  centralisedControlsIcon,
  centralisedControlsOutcomes,
  centralisedControlsProblem,
  centralisedControlsStats,
  centralisedControlsWorkflow,
} from "@/data/centralisedControls";

const CentralisedControls = () => (
  <ProductNarrative
    content={{
      path: "/products/centralised-controls-management",
      icon: centralisedControlsIcon,
      image: {
        src: "/centralised-controls.webp",
        alt: "Observeri centralised controls dashboard with test progress, effectiveness, key controls, and timeline status",
      },
      hero: centralisedControlsHero,
      problem: centralisedControlsProblem,
      approach: centralisedControlsApproach,
      workflowTitle: "From the library to every record the control maps to",
      workflowBody:
        "Approve which controls apply, test them through a workflow with evidence, rate effectiveness, and let every mapped risk, compliance item, and incident update.",
      workflow: centralisedControlsWorkflow,
      featuresTitle: "What centralised controls management keeps in one place",
      features: centralisedControlsFeatures,
      outcomesTitle: "One effectiveness rating, read everywhere it is mapped",
      outcomes: centralisedControlsOutcomes,
      capabilitiesTitle: "Library, test, and the records that depend on it",
      capabilitiesBody:
        "The organisation approves applicability from a library of more than 3,000 controls. A test uploads its evidence, the effectiveness rating is set, and every mapped risk, compliance item, and incident updates.",
      capabilities: centralisedControlsCapabilities,
      statsTitle: "Control scope",
      stats: centralisedControlsStats,
      ctaTitle: "Rate the control once, and every mapping moves with it",
      ctaBody:
        "Keep a library of 3,000+ controls, approve applicability, test with evidence, and update mapped risk, compliance, and incidents when effectiveness changes.",
      secondary: { label: "Explore Compliance", href: "/products/compliance-management" },
    }}
  />
);

export default CentralisedControls;
