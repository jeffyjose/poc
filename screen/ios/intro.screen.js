class IntroScreen {
    get etAField() { return $('//XCUIElementTypeTextField[@name="IntegerA"]')}
    get etBField() { return $('//XCUIElementTypeTextField[@name="IntegerB"]')}
    get btnComputeSum() { return $('//XCUIElementTypeButton[@name="ComputeSumButton"]')}
    get tvSumResult() { return $('//XCUIElementTypeStaticText[@name="Answer"]')}
}
module.exports = new IntroScreen();