import { test, Expect, Page, Locator } from '@playwright/test';

export class TitleAssertionPageobjects {
    page: Page;
    expect: Expect;
    email: Locator;
    password: Locator;
    actualError: Locator;
    LogInLabel: Locator;

    constructor(page: Page, expect:Expect) {
        this.page = page;
        this.expect = expect;
        this.email = page.locator("#email");
        this.password = page.locator("#password");
        this.actualError = page.locator(".inline-error:has-text('Please provide a valid email address')");
        this.LogInLabel = page.locator("h3:has-text('Log in')");
    }
    async verifyPageTitle(expectedTitle: string) {
        console.log("Page Title Is " + await this.page.title());
        await this.expect(this.page).toHaveTitle(expectedTitle);
    }

    async openURL(url: string) {
        // console.log(url);
        // await this.page.pause();
        await this.page.goto(url);
    }

    async verfyloginPage(Email: string, Password: any) {
        await this.email.fill(Email);
        await this.password.fill(Password);
        const actualError = await this.actualError.textContent();
        console.log(actualError);
        await this.expect(this.actualError).toContainText('valid');
    
    }
}

