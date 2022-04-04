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
        'appium:platformVersion': '15.4',
        'appium:deviceName': 'iPhone 13',
        'appium:udid': '98F21B3B-F621-4117-A005-35D5599129E1',
        'appium:app': join(process.cwd(), './builds/app/TestApp.app'),
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
