const permissionScreen = require('../screen/android/permission.screen.js');
const data = require('../data/data');
const assert = require('assert'); 

class PermissionPage {

    async verifyDisplay() {
        console.log("Permission screen - verify Intro Display");
        assert(await permissionScreen.tvTitle.waitForExist());
        assert(await permissionScreen.tvIntroTitle.isExisting());
        assert(await permissionScreen.tvIntroSubTitle.isExisting());
        assert(await permissionScreen.btnGivePermission.isExisting());
        assert.equal(await permissionScreen.tvTitle.getText(), data.permissionPage.title);
        assert.equal(await permissionScreen.tvIntroTitle.getText(), data.permissionPage.introTitle);
        assert.equal(await permissionScreen.tvIntroSubTitle.getText(), data.permissionPage.introSubTitle);
        assert.equal(await permissionScreen.btnGivePermission.getText(), data.permissionPage.btn);
    }

    async clickGetStartedButton() {
        console.log("Permission screen  - click Give permission button");
        await permissionScreen.btnGivePermission.click();
    }
}
module.exports = new PermissionPage();