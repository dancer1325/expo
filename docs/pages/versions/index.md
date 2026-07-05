* Expo SDK
  * == packages /
    * 👀provides access -- to -- 👀
      * device
      * system functionality 
        * _Example:_ contacts, camera, gyroscope, GPS location, ...
    * 👀1 feature / EACH package👀
      * -> features can be used INDEPENDENTLY  
  * steps to use them
    * `npx expo install` OR `yarn expo install` OR `pnpm expo install` OR `bun expo install`
      * install any Expo SDK package
      * _Example:_
        ```
        npx expo install expo-camera expo-contacts expo-sensors
        yarn expo install expo-camera expo-contacts expo-sensors
        pnpm expo install expo-camera expo-contacts expo-sensors
        bun expo install expo-camera expo-contacts expo-sensors
        ```
    * | your code, import it

      ```ts
      import { CameraView } from 'expo-camera';
      import { Contact } from 'expo-contacts';
      import { Gyroscope } from 'expo-sensors';
      ```

## 👀ALL Expo SDK packages work | ANY React Native app 👀

* Reason:🧠Expo == React Native app🧠

* ⚠️requirements⚠️
  * install & configure the `expo` package

* `create-expo-app`
  * == easiest way to create a React Native app / support for Expo SDK packages
  * _Example:_ `npx create-expo-app my-app --template bare-minimum` OR `yarn create expo-app my-app --template bare-minimum` OR `pnpm create expo-app my-app --template bare-minimum` OR `bun create expo my-app --template bare-minimum` 
    * create a project / named 'my-app'
    * see [here](../more/create-expo.mdx)

* `npx install-expo-modules`
  * add Expo SDK | EXISTING React Native app 
  * see [here](../bare/installing-expo-modules.mdx)

* how to install Expo SDK packages |
  * [EXISTING React Native apps](../bare/installing-expo-modules.md)
  * [your project](../workflow/using-libraries.mdx)

## Using pre-release versions

* 3 NEW Expo SDK versions released / EACH year 
  * 👀typically updates -- to the -- LATEST stable versions of React Native and React Native Web 👀 

* pre-release versions of `expo` package & ALL Expo SDK packages
  * BETWEEN releases
  * ❌NOT considered stable❌
    * ⚠️use under your responsibility⚠️

* uses
  * pre-release versions of individual packages + stable releases of the Expo SDK
    * ⚠️there could be incompatibilities ⚠️
      * [how to silence dependency validation warnings](../more/expo-cli.md#configuring-dependency-validation)

### Canary releases

* == snapshot of the state of the `main` branch | they are published
* naming: `-canary` + date + commit hash
  * _Example:_ `51.0.0-canary-20240418-8d74597`
* ways to install the LATEST canary release
  * `npm install expo@canary && npx expo install --fix`
  * `yarn add expo@canary && yarn expo install --fix`
  * `pnpm add expo@canary && pnpm expo install --fix`
  * `bun add expo@canary && bun expo install --fix`

### Beta releases

* beta versions of the `expo` package & ALL Expo SDK packages
* BEFORE EACH Expo SDK release
* vs canary releases
  * MORE stable
* `beta` tag | npm

## ⚠️EACH Expo SDK version -- depends on a -- React Native version ⚠️

| Expo SDK version | React Native version | React version | React Native Web version | React Native TV version | Minimum Node.js version |
| ---------------- | -------------------- | ------------- | ------------------------ | ----------------------- | ----------------------- |
| 57.0.0           | 0.86                 | 19.2.3        | 0.21.0                   | 0.86-stable             | 22.13.x                 |
| 56.0.0           | 0.85                 | 19.2.3        | 0.21.0                   | 0.85-stable             | 22.13.x                 |
| 55.0.0           | 0.83                 | 19.2.0        | 0.21.0                   | 0.83-stable             | 20.19.x                 |
| ...              | ...                  | ...           | ...                      | ...                     | ...                     |
| 52.0.0           | 0.76                 |               | 0.19.13                  |                         |                         |
| 51.0.0           | 0.74                 |               | 0.19.10                  |                         |                         |
| 50.0.0           | 0.73                 |               | 0.19.6                   |                         |                         |

### Support -- for -- OTHER React Native versions

* Expo SDK's packages -- are intended to support the -- Expo SDK's target React Native version
  * ⚠️TYPICALLY, NOT support older versions of React Native (BUT they may) ⚠️

## Support for Android and iOS versions

* EACH Expo SDK version -- supports a -- MINIMUM OS version of Android and iOS 

| Expo SDK version | Android version | `compileSdkVersion` | iOS version |
| ---------------- | --------------- | ------------------- | ----------- |
| 52.0.0           | 6+              | 35                  | 15.1+       |
| 51.0.0           | 6+              | 34                  | 13.4+       |
| 50.0.0           | 6+              | 34                  | 13.4+       |
