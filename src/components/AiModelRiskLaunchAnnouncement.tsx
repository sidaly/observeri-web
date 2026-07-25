import { BrainCircuit, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ScrollAnimations";

export const AiModelRiskLaunchAnnouncement = () => {
  return (
    <section
      id="ai-model-risk-launch"
      className="relative overflow-hidden border-b border-border/30 py-20"
      aria-label="AI Model Risk Management launch announcement"
    >
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Coming to Observeri GRC
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Product Launch
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="rounded-3xl border-gradient bg-gradient-card p-8 md:p-12">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                      <BrainCircuit className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                      AI Model Risk Management
                    </p>
                  </div>

                  <h2 className="text-3xl font-display font-bold md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                    Govern every AI model before risk becomes regulation.
                  </h2>

                  <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
                    <p>
                      AI is moving faster than most governance teams can keep up. From generative copilots and
                      fine-tuned LLMs to autonomous agents and embedded models, every new deployment introduces model
                      risk, bias exposure, data leakage, and compliance uncertainty. If you cannot see how an AI model
                      is built, trained, hosted, and used, you cannot protect the business from it.
                    </p>
                    <p>
                      AI Model Risk Management on Observeri GRC gives CISOs, AI risk officers, and compliance teams a
                      single system of record for model discovery, risk tiering, acceptable use policy, bias and
                      explainability guardrails, third-party model vendor oversight, and continuous monitoring against
                      frameworks such as the EU AI Act, NIST AI RMF, and ISO/IEC 42001.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild variant="hero" size="lg" className="group">
                      <Link to="/?contactForm=true">
                        Request early access
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/products/ai-risk-operations-center">Explore AI Risk Operations</Link>
                    </Button>
                  </div>

                  <p className="mt-5 text-sm text-muted-foreground">
                    Placeholder announcement — full AI Model Risk Management capabilities launching soon on Observeri GRC.
                  </p>
                </div>

                <div className="w-full shrink-0 lg:w-72">
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">The shift is urgent</p>
                    <p className="mt-4 text-5xl font-display font-bold text-foreground">77%</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      of organizations say generative AI models they use are already in production without formal risk
                      governance or model oversight in place.
                    </p>
                  </div>

                  <ul className="mt-4 space-y-3 rounded-2xl border border-border/50 bg-card/30 p-5 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Model inventory &amp; risk tiering
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Bias, explainability &amp; drift guardrails
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      EU AI Act, NIST AI RMF, ISO 42001 alignment
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 border-t border-border/30 pt-10">
                <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  AI Model Risk Management at a glance
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      icon: BrainCircuit,
                      title: "Model inventory",
                      body: "Discover and register every internal, third-party, and open-source model in one place.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Risk-based controls",
                      body: "Map each model to acceptable use, data lineage, safety tests, and approval gates.",
                    },
                    {
                      icon: Sparkles,
                      title: "Continuous monitoring",
                      body: "Track drift, incidents, and policy changes with AI risk scores tied to the GRC register.",
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-border/40 bg-background/30 p-6"
                    >
                      <card.icon className="h-6 w-6 text-primary" />
                      <p className="mt-4 font-display font-semibold">{card.title}</p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{card.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
