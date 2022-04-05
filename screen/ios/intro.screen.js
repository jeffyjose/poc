class IntroScreen {
    get etAField() { return $('//XCUIElementTypeTextField[@name="IntegerA"]')}
    get etBField() { return $('//XCUIElementTypeTextField[@name="IntegerB"]')}
    get btnComputeSum() { return $('//XCUIElementTypeButton[@name="ComputeSumButton"]')}
    get tvSumResult() { return $('//XCUIElementTypeStaticText[@name="Answer"]')}
    get btnSkip() { return $('//XCUIElementTypeButton[@name="Skip"]')}
    get lblMalwarebytesFree() { return $('//XCUIElementTypeNavigationBar[@name="Malwarebytes FREE"]')}
}
module.exports = new IntroScreen();