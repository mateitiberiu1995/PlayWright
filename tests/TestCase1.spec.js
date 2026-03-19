// @ts-check
import { test, expect } from '@playwright/test';
//import { selectors } from '@playwright/test';

const HomePage = require('../pages/HomePage');
const SignLoginPage = require('../pages/SignLoginPage');

test('testCase1', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    await home.areWeHome();
    await home.menu.goToSignUpLogin();
    const signup = new SignLoginPage(page);
    await signup.checkLoginPage();
    await signup.fillSignUp('Matei Tiberiu', 'mateitiberiu1995@gmail.com');
    await signup.checkAccountCreationPage();
    await signup.titleSelection(1);
    await signup.enterPassword('Cevalaintamplare15?');
    await signup.enterDateOfBirth(26,5,1995);
    await signup.checkEverything();
    await signup.fillFirstLastName('Tiberiu','Matei');
    await signup.fillCompany('Infosys');
    await signup.fillAddresses('34 River', 'Harlinger, London');
    await signup.chooseCountry('United States');
    await signup.fillState('Kansas');
    await signup.fillCity('London');
    await signup.fillZipcode('700276');
    await signup.fillMobileNumber('07308421421');
    await signup.createButton.click();
    await signup.checkAccountCreated();
    await signup.continueButton.click();
    await signup.menu.checkUserLoggedIn('Matei Tiberiu');
    await signup.menu.goDeleteAccount();

});