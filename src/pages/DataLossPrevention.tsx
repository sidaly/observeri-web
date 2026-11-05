import { ProductNarrative } from "@/components/ProductNarrative";
import {
  dataLossPreventionApproach,
  dataLossPreventionCapabilities,
  dataLossPreventionFeatures,
  dataLossPreventionHero,
  dataLossPreventionIcon,
  dataLossPreventionOutcomes,
  dataLossPreventionProblem,
  dataLossPreventionStats,
  dataLossPreventionWorkflow,
} from "@/data/dataLossPrevention";

const DataLossPrevention = () => (
  <ProductNarrative
    content={{
      path: "/products/data-loss-prevention",
      icon: dataLossPreventionIcon,
      image: {
        src: "/data-loss-prevention.webp",
        alt: "Observeri data loss prevention with violations, shadow discoveries, policies, and blocked activity",
      },
      hero: dataLossPreventionHero,
      problem: dataLossPreventionProblem,
      approach: dataLossPreventionApproach,
      workflowTitle: "From an approved channel to a risk incident",
      workflowBody:
        "Name the email, cloud drive, and AI tools the organisation allows, catch a shadow medium, and turn a policy violation into a risk incident.",
      workflow: dataLossPreventionWorkflow,
      featuresTitle: "What data loss prevention watches",
      features: dataLossPreventionFeatures,
      outcomesTitle: "A shadow medium becomes a record the team can work",
      outcomes: dataLossPreventionOutcomes,
      capabilitiesTitle: "Approved channels, policies, and incidents",
      capabilitiesBody:
        "The organisation defines the infotypes and the policies. A match can block, audit keywords, or audit files, and the violation it sends can be opened as a risk incident.",
      capabilities: dataLossPreventionCapabilities,
      statsTitle: "Prevention scope",
      stats: dataLossPreventionStats,
      ctaTitle: "See the channel before the data leaves",
      ctaBody:
        "Approve the email, cloud drive, and AI tools, catch shadow mediums, and convert a violation into a risk incident.",
      secondary: { label: "Explore Data Privacy", href: "/products/data-privacy-protection" },
    }}
  />
);

export default DataLossPrevention;
