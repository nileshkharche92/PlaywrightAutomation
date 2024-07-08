const { test, expect } = require('@playwright/test');
// const { TitleAssertionPageobjects } = require('../PageObjects/TitleAssertionPageobjects');
const { POManager } = require('../PageObjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../TestData/TitleAssertionTestData.json')));
//const dataset=require('../tests/utils/TitleAssertionTestData.json');
let pOManager;

test('Assert the Title of page', async ({ page }) => {
    pOManager = new POManager(page, expect);
    // titleAssertionPageobjects = new TitleAssertionPageobjects(page,expect);
    await pOManager.getTitleAssertionPageobjects().openURL(dataset.url1);
    await pOManager.getTitleAssertionPageobjects().verifyPageTitle('Google');

})

test('To get the text and assert', async ({ page }) => {
    pOManager = new POManager(page, expect);
    // titleAssertionPageobjects = new TitleAssertionPageobjects(page,expect);
    await pOManager.getTitleAssertionPageobjects().openURL(dataset.url2);
    await pOManager.getTitleAssertionPageobjects().verfyloginPage(dataset.Email, dataset.Password);
})