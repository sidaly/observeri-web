import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import auditSeo from "@/data/auditSeo.json";
import { auditComparison, auditLifecycle, auditManagementIcon, auditPillars } from "@/data/auditManagement";
import { AuditOverview, PageFaq } from "@/components/AuditContent";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FadeUp, SlideInLeft, SlideInRight } from "@/components/ScrollAnimations";
import { Button } from "@/components/ui/button";

const seo = auditSeo["/products/audit-management"];

const AuditManagement = () => {
  const [activeId, setActiveId] = useState(auditLifecycle[0].id);
  const active = auditLifecycle.find((item) => item.id === activeId) ?? auditLifecycle[0];
  const Icon = auditManagementIcon;
  const ActiveIcon = active.icon;

  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-radial" />
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
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">Internal audit</p>
                <h1 className="text-4xl font-display font-bold md:text-5xl lg:text-6xl">{seo.h1}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{seo.body[0]}</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild variant="hero" size="lg" className="group">
                    <Link to="/?contactForm=true">
                      Book a Demo
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#audit-lifecycle">See the audit lifecycle</a>
                  </Button>
                </div>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="overflow-hidden rounded-[2rem] border-gradient bg-gradient-card p-2">
                <img
                  decoding="async"
                  src="/audit-management.webp"
                  alt="Observeri Audit Intelligence Dashboard with the annual plan, findings by risk level, and control effectiveness"
                  className="w-full rounded-[1.75rem] object-contain"
                />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="border-y border-border/30 bg-card/20 py-20">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">How assurance is held together</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">Three parts of one internal audit record</h2>
          </FadeUp>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {auditPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-3xl border-gradient bg-gradient-card p-8">
                <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                  <pillar.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="audit-lifecycle" className="py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">The audit lifecycle</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">Internal audit management across the work that actually happens</h2>
          </FadeUp>
          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Audit lifecycle">
            {auditLifecycle.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`audit-tab-${item.id}`}
                aria-selected={item.id === active.id}
                aria-controls={`audit-panel-${item.id}`}
                onClick={() => setActiveId(item.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  item.id === active.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-primary/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div
            role="tabpanel"
            id={`audit-panel-${active.id}`}
            aria-labelledby={`audit-tab-${active.id}`}
            className="mt-8 grid gap-8 rounded-[2rem] border-gradient bg-gradient-card p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                <ActiveIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold md:text-3xl">{active.title}</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">{active.description}</p>
            </div>
            <ul className="space-y-4">
              {active.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-7">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border/30 bg-card/20 py-24">
        <div className="container mx-auto px-6">
          <FadeUp>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">The difference</p>
            <h2 className="max-w-3xl text-3xl font-display font-bold md:text-5xl">Traditional internal audit versus one Observeri record</h2>
          </FadeUp>
          <div className="mt-10 overflow-x-auto rounded-[2rem] border border-border/40">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-muted/60">
                <tr>
                  <th className="px-5 py-4 font-display font-semibold">Audit capability</th>
                  <th className="px-5 py-4 font-display font-semibold">Traditional internal audit</th>
                  <th className="px-5 py-4 font-display font-semibold">Observeri internal audit management</th>
                </tr>
              </thead>
              <tbody>
                {auditComparison.map((row) => (
                  <tr key={row.capability} className="border-t border-border/40 align-top">
                    <th className="px-5 py-4 font-medium">{row.capability}</th>
                    <td className="px-5 py-4 leading-7 text-muted-foreground">{row.traditional}</td>
                    <td className="px-5 py-4 leading-7">{row.observeri}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <AuditOverview path="/products/audit-management" />

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2rem] border-gradient bg-gradient-card p-10 text-center md:p-14">
            <h2 className="text-3xl font-display font-bold md:text-5xl">See the audit from the charter to the closed action</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Walk through the annual plan, the engagement, the control tests, the report, and the follow-up on one workspace.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild variant="hero" size="lg" className="group">
                <Link to="/?contactForm=true">
                  Book a Demo
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/products/compliance-management">Explore Compliance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PageFaq path="/products/audit-management" />
      <Footer />
    </div>
  );
};

export default AuditManagement;
