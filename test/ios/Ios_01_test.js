const introPage = require('../../page/ios/intro.page.js');
const onboardingPage = require('../../page/ios/onboarding.page.js');
const dashboardPage = require('../../page/ios/dashboard.page.js');
const signInPage = require('../../page/ios/signIn.page.js');
const data = require('../../data/ios/data');
const settingsPage = require('../../page/ios/settings.page.js');

describe('iOS - ', () => {

    it('TC_01: ', async () => {
        console.log("Test start");
        await introPage.verifyDisplay();
        await introPage.typeAField("2");
        await introPage.typeBField("8");
        await introPage.clickComputeSumButton();
        await introPage.checkSumField("10");
        await driver.pause(3000);
    })


    it.only('TC_02: ', async () => {
        console.log("Test MB ios app Signin");
        await driver.pause(3000);
        await onboardingPage.verifyDisplay();
        await onboardingPage.clickSkip();
        await dashboardPage.allowAlertAllowNotification();
        await dashboardPage.clickSettingsButton();
        await settingsPage.clickAlreadyHaveSubscriptionLink();
        await signInPage.signIn(data.signInPage.email, data.signInPage.password);
        await settingsPage.deactivateDevice();
        await driver.pause(3000);  
    })
})