import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, CheckCircle } from "lucide-react";
import logoIcon from "@/assets/grc-sphere-icon.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.a
            href="#features"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border-gradient glass mb-8 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-muted-foreground">
              Introducing GRC Sphere
            </span>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-foreground">Master Compliance.</span>
            <br />
            <span className="text-gradient">Minimize Risk.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The all-in-one GRC platform that transforms how enterprises manage governance, risk, and compliance. Built for modern security teams.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="mb-8 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} className="relative">
              <motion.div
                className="absolute inset-0 rounded-lg bg-primary blur-xl opacity-45"
                animate={{
                  opacity: [0.45, 0.7, 0.45],
                  scale: [1, 1.08, 1],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <Button
                variant="hero"
                size="lg"
                className="group relative z-10 shadow-2xl shadow-primary/40"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div 
            className="relative mt-16 w-full max-w-5xl"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="relative rounded-2xl border-gradient glow overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-card/80 backdrop-blur-sm border-b border-border/50 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground">
                    app.grcsphere.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-gradient-card p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  {/* Sidebar */}
                  <div className="hidden md:block space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                      <img src={logoIcon} alt="GRC Sphere" className="w-5 h-5" />
                      <div className="h-3 w-20 bg-muted rounded" />
                    </div>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3">
                        <div className="w-5 h-5 bg-muted/50 rounded" />
                        <div className="h-3 w-16 bg-muted/30 rounded" />
                      </div>
                    ))}
                  </div>

                  {/* Main Content */}
                  <div className="md:col-span-3 space-y-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <motion.div 
                        className="bg-muted/30 rounded-xl p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <p className="text-xs text-muted-foreground mb-1">Compliance Score</p>
                        <p className="text-2xl font-bold text-primary">94.7%</p>
                      </motion.div>
                      <motion.div 
                        className="bg-muted/30 rounded-xl p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        <p className="text-xs text-muted-foreground mb-1">Active Controls</p>
                        <p className="text-2xl font-bold text-foreground">1,247</p>
                      </motion.div>
                      <motion.div 
                        className="hidden md:block bg-muted/30 rounded-xl p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0 }}
                      >
                        <p className="text-xs text-muted-foreground mb-1">Risk Items</p>
                        <p className="text-2xl font-bold text-accent">23</p>
                      </motion.div>
                    </div>

                    {/* Chart Area */}
                    <div className="bg-muted/20 rounded-xl p-6 h-48 flex items-end justify-between gap-2">
                      {[40, 65, 45, 80, 55, 90, 75, 85, 95, 70, 88, 92].map((height, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary/60 to-primary rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 1.1 + i * 0.05,
                            ease: [0.25, 0.4, 0.25, 1]
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -left-4 top-1/3"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="glass rounded-xl p-4 glow-sm"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Lock className="w-6 h-6 text-primary mb-2" />
                <p className="text-xs font-medium">SOC 2 Certified</p>
              </motion.div>
            </motion.div>
            <motion.div 
              className="absolute -right-4 top-1/2"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <motion.div 
                className="glass rounded-xl p-4 glow-sm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <CheckCircle className="w-6 h-6 text-green-400 mb-2" />
                <p className="text-xs font-medium">ISO 27001 Ready</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
