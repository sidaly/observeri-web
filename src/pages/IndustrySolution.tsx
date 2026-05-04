import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  FadeUp,
  ScaleUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";
import { industrySolutions, industrySolutionsBySlug } from "@/data/industrySolutions";

const IndustrySolution = () => {
  const { slug } = useParams();

  if (!slug || !industrySolutionsBySlug[slug]) {
    return <Navigate to="/solutions" replace />;
  }

  const industry = industrySolutionsBySlug[slug];
  const relatedIndustries = industrySolutions.filter((item) => item.slug !== industry.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto px-6">
          <FadeUp>
            <Link
              to="/solutions"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all solutions
            </Link>
          </FadeUp>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <SlideInLeft>
              <div>
                <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-4">
                  <industry.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  {industry.eyebrow}
                </p>
                <h1 className="text-4xl font-display font-bold md:text-5xl lg:text-6xl">{industry.label}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{industry.headline}</p>
                <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">{industry.summary}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {industry.keyRegulations.map((regulation) => (
                    <span
                      key={regulation}
                      className="rounded-full border border-border/40 bg-background/30 px-4 py-2 text-sm text-muted-foreground"
                    >
                      {regulation}
                    </span>
                  ))}
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="rounded-[2rem] border-gradient bg-gradient-card p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Quantified outcomes</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {industry.outcomes.map((outcome) => (
                    <div key={outcome.label} className="rounded-2xl border border-border/30 bg-background/30 p-5">
                      <p className="text-3xl font-display font-bold text-foreground">{outcome.value}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{outcome.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/10 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">{industry.workflowLabel}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-foreground">
                    {industry.workflow.map((step, index) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-full bg-background/50 px-3 py-1.5">{step}</span>
                        {index < industry.workflow.length - 1 ? (
                          <ChevronRight className="h-4 w-4 text-primary/80" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Platform Capabilities
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                How Observeri GRC is applied in {industry.shortLabel.toLowerCase()} environments.
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.08}>
            {industry.capabilities.map((capability) => (
              <StaggerItem key={capability.title}>
                <div className="h-full rounded-3xl border-gradient bg-gradient-card p-8">
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">{capability.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{capability.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SlideInLeft>
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Business Value</p>
                <h2 className="text-3xl font-display font-bold md:text-5xl">
                  Why this solution matters for the business, not just the audit.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  The PPT framing is consistent across sectors: unify risk, compliance, and security operations so
                  leadership can move faster with better context and less manual friction.
                </p>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="space-y-5">
                {industry.valueStory.map((item) => (
                  <div key={item.title} className="rounded-3xl border-gradient bg-gradient-card p-7">
                    <p className="text-lg font-display font-semibold text-foreground">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {industry.executivePanel ? (
        <section className="py-24">
          <div className="container mx-auto px-6">
            <ScaleUp>
              <div className="rounded-[2rem] border-gradient bg-gradient-card p-10 md:p-14">
                <div className="max-w-3xl">
                  <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                    Executive Lens
                  </p>
                  <h2 className="text-3xl font-display font-bold md:text-5xl">{industry.executivePanel.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-muted-foreground">{industry.executivePanel.description}</p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-4">
                  {industry.executivePanel.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-border/30 bg-background/30 p-5">
                      <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScaleUp>
          </div>
        </section>
      ) : null}

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <ScaleUp>
              <div className="rounded-[2rem] border-gradient bg-gradient-card p-10">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Next Step</p>
                <h2 className="mt-4 text-3xl font-display font-bold md:text-5xl">
                  Turn this industry model into your rollout plan.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Start with a discovery session, map your controls and assets, then tailor dashboards, workflows,
                  and regulatory coverage to your operating environment.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild variant="hero" size="lg" className="group">
                    <Link to="/?contactForm=true">
                      Start Free Trial
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/solutions">Explore More Industries</Link>
                  </Button>
                </div>
              </div>
            </ScaleUp>

            <div className="space-y-4">
              {relatedIndustries.map((item) => (
                <Link
                  key={item.slug}
                  to={`/solutions/${item.slug}`}
                  className="block rounded-3xl border-gradient bg-gradient-card p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-primary/10 p-3">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-display text-xl font-semibold text-foreground">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.headline}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustrySolution;
