const {test}=require('@playwright/test'); 
test('Launch browser and URL ',async ({browser})=>
{
const context=await browser.newContext(); //To launch new browser without any cookies,proxies
const page=await context.newPage();// To create the new page
page.goto('https://rahulshettyacademy.com/');
})

test('launch browser page without browser fixture',async({page})=>
{
    await page.goto('https://www.google.com/');
})

//to execute the particular test we have to write test.only annotation.