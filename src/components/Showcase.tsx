import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Type, Layers, Grid3X3, Settings, Clock } from "lucide-react";
import { FadeUp, SlideInLeft, SlideInRight } from "./ScrollAnimations";

const capabilities = [
  { icon: Palette, title: "Customizable Dashboards", desc: "Tailor views to your specific compliance needs." },
  { icon: Type, title: "Intelligent Workflows", desc: "Automate routine tasks with smart automation." },
  { icon: Layers, title: "Multi-Framework Support", desc: "Manage all frameworks in one unified platform." },
  { icon: Grid3X3, title: "Control Libraries", desc: "Pre-built controls for instant deployment." },
  { icon: Settings, title: "API Integrations", desc: "Connect with your existing security stack." },
  { icon: Clock, title: "Continuous Monitoring", desc: "24/7 automated compliance checks." },
];

export const Showcase = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <SlideInLeft>
            <div>
              <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                Platform Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                High Customizability
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                You're not locked into a single approach. Enjoy the freedom to configure every aspect of your GRC program to make it truly yours.
              </p>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {capabilities.map((cap, index) => (
                  <motion.div 
                    key={cap.title} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <cap.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{cap.title}</h4>
                      <p className="text-xs text-muted-foreground">{cap.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="hero" className="group">
                  Explore All Features
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </SlideInLeft>

          {/* Right Visual */}
          <SlideInRight>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
              <motion.div 
                className="relative rounded-2xl border-gradient bg-gradient-card overflow-hidden glow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8">
                  {/* Mock UI Elements */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-border/30">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Settings className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="h-3 w-32 bg-muted rounded mb-1" />
                          <div className="h-2 w-20 bg-muted/50 rounded" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-lg bg-muted/50" />
                        <div className="w-8 h-8 rounded-lg bg-primary/20" />
                      </div>
                    </div>

                    {/* Color Swatches */}
                    <div>
                      <div className="h-2 w-24 bg-muted/50 rounded mb-3" />
                      <div className="flex gap-2">
                        {["bg-primary", "bg-accent", "bg-green-500", "bg-amber-500", "bg-rose-500"].map((color, i) => (
                          <motion.div 
                            key={i} 
                            className={`w-8 h-8 rounded-lg ${color} ${i === 0 ? "ring-2 ring-foreground ring-offset-2 ring-offset-card" : ""}`}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Mock Controls */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-muted/30">
                        <div className="h-2 w-16 bg-muted/50 rounded mb-3" />
                        <div className="h-8 w-full bg-muted/20 rounded-lg flex items-center px-3">
                          <motion.div 
                            className="w-4 h-4 rounded-full bg-primary"
                            animate={{ x: [0, 40, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30">
                        <div className="h-2 w-20 bg-muted/50 rounded mb-3" />
                        <div className="flex gap-2">
                          <div className="flex-1 h-8 bg-primary/20 rounded-lg" />
                          <div className="flex-1 h-8 bg-muted/20 rounded-lg" />
                        </div>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-3">
                      <div className="h-2 w-32 bg-muted/50 rounded" />
                      <div className="h-3 w-full bg-muted/30 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "80%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                      <div className="h-3 w-full bg-muted/30 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "60%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};
