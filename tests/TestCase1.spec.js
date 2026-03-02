// @ts-check
import { test, expect } from '@playwright/test';
//import { selectors } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*', route => {
    const url = route.request().url();

    if (
      url.includes('doubleclick.net') ||
      url.includes('googlesyndication') ||
      url.includes('adservice')
    ) {
      route.abort();
    } else {
      route.continue();
    }
  });
});

test('testCase1', async ({ page }) => {
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Signup / Login' }).click();

    await expect(page.getByText('New User Signup!')).toBeVisible();

    await page.getByTestId('signup-name').fill('Matei Tiberiu');

    await page.getByTestId('signup-email').fill('mateitiberiu1995@gmail.com');

    await page.getByTestId('signup-button').click();

    await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();

    await page.getByText('Mr.').click();

    await page.getByTestId('password').fill('Cevalaintamplare15?');

    await page.getByTestId('days').selectOption('26');

    await page.getByTestId('months').selectOption('5');

    await page.getByTestId('years').selectOption('1995');

    await page.getByRole('checkbox', {name: 'newsletter'}).click();

    await page.getByRole('checkbox', {name: 'Receive Special offers'}).click();

    await page.getByTestId('first_name').fill('Tiberiu');

    await page.getByTestId('last_name').fill('Matei');

    await page.getByTestId('company').fill('Infosys');

    await page.getByTestId('address').fill('34 River');

    await page.getByTestId('address2').fill('Harlinger, London');

    await page.getByTestId('country').selectOption('United States');

    await page.getByTestId('state').fill('Kansas');

    await page.getByTestId('city').fill('London');

    await page.getByTestId('zipcode').fill('700276');

    await page.getByTestId('mobile_number').fill('07308421412');

    await page.getByTestId('create-account').click();

    await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();

    await page.getByTestId('continue-button').click();

    await expect(page.getByText('Logged in as Matei Tiberiu')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Delete Account' }).click();

    await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();


});