const {test,expect}=require('@playwright/test');
test('To handle Alerts and iFrames',async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// await page.goBack();
// await page.goForward();
const showInput=page.getByPlaceholder("Hide/Show Example");
await expect(showInput).toBeVisible();

await page.locator("#hide-textbox").click();
await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden();

//TO handle alert ,,by js event >>dialog

page.on("dialog",dialog=>dialog.accept()); //Wherever the alert will come playwright will accept it

await page.getByRole('button',{name:"Confirm"}).click();

//To mouse hover
await page.locator("#mousehover").hover();
await page.getByText("Top").click();

//To handles frames
const framePage=await page.frameLocator("iframe-name");
framePage.locator("a[href='practice-project']").first().click();
await expect(framePage.getByText("Join now to Practice")).toBeVisible();

})
