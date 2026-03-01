import { test, expect } from '@playwright/test';

test('testCase2', async ({page}) => {

    // we created before hand the account testerPlay with password testerPlay and email testerPlay@yahoo.com
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('button', {name :  'Consent'}).click();

    await page.getByRole('listitem').filter({ hasText: 'Signup / Login' }).click();

    await expect(page.getByText('Login to your account')).toBeVisible();

    await page.getByTestId('login-email').fill("testerPlay@yahoo.com");

    await page.getByTestId('login-password').fill("testerPlay");

    await page.getByTestId('login-button').click();

    await expect(page.getByText('Logged in as testerPlay')).toBeVisible();


    //This is the actual thing to delete the account, but we want to use it again. Also we already tested the deletion of the account in test 1
    //await page.getByRole('listitem').filter({ hasText: 'Delete Account' }).click();

    //await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
});

test('testCase3', async({ page }) => {

    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('button', {name :  'Consent'}).click();

    await page.getByRole('listitem').filter({ hasText: 'Signup / Login' }).click();

    await expect(page.getByText('Login to your account')).toBeVisible();

    await page.getByTestId('login-email').fill("testerPlay321@yahoo.com");

    await page.getByTestId('login-password').fill("testerPlay");

    await page.getByTestId('login-button').click();

    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});