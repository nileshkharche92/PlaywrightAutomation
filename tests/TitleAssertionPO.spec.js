import { test, expect } from '@playwright/test';
import TitleAssertionPageobjects from '../PageObjects_ts/TitleAssertionPageobjects';
const dataset = JSON.parse(JSON.stringify(require('../TestData/TitleAssertionTestData.json')));
var titleAssertionPageobjects;

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