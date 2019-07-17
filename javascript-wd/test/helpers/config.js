import path from 'path';

// Leave the Android platformVersion blank and set deviceName to a random string
// (Android deviceName is ignored by Appium but is still required)
const DEFAULT_ANDROID_DEVICE_NAME = 'My Android Device';
const DEFAULT_ANDROID_PLATFORM_VERSION = null;

const androidCaps = {
  platformName: 'Android',
  automationName: 'UiAutomator2',
  deviceName: process.env.ANDROID_DEVICE_NAME || DEFAULT_ANDROID_DEVICE_NAME,
  platformVersion: process.env.ANDROID_PLATFORM_VERSION || DEFAULT_ANDROID_PLATFORM_VERSION,
  app: undefined, // Will be added in tests
};

// figure out where the Appium server should be pointing to
const serverConfig = {
    host: process.env.APPIUM_HOST || 'localhost',
    port: process.env.APPIUM_PORT || 4723
  };


// figure out the location of the apps under test
const LOCAL_ASSET_BASE = path.resolve(__dirname, '..', '..', '..', 'apps');

let androidApiDemos;
androidApiDemos = path.resolve(LOCAL_ASSET_BASE, 'ApiDemos-debug.apk');

export {
  androidApiDemos,
  androidCaps,
  serverConfig,
};
