import {expect} from '@playwright/test';

import {CustomeAmazonData} from '../TestData/AmazonLoginPageTestDataCustomisedFixture';
import  { POManager } from '../PageObjects_ts/POManager';
let pOManager:POManager;
CustomeAmazonData(`LogIn to Amazon `, async ({ page,browser, amazonTestData }) => {
    pOManager = new POManager(page, expect,browser);
    
    await pOManager.getAmazonLogInPageObject().openURL(amazonTestData.URL);
    await pOManager.getAmazonLogInPageObject().logInWithEmail(amazonTestData.Email,amazonTestData.Pass);
}
)