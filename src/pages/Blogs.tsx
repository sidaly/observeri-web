import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import {
  ArrowRight,
  Clock3,
  Download,
  FileSpreadsheet,
  Newspaper,
  ShieldAlert,
  CircleDollarSign,
} from "lucide-react";

const downloadTools = [
  {
    title: "Security controls framework catalogue",
    filename: "security-controls-framework-catalogue.xlsx",
    description:
      "Starter control register aligned to a NIST SP 800-53–style security controls framework—families, control IDs, objectives, evidence hints, and keyword tags for GRC mapping and audit traceability.",
    keywords: [
      "security controls framework",
      "control catalogue",
      "continuous control monitoring",
      "AI GRC mapping",
      "audit evidence",
    ],
    href: "/downloads/security-controls-framework-catalogue.xlsx",
  },
  {
    title: "CIS Controls catalogue",
    filename: "cis-controls-catalogue.xlsx",
    description:
      "CIS Critical Security Controls v8–style safeguard rows for spreadsheet workflows: control numbers, safeguard IDs, implementation groups, and summarized intent for crosswalks to NIST CSF and automated cyber risk programs.",
    keywords: [
      "CIS Controls v8",
      "CIS benchmarks",
      "IG1 IG2 IG3",
      "safeguard inventory",
      "exposure reduction",
    ],
    href: "/downloads/cis-controls-catalogue.xlsx",
  },
] as const;

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Blogs & resources</p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h1 className="text-4xl font-display font-bold md:text-5xl lg:text-6xl">Observeri blogs</h1>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Practical writing on AI-powered GRC, plus free templates you can drop into your compliance and risk
                programs.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="mt-6 text-sm text-muted-foreground">
                Looking for press coverage?{" "}
                <Link to="/newsroom" className="font-medium text-primary underline-offset-4 hover:underline">
                  Visit the newsroom
                </Link>
                .
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <article
        id="how-ai-grc-saves-cost-time-risk"
        className="border-y border-border/30 bg-card/10 py-20"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <FadeUp>
              <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Newspaper className="h-4 w-4 text-primary" />
                <span>Strategy · GRC</span>
                <span aria-hidden>·</span>
                <time dateTime="2026-05-04">May 4, 2026</time>
              </div>
              <h2 className="text-3xl font-display font-bold md:text-4xl" itemProp="headline">
                How AI GRC saves cost, time, and risk exposure
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground" itemProp="description">
                Governance, risk, and compliance teams are under pressure to prove value in dollars and days—not slide
                decks. An <strong className="font-semibold text-foreground">AI-powered GRC platform</strong> shifts
                work from manual orchestration to continuous signal processing, so you reduce run rate spend, shorten
                decision cycles, and shrink <strong className="font-semibold text-foreground">automated cyber risk exposure</strong>{" "}
                that executives actually understand.
              </p>
            </FadeUp>

            <FadeUp delay={0.08}>
              <section className="mt-12 space-y-4" aria-labelledby="cost-heading">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <CircleDollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 id="cost-heading" className="text-2xl font-display font-semibold">
                    Cost: fewer hours on evidence and exceptions
                  </h3>
                </div>
                <p className="leading-8 text-muted-foreground">
                  Traditional GRC buries specialists in evidence collection, control testing coordination, and
                  duplicate work across frameworks. AI-assisted classification, natural-language policy-to-control
                  mapping, and automated ticketing cut consultant and FTE hours while keeping audit trails intact. The
                  outcome is a more <strong className="font-semibold text-foreground">cost-effective AI cybersecurity GRC</strong>{" "}
                  operating model—similar savings themes teams look for when they evaluate a{" "}
                  <strong className="font-semibold text-foreground">MetricStream alternative</strong>,{" "}
                  <strong className="font-semibold text-foreground">Archer alternative</strong>, or{" "}
                  <strong className="font-semibold text-foreground">Vanta alternative</strong>—without ripping out your
                  entire stack on day one.
                </p>
                <ul className="list-inside list-disc space-y-2 pl-1 text-muted-foreground">
                  <li>Less rework when mapping overlapping obligations (for example MiCA, NESA, SAMA, or DORA programs).</li>
                  <li>Fewer emergency remediation projects driven by last-minute audit surprises.</li>
                  <li>Lower reliance on manual spreadsheets for control catalogues and maturity scoring.</li>
                </ul>
              </section>
            </FadeUp>

            <FadeUp delay={0.1}>
              <section className="mt-12 space-y-4" aria-labelledby="time-heading">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <Clock3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 id="time-heading" className="text-2xl font-display font-semibold">
                    Time: compress the cycle from weeks to days
                  </h3>
                </div>
                <p className="leading-8 text-muted-foreground">
                  Risk decisions stall when data lives in silos. When vulnerability findings, cloud posture, identity
                  events, and control tests roll into one prioritized queue, security and compliance leaders stop
                  chasing status updates. That is how teams answer{" "}
                  <strong className="font-semibold text-foreground">how to prioritize vulnerabilities</strong> without
                  another war room: tie findings to asset criticality, exploitability, and control effectiveness in one
                  place.
                </p>
                <ul className="list-inside list-disc space-y-2 pl-1 text-muted-foreground">
                  <li>Continuous monitoring replaces quarterly “hero moments” before audits.</li>
                  <li>Executive dashboards reuse the same metrics regulators and boards ask for.</li>
                  <li>Workflow automation routes attestations to owners with deadlines and evidence hooks.</li>
                </ul>
              </section>
            </FadeUp>

            <FadeUp delay={0.12}>
              <section className="mt-12 space-y-4" aria-labelledby="risk-heading">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-3">
                    <ShieldAlert className="h-6 w-6 text-primary" />
                  </div>
                  <h3 id="risk-heading" className="text-2xl font-display font-semibold">
                    Risk exposure: quantify what matters
                  </h3>
                </div>
                <p className="leading-8 text-muted-foreground">
                  Heat maps do not fund programs; scenarios and expected loss drivers do. AI GRC helps teams estimate
                  financial and operational impact using consistent assumptions, then track how treatment plans move
                  the curve. That is the practical answer to{" "}
                  <strong className="font-semibold text-foreground">how to quantify cyber risk</strong> in a board deck:
                  align controls, vulnerabilities, and incidents to a shared model instead of ad hoc spreadsheets.
                </p>
                <ul className="list-inside list-disc space-y-2 pl-1 text-muted-foreground">
                  <li>Earlier detection of control drift before it becomes a findings letter.</li>
                  <li>Clear linkage from CIS-style safeguards or enterprise control catalogues to measured outcomes.</li>
                  <li>Stronger resilience narrative for cyber insurance and third-party due diligence.</li>
                </ul>
              </section>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm leading-7 text-muted-foreground">
                <span className="font-semibold text-foreground">Keywords for discovery: </span>
                cybersecurity GRC platform, GRC software cybersecurity, enterprise GRC solution, integrated risk management
                software, AI GRC platform, AI risk management software, intelligent risk scoring platform, cyber risk
                management platform, vulnerability risk prioritization tool, cyber risk dashboard software, FAIR risk
                quantification software, ISO 27001 and NIST CSF tooling, SOC 2 and GDPR compliance software, HIPAA
                compliance management system, PCI DSS compliance solution, GRC software UAE, cybersecurity GRC Dubai,
                fintech GRC UAE, MetricStream alternative, ServiceNow GRC alternative, RSA Archer alternative, LogicGate
                alternative, OneTrust GRC alternative, how to prioritize cyber risk, challenges in GRC implementation,
                continuous compliance monitoring software, SaaS GRC platform for fintech companies, plus MiCA, NESA,
                SAMA, DORA, CIS Controls, and security controls framework mapping.
              </p>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="hero" className="group" asChild>
                  <Link to="/?contactForm=true">
                    Talk to our team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#free-tools-templates">Free tools below</a>
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </article>

      <section
        id="free-tools-templates"
        className="py-24"
        aria-labelledby="free-tools-heading"
      >
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Free tools & templates</p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <h2 id="free-tools-heading" className="text-3xl font-display font-bold md:text-5xl">
                Downloadable catalogues for your GRC practice
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Excel-ready starter files for control traceability. Use them as-is for workshops or import paths into
                your AI GRC workspace. Regenerate anytime with{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm">npm run generate-downloads</code>.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2" staggerDelay={0.08}>
            {downloadTools.map((tool) => (
              <StaggerItem key={tool.href}>
                <div className="flex h-full flex-col rounded-3xl border-gradient bg-gradient-card p-8">
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                    <FileSpreadsheet className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold md:text-2xl">{tool.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{tool.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tool.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="rounded-full border border-border/40 bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                  <Button variant="hero" className="group w-full sm:w-auto" asChild>
                    <a href={tool.href} download={tool.filename}>
                      <Download className="mr-2 h-4 w-4" />
                      Download .xlsx
                    </a>
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
