import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  ChartColumnBig,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  Gauge,
  HeartPulse,
  Landmark,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import {
  FadeUp,
  ScaleUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";

const executiveMetrics = [
  { value: "1,656%", label: "Year 1 ROI" },
  { value: "21 Days", label: "Payback Period" },
  { value: "$9.11M", label: "Net Year 1 ROI" },
  { value: "4,900", label: "Hours Saved" },
];

const marketPressures = [
  {
    value: "86%",
    label: "Increase in attacks",
    description: "Year-over-year surge in healthcare cyber incidents.",
  },
  {
    value: "$10.93M",
    label: "Average breach cost",
    description: "Highest across all industries for the 13th consecutive year.",
  },
  {
    value: "21 Days",
    label: "Critical downtime",
    description: "Average time to restore core clinical systems after a major incident.",
  },
];

const consultancyServices = [
  "Consulting & Advisory",
  "Design Security Architecture",
  "Incident Response Readiness",
  "GRC + Sec Ops Integration",
  "Red Teaming",
  "Data Privacy Incident Management",
  "Risk & Threat Landscape Assessment",
  "Forensic Investigation",
  "Cyber Security Maturity Assessment",
];

const grcFailures = [
  {
    title: "Backward-looking",
    description: "Audit-driven visibility leaves 4-7 week blind spots between reviews.",
  },
  {
    title: "Manual and costly",
    description: "Teams spend up to 40% of security budgets on compliance admin instead of active defense.",
  },
  {
    title: "Board visibility gap",
    description: "Technical reporting fails to translate cyber exposure into financial decisions.",
  },
];

const recoveryCosts = [
  "Incident response and forensics: $1.2M - $2.5M",
  "Business interruption and downtime: $3.5M - $5.0M",
  "Regulatory fines and penalties: $100K - $4.2M",
  "Legal defense and settlements: $800K - $1.8M",
  "Reputation loss and LTV impact: $2.0M - $5.0M",
];

const mitigationCosts = [
  "Platform license: $100K - $250K",
  "Implementation and onboarding: $50K - $100K",
  "Support and training: $20K - $50K",
  "Predictive intelligence: Included",
  "Managed services: Included",
];

const roiRows = [
  ["Prevented breach risk", "$8,200,000"],
  ["Automation savings", "$735,000"],
  ["Faster remediation", "$420,000"],
  ["Audit efficiency", "$180,000"],
  ["Insurance premium reduction", "$120,000"],
];

const outcomes = [
  {
    icon: ChartColumnBig,
    title: "Automation ROI",
    value: "$735K",
    description: "Direct labor cost saved annually by reducing manual GRC work and audit prep.",
  },
  {
    icon: Clock3,
    title: "Decision Velocity",
    value: "10-15X",
    description: "Move from 4-7 week GRC cycles to 2-3 day executive decision windows.",
  },
  {
    icon: TrendingDown,
    title: "Risk Reduction",
    value: "83%",
    description: "Reduce expected annual loss from $12.4M to $2.1M with quantified action plans.",
  },
];

const dashboardViews = [
  {
    title: "CEO",
    subtitle: "Enterprise Risk Pulse",
    stat: "72",
    note: "Overall risk score, down 18 points",
    highlights: ["Supply chain disruption: $4.2M", "Ransomware/extortion: $8.5M", "Regulatory risk: $1.1M"],
  },
  {
    title: "CFO",
    subtitle: "Financial Risk Exposure",
    stat: "$2.1M",
    note: "Expected annual loss, down from $12.4M",
    highlights: ["$8.2M cost avoidance YTD", "Insurance premium down 18%", "Budget vs risk reduction ROI"],
  },
  {
    title: "CIO",
    subtitle: "Technology Asset Health",
    stat: "99.8%",
    note: "Uptime with 100% API health visibility",
    highlights: ["12 high-risk assets", "Attack surface trend monitoring", "Modernization roadmap by asset class"],
  },
  {
    title: "Board",
    subtitle: "Governance Summary",
    stat: "Top 5%",
    note: "Industry benchmark leadership view",
    highlights: ["HIPAA / HITRUST compliant", "Patient trust index: 92/100", "Emerging threat: AI supply chain"],
  },
];

const differentiators = [
  {
    icon: BrainCircuit,
    title: "Predictive, Not Reactive",
    legacy: "Backward-looking audits and after-the-fact reporting.",
    modern: "AI predicts breaches 30-90 days before occurrence.",
    value: "95% cost savings by preventing instead of recovering.",
  },
  {
    icon: CircleDollarSign,
    title: "Quantified, Not Theatrical",
    legacy: "High / medium / low ratings with little board meaning.",
    modern: "Expected annual loss expressed in clear financial exposure.",
    value: "Budget approval gets easier when risk is shown in dollars.",
  },
  {
    icon: Bot,
    title: "Automated, Not Administrative",
    legacy: "Manual documentation, spreadsheets, and follow-up loops.",
    modern: "60% workflow automation with AI agents driving remediation.",
    value: "$735K in annual labor savings.",
  },
  {
    icon: Building2,
    title: "Integrated, Not Siloed",
    legacy: "Disconnected tools for assets, threats, and compliance.",
    modern: "Unified platform with API-first data flowing into one view.",
    value: "50% faster decisions from shared context.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare-Proven, Not Generic",
    legacy: "One-size-fits-all compliance templates.",
    modern: "Built around HIPAA, HITRUST, and healthcare risk patterns.",
    value: "Regulatory trust and stronger patient data protection.",
  },
];

const roadmap = [
  {
    title: "Days 1 - 30",
    phase: "Foundation",
    description: "Asset discovery, classification, integrations, and first-pass AI risk calibration.",
    quickWin: "Executive risk dashboard live in 2 weeks.",
  },
  {
    title: "Days 31 - 60",
    phase: "Activation",
    description: "Automated assessments, AI remediation workflows, and HIPAA / HITRUST mapping go live.",
    quickWin: "First predicted threat prevented automatically.",
  },
  {
    title: "Days 61 - 90",
    phase: "Optimization",
    description: "Governance workflows mature, predictive analytics tune to noise, and board reporting becomes continuous.",
    quickWin: "First audit cycle completed with zero findings.",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  React.useEffect(() => {
    if (searchParams.get("contactForm") === "true") {
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => scrollToContact(), 100);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />
      <Hero />

     
      <section className="border-y border-border/30 bg-card/20">
        <div className="container mx-auto grid gap-6 px-6 py-10 md:grid-cols-4">
          {executiveMetrics.map((metric, index) => (
            <FadeUp key={metric.label} delay={index * 0.08}>
              <div className="rounded-2xl border-gradient bg-gradient-card p-6 text-center">
                <p className="mb-2 text-3xl font-display font-bold text-primary">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section id="features" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <SlideInLeft>
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  The Business Case
                </p>
                <h2 className="mb-6 text-3xl font-display font-bold md:text-5xl">
                  Why now: the cost of waiting is already on the balance sheet.
                </h2>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  The deck frames cyber risk as a strategic business issue, not just a security program issue.
                  This redesign keeps that same theme and puts executive urgency front and center.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  {marketPressures.map((item, index) => (
                    <FadeUp key={item.label} delay={0.1 + index * 0.08}>
                      <div className="flex h-full min-h-[220px] flex-col rounded-2xl border-gradient bg-gradient-card p-6">
                        <p className="text-3xl font-display font-bold text-foreground">{item.value}</p>
                        <p className="mt-2 font-medium text-foreground">{item.label}</p>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="rounded-3xl border-gradient bg-gradient-card p-8 shadow-2xl shadow-primary/10">
                <div className="mb-8 flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <ShieldAlert className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">Traditional GRC Failures</p>
                    <h3 className="text-2xl font-display font-semibold">What executives are trying to escape</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {grcFailures.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border/40 bg-background/30 p-5">
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/10 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">Executive Question</p>
                  <p className="mt-3 text-lg font-medium leading-8 text-foreground">
                    How do we transform cyber risk from a cost center into a strategic business enabler?
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Financial Impact Analysis
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                One prevented breach changes the economics immediately.
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-5 text-lg text-muted-foreground">
                The presentation’s core argument is simple: mitigation costs roughly 4-6% of recovery exposure,
                creating 12-27X ROI potential in year one.
              </p>
            </FadeUp>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
            <ScaleUp>
              <div className="h-full rounded-3xl border-gradient bg-gradient-card p-8">
                <div className="mb-6 flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-rose-300" />
                  <h3 className="text-2xl font-display font-semibold">Cost of Recovery</h3>
                </div>
                <div className="space-y-4">
                  {recoveryCosts.map((item) => (
                    <div key={item} className="rounded-2xl border border-border/30 bg-background/30 p-4 text-sm text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-rose-500/10 p-5">
                  <p className="text-sm text-muted-foreground">Total exposure</p>
                  <p className="mt-1 text-3xl font-display font-bold text-foreground">$8M - $18.5M</p>
                </div>
              </div>
            </ScaleUp>

            <ScaleUp delay={0.1}>
              <div className="h-full rounded-3xl border-gradient bg-gradient-card p-8">
                <div className="mb-6 flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-300" />
                  <h3 className="text-2xl font-display font-semibold">Cost of Mitigation</h3>
                </div>
                <div className="space-y-4">
                  {mitigationCosts.map((item) => (
                    <div key={item} className="rounded-2xl border border-border/30 bg-background/30 p-4 text-sm text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-emerald-500/10 p-5">
                  <p className="text-sm text-muted-foreground">Total investment</p>
                  <p className="mt-1 text-3xl font-display font-bold text-foreground">$170K - $400K</p>
                </div>
              </div>
            </ScaleUp>

            <SlideInRight>
              <div className="flex h-full flex-col justify-between rounded-3xl border-gradient bg-gradient-card p-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">Bottom Line Verdict</p>
                  <h3 className="mt-4 text-3xl font-display font-bold">12-27X ROI in year one</h3>
                  <p className="mt-4 leading-7 text-muted-foreground">
                    Year 1 benefits in the deck total $9.66M against a modeled $550K investment, with ROI
                    becoming positive within the first month of deployment.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {roiRows.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-border/30 bg-background/30 px-4 py-3">
                      <span className="text-sm text-muted-foreground">{label}</span>
                      <span className="font-semibold text-foreground">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/10 p-5">
                  <p className="text-sm text-muted-foreground">Net Year 1 ROI</p>
                  <p className="mt-1 text-4xl font-display font-bold text-primary">$9.11M</p>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-14 text-center">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Operational Efficiency
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                Move the team from spreadsheet chasing to strategic action.
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid gap-6 lg:grid-cols-3" staggerDelay={0.08}>
            {outcomes.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-3xl border-gradient bg-gradient-card p-8">
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-primary">{item.title}</p>
                  <p className="mt-4 text-4xl font-display font-bold text-foreground">{item.value}</p>
                  <p className="mt-4 leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <SlideInLeft>
              <div className="rounded-3xl border-gradient bg-gradient-card p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Decision Velocity</p>
                <h3 className="mt-4 text-2xl font-display font-semibold">From 4-7 weeks to 2-3 days</h3>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  The PPT positions speed as a competitive moat. Real-time alerts, AI risk analysis, and immediate
                  executive visibility compress the traditional cycle into a faster operating rhythm.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="text-sm text-muted-foreground">Traditional cycle</p>
                    <p className="mt-2 text-3xl font-display font-bold text-foreground">4-7 Weeks</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Data aggregation, analysis, alignment, and implementation run in serial.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                    <p className="text-sm text-primary">AI-powered cycle</p>
                    <p className="mt-2 text-3xl font-display font-bold text-foreground">2-3 Days</p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Alerts in under an hour, AI analysis within hours, and resolution in 48-72 hours.
                    </p>
                  </div>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="rounded-3xl border-gradient bg-gradient-card p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Executive Value</p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-background/30 p-4">
                    <BriefcaseBusiness className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">CEO</p>
                      <p className="text-sm leading-6 text-muted-foreground">Reputation protection, strategic visibility, investor confidence.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-background/30 p-4">
                    <Landmark className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">CFO</p>
                      <p className="text-sm leading-6 text-muted-foreground">Cost predictability, budget optimization, reduced insurance premiums.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-background/30 p-4">
                    <Gauge className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">CIO</p>
                      <p className="text-sm leading-6 text-muted-foreground">IT and security alignment, technology ROI, clear modernization roadmap.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-background/30 p-4">
                    <Stethoscope className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">CISO</p>
                      <p className="text-sm leading-6 text-muted-foreground">Proactive posture, team efficiency, and stronger board credibility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <SlideInLeft>
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  Risk Quantification
                </p>
                <h2 className="text-3xl font-display font-bold md:text-5xl">
                  Speak the CFO&apos;s language with expected annual loss.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Instead of abstract red-yellow-green scoring, the presentation reframes exposure in dollars:
                  asset value multiplied by threat probability and residual risk becomes financial impact leadership
                  can budget against.
                </p>

                <div className="mt-8 rounded-3xl border-gradient bg-gradient-card p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">Quantification Model</p>
                  <div className="mt-6 grid gap-3 text-center md:grid-cols-4 md:items-center">
                    <div className="rounded-2xl bg-background/30 p-4 font-semibold">Asset Value</div>
                    <div className="rounded-2xl bg-background/30 p-4 font-semibold">Threat Probability</div>
                    <div className="rounded-2xl bg-background/30 p-4 font-semibold">(1 - Control Effectiveness)</div>
                    <div className="rounded-2xl bg-primary/10 p-4 font-semibold text-primary">Expected Annual Loss</div>
                  </div>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="rounded-3xl border-gradient bg-gradient-card p-8">
                <div className="flex items-center justify-between gap-4 border-b border-border/30 pb-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">Patient Database Server</p>
                    <h3 className="mt-2 text-2xl font-display font-semibold">Real-world before and after</h3>
                  </div>
                  <div className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
                    92% Risk Reduction
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Before</p>
                    <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <div className="flex justify-between gap-4"><span>Asset value</span><span className="font-semibold text-foreground">$12.0M</span></div>
                      <div className="flex justify-between gap-4"><span>Threat probability</span><span className="font-semibold text-foreground">42%</span></div>
                      <div className="flex justify-between gap-4"><span>Residual risk</span><span className="font-semibold text-foreground">35%</span></div>
                    </div>
                    <div className="mt-5 rounded-2xl bg-rose-500/10 p-4">
                      <p className="text-xs text-muted-foreground">EAL exposure</p>
                      <p className="mt-1 text-3xl font-display font-bold text-foreground">$1.76M</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">After GRC Sphere</p>
                    <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                      <div className="flex justify-between gap-4"><span>Asset value</span><span className="font-semibold text-foreground">$12.0M</span></div>
                      <div className="flex justify-between gap-4"><span>Threat probability</span><span className="font-semibold text-foreground">8%</span></div>
                      <div className="flex justify-between gap-4"><span>Residual risk</span><span className="font-semibold text-foreground">15%</span></div>
                    </div>
                    <div className="mt-5 rounded-2xl bg-background/40 p-4">
                      <p className="text-xs text-muted-foreground">EAL exposure</p>
                      <p className="mt-1 text-3xl font-display font-bold text-foreground">$144K</p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-muted-foreground">
                  Portfolio view, trend analysis, and board reporting all become easier when security risk is translated
                  into financial exposure instead of technical counts.
                </p>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-14 text-center">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Executive Dashboard Preview
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                Real-time visibility tailored to each decision-maker.
              </h2>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
                The deck shows dashboards customized by role. The homepage now previews that same idea:
                executives don&apos;t see the same screen, they see the same truth through the lens they own.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-4" staggerDelay={0.08}>
            {dashboardViews.map((view) => (
              <StaggerItem key={view.title}>
                <div className="h-full rounded-3xl border-gradient bg-gradient-card p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-primary">{view.title}</p>
                      <h3 className="mt-2 text-xl font-display font-semibold">{view.subtitle}</h3>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      LIVE
                    </span>
                  </div>

                  <p className="mt-6 text-4xl font-display font-bold text-foreground">{view.stat}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{view.note}</p>

                  <div className="mt-6 space-y-3">
                    {view.highlights.map((item) => (
                      <div key={item} className="rounded-2xl border border-border/30 bg-background/30 px-4 py-3 text-sm text-muted-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
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
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Strategic Differentiators
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                Why GRC Sphere feels different from legacy GRC.
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3" staggerDelay={0.08}>
            {differentiators.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-3xl border-gradient bg-gradient-card p-8">
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">{item.title}</h3>
                  <div className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
                    <p><span className="font-semibold text-foreground">Traditional:</span> {item.legacy}</p>
                    <p><span className="font-semibold text-foreground">GRC Sphere:</span> {item.modern}</p>
                  </div>
                  <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm leading-6 text-foreground">
                    {item.value}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SlideInLeft>
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                  90-Day Roadmap
                </p>
                <h2 className="text-3xl font-display font-bold md:text-5xl">
                  Fast time-to-value without changing your stack.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  The deck promises minimal disruption: SaaS delivery, API-first integration, no extra headcount,
                  and only four hours of executive training. The page now makes that rollout story tangible.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border-gradient bg-gradient-card p-5">
                    <p className="text-sm text-muted-foreground">Platform license</p>
                    <p className="mt-2 text-2xl font-display font-bold text-foreground">$250K - $450K</p>
                  </div>
                  <div className="rounded-2xl border-gradient bg-gradient-card p-5">
                    <p className="text-sm text-muted-foreground">Implementation</p>
                    <p className="mt-2 text-2xl font-display font-bold text-foreground">$50K - $100K</p>
                  </div>
                  <div className="rounded-2xl border-gradient bg-gradient-card p-5">
                    <p className="text-sm text-muted-foreground">ROI breakeven</p>
                    <p className="mt-2 text-2xl font-display font-bold text-primary">21 - 30 Days</p>
                  </div>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="space-y-5">
                {roadmap.map((item, index) => (
                  <div key={item.title} className="rounded-3xl border-gradient bg-gradient-card p-7">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-primary">{item.title}</p>
                        <h3 className="mt-2 text-2xl font-display font-semibold">{item.phase}</h3>
                        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                        <CalendarClock className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-primary">Quick Win {index + 1}</p>
                      <p className="mt-2 text-sm leading-6 text-foreground">{item.quickWin}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[320px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto px-6">
          <ScaleUp>
            <div className="rounded-[2rem] border-gradient bg-gradient-card p-10 md:p-14">
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Decision Time</span>
                </div>

                <h2 className="text-3xl font-display font-bold md:text-5xl">
                  Can you afford to leave $2M+ of monthly risk exposure unmanaged?
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                  The presentation closes with an investment decision, not a feature checklist: modeled annual cost
                  of $500K, year 1 return above $9M, and a payback period of 21 days.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-4">
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="text-sm text-muted-foreground">Annual cost</p>
                    <p className="mt-2 text-3xl font-display font-bold text-foreground">$500K</p>
                  </div>
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="text-sm text-muted-foreground">Year 1 return</p>
                    <p className="mt-2 text-3xl font-display font-bold text-foreground">$9M+</p>
                  </div>
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="text-sm text-muted-foreground">Payback</p>
                    <p className="mt-2 text-3xl font-display font-bold text-primary">21 Days</p>
                  </div>
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="text-sm text-muted-foreground">Strategic value</p>
                    <p className="mt-2 text-xl font-display font-bold text-foreground">Reputation Protection</p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button variant="hero" size="lg" className="group" onClick={scrollToContact}>
                    Schedule Briefing
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" size="lg" onClick={scrollToContact}>
                    Start Proof-of-Value
                  </Button>
                </div>

                <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="text-sm text-muted-foreground">Executive Briefing</p>
                    <p className="mt-2 font-semibold text-foreground">60 minutes</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Personalized risk assessment, ROI model, and live executive dashboard walkthrough.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="text-sm text-muted-foreground">Proof-of-Value</p>
                    <p className="mt-2 font-semibold text-foreground">30 days, real environment</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Quantified baseline, real insights, and measurable 30-day risk reduction metrics.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <p className="text-sm text-muted-foreground">Strategic Planning</p>
                    <p className="mt-2 font-semibold text-foreground">Board-ready support</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Implementation roadmap, budget justification, and leadership alignment materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
