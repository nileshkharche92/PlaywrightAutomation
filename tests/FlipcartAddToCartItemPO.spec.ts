import {test,expect} from '@playwright/test';
import {POManager} from '../PageObjects_ts/POManager';

const testData=require('../TestData/FlipcartAddToCartItem.json');
let pOManager:POManager;
test('Add To Cart by TS',async ({page,browser})=>{

  pOManager  =new POManager(page,expect,browser);

  await pOManager.getflipcartAddToCartItemPageObject().openURL(testData.URL);
  await pOManager.getflipcartAddToCartItemPageObject().searchIntoSerachBox(testData.ItemSearch,testData.ItemToSelect);
  await pOManager.getflipcartAddToCartItemPageObject().clickOnSelectedItem(testData.ItemAfterSelection,page,browser.newContext());
})
