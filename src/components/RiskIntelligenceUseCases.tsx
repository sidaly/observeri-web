import { ArrowRight, Bot, Radar, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const useCases = [
  {
    title: "Prioritize the vulnerabilities that matter",
    description:
      "Combine severity with exploitability, asset value, and business impact so remediation follows real exposure instead of ticket volume.",
    href: "/products/vulnerability-operations",
    linkLabel: "Explore Vulnerability Operations",
    icon: ShieldAlert,
  },
  {
    title: "Find exposure before it becomes an incident",
    description:
      "Continuously discover internet-facing assets, exposed services, shadow IT, and dark-web indicators, then connect findings to risk and action.",
    href: "/products/external-attack-surface-management",
    linkLabel: "Explore External Attack Surface Management",
    icon: Radar,
  },
  {
    title: "Govern AI models, prompts, and sensitive data",
    description:
      "Inventory AI models, assess their risk, support regulatory classification, and extend oversight to prompts and uploaded data.",
    href: "/products/ai-governance",
    linkLabel: "Explore AI Governance",
    icon: Bot,
  },
];

export const RiskIntelligenceUseCases = () => (
  <section className="border-b border-border/40 bg-card/30 py-20" aria-labelledby="risk-intelligence-use-cases">
    <div className="container mx-auto max-w-6xl px-6">
      <FadeUp>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">From signal to decision</p>
        <h2 id="risk-intelligence-use-cases" className="mt-3 max-w-3xl text-3xl font-display font-bold md:text-4xl">
          Act on the exposure behind the alert.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Observeri connects technical signals to the assets, controls, financial exposure, and owners needed to make a defensible decision.
        </p>
      </FadeUp>

      <StaggerContainer className="mt-10 grid gap-5 lg:grid-cols-3" staggerDelay={0.08}>
        {useCases.map((useCase) => (
          <StaggerItem key={useCase.title} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-border/60 bg-background p-6 transition-colors hover:border-primary/70">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <useCase.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{useCase.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{useCase.description}</p>
              <Link
                to={useCase.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                {useCase.linkLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
