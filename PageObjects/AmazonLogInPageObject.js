class AmazonLogInPageObject {

    constructor(page) {
        this.page = page;
        // this.expect = expect;
        this.AccountAndList = this.page.locator("span:has-text('Hello, sign in')");
        this.SignInButton = this.page.locator("span:has-text('Sign in')").first();
        this.EmailOrMobileNumber = this.page.locator("#ap_email");
        this.continueButton = this.page.locator("input#continue");
        this.Password = this.page.locator("#ap_password");

    }

    async openURL(url) {
        await this.page.goto(url);
    }
    
    async logInWithEmail(email, pass) {
        await this.AccountAndList.hover();
        await this.SignInButton.click();
        await this.EmailOrMobileNumber.fill(email);
        await this.continueButton.click();
        await this.Password.fill(pass);
        console.log("Entered the password");
    }
}
module.exports = { AmazonLogInPageObject };