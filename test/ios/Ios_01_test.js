const introPage = require('../../page/ios/intro.page.js');

describe('iOS - ', () => {

    it('TC_01: ', async () => {
        console.log("Test start");
        await introPage.verifyDisplay();
        await introPage.typeAField("2");
        await introPage.typeBField("8");
        await introPage.clickComputeSumButton();
        await introPage.checkSumField("10");
        await driver.pause(3000);
    })
})