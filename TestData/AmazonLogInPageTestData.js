const base=require('@playwright/test');

exports.customeAmazonData=base.test.extend({
    AmazonTestData:{
        URL:"https://www.amazon.com/",
        Email:"kharchenilesh65@gmail.com",
        Pass:"Abhi0jit12#"

    }
})