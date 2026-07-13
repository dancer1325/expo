# Set up: Android device + development build

## Running your app | Android device

### Install expo-dev-client

```
npx expo install expo-dev-client
yarn expo install expo-dev-client
pnpm expo install expo-dev-client
bun expo install expo-dev-client
```

### Enable debugging | USB | your device

* allows
  * installing your app
* steps
  * **Settings** > **About phone** > **Software information** > enable "Developer options"
  * **Settings** > **Developer options** > enable "USB debugging

### Plug in your device -- via -- USB

* plug in your Android device -- via USB, to your -- computer
* `adb devices` | your terminal
  * check that your device -- is properly connected to -- ADB (Android Debug Bridge)
    * == you should see your device listed

### Run your app

```bash
npx expo run:android
yarn expo run:android 
pnpm expo run:android
bun expo run:android
```

* build your app & run a development server

* if you want to skip running development server -> run `npx expo start` OR `yarn expo start` OR `pnpm expo start` OR `bun expo start`  
