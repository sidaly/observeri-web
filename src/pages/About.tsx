import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";
import { ArrowRight, Bot, BrainCircuit, ChartNoAxesCombined, ShieldCheck } from "lucide-react";
import logoIcon from "@/assets/grc-sphere-icon.webp";

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
      "Observeri GRC uses AI-powered exposure scoring, threat correlation, and exploit probability analysis to forecast incidents before they escalate.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Translate Risk Into Business Language",
    description:
      "Cyber, operational, technology, financial, and ESG risk each keep their measure, then combine into one enterprise risk executives can act on.",
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

const aboutParagraphs = [
  "Observeri Technologies helps regulated organizations strengthen risk management and cyber resilience through an AI-powered GRC platform and specialist advisory services.",
  "Our platform unifies cyber risk, IT risk, compliance, third-party risk, and AI governance in a single AI Risk Operations Center. It continuously scores assets, forecasts exposure, and expresses residual risk in financial terms that boards and leadership can act on. Unlike traditional GRC systems, Observeri is built to be predictive rather than retrospective — automating control mapping and evidence collection across major frameworks while prioritizing true threats over noise.",
  "Alongside the platform, we provide expert consultancy to help organizations improve security strategy, architecture, incident readiness, GRC and security operations integration, red teaming, data privacy response, risk assessments, and cybersecurity maturity. Each engagement is focused on practical outcomes, delivering clear roadmaps that align security with business priorities and strengthen executive decision-making.",
  "Together, our platform and advisory services give organizations a more measurable, proactive, and defensible approach to risk and compliance.",
];

const About = () => {
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
          <div className="mx-auto max-w-4xl">
            <motion.h1
              className="mb-8 text-4xl font-display font-bold md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              About Observeri
            </motion.h1>
            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              {aboutParagraphs.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
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
                    Observeri GRC was shaped around that need. Cyber risk stays in view, and so do
                    operational, technology, financial, and ESG risk. Those domains combine into one
                    enterprise risk, with the reporting the board uses to decide.
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
                    <img decoding="async" src={logoIcon} alt="Observeri" className="h-full w-full object-contain" />
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

      <section className="border-y border-border/30 py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Observeri Technologies
              </p>
              <h2 className="text-3xl font-display font-bold md:text-5xl">Meet The Team</h2>
              <Link
                to="/team"
                className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-primary underline underline-offset-4"
              >
                Meet our founder and team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
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
                    Why enterprises adopt Observeri GRC.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    The story across Observeri GRC is consistent: stronger governance is not just about
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

      <Footer />
    </div>
  );
};

export default About;
