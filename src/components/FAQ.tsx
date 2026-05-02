import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeUp } from "./ScrollAnimations";

const faqData = [
  {
    question: "How can I implement GRC Sphere in my organization?",
    answer: "Getting started with GRC Sphere is simple. Sign up for a free trial, configure your governance frameworks, set up your risk policies, and start managing compliance across your organization. Our onboarding team will guide you through the entire process.",
  },
  {
    question: "Can I customize GRC Sphere workflows for my needs?",
    answer: "Yes, GRC Sphere is highly customizable. You can create custom workflows, define your own risk metrics, build personalized dashboards, and configure automated compliance checks specific to your organization's requirements.",
  },
  {
    question: "Is any technical expertise required to use GRC Sphere?",
    answer: "No coding knowledge is required. GRC Sphere features an intuitive interface designed for non-technical users. Our platform provides pre-built templates and drag-and-drop configuration tools to make setup effortless.",
  },
  {
    question: "Are there any guides for implementing GRC Sphere?",
    answer: "Absolutely. We provide comprehensive documentation, video tutorials, implementation guides, and webinars. Our support team also offers personalized onboarding sessions and best practice consultations.",
  },
  {
    question: "What kind of support does GRC Sphere offer?",
    answer: "We offer 24/7 customer support through multiple channels including email, phone, and live chat. Enterprise customers receive dedicated account managers and priority support.",
  },
  {
    question: "How does GRC Sphere handle data security?",
    answer: "Security is our top priority. GRC Sphere uses enterprise-grade encryption, regular security audits, compliance with major standards (ISO 27001, SOC 2), and automated backup systems to protect your data.",
  },
];

export const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <FadeUp className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We've compiled answers to the questions we hear most frequently from our community.
          </motion.p>
        </FadeUp>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <FadeUp key={index} delay={0.05 * index}>
              <motion.div
                className="rounded-2xl border border-border/30 bg-card/40 overflow-hidden hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.05 * index }}
              >
                <motion.button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-card/60 transition-colors duration-200"
                  whileHover={{ backgroundColor: "rgba(var(--card), 0.6)" }}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 0 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <AnimatePresence mode="wait">
                      {expandedIndex === index ? (
                        <motion.div
                          key="minus"
                          initial={{ opacity: 0, rotate: -90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Minus className="w-6 h-6 text-muted-foreground" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          initial={{ opacity: 0, rotate: 90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: -90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Plus className="w-6 h-6 text-muted-foreground" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 border-t border-border/30 pt-4">
                        <motion.p
                          className="text-muted-foreground leading-relaxed"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          {item.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
