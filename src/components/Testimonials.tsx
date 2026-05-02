import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const testimonials = [
  {
    quote: "GRC Sphere transformed how we manage compliance. What used to take weeks now takes hours.",
    author: "Sarah Chen",
    role: "CISO, TechCorp",
    rating: 5,
  },
  {
    quote: "The automated evidence collection alone saved our team 20+ hours per week. Absolutely game-changing.",
    author: "Michael Rodriguez",
    role: "VP of Security, FinServe",
    rating: 5,
  },
  {
    quote: "We passed our SOC 2 audit on the first try. GRC Sphere made the entire process seamless.",
    author: "Emily Watson",
    role: "Compliance Director, HealthTech",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Thriving with GRC Sphere
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg text-muted-foreground">
              Discover why security leaders choose GRC Sphere for their compliance needs.
            </p>
          </FadeUp>
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="group p-8 rounded-2xl border-gradient bg-gradient-card hover:glow-sm transition-all duration-500 h-full flex flex-col"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-foreground mb-8 leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-lg font-semibold"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonial.author.charAt(0)}
                  </motion.div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
