import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Users,
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
  hrBenefits,
  hrCapabilities,
  hrFeatures,
  hrHero,
  hrHreShowcase,
  hrOrgOutcomes,
  hrProblem,
  hrStats,
  hrSubModules,
  hrUseCases,
  hrValueProp,
  hrWorkflow,
  type HrWorkflowStep,
} from "@/data/humanRiskManagement";

const WorkflowPanel = ({ step }: { step: HrWorkflowStep }) => (
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
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Activities</p>
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

const HumanRiskManagement = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activePill, setActivePill] = useState(0);
  const currentWorkflow = hrWorkflow[activeStep];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePill((current) => (current + 1) % hrHero.heroPills.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
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
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  {hrHero.eyebrow}
                </p>
                <h1 className="text-4xl font-display font-bold md:text-5xl lg:text-6xl">{hrHero.headline}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{hrHero.subheadline}</p>

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
                        const pill = hrHero.heroPills[activePill];
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
                    <a href="#hre-dashboard">See HRE dashboard</a>
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
                  src="/human_risk_management.png"
                  alt="Observeri Human Cyber Risk Model dashboard with HRE scores and privileged identity rankings"
                  className="w-full rounded-[1.75rem] object-contain"
                />
              </motion.div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {hrHero.outcomes.map((outcome, index) => (
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

      <section id="hre-dashboard" className="border-y border-border/30 bg-card/20 py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
              Human Cyber Risk Model
            </p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">{hrHreShowcase.title}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{hrHreShowcase.description}</p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5 md:p-6">
              <p className="text-center font-mono text-sm leading-7 text-foreground md:text-base">
                {hrHreShowcase.formula}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {hrHreShowcase.formulaFactors.map((factor) => (
                  <span
                    key={factor.abbr}
                    className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/30 px-3 py-1.5 text-xs"
                  >
                    <span className={`font-bold ${factor.color}`}>{factor.abbr}</span>
                    <span className="text-muted-foreground">{factor.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>

          <ScaleUp delay={0.1} className="mt-10">
            <motion.div
              className="overflow-hidden rounded-[2rem] border-gradient bg-gradient-card p-3 shadow-2xl shadow-background/30"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={hrHreShowcase.image}
                alt="Human Cyber Risk Model dashboard showing risk distribution, top 10 highest risk identities, and HRE metrics"
                className="w-full rounded-[1.75rem] object-contain"
              />
            </motion.div>
          </ScaleUp>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {hrHreShowcase.metrics.map((metric, index) => (
              <FadeUp key={metric.label} delay={index * 0.05}>
                <div className="rounded-2xl border border-border/30 bg-background/30 p-4 text-center">
                  <p className={`text-2xl font-display font-bold ${metric.accent ?? "text-foreground"}`}>
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.12}>
            <div className="mt-8 flex flex-wrap gap-2">
              {hrHreShowcase.dashboardTabs.map((tab, index) => (
                <span
                  key={tab}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    index === 0
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-border/40 bg-background/30 text-muted-foreground"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Top highest-risk identities
            </p>
            <div className="mt-4 space-y-2">
              {hrHreShowcase.topRiskIdentities.map((identity, index) => (
                <div
                  key={identity.name}
                  className="flex items-center gap-4 rounded-xl border border-border/30 bg-background/30 px-4 py-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold text-red-400">
                    {index + 1}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm text-foreground">{identity.name}</span>
                  <div className="hidden flex-1 sm:block">
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-red-500/70"
                        style={{ width: `${(identity.score / 7141) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-red-400">{identity.score.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-y border-border/30 bg-card/20 py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
              {hrProblem.eyebrow}
            </p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">{hrProblem.title}</h2>
          </FadeUp>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2" staggerDelay={0.08}>
            {hrProblem.painPoints.map((point) => (
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

      <section id="sub-modules" className="py-24">
        <div className="container mx-auto px-6">
          <ScaleUp>
            <div className="rounded-[2rem] border-gradient bg-gradient-card p-10 md:p-14">
              <div className="mx-auto max-w-4xl text-center">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  {hrValueProp.eyebrow}
                </p>
                <h2 className="text-3xl font-display font-bold md:text-5xl">{hrValueProp.title}</h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {hrValueProp.description}
                </p>
              </div>

              <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.06}>
                {hrSubModules.map((subModule) => (
                  <StaggerItem key={subModule.title}>
                    <motion.div
                      className="group h-full rounded-2xl border border-border/30 bg-background/30 p-5"
                      whileHover={{ y: -6, borderColor: "hsl(var(--primary) / 0.4)" }}
                      transition={{ duration: 0.25 }}
                    >
                      <motion.div
                        className="mb-3 inline-flex rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <subModule.icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <p className="font-display text-sm font-semibold">{subModule.title}</p>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">{subModule.description}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {hrValueProp.pillars.map((pillar, index) => (
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

      <section id="how-it-works" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container relative z-10 mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">How it works</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">
              Profile. Scan. Score. Analyze. Act.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              A continuous human risk loop—from identity profiling and AI privileged ID scanning through HRE scoring,
              ML analytics, and automated control triggers.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
            <div className="space-y-3">
              {hrWorkflow.map((step, index) => (
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

              <motion.div
                className="mt-6 hidden rounded-2xl border border-primary/20 bg-primary/5 p-5 lg:block"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-primary">Human risk loop</p>
                <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
                  {hrWorkflow.map((step, index) => (
                    <div key={step.title} className="flex items-center gap-1">
                      <span>{step.title}</span>
                      {index < hrWorkflow.length - 1 ? (
                        <ChevronRight className="h-3 w-3 text-primary/60" />
                      ) : (
                        <motion.span
                          className="ml-1 text-primary"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                          ↻
                        </motion.span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <AnimatePresence mode="wait">
              <WorkflowPanel step={currentWorkflow} />
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Use cases</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">
              Where Human Risk Management delivers value
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              From privileged access reviews to board reporting—six scenarios where continuous HRE scoring and AI
              privileged ID scanning change how teams manage people risk.
            </p>
          </FadeUp>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.07}>
            {hrUseCases.map((useCase) => (
              <StaggerItem key={useCase.title}>
                <motion.div
                  className="group h-full rounded-3xl border-gradient bg-gradient-card p-7"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="rounded-full border border-border/40 bg-background/30 px-3 py-1 text-xs text-muted-foreground">
                    {useCase.audience}
                  </span>
                  <h3 className="mt-4 text-xl font-display font-semibold">{useCase.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{useCase.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Platform features</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">
              Six sub-modules. One human risk programme.
            </h2>
          </FadeUp>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.07}>
            {hrFeatures.map((feature) => (
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

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Benefits for your organization
              </p>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                Measure people risk like you measure technical risk
              </h2>
            </FadeUp>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {hrBenefits.map((benefit, index) => (
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
            {hrOrgOutcomes.map((outcome, index) => (
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
                <h2 className="mt-4 text-3xl font-display font-bold md:text-4xl">
                  Enterprise human risk management, end to end
                </h2>
                <ul className="mt-8 space-y-4">
                  {hrCapabilities.map((capability, index) => (
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
                    {hrStats.map((stat, index) => (
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
                <div className="rounded-[2rem] border border-primary/20 bg-primary/10 p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">Connected to Observeri GRC</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Human Risk Management feeds HRE scores into the AI Risk Operations Center—integrating with
                    Information Asset Management, Security Governance, and Data Privacy & Protection so people risk
                    stays synchronized with asset exposure and compliance posture.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

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
                  From privileged ID scanning to quantified human risk
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Profile identities, scan privileged accounts with AI, score HRE, analyze with ML, and trigger
                  automated controls—all in one module.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild variant="hero" size="lg" className="group">
                    <Link to="/?contactForm=true">
                      Start Free Trial
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/products/ai-risk-operations-center">Explore AI Risk Operations Center</Link>
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

export default HumanRiskManagement;
