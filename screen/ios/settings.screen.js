class SettingsScreen {
    get lnkAlreadyHaveSubscription() { return $('//XCUIElementTypeButton[@name="Already have a subscription"]') }
    get txtPremiumAccount() { return $('//XCUIElementTypeStaticText[@name="Premium"]') }
    get lnkDeactivateDevice() { return $('//XCUIElementTypeButton[@name="Deactivate this device"]')}
    get btnDeactivate() { return $('//XCUIElementTypeButton[@name="Deactivate"]')}
    get txtFreeAccount() { return $('//XCUIElementTypeStaticText[@name="Free"]') }

}
module.exports = new SettingsScreen();