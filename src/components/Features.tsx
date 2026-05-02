import { motion } from "framer-motion";
import { Shield, BarChart3, FileCheck, Users, Zap, Lock } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const features = [
  {
    icon: Shield,
    title: "Unified GRC Platform",
    description: "Consolidate governance, risk, and compliance into one powerful platform. Eliminate silos and gain complete visibility.",
  },
  {
    icon: BarChart3,
    title: "Real-time Risk Analytics",
    description: "AI-powered risk assessment with predictive analytics. Identify threats before they become incidents.",
  },
  {
    icon: FileCheck,
    title: "Automated Compliance",
    description: "Stay audit-ready 24/7 with automated evidence collection and continuous compliance monitoring.",
  },
  {
    icon: Users,
    title: "Stakeholder Collaboration",
    description: "Break down silos with built-in workflows and approvals. Keep everyone aligned on compliance goals.",
  },
  {
    icon: Zap,
    title: "Instant Reporting",
    description: "Generate board-ready reports in seconds. Beautiful visualizations that tell your compliance story.",
  },
  {
    icon: Lock,
    title: "Framework Mapping",
    description: "Map controls across SOC 2, ISO 27001, GDPR, HIPAA, and 50+ frameworks with intelligent crosswalks.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
              Features
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Everything you need to
              <br />
              <span className="text-gradient">master compliance</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Artfully crafted and meticulously fine-tuned, GRC Sphere pairs powerful functionality with intuitive design.
            </p>
          </FadeUp>
        </div>

        {/* Features Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                className="group p-8 rounded-2xl border-gradient bg-gradient-card hover:glow-sm transition-all duration-500 h-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
