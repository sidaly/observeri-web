import { useSearchParams } from "react-router-dom";
import { MarketplaceFrame } from "@/components/aws-marketplace/Frame";
import { Button } from "@/components/ui/button";

const reasons: Record<string, string> = {
  "missing-token": "AWS Marketplace did not include a registration token. Start from the product page in AWS Marketplace.",
  "invalid-token": "That Marketplace token could not be resolved. Return to AWS Marketplace and open Observeri again.",
};

const AwsMarketplaceSubscribe = () => {
  const [params] = useSearchParams();
  const reason = reasons[params.get("reason") || ""] || "Observeri accounts from AWS Marketplace are created only after a contract purchase.";

  return (
    <MarketplaceFrame
      eyebrow="AWS Marketplace"
      title="Subscribe before registering"
      description={reason}
    >
      <div className="space-y-4 text-sm leading-6 text-muted-foreground">
        <p>
          Buy or accept the Observeri contract in AWS Marketplace. AWS then redirects your browser to Observeri with a
          temporary token so we can resolve your customer record and entitlements.
        </p>
        <p>
          <a
            className="font-medium text-primary underline-offset-4 hover:underline"
            href="https://aws.amazon.com/marketplace"
          >
            Open AWS Marketplace
          </a>
        </p>
        <p>Set the Marketplace registration URL to <span className="text-foreground">/api/aws-marketplace/fulfillment</span> on this site.</p>
        {import.meta.env.DEV ? (
          <form method="POST" action="/api/aws-marketplace/fulfillment">
            <input type="hidden" name="x-amzn-marketplace-token" value="dev-token" />
            <Button type="submit" variant="hero">
              Simulate AWS redirect
            </Button>
          </form>
        ) : null}
      </div>
    </MarketplaceFrame>
  );
};

export default AwsMarketplaceSubscribe;
