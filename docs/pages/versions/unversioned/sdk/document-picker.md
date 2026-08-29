---
title: DocumentPicker
description: A library that provides access to the system's UI for selecting documents from the available providers on the user's device.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-document-picker'
packageName: 'expo-document-picker'
iconUrl: '/static/images/packages/expo-document-picker.png'
platforms: ['android', 'ios', 'web', 'expo-go']
---


* `expo-document-picker`
  * allows
    * | user's device,
      * selecting documents -- from -- the available providers 

* [video](../../../../public/static/videos/sdk/documentpicker.mp4)

## Installation

```bash
npx expo install expo-document-picker
---
yarn expo install expo-document-picker
---
pnpm expo install expo-document-picker
---
bun expo install expo-document-picker
```

## Configuration | app config

* ways to configure it
  * if you use config plugins | your project [CNG](../../../workflow/continuous-native-generation) -> use its built-in [config plugin](../../../config-plugins/introduction)
    * configplugin's properties
      * `iCloudContainerEnvironment`
        * ALLOWED | ios
        * TODO: Sets the iOS `com.apple.developer.icloud-container-environment` entitlement used for AdHoc iOS builds. Possible values: `Development`, `Production`. [Learn more](https://github.com/expo/eas-cli/issues/693).
      * `kvStoreIdentifier`
        * ALLOWED | ios
        * TODO: Overrides the default iOS `com.apple.developer.ubiquity-kvstore-identifier` entitlement, which uses your Apple Team ID and bundle identifier. This may be needed if your app was transferred to another Apple Team after enabling iCloud storage.
  * if your app does NOT use CNG -> MANUALLY configure the library

* if you want to enable [iCloud storage features](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_icloud-services) -> | [app.config](../config/app.md), set `expo.ios.usesIcloudStorage: true`
  * if you use [EAS Build](../../../build/introduction) locally -> [iOS capabilities signing](../../../build-reference/ios-capabilities) handles enabling the required capabilities AUTOMATICALLY | building


TODO: 

<ConfigReactNative>

Apps that don't use [EAS Build](/build/introduction) and want [iCloud storage features][icloud-entitlement] must [manually configure](/build-reference/ios-capabilities#manual-setup) 
the [**iCloud service with CloudKit support**](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_icloud-container-environment) for their bundle identifier.

If you enable the **iCloud** capability through the [Apple Developer Console](/build-reference/ios-capabilities#apple-developer-console), 
then be sure to add the following entitlements in your `ios/[app]/[app].entitlements` file 
(where `dev.expo.my-app` if your bundle identifier):

```xml
<key>com.apple.developer.icloud-container-identifiers</key>
<array>
    <string>iCloud.dev.expo.my-app</string>
</array>
<key>com.apple.developer.icloud-services</key>
<array>
    <string>CloudDocuments</string>
</array>
<key>com.apple.developer.ubiquity-container-identifiers</key>
<array>
    <string>iCloud.dev.expo.my-app</string>
</array>
<key>com.apple.developer.ubiquity-kvstore-identifier</key>
<string>$(TeamIdentifierPrefix)dev.expo.my-app</string>
```

Apple Developer Console also requires an **iCloud Container** to be created
* When registering the new container, you are asked to provide a description and identifier for the container
* You may enter any name under the description
* Under the identifier, add `iCloud.<your_bundle_identifier>` 
(same value used for `com.apple.developer.icloud-container-identifiers` and `com.apple.developer.ubiquity-container-identifiers` entitlements).

</ConfigReactNative>

## + [`expo-file-system`](filesystem)

* if you want `expo-file-system` can read the file IMMEDIATELY AFTER being picked -> set `copyToCacheDirectory: true`

## API

```js
```

<APISection packageName="expo-document-picker" apiName="DocumentPicker" />
