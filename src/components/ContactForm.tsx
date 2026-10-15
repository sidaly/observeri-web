import { Link } from "react-router-dom";
import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";

export const ContactForm: React.FC = () => {
  const [successOpen, setSuccessOpen] = React.useState(false);
  const submitButton = React.useRef<HTMLButtonElement>(null);
  const dismissSubmissionNotice = React.useRef<(() => void) | null>(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dismissSubmissionNotice.current?.();
    if (!email || !message) {
      dismissSubmissionNotice.current = toast({ title: "Missing fields", description: "Please provide at least your email and a message." }).dismiss;
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

      const result = await response.json().catch(() => null);
      if (result?.ok !== true) throw new Error("Unable to confirm your submission. Please try again.");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setCompany("");
      setSuccessOpen(true);
    } catch (err) {
      const description = err instanceof Error ? err.message : "Something went wrong. Please try again later.";
      dismissSubmissionNotice.current = toast({ title: "Error", description }).dismiss;
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

              <p className="text-sm text-muted-foreground">We use the information you provide to respond to your enquiry. Read our <Link to="/privacy-policy" className="text-primary underline">Privacy Policy</Link>.</p>
              <div className="pt-2">
                <Button ref={submitButton} type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="w-[90vw] max-w-md rounded-2xl" onCloseAutoFocus={(event) => {
          event.preventDefault();
          submitButton.current?.focus({ preventScroll: true });
        }}>
          <DialogHeader>
            <DialogTitle>Thank you for your message</DialogTitle>
            <DialogDescription>Your message has been received. Our team will review your enquiry and respond within one business day.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild><Button>Done</Button></DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactForm;
