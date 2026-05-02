import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { Briefcase, MapPin, Users, TrendingUp, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const openPositions = [
  {
    title: "Senior Security Engineer",
    department: "Cybersecurity",
    location: "Dubai, UAE",
    type: "Full-time",
    description: "Lead security architecture and implementation for enterprise GRC solutions.",
  },
  {
    title: "Penetration Tester",
    department: "Cybersecurity",
    location: "Remote",
    type: "Full-time",
    description: "Conduct security assessments and penetration testing on GRC platforms.",
  },
  {
    title: "Security Architect",
    department: "Cybersecurity",
    location: "Abu Dhabi, UAE",
    type: "Full-time",
    description: "Design and implement comprehensive security frameworks and compliance strategies.",
  },
  {
    title: "Incident Response Specialist",
    department: "Cybersecurity",
    location: "Remote",
    type: "Full-time",
    description: "Manage and coordinate incident response for enterprise clients.",
  },
  {
    title: "Cybersecurity Analyst",
    department: "Cybersecurity",
    location: "Dubai, UAE",
    type: "Full-time",
    description: "Monitor, analyze, and respond to security threats and vulnerabilities.",
  },
  {
    title: "Cloud Security Engineer",
    department: "Cybersecurity",
    location: "Remote",
    type: "Full-time",
    description: "Secure cloud infrastructure and implement cloud-native security solutions.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental wellness programs, and fitness subsidies.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Career development budget, mentorship programs, and learning opportunities.",
  },
  {
    icon: Briefcase,
    title: "Flexible Work",
    description: "Remote-friendly policies, flexible hours, and generous time off.",
  },
  {
    icon: Zap,
    title: "Equity & Bonus",
    description: "Competitive salary, equity packages, and performance-based bonuses.",
  },
];

const Career = () => {
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              className="text-primary font-medium mb-4 uppercase tracking-wider text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our Team
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Build the Future of GRC
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Help enterprises manage governance, risk, and compliance with cutting-edge technology. Work with passionate teams solving real-world problems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={() => {
                  const el = document.getElementById("positions");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Explore Open Positions
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
              Why Join GRC Sphere
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Exceptional Opportunities Await
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building a company where great talent can do their best work.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <FadeUp key={benefit.title} delay={0.1 * index}>
                <motion.div 
                  className="rounded-2xl border border-border/30 bg-card/40 p-8 hover:bg-card/60 transition-all duration-300 hover:border-primary/50"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-24 relative overflow-hidden">
        <motion.div 
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
              We're Hiring
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our talented teams across engineering, product, sales, and more.
            </p>
          </FadeUp>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <FadeUp key={position.title} delay={0.05 * index}>
                <motion.div 
                  className="rounded-2xl border border-border/30 bg-card/40 p-6 hover:bg-card/60 transition-all duration-300 hover:border-primary/50 cursor-pointer group overflow-hidden relative"
                  whileHover={{ scale: 1.02, x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Animated background glow on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100"
                    animate={{ x: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
                    <div className="flex-1">
                      <motion.h3 
                        className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {position.title}
                      </motion.h3>
                      <motion.p 
                        className="text-muted-foreground mb-3 md:mb-0"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {position.description}
                      </motion.p>
                    </div>
                    <div className="flex flex-wrap gap-3 md:flex-col md:items-end md:gap-2">
                      <motion.div 
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Briefcase className="w-4 h-4" />
                        <span>{position.department}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-2 text-sm text-muted-foreground group/location"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MapPin className="w-4 h-4 group-hover/location:text-primary transition-colors" />
                        <span className="group-hover/location:text-primary transition-colors">{position.location}</span>
                        <motion.span 
                          className="text-primary opacity-0 group-hover/location:opacity-100 transition-opacity"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                      <motion.div 
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary"
                        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(var(--primary), 0.3)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {position.type}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Visual */}
            <SlideInLeft>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
                <motion.div 
                  className="relative rounded-2xl border-gradient bg-gradient-card overflow-hidden glow p-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="space-y-3">
                        <div className="flex gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                            <div className="h-2 bg-muted/50 rounded w-full" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </SlideInLeft>

            {/* Right Content */}
            <SlideInRight>
              <div>
                <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                  Our Culture
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  Work with Brilliant Minds
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team is composed of security experts, product visionaries, and engineering leaders from top companies worldwide.
                </p>

                <div className="space-y-6 mb-8">
                  {[
                    "Collaborative environment where your ideas matter",
                    "Continuous learning and professional development",
                    "Diversity and inclusion at the heart of everything",
                    "Impact-driven work that solves real problems",
                  ].map((item, index) => (
                    <motion.div 
                      key={item} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="hero" className="group">
                    View Culture Guide
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </SlideInRight>
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
            ease: "easeInOut"
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
                  Ready to Join the Team?
                </h2>
              </FadeUp>
              
              <FadeUp delay={0.1}>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Don't see a perfect fit? Send us your resume and tell us about yourself. We're always interested in exceptional talent.
                </p>
              </FadeUp>

              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="hero" size="lg" className="group">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg">
                    Contact Recruiting
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

export default Career;
