import { test, chromium } from '@playwright/test';
const data = JSON.parse(JSON.stringify(require('../TestData/SameObjectWithMultipleTestData.json'))) as Record<string,any>;
//import data from "../TestData/SameObjectWithMultipleTestData.json"
test.only('To fetch the test data from multiple objects', async () => {
    const browser = await chromium.launch();//Provide the environment to browser
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(data['first'].URL)  //data.first.url


}
)