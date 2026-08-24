---
title: Upgrade Expo SDK
description: Learn how to incrementally upgrade the Expo SDK version in your project.
---

* recommendations
  * ⚠️upgrade SDK versions incrementally +1 ⚠️
    * Reason:🧠avoid pinpoint breakages🧠
  * | production apps,
    * use [development builds](../develop/development-builds/) 
      * Reason:🧠EAS services tends to be MUCH longer SDK version backward compatible🧠 

* Expo Go
  * ⚠️ONLY supports the latest SDK version⚠️

## How to upgrade -- to -- the latest SDK version?

### -- via -- AI coding agent

* steps
  * install [Expo Skills](../skills) 
  * use the [`expo-upgrade` skill](../skills#available-expo-skills)
  * review any proposed changes
  * check the SDK changelog -- for -- version-specific instructions

### MANUALLY

#### 1. Upgrade the Expo SDK

```bash
# npm install expo@^X.Y.Z

$ npm install expo@^57.0.0
---
$ yarn add expo@^57.0.0
---
$ pnpm add expo@^57.0.0
---
$ bun install expo@^57.0.0
```

#### 2. Upgrade dependencies / match the installed SDK version 

```bash
$ npx expo install --fix && npx expo-doctor
```

* [`expo-doctor`](../develop/tools.md#expo-doctor)

#### 3. Update native projects

* if you 
  * use [CNG](continuous-native-generation) -> 
    * delete the "android/" & "ios/"
      * Reason:🧠generated -- for -- a PREVIOUS SDK version🧠
    * | NEXT build-time, 
      * they'll be re-generated
  * do NOT use [CNG](continuous-native-generation) 
    * & you have an "ios/" -> run `npx pod-install` 
    * ALTERNATIVES
      * ALTERNATIVE1: follow [native bare project upgrade](../bare/upgrade)
      * ALTERNATIVE2: [adopt prebuild](../guides/adopting-prebuild)

#### 4. check the release notes

* [SDK changelogs](#sdk-changelogs)
* Reason:🧠contain info about 
  * breaking changes
  * deprecations
  * ...🧠

## SDK Changelogs

* [here](https://github.com/dancer1325/expo-website)
  - **SDK 57**: [Release notes](https://github.com/dancer1325/expo-website/blob/main/docs/changelog_sdk-57.md)
  - **SDK 56**: [Release notes](https://github.com/dancer1325/expo-website/blob/main/docs/changelog_sdk-56.md)
  - **SDK 55**: [Release notes](https://github.com/dancer1325/expo-website/blob/main/docs/changelog_sdk-55.md)
  - **SDK 54**: [Release notes](https://github.com/dancer1325/expo-website/blob/main/docs/changelog_sdk-54.md)
  - **SDK 53**: [Release notes](https://github.com/dancer1325/expo-website/blob/main/docs/changelog_sdk-53.md)
  - **SDK 52**: [Release notes](https://github.com/dancer1325/expo-website/blob/main/docs/changelog_2024-11-12-sdk-52.md)

### Deprecated SDK Version Changelogs

TODO: 

- **SDK 51**: [Release notes](https://expo.dev/changelog/2024-05-07-sdk-51)
- **SDK 50**: [Release notes](https://expo.dev/changelog/2024-01-18-sdk-50)
- **SDK 49**: [Release notes](https://blog.expo.dev/expo-sdk-49-c6d398cdf740)
- **SDK 48**: [Release notes](https://blog.expo.dev/expo-sdk-48-ccb8302e231)
- **SDK 47**: [Release notes](https://blog.expo.dev/expo-sdk-47-a0f6f5c038af)
- **SDK 46**: [Release notes](https://blog.expo.dev/expo-sdk-46-c2a1655f63f7)
- **SDK 45**: [Release notes](https://blog.expo.dev/expo-sdk-45-f4e332954a68)
- **SDK 44**: [Release notes](https://blog.expo.dev/expo-sdk-44-4c4b8306584a)
- **SDK 43**: [Release notes](https://blog.expo.dev/expo-sdk-43-aa9b3c7d5541)
- **SDK 42**: [Release notes](https://blog.expo.dev/expo-sdk-42-579aee2348b6)
- **SDK 41**: [Release notes](https://blog.expo.dev/expo-sdk-41-12cc5232f2ef)
- **SDK 40**: [Release notes](https://dev.to/expo/expo-sdk-40-is-now-available-1in0)
- **SDK 39**: [Release notes](https://dev.to/expo/expo-sdk-39-is-now-available-1lm8)
- **SDK 38**: [Release notes](https://dev.to/expo/expo-sdk-38-is-now-available-5aa0)
- **SDK 37**: [Release notes](https://dev.to/expo/expo-sdk-37-is-now-available-69g)
- **SDK 36**: [Release notes](https://blog.expo.dev/expo-sdk-36-is-now-available-b91897b437fe)
- **SDK 35**: [Release notes](https://blog.expo.dev/expo-sdk-35-is-now-available-beee0dfafbf4)
