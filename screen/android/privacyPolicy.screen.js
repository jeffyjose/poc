class PrivacyPolicyScreen {
    get tvTitle() { return $('//android.view.View[@content-desc="we_take_your_privacy_seriously"]')}
    get tvDescription() { return $('//android.view.View[@content-desc="privacy_policy_text"]')}
    get btnAcceptText() { return $('//android.view.View[@content-desc="accept_button_text"]')}
    get btnAccept() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View[2]')}
}
module.exports = new PrivacyPolicyScreen();

