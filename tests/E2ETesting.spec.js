const { test, expect } = require('@playwright/test');

test('E2E testing practice', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill('nileshkharche92@gmail.com');
    await page.locator('#userPassword').fill('Shriguru@123');
    await page.locator("#login").click();

    //To select the particular element from multiple elements
    const products = page.locator(".card-body b");
    await products.first().isVisible();
    const productCounts = await products.count();
   
    for (let i = 0; i < productCounts; i++) {
        const productName = await products.nth(i).textContent();
        if (productName.includes("ZARA")) {
            await products.locator("button.btn.w-10.rounded").click();
            break;
        }
    }

    await page.locator("button[routerlink$='cart']").click();
    await page.locator("ul li").first().waitFor();
    const bool = await page.locator('h3:has-text("ZARA COAT 3")').isVisible();  //has-text is psedo class to locate which provided by cypress.
    await expect(bool).toBeTruthy();  //To assert result is true or not
    await page.locator("text=Checkout").click();

    //To handle dynamic dropdown
    //await page.locator("[placeholder='Select Country']").fill('Ind'); //It will enter the text withouit any delay which tends to options may not get appear
    await page.locator("[placeholder='Select Country']").pressSequentially('Ind',{delay:100}); //Will enter the char with delay of 100ms.

    const dropdownOptions=page.locator('section.ta-results >button');
    const optionsCount=await dropdownOptions.count();
// for(const x of dropdownOptions)
//     {
//         x.textContent
//     }
    for(let j=0;j<optionsCount;j++)
        {
           const optionValue= await dropdownOptions.nth(j).textContent();
           if(optionValue==" India")
            {
               await  dropdownOptions.nth(j).click();
               break;
            }
        }


})