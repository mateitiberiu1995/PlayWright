import { test, expect } from '@playwright/test';
class Menu{
    constructor(page)
    {
        this.page=page;
        this.signLogin=page.getByRole('listitem').filter({ hasText: 'Signup / Login' });
        this.home=page.getByRole('listitem').filter({ hasText: 'Home' });
        this.products = page.getByRole('listitem').filter({ hasText: 'Products' });
        this.cart = page.getByRole('listitem').filter({ hasText: 'Cart' });
        this.testCases = page.getByRole('listitem').filter({ hasText: 'Test Cases'});
        this.apiTesting = page.getByRole('listitem').filter({ hasText: 'API Testing'});
        this.contactUs = page.getByRole('listitem').filter({ hasText: 'Contact Us'});
        this.videoTutorials = page.getByRole('listitem').filter({ hasText: 'Video Tutorials'});
        this.deleteAccount = page.getByRole('listitem').filter({ hasText: 'Delete Account' });
    }
    async goToSignUpLogin()
    {
        await this.signLogin.click();
    }
    async goToHome()
    {
        await this.home.click();
    }
    async goToProducts()
    {
        await this.products.click();
    }
    async goToCart()
    {
        await this.cart.click();
    }
    async goToTestCases()
    {
        await this.testCases.click();
    }
    async goToApiTesting()
    {
        await this.apiTesting.click();
    }
    async goToContactUs()
    {
        await this.contactUs.click();
    }
    async goToVideoTutorials()
    {
        await this.videoTutorials.click();
    }
    async checkUserLoggedIn(name)
    {
        await expect(this.page.getByText('Logged in as ' + name)).toBeVisible();
    }
    async goDeleteAccount()
    {
        await this.deleteAccount.click();
        await expect(this.page.getByText('ACCOUNT DELETED!')).toBeVisible();
    }

}

module.exports = Menu;