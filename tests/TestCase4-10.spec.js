import { test, expect } from '@playwright/test';

const HomePage = require('../pages/HomePage');
const SignLoginPage = require('../pages/SignLoginPage');
const ContactUsPage = require('../pages/ContactUsPage');
const TestCasesPage = require('../pages/TestCasesPage');

test('testCase 4', async ({page})=>{
    const home = new HomePage(page)
    await home.navigate();
    await home.areWeHome();
    await home.menu.goToSignUpLogin();
    const signup = new SignLoginPage(page);
    await signup.checkLoginPage();
    await signup.fillLogin('testerPlay@yahoo.com','testerPlay');
    await signup.menu.checkUserLoggedIn('testerPlay')
    await signup.menu.goToLogout();
    await signup.checkLoginPage();
});

test('testCase 5', async ({page}) => {

    const home = new HomePage(page)
    await home.navigate();
    await home.areWeHome();
    await home.menu.goToSignUpLogin();
    const signup = new SignLoginPage(page);
    await signup.checkLoginPage();
    await signup.fillSignUp('Matei Tiberiu','testerPlay@yahoo.com');
    await signup.checkWrongEmail();
});
test('testCase 6', async ({page}) => {
    const home = new HomePage(page)
    await home.navigate();
    await home.areWeHome();
    await home.menu.goToContactUs();
    const contact = new ContactUsPage(page);
    await contact.checkContactUs();
    await contact.addDetails('tester Play','testerPlay@yahoo.com','my complain');
    await contact.addMessage('My complain here');
    await contact.addFile('README.md');
    await contact.sendComplain();
    await contact.goToHome();
    await home.checkURL();
});
test('testCase 7', async ({page}) => {
    const home = new HomePage(page)
    await home.navigate();
    await home.areWeHome();
    await home.menu.goToTestCases();
    const test = new TestCasesPage(page);
    await test.checkURL();
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