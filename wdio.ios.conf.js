let {join} = require('path');
exports.config = {
    port: 4723,
    specs: [
        './test/ios/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        'appium:automationName': 'XCUITest',
        'appium:platformName': 'iOS',
        'appium:platformVersion': '14.0',
        'appium:deviceName': 'iPhone 11 Pro',
        'appium:udid': '4ED7CBFE-7AF4-41DB-956F-2CB6CED56A08',
        'appium:app': join(process.cwd(), './builds/app/iHydra.app'),
      }],

    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
