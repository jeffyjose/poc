const intro = require('../../screen/ios/intro.screen.js');
const assert = require('assert');

class IntroPage {

    async verifyDisplay() {
        console.log("Intro - verify Intro Display");
        assert(await intro.etAField.waitForExist());
        assert(await intro.etBField.isExisting());
        assert(await intro.btnComputeSum.isExisting());
        assert(await intro.tvSumResult.isExisting());
    }

    async clickComputeSumButton() {
        console.log("Intro - click Compute Sum Button");
        await intro.btnComputeSum.click();
    }

    async typeAField(int) {
        console.log("Intro - type value to A filed: " + int);
        await intro.etAField.clearValue()
        await intro.etAField.setValue(int);
        assert.equal(await intro.etAField.getValue(), int);
    }

    async typeBField(int) {
        console.log("Intro - type value to A filed: " + int);
        await intro.etBField.clearValue()
        await intro.etBField.setValue(int);
        assert.equal(await intro.etBField.getValue(), int);
    }

    async checkSumField(int) {
        console.log("Intro - check that sum filed is: " + int);
        assert.equal(await intro.tvSumResult.getValue(), int);
    }

}
module.exports = new IntroPage();