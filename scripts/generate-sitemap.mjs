/**
 * Generate dist/sitemap.xml from the shared route list.
 * Usage: node scripts/generate-sitemap.mjs (runs after `vite build`)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { routes, SITE_URL } from "./routes.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST = path.join(__dirname, "..", "dist");
const OUTPUT_FILE = path.join(DIST, "sitemap.xml");

function run() {
  if (!fs.existsSync(DIST)) {
    throw new Error("dist/ not found. Run `vite build` before generating the sitemap.");
  }

  const lastmod = new Date().toISOString().split("T")[0];

  const urls = routes
    .map((route) => {
      const loc = `${SITE_URL}${route === "/" ? "/" : route}`;
      const priority = route === "/" ? "1.0" : "0.8";
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
