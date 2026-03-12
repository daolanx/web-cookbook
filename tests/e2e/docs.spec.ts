import { test, expect } from '@playwright/test';

test.describe('Docs', () => {
  test('should load docs index page without crash', async ({ page }) => {
    await page.goto('/docs/index');
    // Just verify the page loads without crashing
    await expect(page.locator('body')).toBeVisible();
  });

  test('should load test doc page without crash', async ({ page }) => {
    await page.goto('/docs/test');
    // Just verify the page loads without crashing
    await expect(page.locator('body')).toBeVisible();
  });
});
