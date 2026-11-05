import { ProductNarrative } from "@/components/ProductNarrative";
import {
  operationalRiskApproach,
  operationalRiskCapabilities,
  operationalRiskFeatures,
  operationalRiskHero,
  operationalRiskIcon,
  operationalRiskOutcomes,
  operationalRiskProblem,
  operationalRiskStats,
  operationalRiskWorkflow,
} from "@/data/operationalRisk";

const OperationalRisk = () => (
  <ProductNarrative
    content={{
      path: "/products/operational-risk",
      icon: operationalRiskIcon,
      image: {
        src: "/operational-risk.webp",
        alt: "Observeri operational risk dashboard with appetite posture, business-unit exposure, and the top risks",
      },
      hero: operationalRiskHero,
      problem: operationalRiskProblem,
      approach: operationalRiskApproach,
      workflowTitle: "From the assessment to a tested capital figure",
      workflowBody:
        "Assess the risk, run the RCSA, map live KRIs, record loss events, and monitor operational capital under Pillar 1 and Pillar 2, then back-test it.",
      workflow: operationalRiskWorkflow,
      featuresTitle: "What the operational risk record holds",
      features: operationalRiskFeatures,
      outcomesTitle: "The register, the indicator, and the capital stay together",
      outcomes: operationalRiskOutcomes,
      capabilitiesTitle: "Assessment, indicators, losses, and capital",
      capabilitiesBody:
        "Pillar 1 is the minimum operational-risk capital view. Pillar 2 is the firm's own capital view against its risk profile and appetite, and it can sit above that minimum. Back-testing compares both with recorded losses.",
      capabilities: operationalRiskCapabilities,
      statsTitle: "Quantification scope",
      stats: operationalRiskStats,
      ctaTitle: "See operational risk against appetite and capital",
      ctaBody:
        "Run the assessment and the RCSA, map KRIs to each risk, track loss events, and monitor operational capital with Pillar 1, Pillar 2, and back-testing.",
      secondary: { label: "Explore Cyber Risk", href: "/products/cyber-risk-management" },
    }}
  />
);

export default OperationalRisk;
