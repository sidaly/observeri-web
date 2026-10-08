export const SITE_URL = "https://www.observeri.com";

export const canonicalUrl = (pathname: string) =>
  `${SITE_URL}${pathname.replace(/\/+$/, "") || "/"}`;
