class DashboardScreen {
    get lblMalwarebytesFree() { return $('//XCUIElementTypeNavigationBar[@name="Malwarebytes FREE"]')}
    get btnSettings() { return $('//XCUIElementTypeNavigationBar[@name="Malwarebytes FREE"]/XCUIElementTypeButton')}
    get alertAllowNotification() { return $('//XCUIElementTypeAlert[@name="“Malwarebytes” Would Like to Send You Notifications"]')}
    get alertRating() { return $('//XCUIElementTypeButton[@name="Not Now"]')}
}
module.exports = new DashboardScreen();