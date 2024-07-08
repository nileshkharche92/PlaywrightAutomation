class AddToCartPageObject {
    constructor(page,expect) {
        this.page = page;
        this.expect=expect;
        this.Email_Input = page.locator("#userEmail");
        this.Password_Input = page.locator("#userPassword");
        this.LoginButton = page.locator("#login");
        this.AllItemsParent=page.locator("div.card-body");
        this.AddToCartButton=page.locator("button>i:has-text(' Add To Cart')");
    }


    getItem()
    {
        return this.AllItemsParent.locator('b');
    }

    async openURL(uRL)
    {
       await  this.page.goto(uRL);

      // await new Promise(resolve => setTimeout(resolve, 5000));
    }
    async enterCredentialAndClickOnLogin(email, password) {
        await this.Email_Input.fill(email);
        await this.Password_Input.fill(password);
        await this.LoginButton.click();

    }

    async clickOnAddToCart(itemToAddCart)
    {
       const ItemsCount= await this.AllItemsParent.count();
       for(let i=0;i<ItemsCount;i++)
        {
           const itemNameLocator= this.AllItemsParent.locator('b').nth(i);
           const itemNamme=await itemNameLocator.textContent();
           if(itemNamme===itemToAddCart)
            {
                await AllItemsParent.locator("button>i:has-text(' Add To Cart')")
              //  await this.AddToCartButton().click();
            }
        }
    }

}
module.exports={AddToCartPageObject};