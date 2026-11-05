import { ProductNarrative } from "@/components/ProductNarrative";
import {
  enterpriseRiskApproach,
  enterpriseRiskCapabilities,
  enterpriseRiskFeatures,
  enterpriseRiskHero,
  enterpriseRiskIcon,
  enterpriseRiskOutcomes,
  enterpriseRiskProblem,
  enterpriseRiskStats,
  enterpriseRiskWorkflow,
} from "@/data/enterpriseRisk";

const EnterpriseRisk = () => (
  <ProductNarrative
    content={{
      path: "/products/enterprise-risk",
      icon: enterpriseRiskIcon,
      image: {
        src: "/enterprise-risk.webp",
        alt: "Observeri enterprise risk heatmap across nine domains and the integrated patterns between them",
      },
      hero: enterpriseRiskHero,
      problem: enterpriseRiskProblem,
      approach: enterpriseRiskApproach,
      workflowTitle: "From the taxonomy to a live room on a critical risk",
      workflowBody:
        "Define taxonomy, appetite, matrix, limits, and KRIs. Every domain augments the global risk index. A breach follows the response designed for it, and a critical risk opens a war room.",
      workflow: enterpriseRiskWorkflow,
      featuresTitle: "What the enterprise defines once",
      features: enterpriseRiskFeatures,
      outcomesTitle: "One index, a designed breach, a room when it is critical",
      outcomes: enterpriseRiskOutcomes,
      capabilitiesTitle: "The index and the rules underneath it",
      capabilitiesBody:
        "Cyber, financial, reputational, operational, compliance, AI, geopolitical, supply chain, and ESG and technology each keep their own position. The global risk index is what those domains augment.",
      capabilities: enterpriseRiskCapabilities,
      statsTitle: "Enterprise scope",
      stats: enterpriseRiskStats,
      ctaTitle: "Give the board one index and a room for what is critical",
      ctaBody:
        "Roll every risk domain into a global risk index, design the response on each breach, and open a real-time war room when a risk is critical.",
      secondary: { label: "Explore Financial Risk", href: "/products/financial-risk" },
    }}
  />
);

export default EnterpriseRisk;
