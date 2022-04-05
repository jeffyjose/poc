const dashboardScreen = require('../../screen/ios/dashboard.screen.js');
const assert = require('assert');
const signInScreen = require('../../screen/ios/signIn.screen.js');
const settingsScreen = require('../../screen/ios/settings.screen.js');

class SettingsPage {

    async clickAlreadyHaveSubscriptionLink() {
        console.log("Settings - click Already have a Subscription Link");
        await settingsScreen.lnkAlreadyHaveSubscription.click();
        assert(await signInScreen.tfEmail.isExisting());
        console.log("Settings - User got navigated to Sign In screen");
    }

    async deactivateDevice() {
        console.log("Settings - click Deactive this device link");
        assert(await settingsScreen.lnkDeactivateDevice.waitForExist());
        await settingsScreen.lnkDeactivateDevice.click();
        assert(await settingsScreen.btnDeactivate.waitForExist());
        await settingsScreen.btnDeactivate.click();
        assert(await settingsScreen.txtFreeAccount.waitForExist());
        console.log("Settings - User got deactivated");
    }
}
module.exports = new SettingsPage();