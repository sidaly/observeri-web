import { ArrowRight, Radar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ScrollAnimations";

export const CasmLaunchAnnouncement = () => {
  return (
    <section
      id="casm-launch"
      className="relative overflow-hidden border-b border-border/30 py-20"
      aria-label="Continuous Attack Surface Management launch announcement"
    >
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Coming to Observeri GRC
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Product Launch
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="rounded-3xl border-gradient bg-gradient-card p-8 md:p-12">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                      <Radar className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                      Continuous Attack Surface Management
                    </p>
                  </div>

                  <h2 className="text-3xl font-display font-bold md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                    Illuminate your digital footprint before attackers do.
                  </h2>

                  <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
                    <p>
                      For most modern enterprises, the &ldquo;known&rdquo; perimeter is a myth. While IT teams
                      meticulously manage their core servers and primary domains, a sprawling ecosystem of shadow IT,
                      forgotten cloud instances, dormant subdomains, and unsanctioned SaaS applications—often called{" "}
                      <span className="font-medium text-foreground">Shadow AI</span>—lives in the darkness. This is
                      your digital footprint, and in 2026, it is expanding faster than most security teams can track.
                    </p>
                    <p>
                      If you don&apos;t know an asset exists, you cannot protect it. This fundamental visibility gap is
                      why Continuous Attack Surface Management (CASM) has shifted from a &ldquo;nice-to-have&rdquo; tool
                      to a non-negotiable strategic pillar for any organization serious about resilience.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild variant="hero" size="lg" className="group">
                      <Link to="/?contactForm=true">
                        Request early access
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/products/exposure-management">Explore exposure management</Link>
                    </Button>
                  </div>

                  <p className="mt-5 text-sm text-muted-foreground">
                    Placeholder announcement — full CASM capabilities launching soon on Observeri GRC.
                  </p>
                </div>

                <div className="w-full shrink-0 lg:w-72">
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">The reality is stark</p>
                    <p className="mt-4 text-5xl font-display font-bold text-foreground">70%</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      of organizations report at least one cyber-attack originating from an unknown or unmanaged
                      internet-facing asset.
                    </p>
                  </div>

                  <ul className="mt-4 space-y-3 rounded-2xl border border-border/50 bg-card/30 p-5 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Shadow IT &amp; forgotten cloud instances
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Dormant subdomains &amp; unsanctioned SaaS
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Continuous discovery tied to GRC workflows
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 border-t border-border/30 pt-10">
                <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  CASM dashboard preview
                </p>
                <div className="relative overflow-hidden rounded-2xl border-gradient glow">
                  <div className="flex items-center gap-2 border-b border-border/50 bg-card/80 px-4 py-3 backdrop-blur-sm">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/80" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex flex-1 justify-center">
                      <div className="rounded-md bg-muted/50 px-4 py-1 text-xs text-muted-foreground">
                        app.observeri.com/casm
                      </div>
                    </div>
                  </div>
                  <img
                    src="/casm-dashboard.png"
                    alt="Observeri CASM dashboard showing host risk distribution, top risky hosts, technology exposure, exposed port frequency, geographic exposure, and subdomain depth"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
