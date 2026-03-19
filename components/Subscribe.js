class Subscribe{
    constructor(page)
    {
        this.page=page;
        this.emailSubscription  = page.locator('#susbscribe_email');
        this.submit = page.locator('subscribe');
    }
    async fillEmailSubscription(email)
    {
        await this.emailSubscription.fill(email);
    }
    async pressSubscribe()
    {
        await this.submit.click();
    }
    async successfulSubscribe()
    {
        await expect(this.page.getByText('You have been successfully subscribed!')).toBeVisible();
    }
}

module.exports = Subscribe;