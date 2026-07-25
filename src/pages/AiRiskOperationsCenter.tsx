import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Radar,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  FadeUp,
  ScaleUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";
import { Button } from "@/components/ui/button";
import {
  arocBenefits,
  arocCapabilities,
  arocFeatures,
  arocHero,
  arocOrgOutcomes,
  arocProblem,
  arocSignalDomains,
  arocStats,
  arocValueProp,
  arocWorkflow,
  type ArocWorkflowStep,
} from "@/data/aiRiskOperations";

const WorkflowPanel = ({ step }: { step: ArocWorkflowStep }) => (
  <motion.div
    key={step.step}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className="rounded-[2rem] border-gradient bg-gradient-card p-8 md:p-10"
  >
    <div className="flex items-start gap-5">
      <motion.div
        className="rounded-2xl bg-primary/10 p-4"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <step.icon className="h-7 w-7 text-primary" />
      </motion.div>
      <div className="flex-1">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Step {step.step}</p>
        <h3 className="mt-2 text-2xl font-display font-semibold md:text-3xl">{step.title}</h3>
        <p className="mt-1 text-base text-muted-foreground">{step.subtitle}</p>
      </div>
    </div>

    <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base">{step.description}</p>

    <div className="mt-8">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Signal inputs</p>
      <div className="flex flex-wrap gap-2">
        {step.signals.map((signal, index) => (
          <motion.span
            key={signal}
            className="rounded-full border border-border/40 bg-background/30 px-3 py-1.5 text-xs text-muted-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.06, duration: 0.25 }}
          >
            {signal}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const AiRiskOperationsCenter = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activePill, setActivePill] = useState(0);
  const currentWorkflow = arocWorkflow[activeStep];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePill((current) => (current + 1) % arocHero.heroPills.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute left-1/3 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.18, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

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
                  <Radar className="h-8 w-8 text-primary" />
                </div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  {arocHero.eyebrow}
                </p>
                <h1 className="text-4xl font-display font-bold md:text-5xl lg:text-6xl">{arocHero.headline}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{arocHero.subheadline}</p>

                <div className="mt-8 min-h-[52px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePill}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                      transition={{ duration: 0.35 }}
                      className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5"
                    >
                      {(() => {
                        const pill = arocHero.heroPills[activePill];
                        return (
                          <>
                            <pill.icon className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">{pill.label}</span>
                          </>
                        );
                      })()}
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
                    <a href="#product-video">Watch product video</a>
                  </Button>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <motion.div
                className="relative overflow-hidden rounded-[2rem] border-gradient bg-gradient-card p-2"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/ai-risk-operations-center.png"
                  alt="Observeri AI Risk Operations Center dashboard with security health index, risk severity distribution, FAIR quantification, and value at risk scenarios"
                  className="w-full rounded-[1.75rem] object-contain"
                />
              </motion.div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {arocHero.outcomes.map((outcome, index) => (
                  <motion.div
                    key={outcome.label}
                    className="rounded-2xl border border-border/30 bg-background/30 p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <p className="text-2xl font-display font-bold text-primary">{outcome.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{outcome.label}</p>
                  </motion.div>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Product video */}
      <section id="product-video" className="border-y border-border/30 bg-card/20 py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Product overview</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">
              See the AI Risk Operations Center in action
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              Watch how Observeri unifies incidents, risks, vulnerabilities, threats, and compliance into live asset
              risk scores—with AI-guided remediation that protects your crown jewels.
            </p>
          </FadeUp>

          <ScaleUp delay={0.1} className="mt-12">
            <div className="overflow-hidden rounded-[2rem] border-gradient bg-gradient-card p-3 shadow-2xl shadow-background/30">
              <div className="relative aspect-video w-full overflow-hidden rounded-[1.75rem] bg-background/50">
                <iframe
                  src="https://www.youtube.com/embed/Jg7ilCidBu0"
                  title="Observeri AI Risk Operations Center product overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      {/* Problem */}
      <section className="border-y border-border/30 bg-card/20 py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
              {arocProblem.eyebrow}
            </p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">{arocProblem.title}</h2>
          </FadeUp>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2" staggerDelay={0.08}>
            {arocProblem.painPoints.map((point) => (
              <StaggerItem key={point.title}>
                <motion.div
                  className="h-full rounded-3xl border-gradient bg-gradient-card p-7"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-destructive/10 p-3">
                    <point.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{point.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Signal domains */}
      <section id="signal-domains" className="py-24">
        <div className="container mx-auto px-6">
          <ScaleUp>
            <div className="rounded-[2rem] border-gradient bg-gradient-card p-10 md:p-14">
              <div className="mx-auto max-w-4xl text-center">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  {arocValueProp.eyebrow}
                </p>
                <h2 className="text-3xl font-display font-bold md:text-5xl">{arocValueProp.title}</h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {arocValueProp.description}
                </p>
              </div>

              <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" staggerDelay={0.06}>
                {arocSignalDomains.map((domain) => (
                  <StaggerItem key={domain.title}>
                    <motion.div
                      className="group h-full rounded-2xl border border-border/30 bg-background/30 p-5 text-center"
                      whileHover={{ y: -6, borderColor: "hsl(var(--primary) / 0.4)" }}
                      transition={{ duration: 0.25 }}
                    >
                      <motion.div
                        className="mx-auto mb-3 inline-flex rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20"
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <domain.icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <p className="font-display text-sm font-semibold">{domain.title}</p>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">{domain.description}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {arocValueProp.pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.label}
                    className="rounded-3xl border border-border/30 bg-background/30 p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="mx-auto mb-3 inline-flex rounded-2xl bg-primary/10 p-3">
                      <pillar.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-display font-semibold">{pillar.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      {/* Workflow */}
      <section id="how-it-works" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container relative z-10 mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">How it works</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">
              Aggregate. Correlate. Score. Prioritize. Act.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              A continuous intelligence loop that augments every risk signal, scores each asset, and drives remediation
              toward the 80% of exposure that matters most.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
            <div className="space-y-3">
              {arocWorkflow.map((step, index) => (
                <motion.button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    activeStep === index
                      ? "border-primary/50 bg-primary/10 shadow-lg shadow-primary/5"
                      : "border-border/30 bg-background/30 hover:border-border/60"
                  }`}
                  whileHover={{ x: activeStep === index ? 0 : 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        activeStep === index
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.step}
                    </span>
                    <div>
                      <p className="font-display font-semibold">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.subtitle}</p>
                    </div>
                    {activeStep === index ? (
                      <ChevronRight className="ml-auto h-4 w-4 text-primary" />
                    ) : null}
                  </div>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <WorkflowPanel step={currentWorkflow} />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Platform features</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">
              The intelligence engine behind every Observeri module
            </h2>
          </FadeUp>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.07}>
            {arocFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  className="group h-full rounded-3xl border-gradient bg-gradient-card p-7"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Benefits for your organization
              </p>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                Continuous risk exposure that focuses remediation and protects what matters
              </h2>
            </FadeUp>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {arocBenefits.map((benefit, index) => (
              <SlideInLeft key={benefit.title} delay={index * 0.05}>
                <motion.div
                  className="h-full rounded-3xl border-gradient bg-gradient-card p-8"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">{benefit.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{benefit.description}</p>
                </motion.div>
              </SlideInLeft>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {arocOrgOutcomes.map((outcome, index) => (
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

      {/* Capabilities + Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <ScaleUp>
              <div className="rounded-[2rem] border-gradient bg-gradient-card p-10">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Platform capabilities</p>
                <h2 className="mt-4 text-3xl font-display font-bold md:text-4xl">
                  Enterprise risk intelligence at the core
                </h2>
                <ul className="mt-8 space-y-4">
                  {arocCapabilities.map((capability, index) => (
                    <motion.li
                      key={capability}
                      className="flex items-start gap-3 text-sm leading-7 text-muted-foreground"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04, duration: 0.35 }}
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {capability}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScaleUp>

            <div className="space-y-6">
              <FadeUp>
                <div className="rounded-[2rem] border-gradient bg-gradient-card p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">Quantified outcomes</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {arocStats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="rounded-2xl border border-border/30 bg-background/30 p-5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.4 }}
                      >
                        <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
                        <p className="mt-2 text-xs text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <motion.div
                  className="rounded-[2rem] border border-primary/20 bg-primary/10 p-8"
                  animate={{ boxShadow: ["0 0 0 0 hsl(var(--primary) / 0)", "0 0 24px 0 hsl(var(--primary) / 0.08)", "0 0 0 0 hsl(var(--primary) / 0)"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">80% risk reduction principle</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Most organizational exposure concentrates in a minority of assets and findings. The AI Risk
                    Operations Center identifies that critical subset—protecting crown-jewel systems and directing
                    remediation to collapse up to 80% of total risk with focused, measurable effort.
                  </p>
                </motion.div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <ScaleUp>
            <div className="relative overflow-hidden rounded-[2rem] border-gradient bg-gradient-card p-10 md:p-14">
              <motion.div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-display font-bold md:text-5xl">
                  See every asset. Score every exposure. Fix what matters.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Unify incidents, risks, vulnerabilities, threats, and compliance into one intelligence engine—with
                  live asset risk scores and AI-guided remediation that protects your crown jewels.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild variant="hero" size="lg" className="group">
                    <Link to="/?contactForm=true">
                      Start Free Trial
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/products/vulnerability-operations">Explore Vulnerability Operations</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiRiskOperationsCenter;
