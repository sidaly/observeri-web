import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Team() {
  return (
    <div className="min-h-screen bg-background bg-gradient-main">
      <Navbar />
      <main className="container mx-auto max-w-4xl px-6 pb-24 pt-32">
        <p className="mb-4 text-sm uppercase tracking-widest text-primary">Observeri Technologies</p>
        <h1 className="text-4xl font-display font-bold md:text-5xl">Our team and company</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Founded in 2025 and headquartered in Dubai, United Arab Emirates, Observeri Technologies
          builds AI-powered governance, risk, and compliance software for regulated enterprises.
        </p>
        <section className="mt-10 rounded-2xl border border-border/50 bg-card/50 p-8">
          <h2 className="text-2xl font-semibold">Ali Naqvi</h2>
          <p className="mt-2 text-primary">Founder</p>
          <p className="mt-5 leading-7 text-muted-foreground">For company enquiries and introductions to the Observeri team, contact us at <a className="text-primary underline" href="mailto:connect@observeri.com">connect@observeri.com</a>.</p>
        </section>
        <a className="mt-8 inline-block text-primary underline" href="https://www.linkedin.com/company/observeri-technologies" target="_blank" rel="noreferrer">Observeri Technologies on LinkedIn</a>
      </main>
      <Footer />
    </div>
  );
}
