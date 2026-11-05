import { ProductNarrative } from "@/components/ProductNarrative";
import {
  aiDataMonitoringApproach,
  aiDataMonitoringCapabilities,
  aiDataMonitoringFeatures,
  aiDataMonitoringHero,
  aiDataMonitoringIcon,
  aiDataMonitoringOutcomes,
  aiDataMonitoringProblem,
  aiDataMonitoringStats,
  aiDataMonitoringWorkflow,
} from "@/data/aiDataMonitoring";

const AiDataMonitoring = () => (
  <ProductNarrative
    content={{
      path: "/products/ai-data-monitoring",
      icon: aiDataMonitoringIcon,
      image: {
        src: "/ai-data-monitoring.webp",
        alt: "Observeri AI data monitoring with violations, shadow AI discoveries, and blocked prompts",
      },
      hero: aiDataMonitoringHero,
      problem: aiDataMonitoringProblem,
      approach: aiDataMonitoringApproach,
      workflowTitle: "From a prompt to a decision that keeps data inside",
      workflowBody:
        "Monitor the prompt, keep an audit trail, and block sensitive prompts and file uploads before they leave the organization.",
      workflow: aiDataMonitoringWorkflow,
      featuresTitle: "What AI data monitoring controls",
      features: aiDataMonitoringFeatures,
      outcomesTitle: "Sensitive information stays inside",
      outcomes: aiDataMonitoringOutcomes,
      capabilitiesTitle: "Prompts, files, and the organization boundary",
      capabilitiesBody:
        "Monitoring covers sanctioned public and private tools. A block happens before the prompt or file reaches a model outside the organization.",
      capabilities: aiDataMonitoringCapabilities,
      statsTitle: "Monitoring scope",
      stats: aiDataMonitoringStats,
      ctaTitle: "See the prompt before the data leaves",
      ctaBody:
        "Monitor and audit prompts, block sensitive prompts and file uploads, and keep protected information inside the organization.",
      secondary: { label: "Explore AI Governance", href: "/products/ai-governance" },
    }}
  />
);

export default AiDataMonitoring;
