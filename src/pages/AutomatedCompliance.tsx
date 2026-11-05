import { ProductNarrative } from "@/components/ProductNarrative";
import {
  automatedComplianceApproach,
  automatedComplianceCapabilities,
  automatedComplianceFeatures,
  automatedComplianceHero,
  automatedComplianceIcon,
  automatedComplianceOutcomes,
  automatedComplianceProblem,
  automatedComplianceStats,
  automatedComplianceWorkflow,
} from "@/data/automatedCompliance";

const AutomatedCompliance = () => (
  <ProductNarrative
    content={{
      path: "/products/automated-compliance",
      icon: automatedComplianceIcon,
      image: {
        src: "/automated-compliance.webp",
        alt: "Observeri automated compliance with an on-prem agent, a virtual connector for Azure, GCP, AWS, and Oracle Cloud, scheduled assessments, and a real-time risk view",
      },
      hero: automatedComplianceHero,
      problem: automatedComplianceProblem,
      approach: automatedComplianceApproach,
      workflowTitle: "From the agent and the connector to a live risk view",
      workflowBody:
        "Run automated compliance on Windows and Linux with an on-prem agent, on Azure, GCP, AWS, and Oracle Cloud with a virtual connector, and schedule the assessment so the risk view stays current.",
      workflow: automatedComplianceWorkflow,
      featuresTitle: "What automated compliance runs",
      features: automatedComplianceFeatures,
      outcomesTitle: "On-prem and cloud posture, on a schedule",
      outcomes: automatedComplianceOutcomes,
      capabilitiesTitle: "Agent, connector, schedule, and the risk view",
      capabilitiesBody:
        "The on-prem agent covers Windows and Linux. The virtual connector covers Azure, GCP, AWS, and Oracle Cloud. Scheduled assessments check the posture of that stack and feed a real-time risk view.",
      capabilities: automatedComplianceCapabilities,
      statsTitle: "Assessment scope",
      stats: automatedComplianceStats,
      ctaTitle: "See the stack as the checks finish",
      ctaBody:
        "Run an on-prem agent on Windows and Linux, a virtual connector on Azure, GCP, AWS, and Oracle Cloud, and a scheduled assessment that keeps a real-time risk view.",
      secondary: { label: "Explore Compliance", href: "/products/compliance-management" },
    }}
  />
);

export default AutomatedCompliance;
