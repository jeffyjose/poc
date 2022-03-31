import path from 'path';

const GENERIC_CAPS = {
  androidInstallTimeout: process.env.CI ? 120000 : 90000,
  deviceName: 'Android',
  platformName: 'Android',
  forceEspressoRebuild: true,
  adbExecTimeout: process.env.CI ? 120000 : 20000,
  espressoServerLaunchTimeout: process.env.CI ? 120000 : 30000,
  printPageSourceOnFindFailure: true,
};

const COMPOSE_CAPS = Object.assign({}, GENERIC_CAPS, {
  app: path.resolve('test', 'assets', 'compose_playground.apk'),
  espressoBuildConfig: '{"additionalAndroidTestDependencies": ' +
  '["androidx.lifecycle:lifecycle-extensions:2.2.0", ' +
  '"androidx.activity:activity:1.3.1", ' +
  '"androidx.fragment:fragment:1.3.4"]}'
});

export { GENERIC_CAPS, APIDEMO_CAPS, COMPOSE_CAPS };