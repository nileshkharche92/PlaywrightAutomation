// @ts-check
const { devices, expect } = require('@playwright/test');
const { timeout } = require('./playwright.config');
const { trace } = require('console');
const config = {
    testDir: './tests',
    timeout: 200 * 1000,
    expect: {
        timeout: 30000
    },
    //We can pass the --reporter=line,allure-playwright  through the cmdline
    reporter: [["line"], ["allure-playwright"],["html"]],
    use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',    //on=>to take screenshot of all steps,only-on-failure=>Takes ss on test failure
        trace: 'retain-on-failure'     //To trace only failed steps,For all step write trace:'on'
    }
};
module.exports = config;