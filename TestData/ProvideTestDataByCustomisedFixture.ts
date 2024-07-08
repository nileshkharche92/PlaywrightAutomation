import {test as baseTest} from '@playwright/test';
 
interface TestData {
    URL: string;
    Email: string;
    Password: string;
    ItemToAddCart: string;
};

    export const customTest = baseTest.extend<{testData:TestData}>({
        //We can only use single data object like testData .
        testData: {
            URL: "https://sso.teachable.com/secure/9521/identity/login/password",
            Email: "nileshkharche92",
            Password: "Shriguru@123",
            ItemToAddCart: "ADIDAS ORIGINAL"
        }
    })

