* goal
  * determine whether a library -- is compatible with -- your project

## React Native core libraries

* built-in primitives / used | MOST apps
* see [Core Components and APIs](https://reactnative.dev/docs/components-and-apis)
* _Examples:_
  * _Example1:_ components as `<ActivityIndicator>`, `<TextInput>`, `<Text>`, `<ScrollView>`, and `<View>`
  * _Example2:_ use | your app

  ```tsx
  import { Text, View } from 'react-native';
  
  export default function App() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
  ```

## Expo SDK libraries

* 👀picks up | React Native core libraries end 👀
* see 
  * [Expo SDK](../versions/index.md)
  * [what goes | Expo SDK](https://expo.fyi/whats-in-the-sdk)

* platform compatibility tags | top of EACH API reference 
  * _Example:_ platform tags for the [`expo-device`](/versions/latest/sdk/device/)

    ![](/docs/public/static/images/guides/platform-tags.png)

* `npx expo install`
  * steps
    * picks a library version -- compatible with -- your project
    * install it -- via -- your JavaScript package manager

* typical API reference 
  * if the library requires a config plugin -> config plugin usage information 
  * code example -- about how to use the -- library
  * API section / 
    * lists how to import the library,
    * list of hooks, props, types, methods, and classes / -- provided by the -- library
  * if you use TypeScript -> information | your TypeScript-compatible code editor's API section

## Third-party libraries

### Finding a third-party library

* [React Native Directory](https://reactnative.directory) 
  * == searchable database of libraries / 
    * built -- specifically for -- React Native
    * BEST first alternative to NOT found a library | React Native or the Expo SDK

* [npm registry](https://www.npmjs.com/)
  * next best alternative  
   
* ANY library / compatible with React Native ->
  * -- compatible with the -- Expo project | create a [development build](../workflow/overview.mdx#development-builds)
  * -- MAY NOT be compatible with the -- [Expo Go](https://expo.dev/go) app

### Determining third-party library compatibility

* Expo [development builds](../workflow/overview.mdx#development-builds)
  * allows
    * building production-quality apps 
      * -> uses
        * test your app | BEFORE you publish it | App Store or Google Play

* Expo Go app
  * 👀alternative to development builds 👀
  * uses
    * quickly test your app | you are developing it
  * ❌NOT include ALL native code -- required to -- support EVERY library ❌ 
    * if you use React Native Directory to find a library -> you can [filter by Expo Go](https://reactnative.directory/?expoGo=true)

* 💡if a NEW dependency -- changes -- native project directories -> [create a development build](../develop/development-builds/introduction.md) 💡 
  * ways to determine if it makes changes
    * Does the library includes `android/` or `ios/`?
    * Does the library's README mention linking?
    * Does the library -- requires you to -- change **android/app/src/main/AndroidManifest.xml** or **ios/Podfile** or **ios/Info.plist**?
    * Does the library have a [config plugin](../config-plugins/introduction.md)?
    * if you have got doubts -> [create an issue | React Native Directory repository](https://github.com/react-native-community/directory/issues/new/choose)

* `npx npm-home --github <package-name>`
  * open the GitHub page
  * _Example:_ `npx npm-home --github react-native-localize`

### Installing a third-party library

* TODO:
> We recommend always using `npx expo install` instead of `npm install` or `yarn add` directly because it allows [Expo CLI](/more/expo-cli/) to pick a compatible version of a library when possible and also warn you about known incompatibilities.

Once you have determined if the library is compatible with React Native, use [Expo CLI](/more/expo-cli/) to install the package:

<Terminal cmd={['$ npx expo install @react-navigation/native']} />

Be sure to follow the project website or README for any additional configuration and usage instructions. You can get to the README quickly using this command:

<Terminal cmd={['$ npx npm-home @react-navigation/native']} />

If the module needs additional native configuration, you can do so using [config plugins](/config-plugins/introduction/). Some packages require a config plugin but they don't have one yet, you can refer to the list of [out-of-tree config plugins](https://github.com/expo/config-plugins/).

<ConfigReactNative>

If your project does not support [Expo Prebuild](/workflow/prebuild) then you won't be able to use [config plugins](/config-plugins/introduction/). You can either [adopt Expo Prebuild](/guides/adopting-prebuild) or set up and configure each library manually by following any additional setup guides from the respective module's website or README.

</ConfigReactNative>

If the module is not supported in [Expo Go](https://expo.dev/go), you can create a [development build](/develop/development-builds/introduction/):

<BoxLink
  title="Add custom native code"
  description="Learn how to add custom native code to your Expo project."
  href="/workflow/customizing/"
/>

### Excluding a third-party library from version checks

If you have a specific version of a third-party library installed and want it to be excluded from version checks performed by `npx expo install`, `npx expo-doctor`, or `npx expo start`, use the [`expo.install.exclude`](/versions/latest/config/package-json/#exclude) property in the **package.json** file.
