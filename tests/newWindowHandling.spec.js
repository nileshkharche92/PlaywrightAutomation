const {test,expect}=require('@playwright/test');

test("new window handling", async ({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
    const blinckURL = page.locator("[href*='documents-request']");
    await expect(blinckURL).toHaveAttribute('class', 'blinkingText'); //To validate the attribute

    const [newPage] = await Promise.all([   
        context.waitForEvent('page'), //will wait upto the new event page open in background
        blinckURL.click(), //due to which new page get arise ,has to handle the all Promises
        //if after click multiple window open use there return types
    ]);
    const redResponse=newPage.locator('.red').first();
    expect(redResponse).toContainText("Please email us at ");

})