const { test, expect } = require('@playwright/test');
const {TitleAssertionPageobjects}=require('../PageObjects/TitleAssertionPageobjects');
const dataset=JSON.parse(JSON.stringify(require('../TestData/ParameterizationOfTestsTestData.json')));
//dataset as ARRAY
//Will execute the test as no. of array in test data 
let titleAssertionPageobjects;
for(const data of dataset)
    {
test(`To get the text and assert ${data.Email}`,async ({page})=>
{
    titleAssertionPageobjects=new TitleAssertionPageobjects(page,expect);
    await titleAssertionPageobjects. openURL(data.url2);
    await titleAssertionPageobjects.verfyloginPage(data.Email,data.Password);
})
    }
    