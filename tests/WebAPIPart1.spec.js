const { test, expect, request } = require('@playwright/test');
const APIUtils = require('./utils/APIUtils');

const logInPayLoad = { userEmail: "nileshkharche92@gmail.com", userPassword: "Shriguru@123" };
const orderIDPayload = {};
let loginToken;
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const aPIUtils = new APIUtils(apiContext);
    loginToken =aPIUtils.getToken(logInPayLoad);
})

test('To login with the playwright api ', async ({ page }) => {
    page.addInitScript(value => {
        window.localStorage.setItem("token", value)
    }, loginToken //argument to provide 
    )

    await page.goto("https://rahulshettyacademy.com/client");
    const products = page.locator(".card-body b");
    await products.first().isVisible();
})