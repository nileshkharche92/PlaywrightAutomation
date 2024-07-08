import {test as baseTest} from '@playwright/test';

interface AmazonTestData{
    URL:string;
    Email:string;
    Pass:string;

};

export const CustomeAmazonData=baseTest.extend<{amazonTestData:AmazonTestData}>({
    amazonTestData:{
        URL:"https://www.amazon.com/",
        Email:"kharchenilesh65@gmail.com",
        Pass:"Abhi0jit12#"

    }
})