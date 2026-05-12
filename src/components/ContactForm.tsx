import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export const ContactForm: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      toast({ title: "Missing fields", description: "Please provide at least your email and a message." });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message, company }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "Unable to send message");
      }

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setCompany("");
      toast({ title: "Message sent", description: "Thanks - we'll get back to you shortly." });
    } catch (err) {
      const description = err instanceof Error ? err.message : "Something went wrong. Please try again later.";
      toast({ title: "Error", description });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-gradient bg-gradient-card p-8 md:p-12">
            <h3 className="text-2xl font-display font-bold mb-3">Get in touch</h3>
            <p className="text-muted-foreground mb-6">
              Have a question or want a demo? Send us a message and we'll respond within one business day.
            </p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Brief subject" />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
