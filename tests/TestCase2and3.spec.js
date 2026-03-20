import { test, expect } from '@playwright/test';

const HomePage = require('../pages/HomePage');
const SignLoginPage = require('../pages/SignLoginPage')

test('testCase2', async ({page}) => {

    const home = new HomePage(page)
    await home.navigate();
    await home.areWeHome();
    await home.menu.goToSignUpLogin();
    const signup = new SignLoginPage(page);
    await signup.checkLoginPage();
    await signup.fillLogin('testerPlay@yahoo.com','testerPlay');
    await signup.menu.checkUserLoggedIn('testerPlay')
});

test('testCase3', async({ page }) => {

    const home = new HomePage(page)
    await home.navigate();
    await home.areWeHome();
    await home.menu.goToSignUpLogin();
    const signup = new SignLoginPage(page);
    await signup.checkLoginPage();
    await signup.fillLogin('testerPlay321@yahoo.com','testerPlay');
    await signup.checkFailedDetails();
});