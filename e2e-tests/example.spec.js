const { test, expect } = require('@playwright/test')

test('front page can be opened', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page).toHaveTitle(/./)
})