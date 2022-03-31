class StartScreen {
    get btnDesignLibrary() { return $('//android.widget.Button[@resource-id="org.malwarebytes.antimalware:id/designLibraryButton"]')}
    get btnOnboarding() { return $('//android.widget.Button[@resource-id="org.malwarebytes.antimalware:id/onboardingButton"]')}
    get btnDashboard() { return $('//android.widget.Button[@resource-id="org.malwarebytes.antimalware:id/dashboardButton"]')}
}
module.exports = new StartScreen();