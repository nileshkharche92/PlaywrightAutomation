const { test, request } = require('@playwright/test');
const apiLoginPayload = { userEmail: "nileshkharche92@gmail.com", userPassword: "Shriguru@123" };
let loginToken;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiResponse=await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: apiLoginPayload
        }
    );
    const apiResponseJson=await apiResponse.json();
    loginToken=apiResponseJson.token;
    console.log(apiResponseJson.token);
})

test('homepage by API calls',async ({page})=>
{
   await page.addInitScript(value=>
        {
            window.localStorage.setItem(token,value)
        },loginToken
    );
})