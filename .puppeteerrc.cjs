// Vercel cannot run Puppeteer's downloaded Chrome (missing libnspr4).
// Prerender uses @sparticuz/chromium there, so skip the unused download.
module.exports = {
  skipDownload: process.env.VERCEL === "1",
};
