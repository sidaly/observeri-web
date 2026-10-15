import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />
      <main className="container mx-auto max-w-3xl px-6 pb-24 pt-36">
        <p className="text-sm uppercase tracking-widest text-primary">Message received</p>
        <h1 className="mt-4 text-4xl font-display font-bold md:text-5xl">Thank you for contacting Observeri</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">Your message has been submitted successfully. Our team will review your enquiry and respond to the email address you provided within one business day.</p>
        <h2 className="mt-10 text-2xl font-semibold">What happens next</h2>
        <p className="mt-4 leading-7 text-muted-foreground">For demo requests, we will follow up to understand your requirements and arrange a suitable time. For other enquiries, we will connect you with the appropriate team. You can also reach us at <a className="text-primary underline" href="mailto:connect@observeri.com">connect@observeri.com</a>.</p>
        <div className="mt-8 flex flex-wrap gap-4"><Button asChild><Link to="/features">Explore the platform</Link></Button><Button asChild variant="outline"><Link to="/">Return home</Link></Button></div>
      </main>
      <Footer />
    </div>
  );
}
