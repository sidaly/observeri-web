import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { defaultPageSeo, getPageSeoForPath, type PageSeoConfig } from "@/data/pageSeo";
import type { JsonLdSchema } from "@/lib/schema";
import { canonicalUrl, SITE_URL } from "@/lib/site";

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const applyPageSeo = (seo: PageSeoConfig, pathname: string) => {
  document.title = seo.title;

  upsertMeta("name", "description", seo.description);
  upsertMeta("name", "robots", seo.robots ?? "index, follow");

  if (seo.keywords) {
    upsertMeta("name", "keywords", seo.keywords);
  }

  upsertMeta("property", "og:title", seo.title);
  upsertMeta("property", "og:description", seo.description);
  const image = new URL(seo.ogImage ?? defaultPageSeo.ogImage!, SITE_URL).href;
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:url", canonicalUrl(pathname));
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:site_name", "Observeri Technologies");

  upsertMeta("name", "twitter:title", seo.title);
  upsertMeta("name", "twitter:description", seo.description);
  upsertMeta("name", "twitter:image", image);
  upsertMeta("name", "twitter:card", "summary_large_image");

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", canonicalUrl(pathname));
};

export const usePageSeo = (override?: PageSeoConfig): PageSeoConfig & { schemas?: JsonLdSchema } => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = override ?? getPageSeoForPath(pathname);
    applyPageSeo(seo, pathname);
  }, [pathname, override]);

  return override ?? getPageSeoForPath(pathname);
};
