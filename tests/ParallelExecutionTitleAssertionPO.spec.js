const { test, expect } = require('@playwright/test');
const { TitleAssertionPageobjects } = require('../PageObjects/TitleAssertionPageobjects');
const dataset = JSON.parse(JSON.stringify(require('../TestData/TitleAssertionTestData.json')));
//const dataset=require('../tests/utils/TitleAssertionTestData.json');
var titleAssertionPageobjects;

test.describe.configure({mode:'parallel'});//Will execute all the test parallelly with the provided workers in config file 
//test.describe.configure({mode:'serial'});//Will execute all the test serially. 


test('Assert the Title of page', async ({ page }) => {
    titleAssertionPageobjects = new TitleAssertionPageobjects(page,expect);
    await titleAssertionPageobjects.openURL(dataset.url1);
    await titleAssertionPageobjects.verifyPageTitle('Google');

})

test('To get the text and assert', async ({ page }) => {
    titleAssertionPageobjects = new TitleAssertionPageobjects(page,expect);
    await titleAssertionPageobjects.openURL(dataset.url2);
    await titleAssertionPageobjects.verfyloginPage(dataset.Email, dataset.Password);
})