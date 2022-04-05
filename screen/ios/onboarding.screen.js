class OnboardingScreen {
    get btnAlreadyHaveSubscription() { return $('id:Already_Have_A_Subsccription_Button' ) }
    get btnSkip() { return $('//XCUIElementTypeButton[@name="Skip_Button"]')}
    get lblMalwarebytesFree() { return $('//XCUIElementTypeNavigationBar[@name="Malwarebytes FREE"]')}
}
module.exports = new OnboardingScreen();