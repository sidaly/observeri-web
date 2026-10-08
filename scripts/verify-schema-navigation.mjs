import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import puppeteer from 'puppeteer';

const server = http.createServer((req, res) => {
  let file = path.join('dist', new URL(req.url, 'http://localhost').pathname);
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) file = 'dist/index.html';
  res.setHeader('Content-Type', { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.webp': 'image/webp' }[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let browser;
try {
  browser = await puppeteer.launch({headless: true, timeout: 60000, args: ["--no-sandbox", "--disable-setuid-sandbox"], ...(process.env.PUPPETEER_EXECUTABLE_PATH ? {executablePath: process.env.PUPPETEER_EXECUTABLE_PATH} : {})});
  console.log('Browser launched.');
  const page = await browser.newPage();
  const origin = `http://127.0.0.1:${server.address().port}`;
  await page.setRequestInterception(true);
  page.on('request', req => req.url().startsWith(origin) || req.url().startsWith('data:') ? req.continue() : req.abort());
  await page.goto(origin + '/products/cyber-risk-management', {waitUntil: 'domcontentloaded', timeout: 45000});
  for (const route of ['/products/cyber-risk-management', '/', '/blogs', '/products/compliance-management', '/team', '/missing/nested-page']) {
    console.log(`Checking ${route}`);
    await page.evaluate(route => { history.pushState({}, '', route); dispatchEvent(new PopStateEvent('popstate')); }, route);
    await page.waitForFunction(route => {
      if (document.querySelector('link[rel="canonical"]')?.href !== 'https://www.observeri.com' + route) return false;
      const nodes = [...document.querySelectorAll('script[type="application/ld+json"]')];
      if (route === '/missing/nested-page') return nodes.length === 0;
      if (nodes.length !== 1) return false;
      const schemas = JSON.parse(nodes[0].textContent);
      const types = schemas.map(s => s['@type']);
      if (route === '/') return types.includes('FAQPage') && types.includes('Organization') && !types.includes('SoftwareApplication');
      if (route.startsWith('/products/')) return schemas.some(s => s['@type'] === 'SoftwareApplication' && s.url.endsWith(route)) && !types.includes('FAQPage');
      return types.length === 1 && types[0] === 'BreadcrumbList';
    }, {timeout: 15000}, route);
    const canonical = await page.$eval('link[rel="canonical"]', el => el.href);
    assert.equal(canonical, 'https://www.observeri.com' + route);
  }
  console.log('Schema hydration and client navigation checks passed, including a nested 404.');
} finally {
  await browser?.close();
  server.close();
}
