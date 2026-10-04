import { Link, useLocation } from "react-router-dom";
import { MarketplaceFrame } from "@/components/aws-marketplace/Frame";
import { Button } from "@/components/ui/button";

const AwsMarketplaceConfirm = () => {
  const location = useLocation();
  const state = (location.state || {}) as { email?: string; devVerifyUrl?: string };

  return (
    <MarketplaceFrame
      eyebrow="AWS Marketplace"
      title="Confirm your admin email"
      description={
        state.email
          ? `We sent a confirmation link to ${state.email}. AWS also emails you separately about the Marketplace subscription and billing.`
          : "We sent a confirmation link to the admin email you entered. AWS also emails you separately about the Marketplace subscription and billing."
      }
    >
      <div className="space-y-4 text-sm leading-6 text-muted-foreground">
        <p>Open that email and confirm the address before signing in. The link expires in 48 hours.</p>
        {state.devVerifyUrl ? (
          <p>
            Local confirmation link:{" "}
            <a className="text-primary underline-offset-4 hover:underline" href={state.devVerifyUrl}>
              {state.devVerifyUrl}
            </a>
          </p>
        ) : null}
        <Button asChild variant="outline">
          <Link to="/aws-marketplace/login">I already confirmed my email</Link>
        </Button>
      </div>
    </MarketplaceFrame>
  );
};

export default AwsMarketplaceConfirm;
