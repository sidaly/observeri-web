import { motion } from "framer-motion";
import { FadeUp } from "./ScrollAnimations";

const badges = [
  "Modern Design",
  "AI-Powered",
  "Enterprise Ready",
  "Real-time Monitoring",
];

export const TrustBadges = () => {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="container mx-auto px-6">
        <FadeUp>
          <p className="text-center text-muted-foreground mb-8">
            Trusted by security teams at leading enterprises worldwide
          </p>
        </FadeUp>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {badges.map((badge, index) => (
            <motion.div
              key={badge}
              className="px-6 py-3 rounded-full border border-border/50 bg-card/30 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {badge}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
