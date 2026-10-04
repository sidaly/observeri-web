import { FormEvent, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MarketplaceFrame } from "@/components/aws-marketplace/Frame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { marketplaceFetch } from "@/lib/awsMarketplace";

const AwsMarketplaceLogin = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [unverified, setUnverified] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [resent, setResent] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    setUnverified(false);
    try {
      const response = await fetch("/api/aws-marketplace/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const payload = (await response.json()) as { error?: string; code?: string };
      if (!response.ok) {
        if (payload.code === "EMAIL_UNVERIFIED") setUnverified(true);
        throw new Error(payload.error || "Could not sign in.");
      }
      navigate("/aws-marketplace/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not sign in.");
    } finally {
      setSubmitting(false);
    }
  };

  const resend = async () => {
    setResent("");
    try {
      await marketplaceFetch("/api/aws-marketplace/resend", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      setResent("If that admin email is waiting for confirmation, a new link is on its way.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not resend the email.");
    }
  };

  return (
    <MarketplaceFrame
      eyebrow="Admin login"
      title="Sign in to Observeri"
      description="Use the administrator account you created after AWS Marketplace redirected you to Observeri."
    >
      <form className="space-y-4" onSubmit={onSubmit}>
        {params.get("existing") ? (
          <p className="text-sm text-muted-foreground">
            This AWS Marketplace contract already has an administrator. Sign in with that email.
          </p>
        ) : null}
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </div>
        <Button type="submit" variant="hero" disabled={submitting}>
          {submitting ? "Signing in…" : "Sign in"}
        </Button>
        {unverified ? (
          <Button type="button" variant="outline" onClick={resend}>
            Resend confirmation email
          </Button>
        ) : null}
        {resent ? <p className="text-sm text-muted-foreground">{resent}</p> : null}
        <p className="text-sm text-muted-foreground">
          No contract yet?{" "}
          <Link className="text-primary underline-offset-4 hover:underline" to="/aws-marketplace/subscribe">
            Subscribe on AWS Marketplace
          </Link>
        </p>
      </form>
    </MarketplaceFrame>
  );
};

export default AwsMarketplaceLogin;
