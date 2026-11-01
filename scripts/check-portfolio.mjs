// Run against npm run dev: PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs node scripts/check-portfolio.mjs
import assert from 'node:assert/strict';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
const base = process.env.APP_URL || 'http://127.0.0.1:5173';
try {
  await page.goto(base);
  await page.getByRole('heading', { name: 'Juhanda — Azril' }).waitFor();
  await page.evaluate(() => document.fonts.ready);
  assert.ok(await page.locator('video').evaluate(video => video.paused && video.muted && video.loop));
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.getByRole('button', { name: 'Pause compilation' }).waitFor();
  await page.getByRole('button', { name: 'Pause compilation' }).click();
  assert.ok(await page.locator('video').evaluate(video => video.paused));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(await page.locator('.archive-grid article').count(), 19);
  assert.equal(await page.locator('.technology-item').count(), 18);
  await page.getByRole('button', { name: 'Laravel / PHP', exact: true }).click();
  assert.equal(await page.locator('.archive-grid article').count(), 4);
  await page.getByRole('button', { name: 'All', exact: true }).click();
  await page.getByRole('searchbox').fill('Hidden Valley');
  assert.equal(await page.locator('.archive-grid article').count(), 1);
  await page.getByRole('searchbox').fill('no-matching-project-123');
  await page.getByRole('heading', { name: 'No projects found.' }).waitFor();
  await page.getByRole('button', { name: 'Reset filters' }).click();
  assert.equal(await page.locator('.archive-grid article').count(), 19);
  await page.locator('.technology-item summary').first().click();
  assert.equal(await page.locator('.technology-item').first().getAttribute('open'), '');
  await page.locator('.technology-item summary').first().click();
  await page.locator('input[name="name"]').fill('   ');
  await page.locator('input[name="email"]').fill('test@example.com');
  await page.locator('textarea[name="message"]').fill('A portfolio project');
  await page.getByRole('button', { name: 'Send inquiry' }).click();
  assert.match(await page.getByRole('status').last().innerText(), /not only spaces/);
  await page.locator('input[name="name"]').fill('Portfolio test');
  await page.getByRole('button', { name: 'Send inquiry' }).click();
  assert.match(await page.getByRole('status').last().innerText(), /Nothing is sent/);
  await page.locator('form').evaluate((form) => form.reset());
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.evaluate(async () => {
      document.querySelectorAll('img').forEach((img) => { img.loading = 'eager'; });
      await Promise.all(Array.from(document.images, (img) => img.decode()));
      window.scrollTo(0, 0);
    });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `Horizontal overflow at ${width}px`);
    assert.equal(await page.locator('img').evaluateAll((images) => images.every((img) => img.naturalWidth > 0 && img.getBoundingClientRect().width > 0)), true);
    await page.screenshot({ path: `/tmp/portfolio-${width}.png`, fullPage: true });
  }
  for (const [route, target] of [['/project', '#all-projects'], ['/technology', '#technology']]) {
    await page.goto(`${base}${route}`);
    await page.locator(target).waitFor();
    assert.ok(Math.abs(await page.locator(target).evaluate((el) => el.getBoundingClientRect().top)) < 100, `${route} should scroll to section`);
  }
  assert.deepEqual(errors, []);
  console.log('PASS: 19 projects, 18 technologies, filtering, search, empty state, details, contact validation/draft, images, legacy routes, and responsive layouts.');
} finally {
  await browser.close();
}
