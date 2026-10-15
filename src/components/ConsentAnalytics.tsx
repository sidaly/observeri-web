import { Analytics } from "@vercel/analytics/react";
import { useCookieConsent } from "./CookieConsent";

export function ConsentAnalytics() {
  const { consent } = useCookieConsent();
  return consent?.analytics ? <Analytics /> : null;
}
