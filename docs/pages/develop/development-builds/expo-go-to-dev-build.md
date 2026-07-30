---
title: Switch from Expo Go to a development build
sidebar_title: Expo Go to development build
description: How to switch from your Expo Go project to use development builds.
---

* goal
  * switch from Expo Go -- to a -- development build

* steps
  * [install `expo-dev-client`](#install-the-expo-dev-client)
  * [build your native app](#build-your-native-app)
  * [start the bundler](#start-the-bundler)

## Install the `expo-dev-client`

* Expo Dev Client library
  * == launcher UI + dev menu + extensions + ...
    * dev menu
      * built-in | Expo Go app
      * ❌NOT built-in | development build❌
        * -> ⚠️you need to install it separately⚠️ 
      * _Example:_ 
        * middle images
          * app / run | development build /
            * customizable developer menu open
        * side images
          * launcher UI
            * | left, iOS
            * | right, Android

        ![](../../../public/static/images/dev-client/preview.png)
  * recommendations
    * use it
      * Reason:🧠best development experience🧠
      * ⚠️ALTHOUGH, you can use development builds WITHOUT installing `expo-dev-client`⚠️ 

* steps
  ```bash
  $ npx expo install expo-dev-client
  $ yarn expo install expo-dev-client
  $ pnpm expo install expo-dev-client
  $ bun expo install expo-dev-client
  ```

## Build your NATIVE app

* ways to run your app
  * -- via -- Expo Go
    * steps
      * `npx expo start`
        * Metro build the JS bundle
          * Reason:🧠Expo Go == native app | run the JS bundle🧠
  * -- via -- development builds
    * steps
      * build
        * generate -- , via [prebuild](#prebuild), -- the native "android/" & "ios/" directories
        * compile -- , via native build tools, -- the native app
      * `npx expo start`

* use cases | you need to build it again
  * add OR update a library -- with -- native code
  * change any native code or configuration

### Option 1: Build | your local machine

TODO: 
To build a native app on your local machine, follow the setup your environment guides
for [Android](../../workflow/android-studio-emulator.md) and [iOS](../../workflow/ios-simulator.md) platforms
* This involves setting up and configuring native build tools like Android Studio for Android and Xcode for iOS.

Once you have everything set up, run the following command:

* | Android,

  ```bash
  $ npx expo run:android
  $ yarn expo run:android
  $ pnpm expo run:android
  $ bun expo run:android
  ```
* | iOS

  ```bash
  $ npx expo run:ios
  $ yarn expo run:ios
  $ pnpm expo run:ios
  $ bun expo run:ios
  ```


By default, this will build and install the app on an Android Emulator/iOS Simulator
* If you need to run the build on your phone, plug it into your computer (on Android, select trust device and allow USB debugging if prompted, and on iOS, enable [developer mode](/get-started/set-up-your-environment/?mode=development-build&buildEnv=local&platform=ios&device=physical#plug-in-your-device-via-usb-and-enable-developer-mode)) and run the above commands with the `--device` flag.

### Option 2: Build on EAS

Building on EAS servers is useful when:

- You can't or don't want to set up your local development environment
- You want to build an iOS app but don't own a Mac
- You want to share the development builds with your team

<BoxLink
  title="Build on EAS"
  description="How to create your Development Build on EAS."
  href="/develop/development-builds/create-a-build/"
  Icon={BookOpen02Icon}
/>

## Start the bundler

* `npx expo run:android|ios`
  * AFTER building locally,
    * 👀will start AUTOMATICALLY the bundler👀
      * ⚠️if you closed the bundler OR are working | dev client / you built earlier -> (re)start the Metro bundler⚠️

        ```bash
        $ npx expo start
        $ yarn expo start
        $ pnpm expo start
        $ bun expo start
        ```
        * if you do NOT use the dev client -> start the bundler -- with -- `--dev-client`

          ```bash
          $ npx expo start --dev-client
          $ yarn expo start --dev-client
          $ pnpm expo start --dev-client
          $ bun expo start --dev-client
          ```
          * Reason:🧠OTHERWISE, by default open | Expo Go🧠
    * if your project has `expo-dev-client` installed -> the bundler print out
      * "Using development build"
      * a QR code / link -- into the -- development build / you created 
        * instead of Expo Go

## Prebuild

* [here](../../workflow/continuous-native-generation.md#prebuild)

### use cases

* you are building -- via -- `npx expo run:android|ios` & change any native dependencies OR configuration
  * _Examples:_
    * install OR update a library containing native code
    * change [app config](../../workflow/configuration.md)
    * upgrade your Expo SDK version
  * steps
    * rebuild the native directories

      ```bash
      $ npx expo prebuild --clean
      $ yarn expo prebuild --clean
      $ pnpm expo prebuild --clean
      $ bun expo prebuild --clean
      ```
    * rebuild your app -- with the -- updated native code
      * | Android,

        ```bash
        $ npx expo run:android
        $ yarn expo run:android
        $ pnpm expo run:android
        $ bun expo run:android
        ```
      * | iOS

        ```bash
        $ npx expo run:ios
        $ yarn expo run:ios
        $ pnpm expo run:ios
        $ bun expo run:ios
        ```

### ❌NOT use cases❌

* ❌native folders ("android/" & "ios/") do NOT exist❌
  * | run `npx expo run:android|ios`,
    * prebuild AUTOMATICALLY
  * | run `eas build`,
    * prebuild AUTOMATICALLY
