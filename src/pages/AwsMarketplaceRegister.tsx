import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MarketplaceFrame } from "@/components/aws-marketplace/Frame";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { marketplaceFetch, type MarketplaceAccount } from "@/lib/awsMarketplace";

const AwsMarketplaceRegister = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const session = params.get("session") || "";
  const [account, setAccount] = useState<MarketplaceAccount | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [organizationName, setOrganizationName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!session) {
      navigate("/aws-marketplace/subscribe?reason=missing-token", { replace: true });
      return;
    }
    marketplaceFetch<{ customer: MarketplaceAccount }>(`/api/aws-marketplace/session?session=${encodeURIComponent(session)}`)
      .then((payload) => setAccount(payload.customer))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [navigate, session]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const result = await marketplaceFetch<{ devVerifyUrl?: string }>("/api/aws-marketplace/complete", {
        method: "POST",
        body: JSON.stringify({ session, organizationName, adminName, email, password }),
      });
      navigate("/aws-marketplace/confirm", { state: { email, devVerifyUrl: result.devVerifyUrl } });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not create the admin account.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <MarketplaceFrame
      eyebrow="AWS Marketplace"
      title="Create your Observeri admin"
      description="AWS redirected you here after the contract. This account becomes the first administrator for your organization."
    >
      {loading ? <p className="text-sm text-muted-foreground">Checking your Marketplace contract…</p> : null}
      {error ? <p className="mb-4 text-sm text-destructive">{error}</p> : null}
      {account && !account.entitled ? (
        <div className="rounded-2xl border border-destructive/40 bg-destructive/10 p-4 text-sm leading-6">
          This AWS account does not currently have an active Observeri entitlement. Finish or renew the contract in AWS
          Marketplace, then open Observeri from there again.
        </div>
      ) : null}
      {account?.adminEmail ? (
        <div className="space-y-4 text-sm leading-6 text-muted-foreground">
          <p>An administrator is already registered for this AWS Marketplace subscription.</p>
          <Button asChild variant="hero">
            <Link to="/aws-marketplace/login">Go to admin login</Link>
          </Button>
        </div>
      ) : null}
      {account && !account.adminEmail && account.entitled ? (
        <form className="space-y-4" onSubmit={onSubmit}>
          <EntitlementSummary account={account} />
          <div className="space-y-2">
            <Label htmlFor="organization">Organization</Label>
            <Input id="organization" value={organizationName} onChange={(event) => setOrganizationName(event.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="admin-name">Admin name</Label>
            <Input id="admin-name" value={adminName} onChange={(event) => setAdminName(event.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work email</Label>
            <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" minLength={10} value={password} onChange={(event) => setPassword(event.target.value)} required />
          </div>
          <Button type="submit" variant="hero" disabled={submitting}>
            {submitting ? "Creating account…" : "Create admin and send confirmation"}
          </Button>
        </form>
      ) : null}
    </MarketplaceFrame>
  );
};

const EntitlementSummary = ({ account }: { account: MarketplaceAccount }) => (
  <div className="rounded-2xl border border-border/40 bg-background/40 p-4 text-sm">
    <p className="font-medium">AWS contract</p>
    <p className="mt-2 text-muted-foreground">Account {account.customerAwsAccountId}</p>
    <ul className="mt-3 space-y-1 text-muted-foreground">
      {account.entitlements.map((item) => (
        <li key={item.dimension}>
          {item.dimension}: {item.value}
        </li>
      ))}
    </ul>
  </div>
);

export default AwsMarketplaceRegister;
