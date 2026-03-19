import { test, expect } from '@playwright/test';
const Menu = require('../components/Menu');
const Subscribe = require('../components/Subscribe');
class HomePage{
    constructor(page){
        this.page = page;
        this.menu = new Menu(page);
        this.subscribe = new Subscribe(page);
    }
    async navigate()
    {
        await this.page.route('**/*', route => {
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

        await this.page.goto('https://automationexercise.com');
    }
    async areWeHome()
    {
        await expect(this.page.getByText('FEATURES ITEMS')).toBeVisible();
    }
    //this.page
}

module.exports = HomePage;