import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MarketplaceFrame } from "@/components/aws-marketplace/Frame";
import { Button } from "@/components/ui/button";
import { marketplaceFetch } from "@/lib/awsMarketplace";

const AwsMarketplaceVerify = () => {
  const [params] = useSearchParams();
  const token = params.get("token") || "";
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!token) {
      setError("This confirmation link is missing a token.");
      return;
    }
    marketplaceFetch("/api/aws-marketplace/verify", {
      method: "POST",
      body: JSON.stringify({ token }),
    })
      .then(() => setDone(true))
      .catch((err: Error) => setError(err.message));
  }, [token]);

  return (
    <MarketplaceFrame
      eyebrow="AWS Marketplace"
      title={done ? "Email confirmed" : "Confirming your email"}
      description={
        done
          ? "Your Observeri admin account is active. Sign in to review the AWS contract and entitlements."
          : "We are checking this confirmation link."
      }
    >
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      {done ? (
        <Button asChild variant="hero">
          <Link to="/aws-marketplace/login">Continue to admin login</Link>
        </Button>
      ) : null}
    </MarketplaceFrame>
  );
};

export default AwsMarketplaceVerify;
