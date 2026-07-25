import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { JsonLdSchema } from "@/lib/schema";
import { organizationSchema, softwareApplicationSchema, websiteSchema } from "@/lib/schema";

const GLOBAL_SCHEMAS: JsonLdSchema = [organizationSchema, softwareApplicationSchema, websiteSchema];

const GLOBAL_SCRIPT_ID = "schema-org-global";

export const usePageSchema = (pageSchemas?: JsonLdSchema) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Global schemas (Organization, SoftwareApplication, WebSite)
    let globalScript = document.getElementById(GLOBAL_SCRIPT_ID) as HTMLScriptElement | null;
    if (!globalScript) {
      globalScript = document.createElement("script");
      globalScript.type = "application/ld+json";
      globalScript.id = GLOBAL_SCRIPT_ID;
      document.head.appendChild(globalScript);
    }
    globalScript.textContent = JSON.stringify(GLOBAL_SCHEMAS);

    // Per-page schema container
    let pageScript = document.getElementById("schema-org-page") as HTMLScriptElement | null;
    if (pageSchemas) {
      if (!pageScript) {
        pageScript = document.createElement("script");
        pageScript.type = "application/ld+json";
        pageScript.id = "schema-org-page";
        document.head.appendChild(pageScript);
      }
      pageScript.textContent = JSON.stringify(pageSchemas);
    } else if (pageScript) {
      pageScript.remove();
    }

    return () => {
      // Keep global schema; only remove per-page when component unmounts.
      const p = document.getElementById("schema-org-page");
      if (p) p.remove();
    };
  }, [pathname, pageSchemas]);
};
