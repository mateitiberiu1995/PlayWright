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
        await this.page.goto('https://automationexercise.com');
    }
    async areWeHome()
    {
        await expect(this.page.getByText('FEATURES ITEMS')).toBeVisible();
    }
    //this.page
}