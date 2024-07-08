const base = require('@playwright/test');

    //extend the base with test
    exports.customTest = base.test.extend({
        //We can only use single data object like testData .
        testData: {
            URL: "https://sso.teachable.com/secure/9521/identity/login/password",
            Email: "nileshkharche92",
            Password: "Shriguru@123",
            ItemToAddCart: "ADIDAS ORIGINAL"
        }
    })

