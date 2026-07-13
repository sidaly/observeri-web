import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Globe, Radar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ScrollAnimations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const slides = [
  {
    src: "/easm/slide-1.png",
    alt: "Observeri External Attack Surface Management module overview — domain discovery, vulnerability scanning, penetration testing, dark web monitoring, attack path analysis, and cloud security posture",
    label: "EASM module overview",
  },
  {
    src: "/casm-dashboard.png",
    alt: "Observeri CASM dashboard showing host risk distribution, top risky hosts, technology exposure, exposed port frequency, geographic exposure, and subdomain depth",
    label: "CASM dashboard preview",
  },
];

export const CasmLaunchAnnouncement = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const id = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5500);

    return () => window.clearInterval(id);
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <section
      id="casm-launch"
      className="relative overflow-hidden border-b border-border/30 py-20"
      aria-label="External Attack Surface Management launch announcement"
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
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                      External Attack Surface Management
                    </p>
                  </div>

                  <h2 className="text-3xl font-display font-bold md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                    Know every edge of your exposure — before attackers do.
                  </h2>

                  <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
                    <p>
                      External Attack Surface Management (EASM) continuously maps everything your organization exposes
                      to the internet—domains, subdomains, cloud services, APIs, and forgotten assets outside the
                      firewall. Observeri discovers, monitors, and prioritizes that footprint so security and GRC teams
                      can close gaps before they become incidents.
                    </p>
                    <p>
                      For most modern enterprises, the &ldquo;known&rdquo; perimeter is a myth. Shadow IT, dormant
                      subdomains, and unsanctioned SaaS expand faster than manual inventories can track. If you
                      don&apos;t know an asset exists, you cannot protect it—which is why continuous EASM is now a
                      strategic pillar of resilience on Observeri GRC.
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
                      <Link to="/products/external-attack-surface-management">Explore EASM</Link>
                    </Button>
                  </div>

                  <p className="mt-5 text-sm text-muted-foreground">
                    Placeholder announcement — full EASM capabilities launching soon on Observeri GRC.
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
                      Domain &amp; subdomain discovery
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Vulnerability scanning &amp; dark web monitoring
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Findings tied to GRC risk workflows
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 border-t border-border/30 pt-10">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Radar className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                      {slides[current]?.label ?? "EASM preview"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.src}
                        type="button"
                        aria-label={`Go to ${slide.label}`}
                        onClick={() => api?.scrollTo(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
                    <CarouselContent className="-ml-0">
                      {slides.map((slide) => (
                        <CarouselItem key={slide.src} className="pl-0">
                          <div className="relative overflow-hidden rounded-2xl border-gradient glow">
                            <div className="flex items-center gap-2 border-b border-border/50 bg-card/80 px-4 py-3 backdrop-blur-sm">
                              <div className="flex gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                              </div>
                              <div className="flex flex-1 justify-center">
                                <div className="rounded-md bg-muted/50 px-4 py-1 text-xs text-muted-foreground">
                                  app.observeri.com/easm
                                </div>
                              </div>
                            </div>
                            <img
                              src={slide.src}
                              alt={slide.alt}
                              className="aspect-[16/9] w-full object-contain bg-[#0b1120]"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>

                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="absolute left-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-border/60 bg-background/80 backdrop-blur-sm"
                    onClick={scrollPrev}
                    aria-label="Previous slide"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="absolute right-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-border/60 bg-background/80 backdrop-blur-sm"
                    onClick={scrollNext}
                    aria-label="Next slide"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
