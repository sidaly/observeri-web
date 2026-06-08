import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Handshake,
} from "lucide-react";
import { useState } from "react";
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
  tprmBenefits,
  tprmCapabilities,
  tprmHero,
  tprmProblem,
  tprmRisks,
  tprmStats,
  tprmValueProp,
  tprmWorkflow,
  type WorkflowStep,
} from "@/data/thirdPartyRisk";

const WorkflowPanel = ({ step }: { step: WorkflowStep }) => (
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
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Key signals</p>
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

const ThirdPartyRisk = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentWorkflow = tprmWorkflow[activeStep];

  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/5 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  {tprmHero.eyebrow}
                </p>
                <h1 className="text-4xl font-display font-bold md:text-5xl lg:text-6xl">{tprmHero.headline}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{tprmHero.subheadline}</p>

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
              <motion.div
                className="relative overflow-hidden rounded-[2rem] border-gradient bg-gradient-card p-2"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/third_party_risk.png"
                  alt="Observeri Third Party Risk Management module"
                  className="w-full rounded-[1.75rem] object-contain"
                />
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-background/40 to-transparent"
                  animate={{ opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {tprmHero.outcomes.map((outcome, index) => (
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

      {/* Why it matters */}
      <section className="border-y border-border/30 bg-card/20 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                {tprmProblem.eyebrow}
              </p>
              <h2 className="text-3xl font-display font-bold md:text-5xl">{tprmProblem.title}</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">{tprmProblem.description}</p>
            </FadeUp>

            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {tprmProblem.painPoints.map((point) => (
                <StaggerItem key={point}>
                  <div className="flex items-start gap-4 rounded-2xl border-gradient bg-gradient-card p-5">
                    <div className="mt-0.5 rounded-full bg-destructive/10 p-2">
                      <span className="block h-2 w-2 rounded-full bg-destructive" />
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">{point}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScaleUp>
            <div className="rounded-[2rem] border-gradient bg-gradient-card p-10 md:p-14">
              <div className="mx-auto max-w-4xl text-center">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  {tprmValueProp.eyebrow}
                </p>
                <h2 className="text-3xl font-display font-bold md:text-5xl">{tprmValueProp.title}</h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {tprmValueProp.description}
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {tprmValueProp.pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.label}
                    className="rounded-3xl border border-border/30 bg-background/30 p-7 text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="mx-auto mb-4 inline-flex rounded-2xl bg-primary/10 p-4">
                      <pillar.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-display text-lg font-semibold">{pillar.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      {/* How it works — animated workflow */}
      <section id="how-it-works" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container relative z-10 mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">How it works</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">
              Discover. Assess. Act. Close. Repeat.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              A closed loop that refreshes vendor posture from live signals, recalculates risk when things change, and
              triggers the right next steps autonomously.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
            <div className="space-y-3">
              {tprmWorkflow.map((step, index) => (
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
                <p className="text-xs uppercase tracking-[0.16em] text-primary">Continuous loop</p>
                <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
                  {tprmWorkflow.map((step, index) => (
                    <div key={step.title} className="flex items-center gap-1">
                      <span>{step.title}</span>
                      {index < tprmWorkflow.length - 1 ? (
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

      {/* Risks */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Risks we address</p>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                The vendor risks that accumulate when TPRM runs on spreadsheets.
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.07}>
            {tprmRisks.map((risk) => (
              <StaggerItem key={risk.title}>
                <motion.div
                  className="group h-full rounded-3xl border-gradient bg-gradient-card p-7"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-destructive/10 p-3 transition-colors group-hover:bg-destructive/15">
                    <risk.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{risk.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{risk.description}</p>
                  <p className="mt-4 border-l-2 border-destructive/30 pl-4 text-xs leading-6 text-muted-foreground">
                    <span className="font-medium text-foreground">Impact: </span>
                    {risk.impact}
                  </p>
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
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Benefits</p>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                Always current risk. Always clear next steps.
              </h2>
            </FadeUp>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {tprmBenefits.map((benefit, index) => (
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
                  Everything you need for enterprise-grade TPRM.
                </h2>
                <ul className="mt-8 space-y-4">
                  {tprmCapabilities.map((capability, index) => (
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
                    {tprmStats.map((stat, index) => (
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
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">Observeri advantage</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    Third Party Risk connects directly to Observeri&apos;s AI Risk Operations Center, Compliance
                    Management, and Focused Remediation modules—so vendor findings flow into enterprise risk registers,
                    control assessments, and executive dashboards without duplicate data entry.
                  </p>
                </div>
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
                  Know your vendor exposure. Anytime.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Observeri Third Party Risk keeps discovery, reassessment, and closure running continuously—so you
                  always know what changed, what matters, and what is verified.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button asChild variant="hero" size="lg" className="group">
                    <Link to="/?contactForm=true">
                      Start Free Trial
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/features">Explore All Modules</Link>
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

export default ThirdPartyRisk;
