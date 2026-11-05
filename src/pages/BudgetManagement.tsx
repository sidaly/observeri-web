import { ProductNarrative } from "@/components/ProductNarrative";
import {
  budgetManagementApproach,
  budgetManagementCapabilities,
  budgetManagementFeatures,
  budgetManagementHero,
  budgetManagementIcon,
  budgetManagementOutcomes,
  budgetManagementProblem,
  budgetManagementStats,
  budgetManagementWorkflow,
} from "@/data/budgetManagement";

const BudgetManagement = () => (
  <ProductNarrative
    content={{
      path: "/products/budget-management",
      icon: budgetManagementIcon,
      image: {
        src: "/budget-management.webp",
        alt: "Sample budget view comparing the cost of impact with the cost of mitigation for board investment decisions",
      },
      hero: budgetManagementHero,
      problem: budgetManagementProblem,
      approach: budgetManagementApproach,
      workflowTitle: "From a dollar to a board decision",
      workflowBody:
        "Attach the investment to a risk or a compliance obligation, state the cost of impact and the cost of mitigation, and record whether the board funds, defers, or accepts.",
      workflow: budgetManagementWorkflow,
      featuresTitle: "What the investment record holds",
      features: budgetManagementFeatures,
      outcomesTitle: "The board funds from the comparison",
      outcomes: budgetManagementOutcomes,
      capabilitiesTitle: "Risk, compliance, and the two costs",
      capabilitiesBody:
        "Every dollar of investment is driven by a risk or a compliance obligation. The board sees the cost of impact beside the cost of mitigation, then decides. Figures on the sample view are illustrative.",
      capabilities: budgetManagementCapabilities,
      statsTitle: "Decision scope",
      stats: budgetManagementStats,
      ctaTitle: "See cost of impact against cost of mitigation",
      ctaBody:
        "Put each investment in front of the board with the risk or obligation it serves, the cost of leaving it open, and the cost of reducing it.",
      secondary: { label: "Explore Security Governance", href: "/products/security-governance" },
    }}
  />
);

export default BudgetManagement;
