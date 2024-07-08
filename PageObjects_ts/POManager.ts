import {Page,Expect,Browser} from "@playwright/test";
import { TitleAssertionPageobjects } from "./TitleAssertionPageobjects";
import { AddToCartPageObject } from "./AddToCartPageObject";
import {AmazonLogInPageObject} from '../PageObjects_ts/AmazonLogInPageObject';
import {FlipcartAddToCartItemPageObject} from '../PageObjects_ts/FlipcartAddToCartItemPageObject';

export class POManager {
    page :Page;
    expect:Expect;
    browser:Browser;
    titleAssertionPageobjects:TitleAssertionPageobjects;
    addToCartPageObject:AddToCartPageObject;
    amazonLogInPageObject:AmazonLogInPageObject;
    flipcartAddToCartItemPageObject:FlipcartAddToCartItemPageObject;
    constructor(page:Page, expect:Expect,browser:Browser) {
        this.page = page;
        this.expect = expect;
        this.browser=browser;
        this.titleAssertionPageobjects = new TitleAssertionPageobjects(this.page, this.expect);
        this.addToCartPageObject = new AddToCartPageObject(this.page,this.expect);
        this.amazonLogInPageObject=new AmazonLogInPageObject(this.page);
        this.flipcartAddToCartItemPageObject=new FlipcartAddToCartItemPageObject(this.page,this.expect,this.browser);
    }

    getTitleAssertionPageobjects():TitleAssertionPageobjects
    {
        return this.titleAssertionPageobjects;
    }

    getAddToCartPageObject():AddToCartPageObject
    {
        return this.addToCartPageObject;
    }

    getAmazonLogInPageObject():AmazonLogInPageObject{
        return this.amazonLogInPageObject;
    }

    getflipcartAddToCartItemPageObject():FlipcartAddToCartItemPageObject{
        return this.flipcartAddToCartItemPageObject;
    }
}
