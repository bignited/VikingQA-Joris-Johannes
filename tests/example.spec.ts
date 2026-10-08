import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('http://training-frontend-angular.s3-website-eu-west-1.amazonaws.com/');
await page.getByLabel('input-gebruikersnaam').fill('ab');
await page.getByLabel('input-password').fill('aa1');
});

