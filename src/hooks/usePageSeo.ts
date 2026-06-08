import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { defaultPageSeo, getPageSeoForPath, type PageSeoConfig } from "@/data/pageSeo";

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

  if (seo.keywords) {
    upsertMeta("name", "keywords", seo.keywords);
  }

  upsertMeta("property", "og:title", seo.title);
  upsertMeta("property", "og:description", seo.description);
  upsertMeta("property", "og:image", seo.ogImage ?? defaultPageSeo.ogImage!);
  upsertMeta("property", "og:url", `${window.location.origin}${pathname}`);

  upsertMeta("name", "twitter:title", seo.title);
  upsertMeta("name", "twitter:description", seo.description);
  upsertMeta("name", "twitter:image", seo.ogImage ?? defaultPageSeo.ogImage!);

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", `${window.location.origin}${pathname}`);
};

export const usePageSeo = (override?: PageSeoConfig) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = override ?? getPageSeoForPath(pathname);
    applyPageSeo(seo, pathname);
  }, [pathname, override]);
};
