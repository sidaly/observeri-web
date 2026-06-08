import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Network,
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
  iamBenefits,
  iamCapabilities,
  iamExposureShowcase,
  iamFeatures,
  iamHero,
  iamOrgOutcomes,
  iamProblem,
  iamStats,
  iamSubModules,
  iamValueProp,
  iamWorkflow,
  type IamWorkflowStep,
} from "@/data/informationAssetManagement";

const WorkflowPanel = ({ step }: { step: IamWorkflowStep }) => (
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

const InformationAssetManagement = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activePill, setActivePill] = useState(0);
  const currentWorkflow = iamWorkflow[activeStep];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePill((current) => (current + 1) % iamHero.heroPills.length);
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
                  <Network className="h-8 w-8 text-primary" />
                </div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  {iamHero.eyebrow}
                </p>
                <h1 className="text-4xl font-display font-bold md:text-5xl lg:text-6xl">{iamHero.headline}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{iamHero.subheadline}</p>

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
                        const pill = iamHero.heroPills[activePill];
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
                    <a href="#exposure-view">See unified exposure view</a>
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
                  src="/information_asset_management.png"
                  alt="Observeri Information Asset Management unified exposure view with AI risk scores and asset detail panel"
                  className="w-full rounded-[1.75rem] object-contain"
                />
              </motion.div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {iamHero.outcomes.map((outcome, index) => (
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

      <section id="exposure-view" className="border-y border-border/30 bg-card/20 py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
              Unified exposure view
            </p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">{iamExposureShowcase.title}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              {iamExposureShowcase.description}
            </p>
          </FadeUp>

          <ScaleUp delay={0.1} className="mt-12">
            <motion.div
              className="overflow-hidden rounded-[2rem] border-gradient bg-gradient-card p-3 shadow-2xl shadow-background/30"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={iamExposureShowcase.image}
                alt="Asset exposure graph showing risk-tiered nodes with Core Banking Application Server detail panel including AI risk score, control effectiveness, and CIA triad"
                className="w-full rounded-[1.75rem] object-contain"
              />
            </motion.div>
          </ScaleUp>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {iamExposureShowcase.metrics.map((metric, index) => (
              <FadeUp key={metric.label} delay={index * 0.06}>
                <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                  <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2.5">
                    <metric.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-2xl font-display font-bold text-primary">{metric.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-border/40 bg-background/30 px-4 py-2 text-sm text-muted-foreground">
                {iamExposureShowcase.assetExample.id} — {iamExposureShowcase.assetExample.name}
              </span>
              <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                {iamExposureShowcase.assetExample.riskTier}
              </span>
              <span className="rounded-full border border-border/40 bg-background/30 px-4 py-2 text-sm text-muted-foreground">
                {iamExposureShowcase.assetExample.classification}
              </span>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                {iamExposureShowcase.assetExample.businessValue}
              </span>
            </div>
          </FadeUp>

          <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-3" staggerDelay={0.07}>
            {iamExposureShowcase.profileFields.map((group) => (
              <StaggerItem key={group.group}>
                <motion.div
                  className="h-full rounded-2xl border border-border/30 bg-background/30 p-5"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="font-display text-sm font-semibold">{group.group}</p>
                  <ul className="mt-3 space-y-1.5">
                    {group.fields.map((field) => (
                      <li key={field} className="text-xs leading-5 text-muted-foreground">
                        {field}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.2}>
            <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-primary">Filter dimensions</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {iamExposureShowcase.filterDimensions.map((dim) => (
                <span
                  key={dim.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/30 px-4 py-2 text-sm text-muted-foreground"
                >
                  <dim.icon className="h-3.5 w-3.5 text-primary" />
                  {dim.label}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="border-y border-border/30 bg-card/20 py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
              {iamProblem.eyebrow}
            </p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">{iamProblem.title}</h2>
          </FadeUp>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2" staggerDelay={0.08}>
            {iamProblem.painPoints.map((point) => (
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
                  {iamValueProp.eyebrow}
                </p>
                <h2 className="text-3xl font-display font-bold md:text-5xl">{iamValueProp.title}</h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {iamValueProp.description}
                </p>
              </div>

              <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.06}>
                {iamSubModules.map((subModule) => (
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
                {iamValueProp.pillars.map((pillar, index) => (
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
              Ingest. Profile. Score. Assess. Visualize.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              A continuous asset intelligence loop—from multi-channel ingestion and rich profiling through live AI risk
              scoring, per-asset control effectiveness, and unified exposure visualization.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
            <div className="space-y-3">
              {iamWorkflow.map((step, index) => (
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
                <p className="text-xs uppercase tracking-[0.16em] text-primary">Asset intelligence loop</p>
                <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
                  {iamWorkflow.map((step, index) => (
                    <div key={step.title} className="flex items-center gap-1">
                      <span>{step.title}</span>
                      {index < iamWorkflow.length - 1 ? (
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

      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Platform features</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">
              Six sub-modules. One asset intelligence programme.
            </h2>
          </FadeUp>

          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.07}>
            {iamFeatures.map((feature) => (
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
                Know every asset, score every risk, see every connection
              </h2>
            </FadeUp>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {iamBenefits.map((benefit, index) => (
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
            {iamOrgOutcomes.map((outcome, index) => (
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
                  Enterprise asset management, end to end
                </h2>
                <ul className="mt-8 space-y-4">
                  {iamCapabilities.map((capability, index) => (
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
                    {iamStats.map((stat, index) => (
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
                    Information Asset Management pulls live AI risk scores and control effectiveness from the AI Risk
                    Operations Center—integrating with Vulnerability Operations, Exposure Management, and Compliance
                    Management so asset exposure stays synchronized across the platform.
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
                  From asset ingestion to unified exposure intelligence
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Ingest every asset, score risk with AI, measure control effectiveness, and explore exposure across
                  your entire estate—all in one module.
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

export default InformationAssetManagement;
