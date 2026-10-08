import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { JsonLdSchema } from "@/lib/schema";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const usePageSchema = (pageSchemas?: JsonLdSchema) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Replace prerendered and previous-route markup as well as client-created tags.
    document.querySelectorAll('script[id^="schema-org-"]').forEach((script) => script.remove());
    const schemas = [
      ...(pathname === "/" ? [organizationSchema, websiteSchema] : []),
      ...(pageSchemas ? (Array.isArray(pageSchemas) ? pageSchemas : [pageSchemas]) : []),
    ];
    if (!schemas.length) return;

    const script = document.createElement("script");
    script.id = "schema-org-page";
    script.type = "application/ld+json";
    // Escape '<' so serialized HTML cannot prematurely close this script.
    script.textContent = JSON.stringify(schemas).replace(/</g, "\\u003c");
    document.head.appendChild(script);
    return () => script.remove();
  }, [pathname, pageSchemas]);
};
