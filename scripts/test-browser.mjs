import { chromium, expect } from '@playwright/test';
import fs from 'node:fs/promises';

const base = process.env.BASE_URL || 'http://127.0.0.1:3144';
const output = process.env.TEST_OUTPUT || 'artifacts/browser';
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'] });
const results = [];
try {
  for (const [profile, viewport] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
    for (const route of ['/', '/flavours', '/story']) {
      const page = await browser.newPage({ viewport, locale: 'en-US', colorScheme: 'light', reducedMotion: 'no-preference' });
      const errors = [], failed = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('response', response => { if (response.status() >= 400) failed.push(response.status() + ' ' + response.url()); });
      await page.goto(base + route, { waitUntil: 'load' });
      await page.locator('#loader').waitFor({ state: 'detached', timeout: 90000 });
      await page.waitForTimeout(3000);
      await expect(page.locator('main')).toBeVisible();
      expect(await page.locator('canvas').count()).toBeGreaterThan(0);
      const name = profile + '-' + (route.slice(1) || 'home');
      await page.screenshot({ path: output + '/' + name + '.png' });
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.5));
      await page.waitForTimeout(1500);
      await page.screenshot({ path: output + '/' + name + '-middle.png' });
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(1500);
      await page.screenshot({ path: output + '/' + name + '-end.png' });
      expect(errors).toEqual([]);
      expect(failed).toEqual([]);
      results.push({ profile, route, errors, failed, height: await page.evaluate(() => document.body.scrollHeight) });
      console.log('PASS', name);
      await page.close();
    }
  }
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(base + '/flavours');
  await page.locator('#loader').waitFor({ state: 'detached', timeout: 90000 });
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: /Add .* to basket/ }).first().click();
  await page.getByRole('button', { name: /Single One can/ }).first().click();
  await page.getByRole('button', { name: /Open basket/ }).click();
  await expect(page.getByRole('dialog', { name: 'Your basket' })).toBeVisible();
  await page.getByRole('button', { name: 'Close basket' }).click();
  await expect(page.getByRole('dialog', { name: 'Your basket' })).not.toBeVisible();
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.locator('a[href="/story"]').filter({ hasText: 'Story' }).first().click();
  await expect(page).toHaveURL(/\/story$/);
  await page.waitForTimeout(2500);
  await expect(page.locator('main')).toBeVisible();
  results.push({ interaction: 'Add product, open/close basket, menu, animated navigation', passed: true });
  console.log('PASS basket and navigation');
  await page.close();
} finally {
  await fs.writeFile(output + '/report.json', JSON.stringify(results, null, 2));
  await browser.close();
}
