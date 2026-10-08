import fs from 'node:fs';
import assert from 'node:assert/strict';
import { routes, SITE_URL } from './routes.mjs';

for (const route of routes) {
  const html = fs.readFileSync(`dist${route === '/' ? '' : route}/index.html`, 'utf8');
  const head = html.split('</head>')[0];
  const scripts = [...head.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1, `${route}: expected one managed JSON-LD block`);
  const schemas = scripts.flatMap(match => JSON.parse(match[1]));
  for (const schema of schemas) assert.equal(schema['@context'], 'https://schema.org');
  const byType = type => schemas.filter(schema => schema['@type'] === type);
  const crumbs = byType('BreadcrumbList');
  assert.equal(crumbs.length, 1, `${route}: missing or duplicate breadcrumbs`);
  crumbs[0].itemListElement.forEach((item, index, items) => {
    assert.equal(item.position, index + 1);
    assert.ok(item.name);
    if (index < items.length - 1) assert.ok(item.item.startsWith(SITE_URL + '/'));
  });
  assert.equal(byType('Organization').length, route === '/' ? 1 : 0);
  assert.equal(byType('WebSite').length, route === '/' ? 1 : 0);
  assert.equal(byType('FAQPage').length, route === '/' ? 1 : 0);
  assert.equal(byType('Product').length, 0);
  assert.equal(byType('BlogPosting').length, 0);
  assert.equal(byType('SoftwareApplication').length, route.startsWith('/products/') ? 1 : 0);
  for (const app of byType('SoftwareApplication')) {
    assert.equal(app.url, SITE_URL + route);
    assert.ok(app.name && app.description && app.operatingSystem && app.applicationCategory);
    assert.ok(fs.existsSync(`dist${new URL(app.image).pathname}`));
    assert.equal(app.publisher.name, 'Observeri Technologies');
    assert.equal(app.offers, undefined);
    assert.equal(app.aggregateRating, undefined);
  }
  for (const faq of byType('FAQPage')) {
    assert.ok(faq.mainEntity.length > 0);
    for (const question of faq.mainEntity) {
      assert.ok(html.includes(question.name), 'FAQ question must be visible on the page');
      assert.ok(question.acceptedAnswer.text);
    }
  }
  for (const schema of schemas) assert.equal(schema.potentialAction, undefined);
}
console.log(`Structured data checks passed for ${routes.length} pages.`);
