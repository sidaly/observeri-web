import { useGoogleTagManager } from "@/hooks/useGoogleTagManager";
import { usePageSeo } from "@/hooks/usePageSeo";
import { usePageSchema } from "@/hooks/usePageSchema";

export const PageSeo = () => {
  const seo = usePageSeo();
  useGoogleTagManager();
  usePageSchema(seo.schemas);
  return null;
};
