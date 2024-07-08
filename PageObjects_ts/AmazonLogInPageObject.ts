import {test,Page,Expect,Locator} from "@playwright/test";
export class AmazonLogInPageObject {
page:Page;
expect:Expect;
AccountAndList:Locator;
SignInButton:Locator;
EmailOrMobileNumber:Locator;
continueButton:Locator;
Password:Locator;

    constructor(page:Page) {
        this.page = page;
       // this.expect = expect;
        this.AccountAndList = this.page.locator("span:has-text('Hello, sign in')");
        this.SignInButton = this.page.locator("span:has-text('Sign in')").first();
        this.EmailOrMobileNumber = this.page.locator("#ap_email");
        this.continueButton = this.page.locator("input#continue");
        this.Password = this.page.locator("#ap_password");

    }

    async openURL(url:string) {
        await this.page.goto(url);
    }
    
    async logInWithEmail(email:string, pass:string) {
        await this.AccountAndList.hover();
        await this.SignInButton.click();
        await this.EmailOrMobileNumber.fill(email);
        await this.continueButton.click();
        await this.Password.fill(pass);
        console.log("Entered the password");
    }
}
