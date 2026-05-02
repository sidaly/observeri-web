import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Fingerprint,
  Network,
  Radar,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FadeUp, ScaleUp, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { Button } from "@/components/ui/button";

const consultancyServices = [
  {
    title: "Consulting & Advisory",
    icon: Building2,
    summary: "C-level focused guidance to align security strategy with business objectives, risk appetite, and board priorities.",
    scope: [
      "Executive workshops and stakeholder alignment",
      "Security program strategy and operating model review",
      "Board-ready cyber risk reporting and decision support",
    ],
    benefits: [
      "Turns cybersecurity into a measurable business conversation",
      "Improves executive confidence in security investment decisions",
      "Creates a practical roadmap for people, process, and technology maturity",
    ],
  },
  {
    title: "Design Security Architecture",
    icon: Network,
    summary: "Assessment and redesign of control layers, tooling, security model, and technology patterns.",
    scope: [
      "Current-state security architecture and control layer assessment",
      "Security tool rationalization and gap analysis",
      "Target-state architecture with layered control recommendations",
    ],
    benefits: [
      "Reduces architectural blind spots and duplicated tooling",
      "Improves resilience across cloud, network, identity, and endpoint layers",
      "Helps teams prioritize controls that directly reduce business risk",
    ],
  },
  {
    title: "Incident Response Readiness",
    icon: Siren,
    summary: "Preparation for boards, C-level leaders, and technical teams to respond to incidents such as ransomware and service disruption.",
    scope: [
      "Incident response playbooks and escalation matrix review",
      "Tabletop exercises for executives and operational teams",
      "Crisis communications, legal, compliance, and recovery planning",
    ],
    benefits: [
      "Shortens response time during high-pressure incidents",
      "Clarifies ownership before an actual breach occurs",
      "Reduces downtime, regulatory exposure, and reputational damage",
    ],
  },
  {
    title: "GRC + Sec Ops Integration",
    icon: ClipboardCheck,
    summary: "Integration of governance, risk, compliance, and security operations into a connected program using company risk appetite.",
    scope: [
      "GRC process review and SecOps workflow mapping",
      "Control, risk, incident, and evidence workflow integration",
      "Quality assurance review for reporting and operational handoffs",
    ],
    benefits: [
      "Removes silos between compliance teams and security operations",
      "Improves evidence quality and audit readiness",
      "Makes risk decisions faster by connecting controls to live security signals",
    ],
  },
  {
    title: "Red Teaming",
    icon: Target,
    summary: "Approved offensive security exercises to validate whether vulnerabilities can be exploited in realistic attack paths.",
    scope: [
      "Threat-led attack scenario planning",
      "Controlled exploitation across agreed systems and processes",
      "Remediation report with prioritized attack path closure",
    ],
    benefits: [
      "Validates real-world defense capability beyond checklist compliance",
      "Highlights exploitable weaknesses before adversaries find them",
      "Improves detection, response, and control effectiveness",
    ],
  },
  {
    title: "Data Privacy Incident Management",
    icon: Fingerprint,
    summary: "Support for privacy incidents, data exposure preparation, regulatory response, and legal case readiness.",
    scope: [
      "Privacy incident intake, triage, and severity classification",
      "Breach notification workflow and regulatory timeline planning",
      "Evidence preservation and legal response preparation",
    ],
    benefits: [
      "Reduces confusion during privacy-sensitive incidents",
      "Improves readiness for regulators, customers, and legal teams",
      "Protects trust by making response actions faster and more consistent",
    ],
  },
  {
    title: "Risk & Threat Landscape Assessment",
    icon: Radar,
    summary: "Organization-wide assessment to identify material cyber risks, relevant threats, and business exposure.",
    scope: [
      "Threat landscape review by industry, geography, and business model",
      "Risk register validation and control effectiveness assessment",
      "Prioritized risk treatment plan aligned to enterprise objectives",
    ],
    benefits: [
      "Gives leadership a clearer view of current and emerging threats",
      "Focuses remediation budgets on the risks that matter most",
      "Improves board-level reporting with a defensible risk narrative",
    ],
  },
  {
    title: "Forensic Investigation",
    icon: FileSearch,
    summary: "Digital forensic investigation for cyber incidents, data leakage, AML concerns, and evidence-led case preparation.",
    scope: [
      "Endpoint, server, log, and cloud evidence collection",
      "Root-cause analysis and incident timeline reconstruction",
      "Forensic reporting for legal, regulatory, or executive use",
    ],
    benefits: [
      "Identifies what happened, how it happened, and what was affected",
      "Supports legal, insurance, and regulatory decision-making",
      "Provides concrete remediation steps to prevent repeat incidents",
    ],
  },
  {
    title: "Cyber Security Maturity Assessment",
    icon: Scale,
    summary: "Benchmarking of cybersecurity function maturity across strategy, people, process, technology, and best practices.",
    scope: [
      "Maturity assessment against recognized security frameworks",
      "Review of security governance, operating model, and capability gaps",
      "Improvement roadmap with quick wins and strategic initiatives",
    ],
    benefits: [
      "Shows leaders where the program stands today and where to invest next",
      "Creates measurable maturity targets for security transformation",
      "Helps justify budget with evidence-backed capability gaps",
    ],
  },
];

const servicePrinciples = [
  "Strategic coverage from board priorities to operational execution",
  "Follow-up support that turns recommendations into measurable action",
  "Outcome-based roadmaps aligned to business risk and control maturity",
  "Measurable and quantifiable reporting for executive stakeholders",
];

const ConsultancyService = () => {
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
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Consultancy Service
            </motion.p>
            <motion.h1
              className="mb-6 text-4xl font-display font-bold md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Bespoke consulting services for strategic cyber resilience.
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Observeri helps organizations align security strategy, governance, operations, incident readiness, and
              privacy response with the risks that matter most to the business.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild variant="hero" size="lg">
                <Link to="/?contactForm=true">
                  Discuss Your Scope
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#consultancy-services">View Services</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/30 bg-card/20 py-14">
        <div className="container mx-auto grid gap-5 px-6 md:grid-cols-2 xl:grid-cols-4">
          {servicePrinciples.map((principle, index) => (
            <FadeUp key={principle} delay={index * 0.06}>
              <div className="h-full rounded-2xl border-gradient bg-gradient-card p-6">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{principle}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section id="consultancy-services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Service Scope & Benefits
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                Every service from the consulting model, expanded into practical business value.
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid gap-6 lg:grid-cols-2" staggerDelay={0.05}>
            {consultancyServices.map((service) => (
              <StaggerItem key={service.title}>
                <motion.article
                  className="group h-full rounded-3xl border-gradient bg-gradient-card p-8 transition-all duration-300"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start">
                    <div className="inline-flex rounded-2xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.summary}</p>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <ShieldAlert className="h-4 w-4 text-primary" />
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Scope</p>
                      </div>
                      <div className="space-y-3">
                        {service.scope.map((item) => (
                          <div key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Benefit</p>
                      </div>
                      <div className="space-y-3">
                        {service.benefits.map((item) => (
                          <div key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
            <div className="rounded-[2rem] border-gradient bg-gradient-card p-10 text-center md:p-14">
              <div className="mx-auto mb-6 inline-flex rounded-2xl bg-primary/10 p-4">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mx-auto max-w-4xl text-3xl font-display font-bold md:text-5xl">
                Move from isolated security work to a connected, measurable resilience program.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                Each engagement is designed to give leadership clearer decisions, security teams better priorities, and
                the organization stronger evidence for risk, compliance, and incident response.
              </p>
              <div className="mt-9">
                <Button asChild variant="hero" size="lg">
                  <Link to="/?contactForm=true">
                    Schedule a Consultancy Discussion
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </ScaleUp>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultancyService;
