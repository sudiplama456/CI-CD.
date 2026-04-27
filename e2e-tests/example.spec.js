import { test, expect } from '@playwright/test'

test('front page can be opened', async ({ page }) => {
  await page.goto('http://localhost:8080')
  await expect(page).toHaveTitle(/./)
})