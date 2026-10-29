// Single source of truth for prerendering and sitemap generation.
// Keep in sync with the routes in src/App.tsx and the slugs in
// src/data/industrySolutions.ts.

export const SITE_URL = (process.env.SITE_URL || "https://www.observeri.com").replace(/\/$/, "");

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const posts = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "src", "data", "posts.json"), "utf8"));

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
  "/team",
  "/privacy-policy",
  "/terms",
  "/career",
  "/newsroom",
  "/blog",
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
  ...posts.map((post) => `/blog/${post.slug}`),
];
