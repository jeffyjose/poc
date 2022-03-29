const introScreen = require('../screen/android/intro.screen.js');
const data = require('../data/data');
const assert = require('assert'); 

class IntroPage {

    async verifyDisplay() {
        console.log("IntroScreen - verify Intro Display");
        assert(await introScreen.ivIntro.waitForExist());
        assert(await introScreen.tvTitle.isExisting());
        assert(await introScreen.tvSubTitle.isExisting());
        assert(await introScreen.btnGetStarted.isExisting());
        assert.equal(await introScreen.tvTitle.getText(), data.introPage.title);
        assert.equal(await introScreen.tvSubTitle.getText(), data.introPage.subTitle);
        assert.equal(await introScreen.btnGetStarted.getText(), data.introPage.btn);
    }

    async clickGetStartedButton() {
        console.log("IntroScreen - click GetStarted Button");
        await introScreen.btnGetStarted.click();
    }
}
module.exports = new IntroPage();