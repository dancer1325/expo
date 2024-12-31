---
title: Create a development build
description: Learn how to create development builds for a project.
sidebar_title: Create a build
---

* goal
  * create development builds -- via -- EAS build local
  * install it |
    * emulator/simulator or
    * physical device

* ways to create a development build
  * locally
    * [`npx expo run:[android|ios]`](../../guides/local-app-development.md#local-builds-with-expo-dev-client)
      * requirements
        * install
          * Android Studio
          * Xcode
    * [`eas build --local`](../../build-reference/local-builds.mdx)
  * remotely | EAS

## Prerequisites

* React Native Android and/or iOS project / -- configured to build with -- EAS Build
  * see [Create your first build](../../build/setup.md)

## Instructions

The following instructions cover both Android and iOS and physical devices and emulators. You can use whichever instructions are relevant to your project. If you would prefer a video over text, skip to [Video walkthroughs](#video-walkthroughs).

<Step label="1">

## Install expo-dev-client

* `npx expo install expo-dev-client`
  * if you do NOT use [Continuous Native Generation](../../workflow/continuous-native-generation.md) -> follow instructions from [install `expo-dev-client` | bare React Native](../../bare/install-dev-builds-in-bare.mdx)

## Verify your eas.json configuration

* first time / you run `eas build` -> creates an [eas.json](../../build/eas-json.md) | root of your project directory
  * if you have removed the `development` profile | first initialized **eas.json** -> you SHOULD add it back NOW
* _Example:_ minimal configuration

  ```json eas.json
  {
    "build": {
      "development": {
        "developmentClient": true,
        "distribution": "internal"
      },
      "preview": {
        "distribution": "internal"
      },
      "production": {}
    }
  }
  ```
  * [`developmentClient`](../../eas/json.md#developmentclient)
    * 👀`=true` -> 
      * create a Debug build 👀
      * generates a build artifact / 
        * you can install, -- via -- [internal distribution](../../build/internal-distribution.mdx) | 
          * Android device
          * emulator
          * iOS device
            * requirements
              * **Apple Developer Program membership**
        * | iOS
          * -> set `"distribution": "internal"`
          * if you are distributing for TestFlight -> set `"distribution": "store"`


* TODO:
<Step label="3">

## Create a build for emulator/simulator

Follow the steps below to create and install the development build on an Android Emulator or an iOS Simulator.

> This is only required if you want to develop a project on an emulator/simulator. Otherwise, skip these steps if you are using a device.

Each platform has specific instructions you'll have to follow:

<Tabs tabs={["For Android Emulator", "For iOS Simulator"]}>

<Tab>

To create and install the development build on an Android Emulator, you will need a **.apk**. To create it, run the following command:

<Terminal cmd={['$ eas build --profile development --platform android']} />

After the build is complete, the CLI will prompt you to automatically download and install it on the Android Emulator. When prompted, press <kbd>Y</kbd> to directly install it on the emulator.

See [Build APKs for Android Emulators and devices](/build-reference/apk/#installing-your-build) for more information.

</Tab>

<Tab>

To create and install a development build on an iOS Simulator, we recommend you create a separate [build profile](/build/eas-json/#build-profiles) for the simulator and then set the `ios.simulator` option to `true` in the **eas.json**.

For example, the `development-simulator` profile below is only for creating a development build for iOS Simulator:

```json eas.json
{
  "build": {
    "development-simulator": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    }
  }
}
```

Then, run the following command to create the development build on an iOS Simulator:

<Terminal cmd={['$ eas build --profile development-simulator --platform ios']} />

After the build is complete, the CLI will prompt you to automatically download and install it on the iOS Simulator. When prompted, press <kbd>Y</kbd> to directly install it on the simulator.

See [Installing build on the simulator](/build-reference/simulators/#installing-build-on-the-simulator) for more information.

</Tab>

</Tabs>

</Step>

<Step label="4">

## Create a build for the device

Follow the steps below to create and install the development build on an Android or an iOS device. Each platform has specific instructions you'll have to follow:

<Tabs tabs={["For Android device", "For iOS device"]}>

<Tab>

> If you have created a development build for Android Emulator, you do not need to create it separately for the device. You can skip this step since the same **.apk** will work in both scenarios.

To create and install the development build on an Android device, you will need a **.apk**. To create it, run the following command:

<Terminal cmd={['$ eas build --profile development --platform android']} />

After the build is complete, copy the URL to the **.apk** from the build details page or the link provided when `eas build` has finished. Then, send that URL to your device and open it on your device to download and install the **.apk**.

</Tab>

<Tab>

> **warning** Apple Developer membership is required to create and install a development build on an iOS device.

To register any iOS device you'd like to develop onto your [ad hoc provisioning profile](/build/internal-distribution/#22-configure-app-signing-credentials-for-ios), run the following command:

<Terminal cmd={['$ eas device:create']} />

After registering your iOS device, you can create the development build by running the command:

<Terminal cmd={['$ eas build --profile development --platform ios']} />

> Devices running iOS 16 and above require enabling a special OS-level Developer Mode to install development builds. If you don't have this setting enabled or are installing your first development build on your device, see [iOS Developer Mode](/guides/ios-developer-mode/) to enable it.

After the build is complete, you can download it on your iOS device by scanning the QR code from the device's camera from the Expo CLI. The QR code is provided when the `eas build` command has finished running.

You can also find this QR code on the build page in the [Expo dashboard](https://expo.dev/accounts/[account]/projects/[project]/builds). Click the **Install** button and scan the QR code using the system's camera.

</Tab>

</Tabs>
</Step>

## Video walkthroughs

<BoxLink
  title={`"Build and Deploy React Native Apps with Expo EAS"`}
  description="A course on egghead.io that covers all of the information from this page, and more."
  href="https://egghead.io/courses/build-and-deploy-react-native-apps-with-expo-eas-85ab521e"
  Icon={GraduationHat01Icon}
/>

<BoxLink
  title={`"Async Office Hours: How to make a development build with EAS Build"`}
  description="Learn how to make a development build with EAS Build in this video tutorial hosted by Developer Success Engineer: Keith Kurak."
  href="https://www.youtube.com/watch?v=LUFHXsBcW6w"
  Icon={VideoRecorderIcon}
/>
