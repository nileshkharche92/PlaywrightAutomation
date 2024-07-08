const {expect} = require('@playwright/test');

const {customeAmazonData} = require('../TestData/AmazonLogInPageTestData');
const { POManager } = require('../PageObjects/POManager');
let pOManager;
customeAmazonData(`LogIn to Amazon `, async ({ page, AmazonTestData }) => {
    pOManager = new POManager(page, expect);
    
    await pOManager.getAmazonLogInPageObject().openURL(AmazonTestData.URL);
    await pOManager.getAmazonLogInPageObject().logInWithEmail(AmazonTestData.Email,AmazonTestData.Pass);
}
)