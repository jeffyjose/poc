let start;
const assert = require('assert');

class StartPage {
    constructor() {
        console.log(browser.capabilities.platformName);
        switch(browser.capabilities.platformName){
           case "Android": start = require('../../screen/android/start.screen.js'); break;
           case "iOS": start = require('../../screen/ios/start.screen.js'); break;
        }
    }

    async verifyDisplay() {
        console.log("Start - verify Intro Display");
        assert(await start.btnDesignLibrary.waitForExist());
        assert(await start.btnDashboard.isExisting());
        assert(await start.btnOnboarding.isExisting());
    }

    async clickOnboardingButton() {
        console.log("Start - click GetStarted Button");
        await start.btnOnboarding.click();
    }
}
module.exports = new StartPage();