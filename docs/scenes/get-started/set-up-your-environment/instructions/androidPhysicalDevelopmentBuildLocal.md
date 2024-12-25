## Set up an Android device -- with a -- development build

<BuildEnvironmentSwitch />

<AndroidStudioEnvironmentInstructions />

<AndroidStudioInstructions />

## Running your app | Android device

### Install expo-dev-client

* `npx expo install expo-dev-client`

### Enable debugging over USB | your device

* allows
  * installing your app
* steps
  * **Settings** > **About phone** > **Software information** > enable "Developer options"
  * **Settings** > **Developer options** > enable "USB debugging

### Plug in your device via USB

* plug in your Android device -- via USB, to your -- computer
* `adb devices` | your terminal
  * check that your device -- is properly connected to -- ADB (Android Debug Bridge)
    * == you should see your device listed

### Run your app

* `npx expo run:android`
  * build your app & run a development server
    * if you want to skip running development server -> run `npx expo start` | next page ❓
