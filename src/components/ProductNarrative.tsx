import auditSeo from "@/data/auditSeo.json";
import { AuditOverview, PageFaq, type AuditPath } from "@/components/AuditContent";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FadeUp, ScaleUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { Button } from "@/components/ui/button";

type Card = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Step = Card & {
  step: number;
  subtitle: string;
  signals: string[];
};

export type ProductNarrativeContent = {
  path: AuditPath;
  icon: LucideIcon;
  image: { src: string; alt: string };
  hero: {
    eyebrow: string;
    heroPills: { label: string; icon: LucideIcon }[];
    outcomes: { value: string; label: string }[];
  };
  problem: { eyebrow: string; title: string; painPoints: Card[] };
  approach: { eyebrow: string; title: string; items: Card[] };
  workflowTitle: string;
  workflowBody: string;
  workflow: Step[];
  featuresTitle: string;
  features: Card[];
  outcomesTitle: string;
  outcomes: { title: string; description: string }[];
  capabilitiesTitle: string;
  capabilitiesBody: string;
  capabilities: string[];
  statsTitle: string;
  stats: { value: string; label: string }[];
  ctaTitle: string;
  ctaBody: string;
  secondary: { label: string; href: string };
};

const WorkflowPanel = ({ step }: { step: Step }) => (
  <motion.div
    key={step.step}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className="rounded-[2rem] border-gradient bg-gradient-card p-8 md:p-10"
  >
    <div className="flex items-start gap-5">
      <div className="rounded-2xl bg-primary/10 p-4">
        <step.icon className="h-7 w-7 text-primary" />
      </div>
      <div className="flex-1">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Step {step.step}</p>
        <h3 className="mt-2 text-2xl font-display font-semibold md:text-3xl">{step.title}</h3>
        <p className="mt-1 text-base text-muted-foreground">{step.subtitle}</p>
      </div>
    </div>
    <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base">{step.description}</p>
    <div className="mt-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Includes</p>
      <div className="flex flex-wrap gap-2">
        {step.signals.map((signal) => (
          <span key={signal} className="rounded-full border border-border/40 bg-background/30 px-3 py-1.5 text-xs text-muted-foreground">
            {signal}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export const ProductNarrative = ({ content }: { content: ProductNarrativeContent }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [activePill, setActivePill] = useState(0);
  const seo = auditSeo[content.path];
  const Icon = content.icon;

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePill((current) => (current + 1) % content.hero.heroPills.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [content.hero.heroPills.length]);

  const pill = content.hero.heroPills[activePill];

  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="container relative z-10 mx-auto px-6">
          <FadeUp>
            <Link
              to="/features"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to platform modules
            </Link>
          </FadeUp>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <SlideInLeft>
              <div>
                <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">{content.hero.eyebrow}</p>
                <h1 className="text-4xl font-display font-bold md:text-5xl lg:text-6xl">{seo.h1}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{seo.body[0]}</p>

                <div className="mt-8 min-h-[52px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={pill.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                      transition={{ duration: 0.35 }}
                      className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5"
                    >
                      <pill.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{pill.label}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild variant="hero" size="lg" className="group">
                    <Link to="/?contactForm=true">
                      Start Free Trial
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#how-it-works">See how it works</a>
                  </Button>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="relative overflow-hidden rounded-[2rem] border-gradient bg-gradient-card p-2">
                <img
                  decoding="async"
                  src={content.image.src}
                  alt={content.image.alt}
                  className="w-full rounded-[1.75rem] object-contain"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {content.hero.outcomes.map((outcome) => (
                  <div key={outcome.label} className="rounded-2xl border border-border/30 bg-background/30 p-4 text-center">
                    <p className="text-2xl font-display font-bold text-primary">{outcome.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{outcome.label}</p>
                  </div>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <AuditOverview path={content.path} />

      <section className="border-y border-border/30 bg-card/20 py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">{content.problem.eyebrow}</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">{content.problem.title}</h2>
          </FadeUp>
          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2" staggerDelay={0.08}>
            {content.problem.painPoints.map((point) => (
              <StaggerItem key={point.title}>
                <div className="h-full rounded-3xl border-gradient bg-gradient-card p-7">
                  <div className="mb-5 inline-flex rounded-2xl bg-destructive/10 p-3">
                    <point.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{point.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">{content.approach.eyebrow}</p>
              <h2 className="text-3xl font-display font-bold md:text-5xl">{content.approach.title}</h2>
            </FadeUp>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {content.approach.items.map((item, index) => (
              <SlideInLeft key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-3xl border-gradient bg-gradient-card p-8">
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </SlideInLeft>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative overflow-hidden py-24">
        <div className="container relative z-10 mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">How it works</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">{content.workflowTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{content.workflowBody}</p>
          </FadeUp>
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
            <div className="space-y-3">
              {content.workflow.map((step, index) => (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    activeStep === index
                      ? "border-primary/50 bg-primary/10 shadow-lg shadow-primary/5"
                      : "border-border/30 bg-background/30 hover:border-border/60"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        activeStep === index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.step}
                    </span>
                    <div>
                      <p className="font-display font-semibold">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.subtitle}</p>
                    </div>
                    {activeStep === index ? <ChevronRight className="ml-auto h-4 w-4 text-primary" /> : null}
                  </div>
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <WorkflowPanel step={content.workflow[activeStep]} />
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Platform features</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">{content.featuresTitle}</h2>
          </FadeUp>
          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.07}>
            {content.features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="h-full rounded-3xl border-gradient bg-gradient-card p-7">
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="container relative z-10 mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Outcomes</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">{content.outcomesTitle}</h2>
          </FadeUp>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {content.outcomes.map((outcome, index) => (
              <ScaleUp key={outcome.title} delay={index * 0.08}>
                <div className="h-full rounded-3xl border-gradient bg-gradient-card p-8">
                  <p className="text-xl font-display font-semibold">{outcome.title}</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{outcome.description}</p>
                </div>
              </ScaleUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <ScaleUp>
              <div className="rounded-[2rem] border-gradient bg-gradient-card p-10">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Platform capabilities</p>
                <h2 className="mt-4 text-3xl font-display font-bold md:text-4xl">{content.capabilitiesTitle}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{content.capabilitiesBody}</p>
                <ul className="mt-8 space-y-4">
                  {content.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </ScaleUp>
            <FadeUp>
              <div className="rounded-[2rem] border-gradient bg-gradient-card p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">{content.statsTitle}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {content.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-border/30 bg-background/30 p-5">
                      <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <ScaleUp>
            <div className="relative overflow-hidden rounded-[2rem] border-gradient bg-gradient-card p-10 md:p-14">
              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-display font-bold md:text-5xl">{content.ctaTitle}</h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{content.ctaBody}</p>
                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild variant="hero" size="lg" className="group">
                    <Link to="/?contactForm=true">
                      Start Free Trial
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to={content.secondary.href}>{content.secondary.label}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      <PageFaq path={content.path} />
      <Footer />
    </div>
  );
};
