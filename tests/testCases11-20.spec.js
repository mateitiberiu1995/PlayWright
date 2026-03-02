import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*', route => {
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
});

test('testCase 11', async({page}) => {
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();

    await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);});

    await expect(page.getByRole('heading', { name: 'Subscription' })).toBeVisible();

    await page.getByPlaceholder('Your email address').fill('testerPlay@yahoo.com');

    await page.locator('#subscribe').click();

    await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();
});

test('testCase 12', async({page}) => {
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Products' }).click();

    await page.getByText('Blue Top').first().hover();

    await page.getByText('Add to cart').nth(1).click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await page.getByText('Men Tshirt').nth(1).hover();

    await page.getByText('Add to cart').nth(3).click();

    await page.getByText('View Cart').click();

    await expect(page.getByText('Men Tshirt')).toBeVisible();

    await expect(page.getByText('Blue Top')).toBeVisible();

    await expect(page.getByRole('row').filter({hasText : 'Men Tshirt'}).getByText('Rs. 400').first()).toBeVisible();

    await expect(page.getByRole('row').filter({hasText : 'Men Tshirt'}).getByRole('button',{name: '1', exact: true})).toBeVisible();

    await expect(page.getByRole('row').filter({hasText : 'Men Tshirt'}).getByText('Rs. 400').nth(1)).toBeVisible();

    await expect(page.getByRole('row').filter({hasText : 'Blue Top'}).getByText('Rs. 500').first()).toBeVisible();

    await expect(page.getByRole('row').filter({hasText : 'Blue Top'}).getByRole('button',{name: '1', exact: true})).toBeVisible();

    await expect(page.getByRole('row').filter({hasText : 'Blue Top'}).getByText('Rs. 500').nth(1)).toBeVisible();
});
test('testCase 13', async({page}) => {
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('link', { name: 'View Product' }).first().click();

    await expect(page.getByText('Blue Top')).toBeVisible();

    await expect(page).toHaveURL('https://automationexercise.com/product_details/1');

    await page.locator('#quantity').fill('4');

    await page.getByRole('button', {name: 'Add to cart'}).click();

    await page.getByText('View Cart').click();

    await expect(page.getByText('Blue Top')).toBeVisible();

    await expect(page.getByRole('row').filter({hasText : 'Blue Top'}).getByRole('button',{name: '4', exact: true})).toBeVisible();
});
test('testCase 14', async({page}) => {

    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByText('Blue Top').first().hover();

    await page.getByText('Add to cart').nth(1).click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await page.getByText('Men Tshirt').nth(1).hover();

    await page.getByText('Add to cart').nth(3).click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();

    await expect(page).toHaveURL('https://automationexercise.com/view_cart');

    await page.getByText('Proceed To Checkout').click();

    await page.getByText('Register / Login').nth(1).click();

    await expect(page.getByText('New User Signup!')).toBeVisible();

    await page.getByTestId('signup-name').fill('Matei Tiberiu');

    await page.getByTestId('signup-email').fill('mateitiberiu1995@gmail.com');

    await page.getByTestId('signup-button').click();

    await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();

    await page.getByText('Mr.').click();

    await page.getByTestId('password').fill('Cevalaintamplare15?');

    await page.getByTestId('days').selectOption('26');

    await page.getByTestId('months').selectOption('5');

    await page.getByTestId('years').selectOption('1995');

    await page.getByRole('checkbox', {name: 'newsletter'}).click();

    await page.getByRole('checkbox', {name: 'Receive Special offers'}).click();

    await page.getByTestId('first_name').fill('Tiberiu');

    await page.getByTestId('last_name').fill('Matei');

    await page.getByTestId('company').fill('Infosys');

    await page.getByTestId('address').fill('34 River');

    await page.getByTestId('address2').fill('Harlinger, London');

    await page.getByTestId('country').selectOption('United States');

    await page.getByTestId('state').fill('Kansas');

    await page.getByTestId('city').fill('London');

    await page.getByTestId('zipcode').fill('700276');

    await page.getByTestId('mobile_number').fill('07308421412');

    await page.getByTestId('create-account').click();

    await expect(page.getByText('ACCOUNT CREATED!')).toBeVisible();

    await page.getByTestId('continue-button').click();

    await expect(page.getByText('Logged in as Matei Tiberiu')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();

    await page.getByText('Proceed To Checkout').click();

    await expect(page.getByRole('listitem').filter({ hasText: '34 River' }).first()).toBeVisible();

    await expect(page.getByRole('listitem').filter({ hasText: 'Harlinger, London' }).first()).toBeVisible();

    await expect(page.getByRole('listitem').filter({ hasText: 'United States' }).first()).toBeVisible();

    await expect(page.getByRole('listitem').filter({ hasText: 'Kansas' }).first()).toBeVisible();

    await expect(page.getByRole('listitem').filter({ hasText: 'London' }).first()).toBeVisible();

    await expect(page.getByRole('listitem').filter({ hasText: '700276' }).first()).toBeVisible();

    await expect(page.getByRole('cell', { name: 'Rs. 900' })).toBeVisible();

    await page.locator('textarea[name="message"]').fill('some message to enter here');

    await page.getByText('Place Order').click();

    await page.getByTestId('name-on-card').fill("Bors cu Zama");

    await page.getByTestId('card-number').fill('4213423243214231');

    await page.getByTestId('cvc').fill('444');

    await page.getByTestId('expiry-month').fill('12');

    await page.getByTestId('expiry-year').fill('2212');

    await page.getByTestId('pay-button').click();

    await expect(page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Delete Account' }).click();

    await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();

});