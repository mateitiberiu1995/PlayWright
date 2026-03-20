import { test, expect } from '@playwright/test';
const Menu = require('../components/Menu');
const Subscribe = require('../components/Subscribe');
class ContactUsPage{
    constructor(page)
    {
        this.page = page;
        this.menu = new Menu(page);
        this.subscribe = new Subscribe(page);
        this.name = page.getByTestId('name');
        this.email = page.getByTestId('email');
        this.subject = page.getByTestId('subject');
        this.message = page.getByTestId('message');
        this.chooseFile = page.getByRole('button', {name: 'Choose File' });
        this.submit = page.getByTestId('submit-button');
        this.home = page.getByRole('link', { name: ' Home' });
    }
    async addDetails(name, email, subject)
    {
        await this.name.fill(name);
        await this.email.fill(email);
        await this.subject.fill(subject);
    }
    async addMessage(message)
    {
        await this.message.fill(message);
    }
    async addFile(file)
    {
        await this.chooseFile.setInputFiles(file);
    }
    async checkContactUs()
    {
        await expect(this.page.getByText('Feedback For Us')).toBeVisible();
        await expect(this.page.getByRole('heading', {name: 'Get In Touch'})).toBeVisible();
    }
    async sendComplain()
    {
        this.page.on('dialog', async dialog => {
        await dialog.accept();
        });
        await this.submit.click();
        await expect(this.page.locator('#contact-page').getByText('Success! Your details have')).toBeVisible();
    }
    async goToHome()
    {
        await this.home.click();
    }
    async checkURL()
    {
        await expect(this.page).toHaveURL('https://automationexercise.com/contact_us');
    }

}

module.exports = ContactUsPage;