const { test, expect } = require('@playwright/test');

test('Intercepting Network by routecontinue', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('nileshkharche92@gmail.com');
    await page.locator('#userPassword').fill('Shriguru@123');
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    await page.locator("button[routerlink*='myorders']").click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route=>route.continue({url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=bnxjj283839'}) //u can intercept url,headers etc
    )
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
 

}
)