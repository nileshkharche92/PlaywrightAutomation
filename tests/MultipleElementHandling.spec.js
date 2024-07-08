const { test, expect } = require('@playwright/test');

test('Handle Multiple Element', async ({ browser, page }) => {
    //     const browserLaunch = await browser.newContext();
    //     const newPage = await browserLaunch.newPage();
    //    await newPage.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator("#username").fill('nileshkharche@gmail.com');
    await page.locator("#password").fill('nileshkharche@gmail.com');
    await page.locator("input[type$='mit']").click(); // $ declare end with attribute value
    // * indicates contains
    // ^ starts  with

    const ErrorPath = await page.locator("div[style*='block']");
    const actualError = await ErrorPath.textContent(); //To get text 
    console.log("Actual error " + actualError);
    await expect(ErrorPath).toContainText('Incorrect');//To assert text 

    await page.locator("#username").fill(''); //To clear the text ,
    await page.locator("#username").fill('rahulshettyacademy');
    await page.locator("#password").fill('learning');
    await page.locator("label.customradio").nth(1).check(); //To click on radio button 
    await expect(page.locator("label.customradio").nth(1)).toBeChecked(); //Toassert checked or not
    await page.locator("#okayBtn").click();



    await page.locator("input[type$='mit']").click();

    console.log("First Element " + await page.locator('div.card-body h4 a').first().textContent()); //To get first element
    console.log("Last Element " + await page.locator('div.card-body h4 a').last().textContent());
    console.log("Second Element " + await page.locator('div.card-body h4 a').nth(1).textContent());  //To get 2nd element
    await page.waitForLoadState('networkidle');//wait upto all network call doesn't get completed  but it's flicky
    await page.locator('div.card-body h4 a').first().waitFor();
    console.log("All Elements " + await page.locator('div.card-body h4 a').allTextContents());
})

test.only('To handle new page actions', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //to assert blinking the URL
    const blinckURL = page.locator("[href*='documents-request']");
    await expect(blinckURL).toHaveAttribute('class', 'blinkingText'); //To validate the attribute

    const [newPage] = await Promise.all([
        context.waitForEvent('page'), //will wait upto the new event page open in background
        blinckURL.click(), //due to which new page get arise ,has to handle the all Promises
    ]);

    // await Promise.all([
    //     page.waitForNavigation(),//wait upto naviage on another url 
    //     page.locator('').press('Enter')
    // ]);

    //newPage is return type of waitForEvent();
    const Actualtext = await newPage.locator('.im-para.red').textContent();
    console.log(Actualtext);
    await expect(newPage.locator('.im-para.red')).toContainText('Please email us');




}
)