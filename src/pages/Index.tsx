import React from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExecutiveAccordionGallery } from "@/components/ExecutiveAccordionGallery";
import { OperationalEfficiency } from "@/components/OperationalEfficiency";
import { RiskCommandDashboard } from "@/components/RiskCommandDashboard";
import { FAQ } from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    if (searchParams.get("contactForm") === "true") {
      const contact = document.getElementById("contact");
      if (contact) contact.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background pt-24">
      <Navbar />
      <header className="container mx-auto px-6 pb-12 pt-8 text-center md:pb-16 md:pt-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Predictive governance risk and compliance
        </p>
        <h1 className="mx-auto max-w-5xl font-display text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
          AI powered GRC platform for regulated enterprises
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
          Quantify cyber risk, automate compliance, and give decision makers a live financial view of exposure.
        </p>
      </header>
      <ExecutiveAccordionGallery />
      <OperationalEfficiency />
      <RiskCommandDashboard />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
