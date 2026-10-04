import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MarketplaceFrame } from "@/components/aws-marketplace/Frame";
import { Button } from "@/components/ui/button";
import { marketplaceFetch, type MarketplaceAccount } from "@/lib/awsMarketplace";

const AwsMarketplaceAdmin = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState<MarketplaceAccount | null>(null);

  useEffect(() => {
    marketplaceFetch<{ customer: MarketplaceAccount }>("/api/aws-marketplace/account")
      .then((payload) => setAccount(payload.customer))
      .catch(() => navigate("/aws-marketplace/login", { replace: true }));
  }, [navigate]);

  const signOut = async () => {
    await marketplaceFetch("/api/aws-marketplace/logout", { method: "POST", body: "{}" });
    navigate("/aws-marketplace/login");
  };

  return (
    <MarketplaceFrame
      eyebrow="Admin console"
      title={account?.organizationName || "Your Observeri account"}
      description="This is the first-admin view for the subscription AWS Marketplace created. Access follows the live contract entitlement."
    >
      {!account ? <p className="text-sm text-muted-foreground">Loading account…</p> : null}
      {account ? (
        <div className="space-y-6 text-sm">
          {!account.entitled ? (
            <div className="rounded-2xl border border-destructive/40 bg-destructive/10 p-4 leading-6">
              GetEntitlements returned no active quantity for this contract. Observeri access stays closed until the AWS
              Marketplace agreement is active again.
            </div>
          ) : (
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4 leading-6">
              Entitlement is active. Your organization can use the contracted Observeri quantity.
            </div>
          )}
          <dl className="grid gap-3 sm:grid-cols-2">
            <Item label="Admin" value={account.adminName || "—"} />
            <Item label="Email" value={account.adminEmail || "—"} />
            <Item label="AWS account" value={account.customerAwsAccountId} />
            <Item label="Customer ID" value={account.customerIdentifier} />
            <Item label="Product code" value={account.productCode} />
            <Item label="Status" value={account.status} />
          </dl>
          <div>
            <p className="font-medium">Entitlements</p>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              {account.entitlements.length === 0 ? <li>No active entitlement.</li> : null}
              {account.entitlements.map((item) => (
                <li key={item.dimension}>
                  {item.dimension}: {item.value}
                  {item.expiration ? ` until ${new Date(item.expiration).toLocaleString()}` : ""}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button type="button" variant="outline" onClick={signOut}>
              Sign out
            </Button>
            <Button asChild variant="hero">
              <Link to="/">Back to Observeri</Link>
            </Button>
          </div>
        </div>
      ) : null}
    </MarketplaceFrame>
  );
};

const Item = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-border/40 bg-background/30 p-4">
    <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</dt>
    <dd className="mt-1 break-all font-medium">{value}</dd>
  </div>
);

export default AwsMarketplaceAdmin;
