import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";
import { FadeUp, ScaleUp } from "./ScrollAnimations";
import { useNavigate } from "react-router-dom";

export const CareerCTA = () => {
  const navigate = useNavigate();

  const handleCareerClick = () => {
    navigate("/career");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Briefcase className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">We're Hiring</span>
              </motion.div>

              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  Join Our Team
                </h2>
              </FadeUp>
              
              <FadeUp delay={0.2}>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Help us revolutionize governance, risk, and compliance. Explore exciting career opportunities and grow with a team that's transforming enterprise security.
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
                  <Button variant="hero" size="lg" className="group" onClick={handleCareerClick}>
                    Explore Careers
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>

              <FadeUp delay={0.4}>
                <p className="text-sm text-muted-foreground mt-6">
                  Multiple positions available • Remote & On-site • Competitive benefits
                </p>
              </FadeUp>
            </motion.div>
          </ScaleUp>
        </div>
      </div>
    </section>
  );
};
