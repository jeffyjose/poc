const onboardingScreen = require('../../screen/ios/onboarding.screen.js');
const dashboardScreen = require('../../screen/ios/dashboard.screen.js');
const assert = require('assert');

class OnboardingPage {

    async verifyDisplay() {
        console.log("Onboarding - verify Onboarding Display");
        assert(await onboardingScreen.btnSkip.waitForExist());
        assert(await onboardingScreen.btnAlreadyHaveSubscription.isExisting());
       
    }

    async clickSkip() {
        console.log("Onboarding - click Skip button");
        await onboardingScreen.btnSkip.click();
        
    }

    async clickAlreadyHaveSubscription() {
        console.log("Onboarding - click Already have subscription button");
        await onboardingScreen.btnAlreadyHaveSubscription.click();
        
    }
}
module.exports = new OnboardingPage();