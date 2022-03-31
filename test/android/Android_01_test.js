const introPage = require('../../page/intro.page.js');
const permissionPage = require('../../page/permission.page.js');
const privaccyPolicyPage = require('../../page/android/privacyPolicy.page.js');
const startPage = require('../../page/android/start.page.js');

describe('Android - ', () => {

    it('TC_01: click Get Sterted button', async () => {
        await introPage.verifyDisplay();
        await introPage.clickGetStartedButton(); 
        await permissionPage.verifyDisplay();
        await permissionPage.clickGetStartedButton();
        await driver.pause(3000);
    })

    it.only('Check mew compose app', async () => {
        await startPage.verifyDisplay();
        await startPage.clickOnboardingButton();
        await privaccyPolicyPage.verifyDisplay();
        await privaccyPolicyPage.clickGetStartedButton();
        await driver.pause(3000);
    })
})