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
