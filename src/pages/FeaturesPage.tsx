import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers3, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FadeUp, ScaleUp, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { featureOutcomes, platformModules, type PlatformModule } from "@/data/platformModules";

const platformPillars = [
  "Cybersecurity GRC platform modules",
  "AI risk assessment & management scoring",
  "ISO27001, NIST, FAIR & regulatory compliance",
  "Vulnerability tracking & prioritization",
  "Cybersecurity risk quantification",
  "Audit, PCI, SWIFT, NESA, NIA, MiCA & DORA programs",
  "Control assessment platform automation",
  "Risk acceptance & compensating controls",
  "Attack surface & vendor risk telemetry",
  "Risk register software & quantified exposure",
];

const FeaturesPage = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);
  const [activeModule, setActiveModule] = useState<PlatformModule | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute right-1/4 top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.16, 1], opacity: [0.28, 0.45, 0.28] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_440px]">
            <div>
              <motion.p
                className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Core Platform
              </motion.p>
              <motion.h1
                className="max-w-4xl text-4xl font-display font-bold leading-tight md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                AI-powered GRC modules for predictive cyber risk analytics and security compliance management software
                workflows.
              </motion.h1>
              <motion.p
                className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
               Observeri is an AI-powered platform that transforms fragmented risk, compliance, and security data into real-time, quantified risk intelligence—enabling organizations to prioritize, predict, and reduce risk exposure with precision.
              </motion.p>
              <motion.p
                className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                Observeri replaces static GRC systems with an AI-driven risk intelligence engine that continuously analyzes threats, vulnerabilities, assets, and controls to quantify real-world risk exposure and prioritize actions that deliver maximum risk reduction.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button asChild variant="hero" size="lg">
                  <a href="#module-catalog">
                    Explore Modules
                    <ArrowRight />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/solutions">View Industry Solutions</Link>
                </Button>
              </motion.div>
            </div>

            <ScaleUp delay={0.15}>
              <div className="rounded-3xl border-gradient bg-gradient-card p-6">
                <div className="flex items-center gap-3 border-b border-border/30 pb-5">
                  <div className="rounded-2xl bg-primary/10 p-3">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">Observeri GRC v3.0</p>
                    <h2 className="text-2xl font-display font-semibold">Intelligence Engine</h2>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {platformPillars.map((pillar) => (
                    <div key={pillar} className="flex items-center gap-3 rounded-2xl bg-background/30 px-4 py-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScaleUp>
          </div>
        </div>
      </section>

      <section className="border-y border-border/30 bg-card/20 py-14">
        <div className="container mx-auto grid gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureOutcomes.map((outcome, index) => (
            <FadeUp key={outcome.label} delay={index * 0.06}>
              <div className="h-full rounded-2xl border-gradient bg-gradient-card p-6">
                <p className="text-4xl font-display font-bold text-primary">{outcome.value}</p>
                <h3 className="mt-3 text-lg font-display font-semibold">{outcome.label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{outcome.detail}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section id="module-catalog" className="py-24">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.04}>
            {platformModules.map((module) => (
              <StaggerItem key={module.code}>
                <motion.article
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border-gradient bg-gradient-card transition-all duration-300"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                  <button
                    type="button"
                    className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/30 bg-background/40 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    onClick={() => setActiveImage({ src: module.image, title: module.title })}
                    aria-label={`Open ${module.title} image full screen`}
                  >
                    <img
                      src={module.image}
                      alt={`${module.title} module interface`}
                      className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </button>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-2xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                        <module.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="rounded-full border border-border/40 bg-background/30 px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {module.code}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="mt-5 text-left text-2xl font-display font-semibold transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                      onClick={() => setActiveModule(module)}
                      aria-label={`Learn more about ${module.title}`}
                    >
                      {module.title}
                    </button>
                    <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{module.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {module.lifecycle.map((step) => (
                        <span
                          key={step}
                          className="rounded-full border border-border/40 bg-background/30 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {step}
                        </span>
                      ))}
                    </div>

                    {module.code === "3RD_PARTY" ? (
                      <Link
                        to="/products/third-party-risk"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Explore Third Party Risk
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {module.code === "CORE_SYSTEM" ? (
                      <Link
                        to="/products/ai-risk-operations-center"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Explore AI Risk Operations Center
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {module.code === "PREDICT_V2" ? (
                      <Link
                        to="/products/cyber-risk-management"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Explore Cyber Risk Management
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {module.code === "VULNERABILITIES" ? (
                      <Link
                        to="/products/vulnerability-operations"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Explore Vulnerability Operations
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {module.code === "IS_GOVERNANCE" || module.code === "POLICY_MGMT" ? (
                      <Link
                        to="/products/security-governance"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Explore Security Governance
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {module.code === "COMPLIANCE_MGMT" ? (
                      <Link
                        to="/products/compliance-management"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Explore Compliance Management
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {module.code === "REMEDIATION" ? (
                      <Link
                        to="/products/exposure-management"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Explore Exposure Management
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {module.code === "THREAT" ? (
                      <Link
                        to="/products/external-attack-surface-management"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Explore External Attack Surface Management
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {module.code === "HUMAN_RISK" ? (
                      <Link
                        to="/products/human-risk-management"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Explore Human Risk Management
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                    {module.code === "ASSET_MGMT" ? (
                      <Link
                        to="/products/information-asset-management"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Explore Information Asset Management
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
        <div className="container relative z-10 mx-auto px-6">
          <ScaleUp>
            <div className="rounded-[2rem] border-gradient bg-gradient-card p-10 md:p-14">
              <div className="mx-auto max-w-4xl text-center">
                <div className="mx-auto mb-6 inline-flex rounded-2xl bg-primary/10 p-4">
                  <Layers3 className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl font-display font-bold md:text-5xl">
                  One platform for prevention, audit readiness, and board-level assurance.
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                  Observeri shifts teams from reactive checklists to continuous risk prevention with quantified
                  exposure, automated workflows, and executive-ready dashboards.
                </p>
                <div className="mt-9">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/?contactForm=true">
                      Start Your Transformation
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      <Footer />

      <Dialog open={activeModule !== null} onOpenChange={(open) => !open && setActiveModule(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-border/50 bg-gradient-card p-0 sm:rounded-3xl">
          <AnimatePresence mode="wait">
            {activeModule ? (
              <motion.div
                key={activeModule.code}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border/30 bg-background/40">
                  <img
                    src={activeModule.image}
                    alt={`${activeModule.title} module interface`}
                    className="h-full w-full object-contain p-4"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>

                <div className="p-6 md:p-8">
                  <DialogHeader className="space-y-4 text-left">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="rounded-2xl bg-primary/10 p-3"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        <activeModule.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div className="flex-1 space-y-1">
                        <span className="inline-block rounded-full border border-border/40 bg-background/30 px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          {activeModule.code}
                        </span>
                        <DialogTitle className="text-2xl font-display font-semibold md:text-3xl">
                          {activeModule.title}
                        </DialogTitle>
                      </div>
                    </div>
                    <DialogDescription className="text-base leading-7 text-muted-foreground">
                      {activeModule.summary}
                    </DialogDescription>
                  </DialogHeader>

                  <motion.p
                    className="mt-6 text-sm leading-7 text-foreground/90"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                  >
                    {activeModule.details}
                  </motion.p>

                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {activeModule.capabilities.map((capability, index) => (
                        <motion.li
                          key={capability}
                          className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + index * 0.05, duration: 0.25 }}
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {capability}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                  >
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                      Lifecycle
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModule.lifecycle.map((step, index) => (
                        <motion.span
                          key={step}
                          className="rounded-full border border-border/40 bg-background/30 px-3 py-1 text-xs text-muted-foreground"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.04, duration: 0.2 }}
                        >
                          {step}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.title} full screen image`}
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-border/50 bg-card/80 p-3 text-foreground transition-colors hover:bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setActiveImage(null)}
            aria-label="Close full screen image"
          >
            <X className="h-5 w-5" />
          </button>

          <img
            src={activeImage.src}
            alt={`${activeImage.title} module interface`}
            className="max-h-[92vh] max-w-[96vw] rounded-2xl border border-border/40 bg-background object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
};

export default FeaturesPage;
