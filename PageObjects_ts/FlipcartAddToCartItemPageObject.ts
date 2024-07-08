import { test, Page, Expect, Locator, Browser } from '@playwright/test';

export class FlipcartAddToCartItemPageObject {
    page: Page;
    expect: Expect;
    searchBox: Locator;
    searchItemsOptions: Locator;
    selectedOptions: Locator;
    addToCartButton: Locator;
    browser: Browser

    constructor(page: Page, expect: Expect, browser: Browser) {
        this.browser = browser;
        this.page = page;
        this.expect = expect;
        this.searchBox = this.page.getByPlaceholder("Search for Products, Brands and More");
        this.searchItemsOptions = this.page.locator("div.YGcVZO");
        this.selectedOptions = this.page.locator("div.KzDlHZ");
        this.addToCartButton = this.page.locator("button.In9uk2");

    }

    async openURL(uRL: string) {
        console.log("URL is " + uRL);
        await this.page.goto(uRL);
    }

    async searchIntoSerachBox(ItemSearch: string, ItemToSelect: string) {
        //await this.searchBox.fill(ItemToSearch);
        await this.searchBox.pressSequentially(ItemSearch, { delay: 100 });
        await this.page.waitForTimeout(5000);
        await this.searchItemsOptions.first().waitFor();
        const searchItems: Locator = await this.searchItemsOptions;
        const counts: number = await this.searchItemsOptions.count();
        console.log('No od items are ' + counts);
        for (let i = 0; i < counts; i++) {
            if (await searchItems.nth(i).textContent() === ItemToSelect) {
                {
                    searchItems.nth(i).click();
                    break;
                }
            }
        }
    }

    async clickOnSelectedItem(ItemAfterSelection: string, page: Page, context: any) {
        await this.selectedOptions.first().waitFor();
        const counts: any = await this.selectedOptions.count();
        let newPage: any;
        for (let j = 0; j < counts; j++) {
            if (await this.selectedOptions.nth(j).textContent() === ItemAfterSelection) {
                {
                    //    const [newPage]=await Promise.all(
                    //         [
                    //     context.waitForEvent('page'),
                    //     this.selectedOptions.nth(j).click(),
                    //         ]
                    // )
                    //  const pagePromise = context.waitForEvent('page');
                    this.selectedOptions.nth(j).click();
                    //   newPage = await pagePromise;
                    await this.page.waitForTimeout(10000);
                }

            }
        }

    }

    async clickOnAddToCart()
    {
        await this.addToCartButton.click();
        
    }
}