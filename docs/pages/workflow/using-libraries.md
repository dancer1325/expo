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

* TODO:
[React Native Directory](https://reactnative.directory) is a searchable database of libraries built specifically for React Native. If the library that you are looking for is not provided by React Native or the Expo SDK then this is the best place to look first when trying to find a library for your app.

After the React Native Directory, the [npm registry](https://www.npmjs.com/) is the next best place. The npm registry is the definitive source for JavaScript libraries, but the libraries that it lists may not all be compatible with React Native. React Native is one of many JavaScript programming environments, including Node.js, web browsers, Electron, and more, and npm includes libraries that work for all of these environments. Any library that is compatible with React Native is compatible with the Expo project when you create a [development build](/workflow/overview/#development-builds). However, it may not be compatible with the [Expo Go](https://expo.dev/go) app.

### Determining third-party library compatibility

Use Expo [development builds](/workflow/overview/#development-builds) for building production-quality apps. It includes all of the native code that your project needs to run. This is a great way to test your app before you publish it to the App Store or Google Play. You can also include libraries that require native projects (**android** and **ios** directories) configuration.

The Expo Go app is an optional stepping stone towards development builds. You can use it to quickly test your app while you are developing it, but it does not include all of the native code required to support every library. You can check **React Native Directory** to find a library compatible with Expo Go by visiting the website and verifying that it has a "✔️ Expo Go" tag. You can also enable the [filter by Expo Go](https://reactnative.directory/?expoGo=true).

To determine if a new dependency changes native project directories, you can check the following:

- Does the library includes **android** or **ios** directories?
- Does the library's README mention linking?
- Does the library requires you to change **android/app/src/main/AndroidManifest.xml** or **ios/Podfile** or **ios/Info.plist** to change the project configuration?
- Does the library have a [config plugin](/config-plugins/introduction/)?

**If you answered yes to any of these questions,** then you should [create a development build](/develop/development-builds/introduction/) to use the library in your project.

**Not listed on the directory?** You can find the project on GitHub. A simple way to do this is with `npx npm-home --github <package-name>`. For example, to open the GitHub page for `react-native-localize`, run:

<Terminal cmd={['$ npx npm-home --github react-native-localize']} />

> If you want some help determining library compatibility, [create an issue on the React Native Directory repository](https://github.com/react-native-community/directory/issues/new/choose) and let us know. This will not just help you, it will also help other developers have an easy answer in the future!

### Installing a third-party library

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
