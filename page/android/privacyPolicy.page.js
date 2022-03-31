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

        console.log(`Button Accept - isExisting: ${await intro.btnAccept.isExisting()}`)
        console.log(`Button Accept - isDisplayed: ${await intro.btnAccept.isDisplayed()}`)
        console.log(`Button Accept - isEnabled: ${await intro.btnAccept.isEnabled()}`)
       //  console.log(`Button Accept - isClickable: ${await intro.btnAcceptText.isClickable()}`) FAIL ??
        console.log(`Button Accept - getText: ${await intro.btnAccept.getText()}`)
    }

    async clickGetStartedButton() {
        console.log("IntroScreen - click GetStarted Button");
        await intro.btnAcceptText.click();
    }
}
module.exports = new PrivacyPolicyPage();