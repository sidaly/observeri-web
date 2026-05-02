import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FadeUp, ScaleUp, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { industrySolutions, platformHighlights } from "@/data/industrySolutions";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.45, 0.3] }}
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
              Industry Solutions
            </motion.p>
            <motion.h1
              className="mb-6 text-4xl font-display font-bold md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              GRC Sphere for regulated industries with very different risk realities.
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The new solutions experience is driven by the Observeri industry deck. Each industry now has its own
              page with sector regulations, platform capabilities, workflows, and quantified outcomes.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/30 bg-card/20 py-16">
        <div className="container mx-auto grid gap-6 px-6 md:grid-cols-3">
          {platformHighlights.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.08}>
              <div className="rounded-2xl border-gradient bg-gradient-card p-6">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Sector Coverage
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                Explore the industries called out directly in the presentation.
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.08}>
            {industrySolutions.map((industry) => (
              <StaggerItem key={industry.slug}>
                <motion.div
                  className="group h-full rounded-3xl border-gradient bg-gradient-card p-8 transition-all duration-300"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary">{industry.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-display font-semibold">{industry.label}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{industry.summary}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {industry.keyRegulations.slice(0, 4).map((regulation) => (
                      <span
                        key={regulation}
                        className="rounded-full border border-border/40 bg-background/30 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {regulation}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button asChild variant="outline" className="group/btn">
                      <Link to={`/solutions/${industry.slug}`}>
                        View Solution
                        <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
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
                <h2 className="text-3xl font-display font-bold md:text-5xl">
                  One platform, sector-specific execution.
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                  Across the PPT, the repeated pattern is clear: one AI-powered GRC core, configured differently for
                  each industry’s regulations, workflows, and risk priorities.
                </p>

                <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <p className="mt-4 font-semibold">Regulatory mapping</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Pre-mapped controls and obligation workflows tailored to each sector.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <p className="mt-4 font-semibold">Role-specific dashboards</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Executive and operator views tuned to the decisions each team actually owns.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/30 bg-background/30 p-5">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <p className="mt-4 font-semibold">Automation with proof</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Each solution page now surfaces the measurable outcomes cited in the deck.
                    </p>
                  </div>
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

export default Solutions;
