// Single source of truth for prerendering and sitemap generation.
// Keep in sync with the routes in src/App.tsx and the slugs in
// src/data/industrySolutions.ts.

export const SITE_URL = (process.env.SITE_URL || "https://observeri.com").replace(/\/$/, "");

const industrySolutionSlugs = [
  "banking-financial-services",
  "healthcare-life-sciences",
  "government-public-sector",
  "technology-saas",
  "retail-ecommerce",
  "energy-utilities",
];

const staticRoutes = [
  "/",
  "/about",
  "/career",
  "/newsroom",
  "/blogs",
  "/features",
  "/products/third-party-risk",
  "/products/cyber-risk-management",
  "/products/vulnerability-operations",
  "/products/ai-risk-operations-center",
  "/products/security-governance",
  "/products/exposure-management",
  "/products/external-attack-surface-management",
  "/products/compliance-management",
  "/products/information-asset-management",
  "/products/human-risk-management",
  "/products/data-privacy-protection",
  "/consultancy-service",
  "/partners",
  "/solutions",
];

export const routes = [
  ...staticRoutes,
  ...industrySolutionSlugs.map((slug) => `/solutions/${slug}`),
];
