const{test,expect}=require('@playwright/test');
const { customTest } = require('../TestData/ProvideTestDataByCustomisedFixture');

const { AddToCartPageObject } = require('../PageObjects/AddToCartPageObject');
let addToCartPageObject;
customTest(`Provide the TD by custom Fixture`, async ({page, testData }) => {
    addToCartPageObject = new AddToCartPageObject(page,expect);
   await addToCartPageObject.openURL(testData.URL);
    
   await addToCartPageObject.enterCredentialAndClickOnLogin(testData.Email, testData.Password);
   // addToCartPageObject.clickOnAddToCart(testData.ItemToAddCart);
}
)
