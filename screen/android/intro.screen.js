class IntroScreen {
    get ivIntro() { return $('//android.widget.ImageView[@resource-id="org.malwarebytes.antimalware:id/intro_image"]')}
    get tvTitle() { return $('//android.widget.TextView[@resource-id="org.malwarebytes.antimalware:id/intro_title"]')}
    get tvSubTitle() { return $('//android.widget.TextView[@resource-id="org.malwarebytes.antimalware:id/intro_subtitle"]')}
    get btnGetStarted(){ return $('//android.widget.Button[@resource-id="org.malwarebytes.antimalware:id/intro_button"]')}
}
module.exports = new IntroScreen();
