import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookieConsent } from "./CookieConsent";

type InsightTracker = ((action?: string, data?: unknown) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: InsightTracker;
  }
}

const PARTNER_ID = "11247785";
const SCRIPT_ID = "consented-linkedin-insight";

export function LinkedInInsight() {
  const { consent } = useCookieConsent();
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Do not expose account URLs or query/hash tokens to advertising scripts.
    const excluded = pathname.startsWith("/aws-marketplace") || Boolean(search || hash);
    const existing = document.getElementById(SCRIPT_ID);
    if (!consent?.marketing || excluded) {
      // Removing a script cannot undo executed third-party code. A fresh page
      // unloads it when navigating from a tracked page to an excluded URL.
      if (existing) window.location.reload();
      return;
    }
    if (existing) return;

    window._linkedin_partner_id = PARTNER_ID;
    const ids = (window._linkedin_data_partner_ids ||= []);
    if (!ids.includes(PARTNER_ID)) ids.push(PARTNER_ID);
    if (!window.lintrk) {
      const tracker: InsightTracker = (action, data) => {
        tracker.q!.push([action, data]);
      };
      tracker.q = [];
      window.lintrk = tracker;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    document.body.appendChild(script);
    // Keep one instance across React mounts. Consent withdrawal reloads the page.
  }, [consent?.marketing, pathname, search, hash]);

  return null;
}
