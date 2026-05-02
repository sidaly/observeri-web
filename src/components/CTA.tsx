import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeUp, ScaleUp } from "./ScrollAnimations";
import { useNavigate, useLocation } from "react-router-dom";

export const CTA = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
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
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScaleUp>
            <motion.div 
              className="rounded-3xl border-gradient bg-gradient-card p-12 md:p-16 text-center glow"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Limited Time Offer</span>
              </motion.div>

              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  Elevate your GRC Game
                </h2>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Unlock limitless possibilities with GRC Sphere. Start your free trial today and experience the future of governance, risk, and compliance.
                </p>
              </FadeUp>

              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="group"
                    onClick={() => {
                      const scrollToContact = () => {
                        const contactSection = document.getElementById("contact");
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" });
                        }
                      };

                      if (location.pathname === "/") {
                        scrollToContact();
                      } else {
                        navigate("/?contactForm=true");
                      }
                    }}
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => {
                      const scrollToContact = () => {
                        const contactSection = document.getElementById("contact");
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" });
                        }
                      };

                      if (location.pathname === "/") {
                        // Already on home page, just scroll
                        scrollToContact();
                      } else {
                        // Navigate to home page first, then scroll
                        navigate("/");
                        setTimeout(scrollToContact, 300);
                      }
                    }}
                  >
                    Schedule a Demo
                  </Button>
                </motion.div>
              </motion.div>

              <FadeUp delay={0.4}>
                <p className="text-sm text-muted-foreground mt-6">
                  14-day free trial • No credit card required • Cancel anytime
                </p>
              </FadeUp>
            </motion.div>
          </ScaleUp>
        </div>
      </div>
    </section>
  );
};
