import { useGoogleTagManager } from "@/hooks/useGoogleTagManager";
import { usePageSeo } from "@/hooks/usePageSeo";

export const PageSeo = () => {
  usePageSeo();
  useGoogleTagManager();
  return null;
};
