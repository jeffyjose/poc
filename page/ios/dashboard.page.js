const dashboardScreen = require('../../screen/ios/dashboard.screen.js');
const assert = require('assert');
const signInScreen = require('../../screen/ios/signIn.screen.js');
const settingsScreen = require('../../screen/ios/settings.screen.js');

class DashboardPage {

    async allowAlertAllowNotification() {
        console.log("Dashboard - Allow Notification alert");
        if (await dashboardScreen.alertAllowNotification.isExisting()) {
            await browser.acceptAlert();
        }
    }

    async clickAlertRating() {
        console.log("Dashboard - Click 'Not now'for Rating alert");
        if (await dashboardScreen.alertRating.isExisting()) {
            await  dashboardScreen.alertRating.click();
        }
    }


    async clickSettingsButton() {
        console.log("Dashboard - click Settings button");
        assert(await dashboardScreen.lblMalwarebytesFree.waitForExist());
        console.log("Dashboard - User got navigated to Dashboard screen");
        await dashboardScreen.btnSettings.click();
        assert (await settingsScreen.lnkAlreadyHaveSubscription.isExisting());
        console.log("Dashboard - User got navigated to Settings screen");
    }

    async clickAlreadyHaveSubscriptionLink() {
        console.log("Dashboard - click Already have a Subscription Link");
        await settingsScreen.lnkAlreadyHaveSubscription.click();
        assert(await signInScreen.tfEmail.isExisting());
        console.log("User got navigated to Sign In screen");
    }


}
module.exports = new DashboardPage();