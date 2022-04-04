const privaccyPolicyPage = require('../../page/android/privacyPolicy.page.js');
const startPage = require('../../page/android/start.page.js');

describe('Android - ', () => {

    it('Check mew compose app', async () => {
        await startPage.verifyDisplay();
        await startPage.clickOnboardingButton();
        await privaccyPolicyPage.verifyDisplay();
        await privaccyPolicyPage.clickGetStartedButton();
        await driver.pause(3000);
    })
})