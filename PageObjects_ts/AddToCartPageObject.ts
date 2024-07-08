import { test, Expect, Page, Locator } from '@playwright/test';
export class AddToCartPageObject {
    page: Page;
    expect: Expect;
    Email_Input: Locator;
    Password_Input: Locator;
    LoginButton: Locator;
    AllItemsParent: Locator;
    AddToCartButton: Locator;

    constructor(page: Page, expect) {
        this.page = page;
        this.expect = expect;
        this.Email_Input = page.locator("#userEmail");
        this.Password_Input = page.locator("#userPassword");
        this.LoginButton = page.locator("#login");
        this.AllItemsParent = page.locator("div.card-body");
        this.AddToCartButton = page.locator("button>i:has-text(' Add To Cart')");
    }


    getItem(): Locator {
        return this.AllItemsParent.locator('b');
    }

    async openURL(uRL:string) {
        console.log("URL is "+uRL);
        await this.page.goto(uRL);
    }
    async enterCredentialAndClickOnLogin(email: string, password: string) {
        await this.Email_Input.fill(email);
        await this.Password_Input.fill(password);
        await this.LoginButton.click();

    }

    async clickOnAddToCart(itemToAddCart: string) {
        let ItemsCount: any;
        ItemsCount = await this.AllItemsParent.count();
        for (let i = 0; i < ItemsCount; i++) {
            let itemNameLocator: Locator;
            itemNameLocator = this.AllItemsParent.locator('b').nth(i);
            const itemNamme: any = await itemNameLocator.textContent();
            if (itemNamme === itemToAddCart) {
                await this.AllItemsParent.locator("button>i:has-text(' Add To Cart')")
                //  await this.AddToCartButton().click();
            }
        }
    }

}
