import { test, expect } from '@playwright/test';

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

test('testCase 4', async ({page})=>{
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Signup / Login' }).click();

    await expect(page.getByText('Login to your account')).toBeVisible();

    await page.getByTestId('login-email').fill("testerPlay@yahoo.com");

    await page.getByTestId('login-password').fill("testerPlay");

    await page.getByTestId('login-button').click();

    await expect(page.getByText('Logged in as testerPlay')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Logout' }).click();

    await expect(page.getByText('Login to your account')).toBeVisible();

    await expect(page.getByText('New User Signup!')).toBeVisible();

});

test('testCase 5', async ({page}) => {

    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Signup / Login' }).click();

    await expect(page.getByText('New User Signup!')).toBeVisible();

    await page.getByTestId('signup-name').fill('Matei Tiberiu');

    await page.getByTestId('signup-email').fill('testerPlay@yahoo.com');

    await page.getByTestId('signup-button').click();

    await expect(page.getByText('Email Address already exist!')).toBeVisible();
});
test('testCase 6', async ({page}) => {
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Contact us' }).click()

    await expect(page.getByRole('heading', {name: 'Get In Touch'})).toBeVisible();

    await page.getByPlaceholder('Name').fill('tester Play');

    await page.getByPlaceholder('Email', { exact: true }).fill('testerPlay@yahoo.com');

    await page.getByPlaceholder('Subject').fill('my complain');

    await page.getByPlaceholder('Your Message Here').fill('My complain here');

    await page.getByRole('button', { name: 'Choose File' }).setInputFiles('README.md');

    page.on('dialog', async dialog => {
    //console.log('Dialog message:', dialog.message());
    await dialog.accept();
    });

    page.getByTestId('submit-button').click();


    await expect(page.locator('#contact-page').getByText('Success! Your details have')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Home' }).click();

    await expect(page).toHaveURL('https://automationexercise.com/');
});
test('testCase 7', async ({page}) => {
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Test Cases' }).click();

    await expect(page).toHaveURL('https://automationexercise.com/test_cases');
});
test('testCase 8', async ({page}) => {
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Products' }).click();

    await expect(page).toHaveURL('https://automationexercise.com/products');

    await expect(page.getByText('Blue Top').first()).toBeVisible();

    await page.getByRole('link', {name: 'View Product'}).first().click();

    await expect(page).toHaveURL('https://automationexercise.com/product_details/1');

    await expect(page.getByText('Blue Top')).toBeVisible();

    await expect(page.getByText('Category: Women > Tops')).toBeVisible();

    await expect(page.getByText('Rs. 500')).toBeVisible();

    await expect(page.getByText('Availability: In Stock')).toBeVisible();

    await expect(page.getByText('Condition: New')).toBeVisible();

    await expect(page.getByText('Brand: Polo')).toBeVisible();
});
test('testCase 9', async ({page})=>{
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Products' }).click();

    await expect(page).toHaveURL('https://automationexercise.com/products');

    await page.getByPlaceholder('Search Product').fill('Blue Top');

    await page.locator('#submit_search').click();

    await expect(page.getByText('Searched Products')).toBeVisible();

    await expect(page.getByText('Blue Top').first()).toBeVisible();
});
test('testCase 10', async ({page})=>{
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);});

    await page.getByPlaceholder('Your email address').fill('testerPlay@yahoo.com');

    await page.locator('#subscribe').click();

    await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();
});