import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import os from 'node:os';
import puppeteer from 'puppeteer';

const approved = JSON.parse(fs.readFileSync('src/data/auditSeo.json', 'utf8'));
const screenshots = path.join(os.tmpdir(), 'observeri-seo-checklist');
fs.mkdirSync(screenshots, {recursive: true});
const server = http.createServer((req, res) => {
  let file = path.join('dist', new URL(req.url, 'http://localhost').pathname);
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) file = 'dist/index.html';
  res.setHeader('Content-Type', {'.js':'text/javascript','.css':'text/css','.html':'text/html','.webp':'image/webp','.png':'image/png'}[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const optional = url => /googletagmanager|google-analytics|googleadservices|doubleclick|youtube|vercel-scripts|_vercel\/insights/.test(url);
let browser;
try {
  browser = await puppeteer.launch({headless:true,timeout:60000,args:['--no-sandbox','--disable-setuid-sandbox'],...(process.env.PUPPETEER_EXECUTABLE_PATH ? {executablePath:process.env.PUPPETEER_EXECUTABLE_PATH}: {})});
  const page = await browser.newPage();
  const requests = [];
  const errors = [];
  let contactResponse = {status:500,body:{error:'Test delivery failure'}};
  let contactCalls = 0;
  page.on('pageerror', error => errors.push(error.message));
  await page.setRequestInterception(true);
  page.on('request', req => {
    if (optional(req.url())) {
      requests.push(req.url());
      return req.respond({status:200,contentType:req.resourceType()==='script'?'text/javascript':'text/html',body:''});
    }
    if (req.url() === origin+'/api/contact') {
      contactCalls++;
      return req.respond({status:contactResponse.status,contentType:'application/json',body:JSON.stringify(contactResponse.body)});
    }
    if (req.url().startsWith(origin) || req.url().startsWith('data:')) return req.continue();
    return req.abort();
  });
  const settle = () => new Promise(resolve => setTimeout(resolve, 300));
  const go = async route => {
    await page.goto(origin+route,{waitUntil:'domcontentloaded',timeout:45000});
    await page.waitForFunction(route => document.querySelector('link[rel="canonical"]')?.href === 'https://www.observeri.com'+route,{},route);
    await settle();
  };
  const click = async text => {
    await page.waitForFunction(text => [...document.querySelectorAll('button')].some(el => el.textContent.trim()===text),{},text);
    await page.evaluate(text => [...document.querySelectorAll('button')].find(el => el.textContent.trim()===text).click(),text);
    await settle();
  };
  await page.setViewport({width:1440,height:1000});
  for (const [route, expected] of Object.entries(approved)) {
    await go(route);
    const actual = await page.evaluate(() => ({
      h1:[...document.querySelectorAll('h1')].map(el=>el.textContent.trim()),
      title:document.title,
      description:document.querySelector('meta[name="description"]').content,
      text:document.body.textContent,
      faqs:[...document.querySelectorAll('details')].map(el=>({question:el.querySelector('summary').textContent,answer:el.querySelector('p').textContent})),
      schema:JSON.parse(document.querySelector('#schema-org-page').textContent).find(s=>s['@type']==='FAQPage'),
      overflow:document.documentElement.scrollWidth>innerWidth,
    }));
    assert.deepEqual(actual.h1,[expected.h1],route+' H1');
    assert.equal(actual.title,expected.title,route+' title');
    assert.equal(actual.description,expected.description,route+' description');
    for (const paragraph of expected.body) assert.ok(actual.text.includes(paragraph),route+' approved paragraph missing');
    assert.deepEqual(actual.faqs,expected.faqs,route+' visible FAQs');
    assert.deepEqual(actual.schema.mainEntity.map(q=>({question:q.name,answer:q.acceptedAnswer.text})),expected.faqs,route+' schema FAQs');
    if (actual.overflow) console.log(await page.evaluate(() => [...document.querySelectorAll('body *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1).slice(0, 12).map(el => ({tag:el.tagName,cls:el.className,text:el.textContent.slice(0,50),right:el.getBoundingClientRect().right}))));
    assert.equal(actual.overflow,false,route+' horizontal overflow');
    assert.equal(requests.length,0,route+' optional requests before consent');
  }
  console.log('Approved H1, metadata, copy, visible FAQs, matching schema and no pre-consent tracking verified on all 12 pages.');

  await go('/');
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({path:path.join(screenshots,'home-desktop.png')});
  await click('Reject optional');
  await go('/products/ai-risk-operations-center');
  assert.equal(requests.length,0,'Reject must persist across pages');
  assert.equal(await page.$('iframe'),null,'YouTube must not load without media consent');
  await click('Cookie settings');
  await page.evaluate(()=>document.querySelectorAll('[aria-label="Cookie preferences"] input')[0].click());
  await click('Save preferences');
  await page.waitForFunction(()=>!!document.querySelector('script[src*="insights"],script[src*="vercel-scripts"]'));
  assert.ok(requests.some(url=>/insights|vercel-scripts/.test(url)),'Analytics allowed');
  assert.ok(!requests.some(url=>/google|youtube/.test(url)),'Analytics-only must not load Google or YouTube');
  await click('Cookie settings');
  requests.length=0;
  await Promise.all([page.waitForNavigation({waitUntil:'domcontentloaded'}),click('Reject optional')]);
  await settle();
  assert.equal(requests.length,0,'Withdrawal must unload optional trackers');

  await click('Cookie settings');
  await page.evaluate(()=>document.querySelectorAll('[aria-label="Cookie preferences"] input')[1].click());
  await click('Save preferences');
  assert.ok(requests.some(url=>url.includes('/gtag/js')),'Marketing enables Google Ads');
  assert.ok(!requests.some(url=>/gtm.js|insights|vercel-scripts|youtube/.test(url)),'Marketing-only must not load GTM, analytics or media');
  await click('Cookie settings');
  requests.length=0;
  await Promise.all([page.waitForNavigation({waitUntil:'domcontentloaded'}),click('Reject optional')]);
  await settle();
  assert.equal(requests.length,0);

  await click('Cookie settings');
  await click('Accept all');
  await page.waitForSelector('iframe[src*="youtube-nocookie"]');
  await page.$eval('iframe',el=>el.scrollIntoView());
  await page.waitForFunction(()=>!!document.querySelector('#consented-gtm'));
  await settle();
  assert.ok(requests.some(url=>url.includes('/gtm.js')));
  assert.ok(requests.some(url=>url.includes('/gtag/js')));
  assert.ok(requests.some(url=>/insights|vercel-scripts/.test(url)));
  assert.ok(requests.some(url=>url.includes('youtube-nocookie')));
  await click('Cookie settings');
  requests.length=0;
  await Promise.all([page.waitForNavigation({waitUntil:'domcontentloaded'}),click('Reject optional')]);
  await settle();
  assert.equal(requests.length,0);
  assert.equal(await page.$('iframe'),null);

  for (const stored of ['not-json',JSON.stringify({version:1,analytics:true,marketing:true,media:true,savedAt:Date.now()-181*86400000})]) {
    await page.evaluate(value=>localStorage.setItem('observeri-cookie-consent',value),stored);
    await page.reload({waitUntil:'domcontentloaded'});
    await page.waitForSelector('[aria-label="Cookie preferences"]');
    await settle();
    assert.equal(requests.length,0,'Invalid/expired consent must fail closed');
  }
  await click('Reject optional');
  console.log('Consent checks passed: no consent, reject persistence, analytics-only, marketing-only, accept all, withdrawal, expired and invalid storage.');

  await page.setViewport({width:390,height:844,isMobile:true,deviceScaleFactor:1});
  await go('/');
  await page.type('#email','test@example.com');
  await page.type('#message','Automated test; requests are intercepted locally.');
  await click('Send Message');
  await page.waitForFunction(()=>document.body.textContent.includes('Test delivery failure'));
  assert.equal(new URL(page.url()).pathname,'/');
  assert.equal(await page.$eval('#message',el=>el.value),'Automated test; requests are intercepted locally.');
  contactResponse={status:200,body:{ok:false}};
  await click('Send Message');
  await page.waitForFunction(()=>document.body.textContent.includes('Unable to confirm your submission'));
  assert.equal(new URL(page.url()).pathname,'/');
  contactResponse={status:200,body:{ok:true}};
  await click('Send Message');
  await page.waitForSelector('[role="dialog"]');
  assert.equal(new URL(page.url()).pathname,'/');
  assert.ok(await page.$eval('[role="dialog"]',el=>el.textContent.includes('Thank you for your message')));
  assert.equal(await page.$eval('#message',el=>el.value),'');
  assert.equal(await page.$eval('#email',el=>el.value),'');
  assert.equal(contactCalls,3);
  assert.ok(!fs.readFileSync('dist/sitemap.xml','utf8').includes('/thank-you'));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({path:path.join(screenshots,'thank-you-popup-mobile.png')});
  await page.keyboard.press('Escape');
  await page.waitForSelector('[role="dialog"]',{hidden:true});
  await page.waitForFunction(()=>document.activeElement?.textContent === 'Send Message');
  console.log('Contact form checks passed: failures retain form; confirmed success opens popup without navigation, resets fields, and returns focus on close. No emails sent.');

  await page.setViewport({width:390,height:844,isMobile:true,deviceScaleFactor:1});
  await go('/products/external-attack-surface-management');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({path:path.join(screenshots,'product-mobile.png')});
  await page.$eval('#faq-heading',el=>el.scrollIntoView({behavior:'instant',block:'start'}));
  await page.evaluate(()=>window.scrollBy({top:-90,behavior:'instant'}));
  await page.$eval('details summary',el=>el.click());
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({path:path.join(screenshots,'faq-mobile.png')});
  await click('Cookie settings');
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({path:path.join(screenshots,'consent-mobile.png')});
  await click('Close');
  for (const route of ['/privacy-policy','/terms']) {
    await go(route);
    assert.equal(await page.$$eval('h1',els=>els.length),1);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    assert.ok(await page.$('footer a[href="/privacy-policy"]'));
    assert.ok(await page.$('footer a[href="/terms"]'));
    assert.ok(fs.readFileSync('dist/sitemap.xml','utf8').includes(route));
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
  await page.screenshot({path:path.join(screenshots,'terms-mobile.png')});
  assert.deepEqual(errors,[],'Browser runtime errors');
  console.log('Mobile layout, footer legal links and legal sitemap entries verified.');
  console.log('Screenshots: '+screenshots);
} finally {
  await browser?.close();
  server.close();
}
