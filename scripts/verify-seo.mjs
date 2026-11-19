import fs from 'node:fs';
import assert from 'node:assert/strict';
import { routes, SITE_URL } from './routes.mjs';

for (const route of routes) {
  const file = `dist${route === '/' ? '' : route}/index.html`;
  const html = fs.readFileSync(file, 'utf8');
  const canonicals = html.match(/<link\b[^>]*rel="canonical"[^>]*>/g) || [];
  assert.equal(canonicals.length, 1, `${route}: expected exactly one canonical`);
  assert.ok(canonicals[0].includes(`href="${SITE_URL}${route}"`), `${route}: wrong canonical`);
  const ogUrlTag = html.match(/<meta[^>]*property="og:url"[^>]*>/)?.[0];
  assert.ok(ogUrlTag?.includes(`content="${SITE_URL}/`), `${route}: missing absolute og:url`);

  for (const key of ['og:image', 'twitter:image']) {
    const tag = html.match(new RegExp(`<meta[^>]*(?:property|name)="${key}"[^>]*>`))?.[0];
    const image = tag?.match(/content="([^"]+)"/)?.[1];
    assert.ok(image, `${route}: missing ${key}`);

    const imageUrl = new URL(image);
    assert.equal(imageUrl.protocol, 'https:', `${route}: ${key} must use HTTPS`);
    if (imageUrl.origin === SITE_URL) {
      assert.ok(fs.existsSync(`dist${imageUrl.pathname}`), `${route}: missing image ${image}`);
    }
  }
  assert.ok(/<h1[\s>]/.test(html), `${route}: missing rendered heading`);
  if (route.startsWith('/products/')) {
    const section = html.match(/<section[^>]*aria-labelledby="related-products-heading"[\s\S]*?<\/section>/)?.[0];
    assert.ok(section, `${route}: missing related products`);
    assert.equal((section.match(/href="\/products\//g) || []).length, 3, `${route}: expected 3 related products`);
    assert.ok(!section.includes(`href="${route}"`), `${route}: self-link in related products`);
  }
}
const home = fs.readFileSync('dist/index.html', 'utf8');
for (const route of routes.filter(route => route.startsWith('/products/'))) {
  assert.ok(home.includes(`href="${route}"`), `Homepage missing ${route}`);
}
console.log(`SEO checks passed for ${routes.length} prerendered routes.`);
