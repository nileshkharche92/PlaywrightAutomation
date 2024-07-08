const { test, expect, request } = require('@playwright/test');
let newWebContext;
test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('nileshkharche92@gmail.com');
    await page.locator('#userPassword').fill('Shriguru@123');
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');   //to wait for all network to load
    await context.storageState({ path: 'State.json' });//Storage all the local,session,cookies storage into the created State json file
    newWebContext = await browser.newContext({ storageState: 'State.json' });
})

test('To login with the playwright api ', async () => {
    const page2 = await newWebContext.newPage();
    await page2.goto("https://rahulshettyacademy.com/client");
    const products = page2.locator(".card-body b");
    await products.first().isVisible();
})