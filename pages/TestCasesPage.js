import { test, expect } from '@playwright/test';
const Menu = require('../components/Menu');
const Subscribe = require('../components/Subscribe');
class TestCasesPage{
    constructor(page)
    {
        this.page = page;
        this.menu = new Menu(page);
        this.subscribe = new Subscribe(page);
    }
    async checkURL()
    {
        await expect(this.page).toHaveURL('https://automationexercise.com/test_cases');
    }
}

module.exports = TestCasesPage;