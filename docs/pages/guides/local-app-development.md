* goal
  * compile and build your Expo app locally

* requirements
  * MANUALLY generate native code | BEFORE submitting | app store, 
    * testing the debug build or
    * creating a production build for it  
  
* ways to build your app locally

## Prerequisites

* install & set up
  * [Android Studio](../get-started/set-up-your-environment.md)
  * [Xcode](../get-started/set-up-your-environment/?platform=ios&device=physical&mode=development-build&buildEnv=local#set-up-an-ios-device-with-a-development-build)

## Local app compilation

```
# Build native Android project
npx expo run:android

# Build native iOS project
npx expo run:ios
```

* compile your project
  * -- via -- your locally installed
    * Android SDK or
    * Xcode
  * 👀-> 
    * generate a debug build of your app 
    * start the development server 👀
* 👀 PREVIOUSLY will run `npx expo prebuild` 👀
  * -> generate native directories (**android** and **ios**)
* `--device` flag
  * select a device | run the app on
    * physically connected device or
    * emulator/simulator
* if you want to create a [production build of your app](../deploy/build-project.md)
  * for Android, `--variant release`
  * for iOS, `--configuration Release` 
* you can NOT submit them | app stores
  * Reason: 🧠these builds are NOT signed 🧠
  * if you want to sign your production build -> see [Local app production](local-app-production.mdx)

* if you modify your project's configuration or native code | AFTER the first build -> you will have to rebuild your project 
  * ⚠️if you run `npx expo prebuild` -> add / modify | EXISTING files ⚠️
  * steps
    * add native directories | project's **.gitignore**
      * see
        * [app config](../workflow/configuration.md)
        * [config plugin](../config-plugins/introduction.md) 
    * run `npx expo prebuild --clean`
      * see [`--clean` flag](../workflow/continuous-native-generation.md#clean)

* see 
  * [Compiling with Expo CLI](../more/expo-cli.md/#compiling)
  * [Prebuild](../workflow/prebuild)

## Local builds -- with -- `expo-dev-client` == development builds

* scenario
  * [`expo-dev-client`](../develop/development-builds/introduction.md) installed | your project
    * `npx expo install expo-dev-client`

* if you want to create a development build -> use [local app compilation](#local-app-compilation) commands 
  * == use `npx expo run:[android|ios]`

## Local builds -- via -- Android product flavors

* requirements
  * Expo SDK v52+

* use cases
  * Android project / MULTIPLE product flavors / DIFFERENT application IDs

* `npx expo run:android`
  * `--variant`
    * use the correct flavor
      * _Example1:_ `--variant debug` or `--variant release` 
      * _Example2:_ [free and paid product flavors](https://developer.android.com/build/build-variants#change-app-id)
        
        ```
        npx expo run:android --variant freeDebug
        npx expo run:android --variant paidDebug
        ```
  * `--app-id`
    * allows
      * launching the app | AFTER building
    * _Example:_ if your product flavor **free** is using `applicationIdSuffix ".free"` or `applicationId "dev.expo.myapp.free"` -> you can run build and launch the app with
    
      ```
      npx expo run:android --variant freeDebug --app-id dev.expo.myapp.free
      ```
  * if you want to customize the Android build type -> that would BREAK Expo's assumption: build type **release** -- is used for -- production
    * SOLUTION: 👀build unoptimized code | your app -- via a -- build type != **release**

## Local builds with EAS

* see [here](../build-reference/local-builds.mdx)
