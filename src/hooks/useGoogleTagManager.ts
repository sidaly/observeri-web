import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookieConsent } from "@/components/CookieConsent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GTM_ID = "GTM-TX2LL5PS";
const GTAG_ID = "AW-18139440356";

export const useGoogleTagManager = () => {
  const { pathname } = useLocation();
  const { consent } = useCookieConsent();

  useEffect(() => {
    if (!consent?.marketing) return;
    window.dataLayer = window.dataLayer || [];
    // Match Google's gtag queue contract, which uses the Arguments object.
    // eslint-disable-next-line prefer-rest-params
    window.gtag ||= function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "update", {
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "denied",
    });

    if (!document.getElementById("consented-google-ads")) {
      window.gtag("js", new Date());
      window.gtag("config", GTAG_ID, { send_page_view: false, allow_ad_personalization_signals: false });
      const script = document.createElement("script");
      script.id = "consented-google-ads";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
      document.head.appendChild(script);
    }
    // A container can contain arbitrary tags. Require both categories rather
    // than assuming remotely configured tags honor granular consent.
    if (consent.analytics && !document.getElementById("consented-gtm")) {
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      const script = document.createElement("script");
      script.id = "consented-gtm";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);
    }
    window.gtag("event", "page_view", {
      send_to: GTAG_ID,
      page_path: pathname,
      page_title: document.title,
      // Never send registration tokens or other query-string data.
      page_location: `${window.location.origin}${pathname}`,
    });
  }, [pathname, consent?.analytics, consent?.marketing]);
};
