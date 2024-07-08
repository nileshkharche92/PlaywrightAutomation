const {test,expect}=require('@playwright/test');

test('Assignment Practice upto multiple element handling',async ({page})=>
{
    await page.goto('https://rahulshettyacademy.com/client');
await page.locator("a.text-reset").click();
await page.locator("#firstName").fill('Nilesh');
await page.locator("#lastName").fill("Kharche");
await page.locator("#userEmail").fill('nileshkharche92@gmail.com');
await page.locator("#userMobile").fill("8788264585");
//await page.locator("select[class*='custom-select']").click();
//await page.locator("select[class*='custom-select']>option[value*='3']").click();


await page.locator("select[class*='custom-select']").selectOption('Engineeer');   //To select dropdown

await page.locator("#[type='radio']").first().click();
await page.locator("#userPassword").fill('Shriguru@123');
await page.locator("#confirmPassword").fill("Shriguru@123");
await page.locator("#[type='checkbox']").click();
await page.locator("#login").click();



})