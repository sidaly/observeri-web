import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Headset,
  Handshake,
  Store,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FadeUp, ScaleUp, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { Button } from "@/components/ui/button";

const partnerTypes = [
  {
    title: "Technology, Content & Product",
    icon: Cpu,
    summary:
      "Co-sell to deliver GRC and combine your solution with Observeri GRC to deliver exclusive, differentiated GRC outcomes.",
    highlights: [
      "Co-sell GRC programs with a joint go-to-market motion",
      "Integrate your technology, content, or product with Observeri GRC",
      "Deliver exclusive GRC offerings that stand out in the market",
      "Extend reach through complementary capabilities and shared customer value",
    ],
  },
  {
    title: "Managed Services",
    icon: Headset,
    summary:
      "Deliver managed GRC services through Observeri GRC — from ongoing compliance operations to continuous risk monitoring for your clients.",
    highlights: [
      "Run managed GRC programs on the Observeri platform",
      "Offer compliance, risk, and audit services as a recurring service line",
      "Scale delivery with automation, workflows, and centralized reporting",
      "Differentiate your MSP practice with enterprise-grade GRC tooling",
    ],
  },
  {
    title: "Value Added Reselling & Distribution",
    icon: Store,
    summary:
      "Resell and distribute Observeri GRC across your network — bringing enterprise GRC to organizations that trust your channel.",
    highlights: [
      "Add Observeri GRC to your product portfolio",
      "Reach new markets and customer segments through your distribution network",
      "Benefit from partner enablement, sales support, and co-marketing",
      "Grow revenue with a modern GRC platform customers are actively seeking",
    ],
  },
];

const partnerBenefits = [
  "Joint go-to-market and co-selling support",
  "Technical enablement and onboarding for your team",
  "Access to Observeri GRC platform capabilities and updates",
  "Dedicated partner success and commercial alignment",
];

const Partners = () => {
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
              Partners
            </motion.p>
            <motion.h1
              className="mb-6 text-4xl font-display font-bold md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Grow with Observeri. Deliver GRC that customers trust.
            </motion.h1>
            <motion.p
              className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Whether you co-sell technology, run managed GRC services, or resell through your channel — Observeri
              partners help organizations achieve governance, risk, and compliance at scale.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild variant="hero" size="lg">
                <Link to="/?contactForm=true">
                  Join Now
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#partner-types">Explore Partner Types</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/30 bg-card/20 py-14">
        <div className="container mx-auto grid gap-5 px-6 md:grid-cols-2 xl:grid-cols-4">
          {partnerBenefits.map((benefit, index) => (
            <FadeUp key={benefit} delay={index * 0.06}>
              <div className="h-full rounded-2xl border-gradient bg-gradient-card p-6">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{benefit}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section id="partner-types" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <FadeUp>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Partner Programs
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="text-3xl font-display font-bold md:text-5xl">
                Three ways to partner with Observeri GRC.
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid gap-6 lg:grid-cols-1" staggerDelay={0.05}>
            {partnerTypes.map((partner) => (
              <StaggerItem key={partner.title}>
                <motion.article
                  className="group h-full rounded-3xl border-gradient bg-gradient-card p-8 transition-all duration-300"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start">
                    <div className="inline-flex rounded-2xl bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                      <partner.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-semibold">{partner.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{partner.summary}</p>

                      <div className="mt-7 rounded-2xl border border-border/30 bg-background/30 p-5">
                        <div className="space-y-3">
                          {partner.highlights.map((item) => (
                            <div key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button asChild variant="hero">
                          <Link to="/?contactForm=true">
                            Join Now
                            <ArrowRight />
                          </Link>
                        </Button>
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
                <Handshake className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mx-auto max-w-4xl text-3xl font-display font-bold md:text-5xl">
                Ready to become an Observeri partner?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                Tell us about your business and how you want to work with Observeri. Our team will reach out to discuss
                the right partner program for you.
              </p>
              <div className="mt-9">
                <Button asChild variant="hero" size="lg">
                  <Link to="/?contactForm=true">
                    Join Now
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

export default Partners;
