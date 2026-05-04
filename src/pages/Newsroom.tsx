import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, SlideInLeft } from "@/components/ScrollAnimations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, RotateCcw, Zap, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const newsItems = [
  {
    source: "Vertigo",
    sourceColor: "text-white",
    icon: RotateCcw,
    title: "Empowering Enterprises: Observeri GRC's Role in Digital Governance Transformation",
  },
  {
    source: "Proline",
    sourceColor: "text-blue-400",
    icon: Zap,
    title: "How Observeri GRC Is Making Compliance Management a Breeze",
  },
  {
    source: "Penta",
    sourceColor: "text-yellow-400",
    icon: Sparkles,
    title: "Turning the Tides of Risk Management: A Look into Observeri GRC",
  },
  {
    source: "Proline",
    sourceColor: "text-red-400",
    icon: Zap,
    title: "Observeri GRC: Revolutionizing Enterprise Governance with intelligent automation",
  },
];

const Newsroom = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate("/?contactForm=true");
  };

  const handleDownloadMediaKit = () => {
    // Create a simple media kit file or link
    const mediaKitContent = `
Observeri GRC - Media Kit
====================

About Observeri GRC
Observeri is the all-in-one platform for governance, risk, and compliance management. 
We help enterprises streamline their GRC processes with AI-powered automation and intelligent workflows.

Key Statistics:
- 500+ Enterprise Clients
- 50M+ Risks Managed
- 99.9% Uptime SLA
- 24/7 Expert Support

Contact: contact@observeri.com
    `;
    
    const element = document.createElement("a");
    const file = new Blob([mediaKitContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Observeri_GRC_Media_Kit.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Newsroom
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              See what others are saying about Observeri GRC and download our official media kit.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={handleDownloadMediaKit}
              >
                <Download className="mr-2 w-4 h-4" />
                Download media kit
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Items Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            {newsItems.map((item, index) => (
              <FadeUp key={item.title} delay={0.05 * index}>
                <motion.a
                  href="#"
                  className="group block"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="rounded-2xl border border-border/30 bg-card/40 p-8 hover:bg-card/60 transition-all duration-300 hover:border-primary/50 cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex items-start gap-6">
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <motion.p
                          className={`text-sm font-bold uppercase tracking-wider mb-2 ${item.sourceColor}`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                        >
                          {item.source}
                        </motion.p>
                        <motion.h3
                          className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.title}
                        </motion.h3>
                      </div>
                      <motion.div
                        className="text-primary text-2xl opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Media Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
              Featured In
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Industry Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Observeri GRC has been featured in leading industry publications and platforms.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Enterprise Security Excellence",
                description:
                  "Named as a top GRC solution for enterprise security and compliance management.",
              },
              {
                title: "Innovation in Risk Management",
                description:
                  "Recognized for innovative approach to automating risk identification and mitigation.",
              },
              {
                title: "Customer Satisfaction Leader",
                description:
                  "Highest customer satisfaction ratings in the GRC industry with 99.2% retention.",
              },
              {
                title: "Compliance Platform of the Year",
                description:
                  "Awarded as the leading compliance automation platform by industry experts.",
              },
            ].map((item, index) => (
              <FadeUp key={item.title} delay={0.05 * index}>
                <motion.div
                  className="rounded-2xl border border-border/30 bg-card/40 p-8 hover:bg-card/60 transition-all duration-300 hover:border-primary/50"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="rounded-3xl border-gradient bg-gradient-card p-12 md:p-16 text-center glow"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <FadeUp>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  Get started with Observeri GRC
                </h2>
              </FadeUp>

              <FadeUp delay={0.1}>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Join hundreds of enterprises already managing their governance, risk, and compliance with Observeri GRC.
                </p>
              </FadeUp>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg">
                    Try Free Demo
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="hero"
                    size="lg"
                    className="group"
                    onClick={handleBuyClick}
                  >
                    Buy Observeri GRC
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsroom;
