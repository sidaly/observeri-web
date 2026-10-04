export type MarketplaceEntitlement = {
  dimension: string;
  value: string;
  expiration: string | null;
};

export type MarketplaceAccount = {
  id: string;
  organizationName: string | null;
  adminName: string | null;
  adminEmail: string | null;
  emailVerified: boolean;
  entitled: boolean;
  customerIdentifier: string;
  customerAwsAccountId: string;
  productCode: string;
  licenseArn: string | null;
  entitlements: MarketplaceEntitlement[];
  entitlementCheckedAt: string | null;
  status: "pending_setup" | "pending_email" | "active" | "inactive";
};

export const marketplaceFetch = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(path, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    ...init,
  });
  const payload = (await response.json().catch(() => ({}))) as T & { error?: string };
  if (!response.ok) {
    throw new Error(payload.error || "Request failed");
  }
  return payload;
};
