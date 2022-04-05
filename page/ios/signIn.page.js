const signInScreen = require('../../screen/ios/signIn.screen.js');
const assert = require('assert');
const settingsScreen = require('../../screen/ios/settings.screen.js');

class SignInPage {

    async signIn(email, password) {
        console.log("Sign In - Enter valid username and password");
        await signInScreen.tfEmail.clearValue();
        await signInScreen.tfEmail.setValue(email);
        await signInScreen.tfPassword.clearValue();
        await signInScreen.tfPassword.setValue(password);
        await signInScreen.btnSignIn.click();
        assert(await settingsScreen.txtPremiumAccount.waitForExist());
        console.log("Sign In - User upgraded to Premium version");
    }
}
module.exports = new SignInPage();