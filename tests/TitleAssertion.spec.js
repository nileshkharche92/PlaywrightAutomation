const { test, expect } = require('@playwright/test');

test('Assert the Title of page', async ({ page }) => {
    await page.goto('https://www.google.com/');
    console.log("Page Title Is " + await page.title());
    await expect(page).toHaveTitle('Google');

})

test.only('To get the text and assert',async ({page})=>
{
    await page.goto('https://sso.teachable.com/secure/9521/identity/login/password');
    await page.locator("#email").fill('nilKharche');
    await page.locator("#password").fill('nilKharche');
    const actError=await page.locator(".inline-error:has-text('Please provide a valid email address')").textContent();
    console.log('Actual error '+actError);
    await expect(page.locator(".inline-error:has-text('Please provide a valid email address')")).toContainText('valid email');
})