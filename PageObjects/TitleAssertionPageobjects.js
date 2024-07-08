
class TitleAssertionPageobjects {
    constructor(page, expect) {
        this.page = page;
        this.expect = expect;
        this.email = page.locator("#email");
        this.password = page.locator("#password");
        this.actualError = page.locator(".inline-error:has-text('Please provide a valid email address')");
        this.LogInLabel = page.locator("h3:has-text('Log in')");
    }
    async verifyPageTitle(expectedTitle) {
        console.log("Page Title Is " + await this.page.title());
        await this.expect(this.page).toHaveTitle(expectedTitle);
    }

    async openURL(url) {
        // console.log(url);
        // await this.page.pause();
        await this.page.goto(url);
    }

    async verfyloginPage(Email, Password) {
        await this.email.fill(Email);
        await this.password.fill(Password);
        const actualError = await this.actualError.textContent();
        console.log(actualError);
        await this.expect(this.actualError).toContainText('valid');
    }
}
module.exports = { TitleAssertionPageobjects };
