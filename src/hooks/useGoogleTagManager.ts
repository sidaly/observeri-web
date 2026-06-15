import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GTM_ID = "GTM-TX2LL5PS";
const GTAG_ID = "AW-18139440356";

export const useGoogleTagManager = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const pagePath = `${pathname}${search}`;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      gtmId: GTM_ID,
      page_path: pagePath,
      page_title: document.title,
      page_location: window.location.href,
    });

    window.gtag?.("config", GTAG_ID, { page_path: pagePath });
  }, [pathname, search]);
};
