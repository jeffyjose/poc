let { join } = require('path');
exports.config = {
    port: 4723,
    specs: [
        './test/android/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        'appium:platformName': 'Android',
         'appium:platformVersion': '10',
         'appium:deviceName': '2ae1eb18840b7ece',
         'appium:app': join(process.cwd(), './apk/hydra_v-3.10.0.162-debug.apk'),
         'appium:appPackage':'org.malwarebytes.antimalware',
         'appium:appWaitActivity': 'common.activity.IntroActivity',
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
