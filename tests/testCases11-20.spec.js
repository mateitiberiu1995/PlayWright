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
test('testCase 15', async({page})=>{
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Signup / Login' }).click();

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

    await page.getByText('Blue Top').first().hover();

    await page.getByText('Add to cart').nth(1).click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await page.getByText('Men Tshirt').nth(1).hover();

    await page.getByText('Add to cart').nth(3).click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();

    await expect(page.getByText('Men Tshirt')).toBeVisible();

    await expect(page.getByText('Blue Top')).toBeVisible();

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
test('testCase 16', async({page})=>{
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Signup / Login' }).click();

    await page.getByTestId('login-email').fill("testerPlay@yahoo.com");

    await page.getByTestId('login-password').fill("testerPlay");

    await page.getByTestId('login-button').click();

    await expect(page.getByText('Logged in as testerPlay')).toBeVisible();

    await page.getByText('Blue Top').first().hover();

    await page.waitForTimeout(300);

    await page.getByText('Add to cart').nth(1).click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await page.getByText('Men Tshirt').nth(1).hover();

    await page.waitForTimeout(300);

    await page.getByText('Add to cart').nth(3).click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();

    await expect(page.getByText('Men Tshirt')).toBeVisible();

    await expect(page.getByText('Blue Top')).toBeVisible();

    await page.getByText('Proceed To Checkout').click();

    await expect(page.getByRole('listitem').filter({ hasText: '34 River' }).first()).toBeVisible();

    await expect(page.getByRole('listitem').filter({ hasText: 'Harlinger, London' }).first()).toBeVisible();

    await expect(page.getByRole('listitem').filter({ hasText: 'United States' }).first()).toBeVisible();

    await expect(page.getByRole('listitem').filter({ hasText: 'Kansas' }).first()).toBeVisible();

    await expect(page.getByRole('listitem').filter({ hasText: 'London' }).first()).toBeVisible();

    await expect(page.getByRole('listitem').filter({ hasText: '700276' }).first()).toBeVisible();

    //await expect(page.getByText('Rs. 900')).toBeVisible();

    await page.locator('textarea[name="message"]').fill('some message to enter here');

    await page.getByText('Place Order').click();

    await page.getByTestId('name-on-card').fill("Bors cu Zama");

    await page.getByTestId('card-number').fill('4213423243214231');

    await page.getByTestId('cvc').fill('444');

    await page.getByTestId('expiry-month').fill('12');

    await page.getByTestId('expiry-year').fill('2212');

    await page.getByTestId('pay-button').click();

    await expect(page.getByText('Congratulations! Your order has been confirmed!')).toBeVisible();
});
test('testCase 17', async({page})=>{
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

    await page.getByRole('row', { name: 'Product Image Men Tshirt Men' }).locator('.cart_delete > .cart_quantity_delete').click();

    await expect(page.getByText('Men Tshirt')).not.toBeVisible();
});
test('testCase 18', async({page})=>{
    await page.goto('https://automationexercise.com');

    await expect(page.locator('#accordian').filter({hasText: 'WOMEN'})).toBeVisible();

    await expect(page.locator('#accordian').filter({hasText: 'MEN'})).toBeVisible();

    await expect(page.locator('#accordian').filter({hasText: 'KIDS'})).toBeVisible();

    await page.getByRole('link', { name: 'Women' }).click();//getByRole('link', { name: ' Women' })

    await page.getByRole('link', { name: 'Dress' }).click(); //getByRole('link', { name: 'Dress' })

    await expect(page.getByText('Women - Dress Products')).toBeVisible();

    await page.locator('div:nth-child(2) > .panel-heading').getByText("Men").click();

    await page.getByRole('link', { name: 'Tshirts' }).click();

    await expect(page.getByText('Men - Tshirts Products')).toBeVisible();
});
test('testCase 19', async({page})=>{
    await page.goto('https://automationexercise.com');

    await page.getByRole('listitem').filter({ hasText: 'Products' }).click();

    await expect(page.getByRole('link', { name: '(6) Polo' })).toBeVisible();

    await expect(page.getByRole('link', { name: '(5) H&M' })).toBeVisible();

    await expect(page.getByRole('link', { name: '(5) Madame' })).toBeVisible();

    await expect(page.getByRole('link', { name: '(3) Mast & Harbour' })).toBeVisible();

    await expect(page.getByRole('link', { name: '(4) Babyhug' })).toBeVisible();

    await expect(page.getByRole('link', { name: '(3) Allen Solly Junior' })).toBeVisible();

    await expect(page.getByRole('link', { name: '(3) Kookie Kids' })).toBeVisible();

    await expect(page.getByRole('link', { name: '(5) Biba' })).toBeVisible();

    await page.getByRole('link', { name: '(5) Madame' }).click();

    await expect(page).toHaveURL('https://automationexercise.com/brand_products/Madame');

    await expect(page.getByText('Sleeveless Dress').first()).toBeVisible();

    await expect(page.getByText('Stylish Dress').first()).toBeVisible();

    await expect(page.getByText('Madame Top For Women').first()).toBeVisible();

    await expect(page.getByText('Rose Pink Embroidered Maxi Dress').first()).toBeVisible();

    await expect(page.getByText('Beautiful Peacock Blue Cotton Linen Saree').first()).toBeVisible();

    await page.getByRole('link', { name: '(3) Allen Solly Junior' }).click();

    await expect(page).toHaveURL('https://automationexercise.com/brand_products/Allen%20Solly%20Junior');

    await expect(page.getByText('Frozen Tops For Kids').first()).toBeVisible();

    await expect(page.getByText('Sleeveless Unicorn Patch Gown - Pink').first()).toBeVisible();

    await expect(page.getByText('Colour Blocked Shirt – Sky Blue').first()).toBeVisible();
});
test('testCase 20', async({page}) =>{
    await page.goto('https://automationexercise.com');

    await expect(page.getByText('FEATURES ITEMS')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Products' }).click();

    await expect(page).toHaveURL('https://automationexercise.com/products');

    await page.getByPlaceholder('Search Product').fill('Blue');

    await page.locator('#submit_search').click();

    await expect(page.getByText('Searched Products')).toBeVisible();

    await expect(page.getByText('Blue Top').first()).toBeVisible();

    await page.getByText('Blue Top').first().hover();

    await page.waitForTimeout(300);

    await page.getByText('Add to cart').nth(1).click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await expect(page.getByText('Sleeves Top and Short - Blue & Pink').first()).toBeVisible();

    await page.getByText('Sleeves Top and Short - Blue & Pink').first().hover();

    await page.waitForTimeout(300);

    await page.getByText('Add to cart').nth(3).click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await expect(page.getByText('Blue Cotton Indie Mickey Dress').first()).toBeVisible();

    await page.getByText('Blue Cotton Indie Mickey Dress').first().hover();

    await page.waitForTimeout(300);

    await page.getByText('Add to cart').nth(5).click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await expect(page.getByText('Colour Blocked Shirt – Sky Blue').first()).toBeVisible();

    await page.getByText('Colour Blocked Shirt – Sky Blue').first().hover();

    await page.waitForTimeout(300);

    await page.locator('div:nth-child(6) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await expect(page.getByText('Grunt Blue Slim Fit Jeans').first()).toBeVisible();

    await page.getByText('Grunt Blue Slim Fit Jeans').first().hover();

    await page.waitForTimeout(300);

    await page.locator('div:nth-child(7) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await expect(page.getByText('Beautiful Peacock Blue Cotton Linen Saree').first()).toBeVisible();

    await page.getByText('Beautiful Peacock Blue Cotton Linen Saree').first().hover();

    await page.waitForTimeout(300);

    await page.locator('div:nth-child(8) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await expect(page.getByText('GRAPHIC DESIGN MEN T SHIRT - BLUE').first()).toBeVisible();

    await page.getByText('GRAPHIC DESIGN MEN T SHIRT - BLUE').first().hover();

    await page.waitForTimeout(300);

    await page.locator('div:nth-child(9) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();

    await expect(page.getByText('Blue Top')).toBeVisible();

    await expect(page.getByText('Sleeves Top and Short - Blue & Pink')).toBeVisible();

    await expect(page.getByText('Blue Cotton Indie Mickey Dress')).toBeVisible();

    await expect(page.getByText('Colour Blocked Shirt – Sky Blue')).toBeVisible();

    await expect(page.getByText('Grunt Blue Slim Fit Jeans')).toBeVisible();

    await expect(page.getByText('Beautiful Peacock Blue Cotton Linen Saree')).toBeVisible();

    await expect(page.getByText('GRAPHIC DESIGN MEN T SHIRT - BLUE')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Signup / Login' }).click();

    await expect(page.getByText('Login to your account')).toBeVisible();

    await page.getByTestId('login-email').fill("testerPlay@yahoo.com");

    await page.getByTestId('login-password').fill("testerPlay");

    await page.getByTestId('login-button').click();

    await expect(page.getByText('Logged in as testerPlay')).toBeVisible();

    await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();

    await expect(page.getByText('Blue Top')).toBeVisible();

    await page.getByRole('row', { name: 'Product Image Blue Top Women' }).locator('.cart_delete > .cart_quantity_delete').click();

    await expect(page.getByText('Sleeves Top and Short - Blue & Pink')).toBeVisible();

    await page.getByRole('row', { name: 'Product Image Sleeves Top and' }).locator('.cart_delete > .cart_quantity_delete').click();

    await expect(page.getByText('Blue Cotton Indie Mickey Dress')).toBeVisible();

    await page.getByRole('row', { name: 'Product Image Blue Cotton' }).locator('.cart_delete > .cart_quantity_delete').click();

    await expect(page.getByText('Colour Blocked Shirt – Sky Blue')).toBeVisible();

    await page.getByRole('row', { name: 'Product Image Colour Blocked' }).locator('.cart_delete > .cart_quantity_delete').click();

    await expect(page.getByText('Grunt Blue Slim Fit Jeans')).toBeVisible();

    await page.getByRole('row', { name: 'Product Image Grunt Blue Slim' }).locator('.cart_delete > .cart_quantity_delete').click();

    await expect(page.getByText('Beautiful Peacock Blue Cotton Linen Saree')).toBeVisible();

    await page.getByRole('row', { name: 'Product Image Beautiful' }).locator('.cart_delete > .cart_quantity_delete').click();

    await expect(page.getByText('GRAPHIC DESIGN MEN T SHIRT - BLUE')).toBeVisible();

    await page.getByRole('row', { name: 'Product Image GRAPHIC DESIGN' }).locator('.cart_delete > .cart_quantity_delete').click();
});