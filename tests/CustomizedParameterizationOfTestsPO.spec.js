const { test, expect } = require('@playwright/test');
const { TitleAssertionPageobjects } = require('../PageObjects/TitleAssertionPageobjects');
const { customTest } = require('../TestData/ProvideTestDataByCustomisedFixture');
let titleAssertionPageobjects;
    {
    customTest(`To get the text and assert `, async ({ page, testData }) => {
        titleAssertionPageobjects = new TitleAssertionPageobjects(page, expect);
        await titleAssertionPageobjects.openURL(testData.URL);
        await titleAssertionPageobjects.verfyloginPage(testData.Email, testData.Password);
    })
}


