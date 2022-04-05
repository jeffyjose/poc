class SignInScreen {
    get tfEmail() { return $('//XCUIElementTypeTextField[@name="Email_Field"]') }
    get tfPassword() { return $('//XCUIElementTypeSecureTextField[@name="Password_Field"]') }
    get btnSignIn() {return $('id:Sign_In_Button')}
}
module.exports = new SignInScreen();