class PremissionScreen {
    get tvTitle() { return $('//android.widget.TextView[@resource-id="org.malwarebytes.antimalware:id/intro_permission_title"]')}
    get tvIntroTitle() { return $('//android.widget.TextView[@resource-id="org.malwarebytes.antimalware:id/intro_permission_storage_title"]')}
    get tvIntroSubTitle() { return $('//android.widget.TextView[@resource-id="org.malwarebytes.antimalware:id/intro_permission_storage_description"]')}
    get btnGivePermission() { return $('//android.widget.Button[@resource-id="org.malwarebytes.antimalware:id/intro_permission_button"]')}
}
module.exports = new PremissionScreen();