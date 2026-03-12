import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should respond with 200 status', async ({ request }) => {
    const response = await request.get('/');
    expect(response.ok()).toBe(true);
  });

  test('should load homepage without crash', async ({ page }) => {
    await page.goto('/');
    // Just verify the page loads without crashing
    await expect(page.locator('body')).toBeVisible();
  });
});
