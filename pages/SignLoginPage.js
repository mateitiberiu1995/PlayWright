import { test, expect } from '@playwright/test';
const Menu = require('../components/Menu');
const Subscribe = require('../components/Subscribe');
class SignLoginPage{
    constructor(page)
    {
        this.page = page;
        this.menu = new Menu(page);
        this.subscribe = new Subscribe(page);
        this.loginEmail = page.getByTestId('login-email');
        this.loginPassword = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-button');
        this.signEmail = page.getByTestId('signup-email');
        this.signName = page.getByTestId('signup-name');
        this.signButton = page.getByTestId('signup-button');
        this.mrRadio = page.getByText('Mr.');
        this.mrsRadio = page.getByText('Mrs.');
        this.formName = page.getByTestId('name');
        this.formPassword = page.getByTestId('password');
        this.formDay = page.getByTestId('days');
        this.formMonth = page.getByTestId('months');
        this.formYear = page.getByTestId('years');
        this.checkNews = page.getByRole('checkbox', {name: 'newsletter'});
        this.checkOffers = page.getByRole('checkbox', {name: 'Receive Special offers'});
        this.firstName = page.getByTestId('first_name');
        this.lastName = page.getByTestId('last_name');
        this.company = page.getByTestId('company');
        this.firstAddress = page.getByTestId('address');
        this.secondAddress = page.getByTestId('address2');
        this.country = page.getByTestId('country');
        this.state = page.getByTestId('state');
        this.city = page.getByTestId('city');
        this.zipcode = page.getByTestId('zipcode');
        this.mobileNumber = page.getByTestId('mobile_number');
        this.createButton = page.getByTestId('create-account');
        this.continueButton = page.getByTestId('continue-button');
    }
    async fillLogin(email,password)
    {
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }
    async fillSignUp(name, email)
    {
        await this.signName.fill(name);
        await this.signEmail.fill(email);
        await this.signButton.click();
    }
    async checkLoginPage()
    {
        await expect(this.page.getByText('Login to your account')).toBeVisible();
        await expect(this.page.getByText('New User Signup!')).toBeVisible();
    }
    async checkAccountCreationPage()
    {
        await expect(this.page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();
    }
    async checkAccountCreated()
    {
        await expect(this.page.getByText('ACCOUNT CREATED!')).toBeVisible();
    }
    async checkFailedDetails()
    {
        await expect(this.page.getByText('Your email or password is incorrect!')).toBeVisible();
    }
    async checkWrongEmail()
    {
        await expect(this.page.getByText('Email Address already exist!')).toBeVisible();
    }
    async changeNameForm(name)
    {
        await this.formName.fill(name);
    }
    async enterPassword(password)
    {
        await this.formPassword.fill(password);
    }
    async titleSelection(gender)
    {
        if(gender==1)
            await this.mrRadio.click();
        else
            await this.mrsRadio.click();
    }
    async enterDateOfBirth(days,months,years)
    {
        await this.formDay.selectOption(days.toString());
        await this.formMonth.selectOption(months.toString());
        await this.formYear.selectOption(years.toString());
    }
    async checkEverything()
    {
        await this.checkNews.click();
        await this.checkOffers.click();
    }
    async fillFirstLastName(first, last)
    {
        await this.firstName.fill(first);
        await this.lastName.fill(last);
    }
    async fillCompany(company)
    {
        await this.company.fill(company);
    }
    async fillAddresses(address1, address2)
    {
        await this.firstAddress.fill(address1);
        await this.secondAddress.fill(address2);
    }
    async chooseCountry(country)
    {
        await this.country.selectOption(country);
    }
    async fillState(state)
    {
        await this.state.fill(state);
    }
    async fillCity(city)
    {
        await this.city.fill(city);
    }
    async fillZipcode(zipcode)
    {
        await this.zipcode.fill(zipcode);
    }
    async fillMobileNumber(mobile)
    {
        await this.mobileNumber.fill(mobile);
    }
    async checkURL()
    {
        await expect(this.page).toHaveURL('https://automationexercise.com/login');
    }
}

module.exports = SignLoginPage;