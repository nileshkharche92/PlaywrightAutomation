//import { AddToCartPageObject } from "./AddToCartPageObject";
const{AddToCartPageObject}=require("./AddToCartPageObject");
const { TitleAssertionPageobjects } = require('./TitleAssertionPageobjects');
const {AmazonLogInPageObject}=require('../PageObjects/AmazonLogInPageObject');

class POManager {
    constructor(page, expect) {
        this.page = page;
        this.expect = expect;
        this.titleAssertionPageobjects = new TitleAssertionPageobjects(this.page, this.expect);
        this.addToCartPageObject = new AddToCartPageObject(this.page,this.expect);
        this.amazonLogInPageObject=new AmazonLogInPageObject(this.page);
    }

    getTitleAssertionPageobjects()
    {
        return this.titleAssertionPageobjects;
    }

    getAddToCartPageObject()
    {
        return this.addToCartPageObject;
    }

    getAmazonLogInPageObject()
    {
        return this.amazonLogInPageObject;
    }
}
module.exports= {POManager};