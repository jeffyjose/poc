const start = require('../../screen/android/start.screen.js');
const assert = require('assert'); 

class StartPage {
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