import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  FadeUp,
  ScaleUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CalendarClock,
  ChartNoAxesCombined,
  Gauge,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/grc-sphere-icon.png";

const stats = [
  { value: "24/7", label: "Risk Monitoring" },
  { value: "60%", label: "Task Automation" },
  { value: "100%", label: "Asset Visibility" },
  { value: "21-30 Days", label: "ROI Breakeven" },
];

const pillars = [
  {
    icon: BrainCircuit,
    title: "Predict Before Damage",
    description:
      "GRC Sphere uses AI-powered exposure scoring, threat correlation, and exploit probability analysis to forecast incidents before they escalate.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Translate Risk Into Business Language",
    description:
      "We turn cyber posture into board-ready metrics, quantified scenarios, and decision support that executives can actually act on.",
  },
  {
    icon: Bot,
    title: "Automate Governance Operations",
    description:
      "From assessments and remediation routing to policy mapping and follow-up workflows, the platform reduces manual coordination overhead.",
  },
  {
    icon: ShieldCheck,
    title: "Build Regulatory Confidence",
    description:
      "Continuous alignment with frameworks like ISO 27001, NIST, SOC 2, GDPR, PCI DSS, and sector-specific controls creates audit-ready programs.",
  },
];

const outcomes = [
  {
    title: "Reputation Protection",
    description:
      "Reduce breach likelihood, limit blast radius, and demonstrate duty of care before trust and brand equity are on the line.",
  },
  {
    title: "Operational Resilience",
    description:
      "Minimize downtime from ransomware, supply chain disruption, and control gaps with continuous visibility and faster containment.",
  },
  {
    title: "Innovation Enablement",
    description:
      "Help product, security, and compliance teams move faster with embedded controls, automated sign-offs, and less friction.",
  },
  {
    title: "Executive Assurance",
    description:
      "Give the board and C-suite real-time oversight with a clear view of exposure, accountability, and remediation progress.",
  },
];

const sectors = [
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Energy",
  "Technology & SaaS",
];

const roadmap = [
  {
    phase: "Days 1 - 30",
    title: "Foundation",
    description:
      "Asset discovery, ecosystem integrations, baseline assessments, and initial AI model calibration establish the operating picture.",
    quickWin: "Executive risk dashboard live within 2 weeks.",
  },
  {
    phase: "Days 31 - 60",
    title: "Activation",
    description:
      "Predictive scoring, automated workflows, policy mapping, and role-based dashboards turn insight into action across teams.",
    quickWin: "Automated remediation and executive reporting in production.",
  },
  {
    phase: "Days 61 - 90",
    title: "Optimization",
    description:
      "Scenario modeling, board cadence, budget alignment, and continuous tuning drive a durable risk program with measurable ROI.",
    quickWin: "Board-ready monthly reporting and verified strategic outcomes.",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.18, 1], opacity: [0.28, 0.45, 0.28] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-5xl text-center">
            <motion.p
              className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About GRC Sphere
            </motion.p>
            <motion.h1
              className="mb-6 text-4xl font-display font-bold md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Strategic cyber risk management
              <br />
              <span className="text-gradient">built for executive decision-making.</span>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              GRC Sphere turns cyber risk into measurable business value. The platform combines AI,
              automation, and real-time intelligence so leadership teams can predict, prevent, protect,
              and profit from stronger governance.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/30 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <FadeUp key={stat.label} delay={index * 0.08}>
                <div className="rounded-2xl border-gradient bg-gradient-card p-6 text-center">
                  <p className="mb-2 text-3xl font-display font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <SlideInLeft>
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  Our Position
                </p>
                <h2 className="text-3xl font-display font-bold md:text-5xl">
                  Moving beyond legacy compliance checklists.
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
                  <p>
                    The market does not need another static GRC tool. It needs a platform that helps
                    executives understand exposure in business terms, act faster, and prove oversight
                    continuously.
                  </p>
                  <p>
                    GRC Sphere was shaped around that need. We bring together asset visibility, threat
                    intelligence, predictive scoring, workflow automation, and board-ready reporting in
                    a single operating model.
                  </p>
                  <p>
                    The result is a GRC platform designed not just for audit preparation, but for
                    resilience, reputation protection, and enterprise growth.
                  </p>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="rounded-[2rem] border-gradient bg-gradient-card p-8 md:p-10">
                <div className="flex items-center gap-4 border-b border-border/30 pb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 p-2">
                    <img src={logoIcon} alt="GRC Sphere" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">Platform Core</p>
                    <h3 className="text-2xl font-display font-semibold">Enterprise AI-powered GRC</h3>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="font-semibold text-foreground">Prediction before damage</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      AI models estimate risk exposure, incident likelihood, and exploitability before
                      problems become business events.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="font-semibold text-foreground">Automation at operating speed</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Assessments, ticketing, follow-up, and policy alignment are automated so teams can
                      spend less time coordinating and more time reducing risk.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                    <p className="font-semibold text-foreground">Built for the C-suite</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Real-time dashboards translate technical posture into business impact, fiduciary
                      oversight, and decision-ready context.
                    </p>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                What Defines Us
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                The principles behind the platform.
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.08}>
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="h-full rounded-3xl border-gradient bg-gradient-card p-8">
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                    <pillar.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <SlideInLeft>
              <div className="flex h-full flex-col">
                <div>
                  <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                    Strategic Outcomes
                  </p>
                  <h2 className="text-3xl font-display font-bold md:text-5xl">
                    Why enterprises adopt GRC Sphere.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    The story across the decks is consistent: stronger governance is not just about
                    avoiding fines. It protects reputation, improves resilience, accelerates execution,
                    and gives leadership a cleaner line of sight into enterprise risk.
                  </p>
                </div>

                <div className="mt-8 rounded-3xl border-gradient bg-gradient-card p-8 lg:mt-auto">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">Universal Application</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {sectors.map((sector) => (
                      <span
                        key={sector}
                        className="rounded-full border border-border/40 bg-background/30 px-4 py-2 text-sm text-muted-foreground"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="grid h-full gap-5 sm:grid-cols-2">
                {outcomes.map((item) => (
                  <div
                    key={item.title}
                    className="flex h-full min-h-[182px] flex-col rounded-3xl border-gradient bg-gradient-card p-7"
                  >
                    <p className="text-xl font-display font-semibold text-foreground">{item.title}</p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScaleUp>
            <div className="rounded-[2rem] border-gradient bg-gradient-card p-10 md:p-14">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                    <ShieldAlert className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Why It Matters</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold md:text-5xl">
                    The cost of doing nothing keeps compounding.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    The executive ROI material is blunt about the stakes: every month of delay adds
                    unmitigated exposure, while boards face rising scrutiny over cyber oversight,
                    insurance premiums continue climbing, and operational disruption keeps getting more expensive.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="text-sm text-muted-foreground">3-year exposure</p>
                    <p className="mt-2 text-3xl font-display font-bold text-foreground">$23.6M</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Projected cumulative risk exposure in the status quo scenario highlighted in the deck.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="text-sm text-muted-foreground">Monthly delay cost</p>
                    <p className="mt-2 text-3xl font-display font-bold text-foreground">$2M+</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Unmitigated exposure accumulates while decisions are deferred.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="text-sm text-muted-foreground">Insurance impact</p>
                    <p className="mt-2 text-3xl font-display font-bold text-primary">15-20%</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Potential premium advantage for organizations that demonstrate mature risk controls.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                    <p className="text-sm text-primary">Executive stance</p>
                    <p className="mt-2 text-2xl font-display font-bold text-foreground">Demonstrable due diligence</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Strong governance becomes both a defensive necessity and a strategic differentiator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                90-Day Rollout
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                Fast time-to-value without reshaping the stack.
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                The implementation model in the decks is designed for minimal disruption: SaaS delivery,
                API-first integration, no added headcount, and just enough executive enablement to make
                the system operational quickly.
              </p>
            </FadeUp>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {roadmap.map((item, index) => (
              <FadeUp key={item.phase} delay={index * 0.08}>
                <div className="h-full rounded-3xl border-gradient bg-gradient-card p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-primary">{item.phase}</p>
                      <h3 className="mt-2 text-2xl font-display font-semibold">{item.title}</h3>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <CalendarClock className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                  <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary">Quick Win</p>
                    <p className="mt-2 text-sm leading-6 text-foreground">{item.quickWin}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="mx-auto max-w-4xl rounded-[2rem] border-gradient bg-gradient-card p-10 text-center md:p-14">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Next Step</span>
              </div>

              <h2 className="text-3xl font-display font-bold md:text-5xl">
                Bring strategic cyber risk management into the operating model.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                GRC Sphere is built for organizations that want more than audit readiness. It is for
                teams that need predictive intelligence, disciplined execution, and executive assurance
                in one platform.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  variant="hero"
                  size="lg"
                  className="group"
                  onClick={() => navigate("/?contactForm=true")}
                >
                  Book Executive Briefing
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate("/solutions")}>
                  Explore Industry Solutions
                </Button>
              </div>

              <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
                <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                  <Gauge className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-semibold text-foreground">Executive visibility</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Board-ready dashboards that frame cyber posture as enterprise risk.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                  <Building2 className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-semibold text-foreground">Minimal disruption</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    SaaS deployment, API-first integration, and no infrastructure overhaul required.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-semibold text-foreground">Measured outcomes</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    A GRC program tied to resilience, oversight, and real business value.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
