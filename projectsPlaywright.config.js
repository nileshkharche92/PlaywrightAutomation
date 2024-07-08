// @ts-check

//Instead of creating multiple config files for use: we can create the projects for same
//if you dont mentioned the which project has to be execute,playwright bydefault will execute the all present projects from the file 

const { devices, expect } = require('@playwright/test');
const { timeout } = require('./playwright.config');
const { trace } = require('console');
const { projects, retries } = require('./playwrightOriginal.config');
const config = {
    testDir: './tests',
    timeout: 150 * 1000,
    retries:2, //To reexecute the no of times after 1st execution 
    workers:2,//To execute the 2 spec at a time in parallel execution
    //Bydefault its 5 workers
    expect: {
        timeout: 10000
    },
    reporter: 'html',
    projects: [
        {
            name: "chrome",
            use: {
                browserName: 'chromium',
                headless: false,
                screenshot: 'on',    //on=>to take screenshot of all steps,only-on-failure=>Takes ss on test failure
                trace: 'retain-on-failure'     //To trace only failed steps,For all step write trace:'on'
            }
        },
        {
            name: "safari",
            use:
            {
                browserName: "webkit",
                headless: false,
                video:'retain-on-failure',//On test failure only
                screenshot: "only-on-failure",
                trace:'on',
                ignoreHttpsErrors:true,//To ignore httsps errors like ssl
                permissions:['geolocation'],//to provide the location
                // ...devices:['iphone11']
               //viewport:{width:700,height:700}// To set the browser dimensions
            }
        }]
        //To execute the particular project 
        //npx playwright test specName.spec.js --config configFileName.js --project=projectName
};
module.exports = config;