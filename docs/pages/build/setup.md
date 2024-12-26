* goal
  * create a build for your app -- via -- EAS Build

* EAS Build
  * allows you
    * build a ready-to-submit binary of your app -- for the -- Google Play Store or Apple App Store
      * | small app,
        * builds should take few minutes
        * if you encounter any issues -> reach out | [Discord](https://chat.expo.dev/)

## Prerequisites

* see [limitations](../build-reference/limitations.md)
* create the React Native project / regardless using `expo`

  ```
  npx create-expo-app my-app
  # or
  npx create-react-native-app
  # or
  npx react-native
  # or
  ignite-cli
  ```
* [Expo user account](../eas)

## Steps

### install the latest EAS CLI

  ```
  npm install -g eas-cli
  ```
  * recommended `npm` instead of `yarn` -- for -- global package installations 

### log in | your Expo account

  ```
  eas login
  
  # check if you are logging
  eas whoami
  ```

### configure the project

  ```
  eas build:configure
  ```
  * see 
    * [build configuration process reference](../build-reference/build-configuration.mdx)
    * [app code / -- depend on -- environment variables](../build-reference/variables)
    * [project | monorepo](../build-reference/build-with-monorepos)
    * [if you use private npm packages -> add your npm token](../build-reference/private-npm-packages)
    * [if your app -- depends on -- specific versions of tools -> specify these versions | your build configuration](eas-json.mdx)

### run a build
  * build -- for -- 
    * Android Emulator/device or iOS Simulator
      * the easiest one
      * vs upload | store
        * NOT need store developer membership accounts
      * see 
        * [creating an installable APK for Android](../build-reference/apk)
        * [creating a simulator build for iOS](../build-reference/simulators)
    * app stores
      * requirements
        * have a store developer account 
          * [Google Play Developer membership](https://play.google.com/console/u/0/developers)
          * [Apple Developer Program membership](https://developer.apple.com/programs)
        * generate or provide app signing credentials
          * [for Android](#android-app-signing-credentials)
          * [for iOS](#ios-app-signing-credentials)
      * build it
      
        ```
        # for Android
        eas build --platform android
        # for iOS
        eas build --platform ios
        # for BOTH
        eas build --platform all
        ```

        * `eas build --platform SomePlatform --message "Some message"`
          * `--message`
            * appears | website
            * uses
              * leave a note -- about the -- purpose of the build for your team

#### Android app signing credentials

* if you have 
  * ALREADY released the app & stored them previously -> see
    * [app signing credentials](../app-signing/app-credentials/)
    * [follow these instructions](/app-signing/existing-credentials)
  * NOT yet generated a keystore for your app, --> ways
    * EAS CLI take care of
      * select `Generate new keystore`
      * keystore is stored securely | EAS servers
    * manually
      * see [manual Android credentials guide](../app-signing/local-credentials#android-credentials)

#### iOS app signing credentials

* if you have
  * ALREADY released the app & stored them previously -> see
    * [app signing credentials](../app-signing/app-credentials/)
    * [follow these instructions](/app-signing/existing-credentials)
  * NOT yet generated a keystore for your app, --> ways
    * EAS CLI take care of
      * sign | your Apple Developer Program account & follow the prompts
    * manually
      * see [manual iOS credentials guide](/app-signing/local-credentials#ios-credentials)

### Wait for the build to complete
  * `eas build`
    * sync process / wait for your build to complete
  * build dashboard
    * allows
      * monitor the progress & read the logs
    * ways to get the link to it
      * returned by `eas build`
      * visit 
        * [ALL your buils](https://expo.dev/builds)
        * [based on accounts](https://expo.dev/accounts/[account]/builds)
      * `eas build:list`
  * if it fails -> see [troubleshooting guide](../build-reference/troubleshooting)

### Deploy the build

#### Distribute your app | app store

* see [how to submit -- via -- EAS Submit](../submit/introduction)

#### Install and run the app

* if you built -- for --
  * app store distribution -> 
    * upload | app store
    * install it -- from -- the app store
  * your Android device/iOS Simulator
    * click the "Install" button | [your build dashboard](https://expo.dev/accounts/[account]/builds) 

## Next steps

- see
  - [Configuration with eas.json](/build/eas-json)
  - [Internal distribution](/build/internal-distribution)
  - [Updates](/build/updates)
  - [Automating submissions](/build/automate-submissions)
  - [Triggering builds from CI](/build/building-on-ci)
  - [Build webhooks](/eas/webhooks)
  - [Build server infrastructure](/build-reference/infrastructure)
  - How the [Android](/build-reference/android-builds) and [iOS](/build-reference/ios-builds) build processes work
