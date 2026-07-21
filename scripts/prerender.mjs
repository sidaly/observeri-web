/**
 * Prerender the built SPA to static HTML per route.
 * Serves dist/ over a local server, renders each route with Puppeteer,
 * and writes the fully-rendered DOM to dist/<route>/index.html so crawlers
 * get a real H1, body text, and unique meta/canonical/OG without running JS.
 *
 * Usage: node scripts/prerender.mjs (runs after `vite build`)
 */

import fs from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";
import { routes, SITE_URL } from "./routes.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST = path.join(__dirname, "..", "dist");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".xml": "application/xml",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

// Static file server for dist/ with SPA fallback to index.html.
function createServer() {
  return http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    let filePath = path.join(DIST, urlPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    if (!fs.existsSync(filePath)) {
      // SPA fallback so client routing renders the requested path.
      filePath = path.join(DIST, "index.html");
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(res);
  });
}

// Scroll top-to-bottom to trigger whileInView / scroll-based animations so
// the serialized DOM reflects the fully revealed page.
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 400;
      const timer = setInterval(() => {
        const { scrollHeight } = document.body;
        window.scrollBy(0, step);
        total += step;
        if (total >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 60);
    });
  });
  // Give animations a beat to settle to their final state.
  await new Promise((r) => setTimeout(r, 400));
}

// Analytics / ads hosts whose scripts inject runtime-only markup (tracking
// beacons with the local prerender origin) that must never be baked into the
// static HTML. The original GTM/gtag tags remain in index.html for real users.
const BLOCKED_HOSTS = [
  "googletagmanager.com",
  "google-analytics.com",
  "googleadservices.com",
  "googlesyndication.com",
  "doubleclick.net",
  "analytics.google.com",
  "stats.g.doubleclick.net",
];

function isBlocked(url) {
  return BLOCKED_HOSTS.some((host) => url.includes(host));
}

// Rewrite the local origin to the production origin and ensure canonical/OG
// URLs are absolute.
function rewriteOrigin(html, origin) {
  let out = html.split(origin).join(SITE_URL);
  // Also handle URL-encoded occurrences (e.g. inside query strings).
  out = out.split(encodeURIComponent(origin)).join(encodeURIComponent(SITE_URL));

  // Make relative canonical/og:url/og:image/twitter:image absolute.
  out = out.replace(
    /(<(?:link|meta)[^>]*(?:rel="canonical"|property="og:url"|property="og:image"|name="twitter:image")[^>]*(?:href|content)=")(\/[^"]*)(")/g,
    (_m, pre, url, post) => `${pre}${SITE_URL}${url}${post}`,
  );

  return out;
}

function outPathForRoute(route) {
  if (route === "/") return path.join(DIST, "index.html");
  return path.join(DIST, route.replace(/^\//, ""), "index.html");
}

async function run() {
  if (!fs.existsSync(path.join(DIST, "index.html"))) {
    throw new Error("dist/index.html not found. Run `vite build` before prerendering.");
  }

  const server = createServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  const origin = `http://127.0.0.1:${port}`;

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let failures = 0;

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      try {
        await page.setRequestInterception(true);
        page.on("request", (request) => {
          if (isBlocked(request.url())) {
            request.abort();
          } else {
            request.continue();
          }
        });

        await page.goto(`${origin}${route}`, { waitUntil: "networkidle0", timeout: 45000 });
        await page.waitForSelector("#root h1", { timeout: 15000 }).catch(() => {
          console.warn(`  ! no <h1> detected for ${route}`);
        });
        await autoScroll(page);

        // Strip runtime-injected analytics/ads nodes and anything referencing
        // the local prerender origin so they never end up in the static HTML.
        // The authored gtag.js tag and inline GTM loader in index.html are kept
        // so analytics keeps working for real users on the served pages.
        await page.evaluate((localOrigin) => {
          // Hosts whose tags are injected at runtime (the inline GTM loader
          // re-creates gtm.js on the client) or are pure tracking beacons.
          const injectedHosts = [
            "googletagmanager.com/gtm.js",
            "google-analytics.com",
            "googleadservices.com",
            "googlesyndication.com",
            "doubleclick.net",
            "analytics.google.com",
          ];
          document.querySelectorAll("script, iframe, img, link").forEach((el) => {
            const src = el.getAttribute("src") || el.getAttribute("href") || "";
            if (!src) return;
            if (injectedHosts.some((h) => src.includes(h)) || src.includes(localOrigin)) {
              el.remove();
            }
          });
        }, origin);

        const html = await page.content();
        const finalHtml = "<!doctype html>\n" + rewriteOrigin(html, origin).replace(/^<!doctype html>\s*/i, "");

        const outPath = outPathForRoute(route);
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, finalHtml, "utf8");
        console.log(`  ✓ ${route} -> ${path.relative(DIST, outPath)}`);
      } catch (err) {
        failures += 1;
        console.error(`  ✗ ${route}: ${err.message}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  if (failures > 0) {
    throw new Error(`Prerendering failed for ${failures} route(s).`);
  }
  console.log(`Prerendered ${routes.length} routes.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
