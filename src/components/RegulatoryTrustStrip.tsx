import { Cloud, Server, ShieldCheck } from "lucide-react";
import { FadeUp } from "./ScrollAnimations";

const frameworks = ["SAMA", "NESA", "ISO 27001", "DORA", "EU AI Act"];

const deploymentOptions = [
  { label: "SaaS", icon: Cloud },
  { label: "Sovereign cloud", icon: ShieldCheck },
  { label: "Hybrid and on-premises", icon: Server },
];

export const RegulatoryTrustStrip = () => (
  <section
    className="border-y border-border/40 bg-card/30 py-8"
    aria-labelledby="framework-deployment-support"
  >
    <div className="container mx-auto max-w-6xl px-6">
      <FadeUp>
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Framework support</p>
            <h2 id="framework-deployment-support" className="mt-2 font-display text-xl font-semibold md:text-2xl">
              Built for regulated environments and regional requirements.
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Supported regulatory frameworks">
              {frameworks.map((framework) => (
                <li key={framework} className="rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm font-medium">
                  {framework}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-border/50 lg:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Deployment options</p>
            <ul className="mt-3 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {deploymentOptions.map((option) => (
                <li key={option.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <option.icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{option.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);
