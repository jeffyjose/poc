const intro = require('../../screen/android/privacyPolicy.screen.js');
const assert = require('assert'); 
const data = require('../../data/data');

class PrivacyPolicyPage {

    async verifyDisplay() {
        console.log("IntroScreen - verify Intro Display");
        assert(await intro.tvTitle.waitForExist());
        assert(await intro.tvDescription.isExisting());
        assert(await intro.btnAcceptText.isExisting());
        assert(await intro.btnAccept.isExisting());
        assert.equal(await intro.tvTitle.getText(), data.privacyPolicy.title);
        assert.equal(await intro.btnAcceptText.getText(), data.privacyPolicy.btn);
    }

    async clickGetStartedButton() {
        console.log("IntroScreen - click GetStarted Button");
        await intro.btnAcceptText.click();
    }
}
module.exports = new PrivacyPolicyPage();