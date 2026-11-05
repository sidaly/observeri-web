import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/components/CookieConsent";

type Role = "agent" | "user";
type Step = "menu" | "email" | "first" | "last" | "confirm" | "sending" | "done";

type ChatMessage = {
  id: number;
  role: Role;
  text: string;
  href?: string;
};

type DemoDetails = {
  email: string;
  firstName: string;
  lastName: string;
};

const WELCOME = "Welcome to Observeri - My Name is Misha, How may i help you today!";
const SUPPORT =
  "If you're having trouble accessing a Observeri application. Please contact at help@observeri.on.spiceworks.com.";
const ASK_EMAIL =
  "To get started with booking a demo, may I have your business email address? This will allow us to arrange a meeting time that suits you best.";
const ASK_FIRST = "Thank you. What is your first name?";
const ASK_LAST = "What is your last name?";
const SUPPORT_EMAIL = "help@observeri.on.spiceworks.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const renderAgentText = (text: string, href?: string) => {
  if (!href || !text.includes(SUPPORT_EMAIL)) return text;
  const start = text.indexOf(SUPPORT_EMAIL);
  return [
    text.slice(0, start),
    <a key="support-email" className="font-medium underline underline-offset-2" href={href}>{SUPPORT_EMAIL}</a>,
    text.slice(start + SUPPORT_EMAIL.length),
  ];
};

const promptFor = (step: Step) => {
  if (step === "email") return "Business email";
  if (step === "first") return "First name";
  return "Last name";
};

export const SiteChat = () => {
  const { consent } = useCookieConsent();
  const titleId = useId();
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);
  const announced = useRef(false);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("menu");
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const [details, setDetails] = useState<DemoDetails>({ email: "", firstName: "", lastName: "" });
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 0, role: "agent", text: WELCOME }]);

  const add = (role: Role, text: string, href?: string) => {
    const id = nextId.current++;
    setMessages((current) => [...current, { id, role, text, href }]);
  };

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, open, step]);

  useEffect(() => {
    if (open && (step === "email" || step === "first" || step === "last")) inputRef.current?.focus();
  }, [open, step]);

  const playTick = () => {
    const AudioContextCtor =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextCtor) return;
    const context = new AudioContextCtor();
    const tone = () => {
      const now = context.currentTime;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(988, now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.05, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.08);
      oscillator.onended = () => context.close();
    };
    if (context.state === "running") {
      tone();
      return;
    }
    context.resume().then(() => {
      if (context.state === "running") tone();
      else context.close();
    }).catch(() => context.close());
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (announced.current) return;
      announced.current = true;
      setOpen(true);
      playTick();
    }, 700);
    return () => window.clearTimeout(timer);
  }, []);

  const showMenu = () => {
    setStep("menu");
    setDraft("");
    setError("");
  };

  const chooseSupport = () => {
    add("user", "Contact Support");
    add("agent", SUPPORT, `mailto:${SUPPORT_EMAIL}`);
    showMenu();
  };

  const startDemo = (correction = false) => {
    add("user", correction ? "Something needs correcting" : "Book a Demo");
    if (correction) {
      add("agent", "Let's take your business email, first name, and last name again.");
    }
    add("agent", ASK_EMAIL);
    setDetails({ email: "", firstName: "", lastName: "" });
    setDraft("");
    setError("");
    setStep("email");
  };

  const submitDetail = (event: FormEvent) => {
    event.preventDefault();
    const value = draft.trim().replace(/\s+/g, " ");
    if (step === "email") {
      if (!EMAIL_PATTERN.test(value) || value.length > 254) {
        setError("Enter a valid business email address.");
        return;
      }
      add("user", value);
      setDetails((current) => ({ ...current, email: value.toLowerCase() }));
      add("agent", ASK_FIRST);
      setDraft("");
      setError("");
      setStep("first");
      return;
    }
    if (!value || value.length > 60 || value.includes("@")) {
      setError(step === "first" ? "Enter your first name." : "Enter your last name.");
      return;
    }
    if (step === "first") {
      add("user", value);
      setDetails((current) => ({ ...current, firstName: value }));
      add("agent", ASK_LAST);
      setDraft("");
      setError("");
      setStep("last");
      return;
    }
    add("user", value);
    setDetails((current) => ({ ...current, lastName: value }));
    add("agent", "Please check that your email, first name, and last name are correct.");
    setDraft("");
    setError("");
    setStep("confirm");
  };

  const sendDemo = async (confirmed: DemoDetails) => {
    setStep("sending");
    setError("");
    try {
      const response = await fetch("/api/demo-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: confirmed.firstName,
          lastName: confirmed.lastName,
          email: confirmed.email,
          page: window.location.href,
          company: "",
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) {
        throw new Error(result?.error || "Unable to send the demo request");
      }
      add("agent", `Your demo request is sent. We'll use ${confirmed.email} to arrange a meeting time.`);
      setStep("done");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to send the demo request";
      setError(message);
      setStep("confirm");
    }
  };

  const collecting = step === "email" || step === "first" || step === "last";
  const lifted = !consent;

  return (
    <div className={`fixed right-4 z-[110] sm:right-6 ${lifted ? "bottom-40" : "bottom-6"}`}>
      {open && (
        <section
          aria-labelledby={titleId}
          className={`mb-3 flex w-[min(18.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl ${lifted ? "max-h-[min(18rem,calc(100dvh-14rem))]" : "max-h-[min(22rem,calc(100dvh-7rem))]"}`}
        >
          <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
            <div>
              <h2 id={titleId} className="font-display text-base font-semibold">
                Observeri
              </h2>
              <p className="text-xs text-muted-foreground">AI agent</p>
            </div>
            <button
              type="button"
              className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div ref={listRef} className="min-h-0 flex-auto space-y-3 overflow-y-auto px-3 py-3" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={message.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <p
                  className={
                    message.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-md bg-primary px-3 py-2 text-sm leading-6 text-primary-foreground"
                      : "max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-3 py-2 text-sm leading-6 text-foreground"
                  }
                >
                  {renderAgentText(message.text, message.href)}
                </p>
              </div>
            ))}

            {step === "confirm" && (
              <div className="rounded-2xl border border-border bg-background p-3 text-sm leading-6">
                <p className="font-medium">Please verify these details</p>
                <p className="mt-2">
                  <span className="text-muted-foreground">Email: </span>
                  {details.email}
                </p>
                <p>
                  <span className="text-muted-foreground">First name: </span>
                  {details.firstName}
                </p>
                <p>
                  <span className="text-muted-foreground">Last name: </span>
                  {details.lastName}
                </p>
                {error && <p className="mt-2 text-destructive">{error}</p>}
                <div className="mt-3 flex flex-col gap-2">
                  <Button type="button" onClick={() => sendDemo(details)}>
                    All correct, send the request
                  </Button>
                  <Button type="button" variant="outline" onClick={() => startDemo(true)}>
                    Something is incorrect
                  </Button>
                </div>
              </div>
            )}

            {step === "sending" && <p className="text-sm text-muted-foreground">Sending your demo request…</p>}
          </div>

          <div className="border-t border-border p-3">
            {(step === "menu" || step === "done") && (
              <div className="flex flex-col gap-2">
                <Button type="button" variant="outline" onClick={chooseSupport}>
                  Contact Support
                </Button>
                <Button type="button" onClick={() => startDemo(false)}>
                  Book a Demo
                </Button>
              </div>
            )}

            {collecting && (
              <form onSubmit={submitDetail} className="space-y-2">
                <label className="sr-only" htmlFor="observeri-chat-input">
                  {promptFor(step)}
                </label>
                <input
                  id="observeri-chat-input"
                  ref={inputRef}
                  value={draft}
                  onChange={(event) => {
                    setDraft(event.target.value);
                    setError("");
                  }}
                  placeholder={promptFor(step)}
                  autoComplete={step === "email" ? "email" : step === "first" ? "given-name" : "family-name"}
                  inputMode={step === "email" ? "email" : "text"}
                  className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                />
                {error && <p className="text-xs text-destructive">{error}</p>}
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">
                    Send
                  </Button>
                  <Button type="button" variant="outline" onClick={showMenu}>
                    Back
                  </Button>
                </div>
              </form>
            )}
          </div>
        </section>
      )}

      <button
        type="button"
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
        aria-expanded={open}
        aria-controls={open ? titleId : undefined}
        aria-label={open ? "Close Observeri chat" : "Open Observeri chat"}
        onClick={() =>
          setOpen((current) => {
            const next = !current;
            announced.current = true;
            if (next) playTick();
            return next;
          })
        }
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};
