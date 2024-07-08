import { test, expect} from '@playwright/test';
import { POManager } from '../PageObjects_ts/POManager';
const dataset = JSON.parse(JSON.stringify(require('../TestData/TitleAssertionTestData.json')));
//const dataset=require('../tests/utils/TitleAssertionTestData.json');
let pOManager:POManager;

test('Assert the Title of page', async ({ browser,page }) => {
    pOManager = new POManager(page, expect,browser);
    // titleAssertionPageobjects = new TitleAssertionPageobjects(page,expect);
    await pOManager.getTitleAssertionPageobjects().openURL(dataset.url1);
    await pOManager.getTitleAssertionPageobjects().verifyPageTitle('Google');

})

test.only('To get the text and assert', async ({ browser,page }) => {
    pOManager = new POManager(page, expect,browser);
    // titleAssertionPageobjects = new TitleAssertionPageobjects(page,expect);
    await pOManager.getTitleAssertionPageobjects().openURL(dataset.url2);
    await pOManager.getTitleAssertionPageobjects().verfyloginPage(dataset.Email, dataset.Password);
})