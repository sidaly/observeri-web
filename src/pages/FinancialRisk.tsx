import { ProductNarrative } from "@/components/ProductNarrative";
import {
  financialRiskApproach,
  financialRiskCapabilities,
  financialRiskFeatures,
  financialRiskHero,
  financialRiskIcon,
  financialRiskOutcomes,
  financialRiskProblem,
  financialRiskStats,
  financialRiskWorkflow,
} from "@/data/financialRisk";

const FinancialRisk = () => (
  <ProductNarrative
    content={{
      path: "/products/financial-risk",
      icon: financialRiskIcon,
      image: {
        src: "/financial-risk.webp",
        alt: "Observeri financial risk register with organisation limits, utilisation, breach status, and escalation paths",
      },
      hero: financialRiskHero,
      problem: financialRiskProblem,
      approach: financialRiskApproach,
      workflowTitle: "From a limit the organisation sets to the capital impact",
      workflowBody:
        "Register capital, market, and liquidity risks, test each one against its limit, and keep the regulatory capital impact on the same record.",
      workflow: financialRiskWorkflow,
      featuresTitle: "What the financial risk register watches",
      features: financialRiskFeatures,
      outcomesTitle: "A breach carries its capital impact with it",
      outcomes: financialRiskOutcomes,
      capabilitiesTitle: "Limits, status, and regulatory capital",
      capabilitiesBody:
        "Credit sits on the same register as capital, market, and liquidity. Each risk is tested against the limits the organisation defined, including every limit above it in the taxonomy.",
      capabilities: financialRiskCapabilities,
      statsTitle: "Limit scope",
      stats: financialRiskStats,
      ctaTitle: "See the limit before it becomes a capital issue",
      ctaBody:
        "Monitor capital, market, and liquidity risks against organisation-defined limits, escalate a warning or a breach, and keep the regulatory capital impact on the record.",
      secondary: { label: "Explore Operational Risk", href: "/products/operational-risk" },
    }}
  />
);

export default FinancialRisk;
