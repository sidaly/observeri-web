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
const GA4_ID = "G-PBWZMCQJWE";

export const useGoogleTagManager = () => {
  const { pathname } = useLocation();
  const { consent } = useCookieConsent();
  const analyticsAllowed = consent?.analytics ?? false;
  const marketingAllowed = consent?.marketing ?? false;

  useEffect(() => {
    if (!analyticsAllowed && !marketingAllowed) return;
    window.dataLayer = window.dataLayer || [];
    // Match Google's gtag queue contract, which uses the Arguments object.
    // eslint-disable-next-line prefer-rest-params
    window.gtag ||= function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "update", {
      analytics_storage: analyticsAllowed ? "granted" : "denied",
      ad_storage: marketingAllowed ? "granted" : "denied",
      ad_user_data: marketingAllowed ? "granted" : "denied",
      ad_personalization: "denied",
    });

    let googleTagScript = document.getElementById("consented-google-tag");
    if (!googleTagScript) {
      window.gtag("js", new Date());
      const script = document.createElement("script");
      script.id = "consented-google-tag";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsAllowed ? GA4_ID : GTAG_ID}`;
      document.head.appendChild(script);
      googleTagScript = script;
    }
    if (analyticsAllowed && googleTagScript.dataset.analyticsConfigured !== "true") {
      window.gtag("config", GA4_ID, { send_page_view: false });
      googleTagScript.dataset.analyticsConfigured = "true";
    }
    if (marketingAllowed && googleTagScript.dataset.adsConfigured !== "true") {
      window.gtag("config", GTAG_ID, { send_page_view: false, allow_ad_personalization_signals: false });
      googleTagScript.dataset.adsConfigured = "true";
    }
    // A container can contain arbitrary tags. Require both categories rather
    // than assuming remotely configured tags honor granular consent.
    if (analyticsAllowed && marketingAllowed && !document.getElementById("consented-gtm")) {
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      const script = document.createElement("script");
      script.id = "consented-gtm";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);
    }
    if (analyticsAllowed) {
      window.gtag("event", "page_view", {
        send_to: GA4_ID,
        page_path: pathname,
        page_title: document.title,
        // Never send registration tokens or other query-string data.
        page_location: `${window.location.origin}${pathname}`,
      });
    }
    if (marketingAllowed) {
      window.gtag("event", "page_view", {
        send_to: GTAG_ID,
        page_path: pathname,
        page_title: document.title,
        // Never send registration tokens or other query-string data.
        page_location: `${window.location.origin}${pathname}`,
      });
    }
  }, [pathname, analyticsAllowed, marketingAllowed]);
};
