---
title: Autolinking
description: Learn how to use Expo Autolinking to automatically link native dependencies in your Expo project.
---

* | install a third-party library | Expo & React Native,
  * PREVIOUS to autolinking,
    * you had to install & configure MANUALLY | 3 DIFFERENT package managers (npm/yarn + CocoaPods + Gradle/Maven)
  * RIGHT NOW -- thanks to -- autolinking
    * you ONLY install the package | "package.json"

* Expo Autolinking
  * == mechanism / 💡reduces the library installation process💡
    * steps
      * you 
        * install the NPM package
        * re-run `pod install`
  * [source code](../../../packages/expo-modules-autolinking) 

## CLI commands

### `search`

* Searching
  * == FIRST phase of resolving the Expo modules / installed | project
    * find ALL modules / 
      * marked -- as -- Expo modules
      * if there are duplicates -> determine the highest precedence version 
      * 's output
        * ".json"
  * its implementation is shared BETWEEN A platforms
    
```bash
npx expo-modules-autolinking search
---
yarn dlx expo-modules-autolinking search
---
pnpm dlx expo-modules-autolinking search
---
bunx expo-modules-autolinking search
```

### `resolve`

* Resolving
  * == second phase -- based on the -- `search` command's results /
    * resolves EACH search result -- to an -- object / has MORE (platform-specific) details
  * 's output
    * object / 
      * JSON format
      * contain "modules"

  ```bash
  npx expo-modules-autolinking resolve --platform <apple|android>
  ---
  yarn dlx expo-modules-autolinking resolve --platform <apple|android>
  ---
  pnpm dlx expo-modules-autolinking resolve --platform <apple|android>
  ---
  bunx expo-modules-autolinking resolve --platform <apple|android>
  ```

### `verify`

* Verifies the search results
  * by checking whether there are NO DUPLICATE packages
    * ⚠️OTHERWISE, an appropriate warning is shown⚠️

      ```bash
      npx expo-modules-autolinking verify
      ---
      yarn dlx expo-modules-autolinking verify
      ---
      pnpm dlx expo-modules-autolinking verify
      ---
      bunx expo-modules-autolinking verify
      ```

## Configuration

The behavior of the module resolution can be customized using some configuration options
* These options can be defined in three different places, from the lowest to the highest precedence:

- `expo.autolinking` config object in application's **package.json**
- per platform overrides with `expo.autolinking.ios` and `expo.autolinking.android` objects
- options provided to the CLI command, the `use_expo_modules!` method in the **Podfile** or `useExpoModules` function in the **settings.gradle**

<APIBox>

### `searchPaths`

A list of paths relative to the app's root directory where the autolinking script should search for Expo modules.
It defaults to a list of all **node_modules** folders found when traversing up through a monorepo, starting from the app's root directory.
Useful when your project has a custom structure or you want to link local packages from folders different than **node_modules**.

```json package.json
{
  "expo": {
    "autolinking": {
      "searchPaths": ["../../packages"]
    }
  }
}
```

When used with the CLI, you can pass the search paths as command arguments like this:

<Terminal cmd={['$ npx expo-modules-autolinking search ../../packages']} />

</APIBox>
<APIBox>

### `exclude`

A list of package names to exclude from autolinking
* These packages will not be autolinked even if they are found in the search paths.
For example, you may want not to link some packages that you don't use on the specific platform to reduce the binary size.
The following config in **package.json** will exclude `expo-random` from autolinking on Android:

```json package.json
{
  "expo": {
    "autolinking": {
      "android": {
        "exclude": ["expo-random"]
      }
    }
  }
}
```

Note that the `exclude` option is for excluding the autolinking of Expo packages
* To exclude the autolinking for any other packages, create **react-native.config.js** at the root directory of your project and apply the configuration as shown in the example below:

```js react-native.config.js
module.exports = {
  dependencies: {
    'library-name': {
      platforms: {
        android: null,
      },
    },
  },
};
```

</APIBox>
<APIBox platforms={['ios']}>

### `flags`

CocoaPods flags to pass to each autolinked pod
* `inhibit_warnings` is likely the only flag most developers want to use, to inhibit Xcode warnings produced when compiling the autolinked modules.
You can refer to the [CocoaPods Podfile documentation](https://guides.cocoapods.org/syntax/podfile.html#pod) for available flags.

<CodeBlocksTable tabs={['Podfile', 'package.json']}>

```ruby
use_expo_modules!({
  flags: {
    :inhibit_warnings => false
  }
})
```

```json
{
  "expo": {
    "autolinking": {
      "ios": {
        "flags": {
          "inhibit_warnings": true
        }
      }
    }
  }
}
```

</CodeBlocksTable>

</APIBox>

## Common questions

### How to set up the autolinking in my app?

All projects created with the `npx create-expo-app` command are already configured to use Expo Autolinking
* If your project was created using a different tool, see [Installing Expo modules](/bare/installing-expo-modules) to make sure your project includes all necessary changes.

### What do I need to have in my module to make it autolinkable?

The module resolution algorithm searches only for packages that contain the [Expo module config](/modules/module-config/) file (**expo-module.config.json**) at the root directory, next to the **package.json** file.
It's also necessary to include supported platforms in the `platforms` array — if the platform for which the autolinking algorithm is run is not present in this array, it's just skipped in the search results.

### How is it different from React Native community CLI autolinking?

- Expo Autolinking comes in with built-in support for monorepos, Yarn workspaces and transitive dependencies.
- It's also significantly faster, even though the module resolution algorithm is more complex to be more reliable and match the Node's module resolution.
- Expo module resolution is also capable of detecting the duplicates which is a common issue in monorepos.
- Last but not least, it integrates well with all the features offered by Expo Modules APIs.

### Opting out of Expo Autolinking

Starting from SDK 52, Expo Autolinking comes enabled by default, if you would like to use the React Native community CLI autolinking instead, set `EXPO_USE_COMMUNITY_AUTOLINKING=1` and add `@react-native-community/cli` as a dev dependency to your project.
