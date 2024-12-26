* goal
  * EAS Build Limitations

## Fixed memory & CPU limits | build worker servers

* ⚠️if your build process requires a significant amount of memory -> resources available might be INSUFFICIENT -- to -- build your app ⚠️
  * SOLUTION: use a [`large` resource class](../eas/json.md#common-properties-for-native-platforms) | "eas.json"
  * see
    * [Android-specific resource class](infrastructure.md#android-build-server-configurations)
    * [iOS-specific resource class](infrastructure.md#ios-build-server-configurations)
    * [Server infrastructure reference](infrastructure)

## Limited dependency caching

* Build jobs for
  * Android -> install npm and Maven dependencies -- from a -- local cache
  * iOS -> install 
    * npm dependencies -- from a -- local cache
    * CocoaPods artifacts -- from a -- cache server

* intermediate artifacts
  * are NOT cached and restored 
    * 👀EXCEPT, you commit them | your Git repository 👀
      * -> they will be uploaded | build servers
      * _Example:_ based on **package-lock.json** or **yarn.lock** 
  * _Example:_ `node_modules/`

* see [dependency caching](caching)

## Maximum build duration of 2 hours

* ❌if your build takes too long -> it will be canceled ❌
  * | free plan, MAXIMUM time varies
  * | premiums plan, MAXIMUM time is 2 hours

## Yarn workspaces -- is recommended for -- monorepos

* if you use != yarn (_Example:_ Nx) -> limited Official guidance
* [Yarn Workspaces](https://yarnpkg.com/en/docs/workspaces)
* Reason why Yarn is recommended: 🧠ONLY monorepo tool / Expo team provide first-class integration 🧠

## Get notified about changes

* subscribe | [EAS newsletter](https://expo.dev/eas)
