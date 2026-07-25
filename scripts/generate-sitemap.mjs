/**
 * Generate dist/sitemap.xml from the shared route list.
 * Usage: node scripts/generate-sitemap.mjs (runs after `vite build`)
 *
 * Each <lastmod> is derived from the actual content that defines the page:
 * - Product pages: last commit date of the page component + its data file + pageSeo.ts
 * - Solution pages: last commit date of the industrySolutions data file + the generic solution page
 * - Blogs: most recent WordPress post date from src/data/posts.json
 * - Other pages: last commit date of the page component + pageSeo.ts
 * - Fallback: today if git is unavailable or a file is untracked.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import { routes, SITE_URL } from "./routes.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST = path.join(__dirname, "..", "dist");
const SRC = path.join(__dirname, "..", "src");
const OUTPUT_FILE = path.join(DIST, "sitemap.xml");

const PAGE_DIR = path.join(SRC, "pages");
const DATA_DIR = path.join(SRC, "data");

const ROUTE_SOURCE_FILES = {
  "/": [path.join(PAGE_DIR, "Index.tsx"), path.join(DATA_DIR, "seoContent.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/about": [path.join(PAGE_DIR, "About.tsx"), path.join(DATA_DIR, "pageSeo.ts")],
  "/career": [path.join(PAGE_DIR, "Career.tsx"), path.join(DATA_DIR, "pageSeo.ts")],
  "/newsroom": [path.join(PAGE_DIR, "Newsroom.tsx"), path.join(DATA_DIR, "pageSeo.ts")],
  "/blogs": [path.join(PAGE_DIR, "Blogs.tsx"), path.join(DATA_DIR, "posts.json"), path.join(DATA_DIR, "pageSeo.ts")],
  "/features": [path.join(PAGE_DIR, "FeaturesPage.tsx"), path.join(DATA_DIR, "products.ts"), path.join(DATA_DIR, "platformModules.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/products/third-party-risk": [path.join(PAGE_DIR, "ThirdPartyRisk.tsx"), path.join(DATA_DIR, "thirdPartyRisk.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/products/cyber-risk-management": [path.join(PAGE_DIR, "CyberRiskManagement.tsx"), path.join(DATA_DIR, "cyberRiskManagement.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/products/vulnerability-operations": [path.join(PAGE_DIR, "VulnerabilityOperations.tsx"), path.join(DATA_DIR, "vulnerabilityOperations.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/products/ai-risk-operations-center": [path.join(PAGE_DIR, "AiRiskOperationsCenter.tsx"), path.join(DATA_DIR, "aiRiskOperations.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/products/security-governance": [path.join(PAGE_DIR, "SecurityGovernance.tsx"), path.join(DATA_DIR, "securityGovernance.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/products/exposure-management": [path.join(PAGE_DIR, "ExposureManagement.tsx"), path.join(DATA_DIR, "exposureManagement.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/products/external-attack-surface-management": [path.join(PAGE_DIR, "ExternalAttackSurfaceManagement.tsx"), path.join(DATA_DIR, "externalAttackSurfaceManagement.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/products/compliance-management": [path.join(PAGE_DIR, "ComplianceManagement.tsx"), path.join(DATA_DIR, "complianceManagementProduct.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/products/information-asset-management": [path.join(PAGE_DIR, "InformationAssetManagement.tsx"), path.join(DATA_DIR, "informationAssetManagement.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/products/human-risk-management": [path.join(PAGE_DIR, "HumanRiskManagement.tsx"), path.join(DATA_DIR, "humanRiskManagement.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/products/data-privacy-protection": [path.join(PAGE_DIR, "DataPrivacyProtection.tsx"), path.join(DATA_DIR, "dataPrivacyProtection.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/consultancy-service": [path.join(PAGE_DIR, "ConsultancyService.tsx"), path.join(DATA_DIR, "pageSeo.ts")],
  "/partners": [path.join(PAGE_DIR, "Partners.tsx"), path.join(DATA_DIR, "pageSeo.ts")],
  "/solutions": [path.join(PAGE_DIR, "Solutions.tsx"), path.join(DATA_DIR, "industrySolutions.ts"), path.join(DATA_DIR, "pageSeo.ts")],
  "/solutions/banking-financial-services": [path.join(DATA_DIR, "industrySolutions.ts"), path.join(PAGE_DIR, "IndustrySolution.tsx"), path.join(DATA_DIR, "pageSeo.ts")],
  "/solutions/healthcare-life-sciences": [path.join(DATA_DIR, "industrySolutions.ts"), path.join(PAGE_DIR, "IndustrySolution.tsx"), path.join(DATA_DIR, "pageSeo.ts")],
  "/solutions/government-public-sector": [path.join(DATA_DIR, "industrySolutions.ts"), path.join(PAGE_DIR, "IndustrySolution.tsx"), path.join(DATA_DIR, "pageSeo.ts")],
  "/solutions/technology-saas": [path.join(DATA_DIR, "industrySolutions.ts"), path.join(PAGE_DIR, "IndustrySolution.tsx"), path.join(DATA_DIR, "pageSeo.ts")],
  "/solutions/retail-ecommerce": [path.join(DATA_DIR, "industrySolutions.ts"), path.join(PAGE_DIR, "IndustrySolution.tsx"), path.join(DATA_DIR, "pageSeo.ts")],
  "/solutions/energy-utilities": [path.join(DATA_DIR, "industrySolutions.ts"), path.join(PAGE_DIR, "IndustrySolution.tsx"), path.join(DATA_DIR, "pageSeo.ts")],
};

function getLatestPostDate() {
  try {
    const posts = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "posts.json"), "utf8"));
    if (!Array.isArray(posts) || posts.length === 0) return null;
    const dates = posts.map((p) => new Date(p.date)).filter((d) => !isNaN(d));
    if (dates.length === 0) return null;
    return new Date(Math.max(...dates)).toISOString().split("T")[0];
  } catch {
    return null;
  }
}

function getGitLastModified(filePaths) {
  const existing = filePaths.filter((p) => fs.existsSync(p));
  if (existing.length === 0) return null;
  try {
    const result = execSync(
      `git log -1 --format="%cI" -- ${existing.map((p) => `"${p}"`).join(" ")}`,
      { cwd: path.join(__dirname, ".."), encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] },
    );
    const date = result.trim();
    if (!date) return null;
    return new Date(date).toISOString().split("T")[0];
  } catch {
    return null;
  }
}

function getLastModifiedForRoute(route) {
  // Special case: blogs page updates whenever the newest post is published.
  if (route === "/blogs") {
    const postDate = getLatestPostDate();
    if (postDate) return postDate;
  }

  const files = ROUTE_SOURCE_FILES[route];
  if (files && files.length > 0) {
    const gitDate = getGitLastModified(files);
    if (gitDate) return gitDate;
  }

  // Fallback to today if git history is unavailable.
  return new Date().toISOString().split("T")[0];
}

function run() {
  if (!fs.existsSync(DIST)) {
    throw new Error("dist/ not found. Run `vite build` before generating the sitemap.");
  }

  const urls = routes
    .map((route) => {
      const loc = `${SITE_URL}${route === "/" ? "/" : route}`;
      const priority = route === "/" ? "1.0" : "0.8";
      const lastmod = getLastModifiedForRoute(route);
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>weekly</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  fs.writeFileSync(OUTPUT_FILE, xml, "utf8");
  console.log(`Wrote sitemap with ${routes.length} URLs to ${path.relative(DIST, OUTPUT_FILE)}`);
}

run();
