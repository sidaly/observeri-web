import { useEffect } from "react";
import type { JsonLdSchema } from "@/lib/schema";

type SchemaOrgProps = {
  schema: JsonLdSchema;
};

export const SchemaOrg = ({ schema }: SchemaOrgProps) => {
  useEffect(() => {
    const id = "schema-org-" + Math.random().toString(36).slice(2, 11);
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
    };
  }, [schema]);

  return null;
};
