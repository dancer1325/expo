---
title: Continuous Native Generation (CNG)
description: Learn about managing your native projects with Continuous Native Generation (CNG) and Prebuild.
sidebar_title: Continuous Native Generation
---

* goal
  * manage your native projects -- via --
    * Continuous Native Generation (CNG)
    * Prebuild

* 1! native project 
  * complicated to
    * maintain,
    * scale,
      * if it grows -> MORE complex 
    * update

* cross-platform app = MULTIPLE native projects / 
  * you must
    * maintain
    * keep up to date
  * if it grows -> complexity MULTIPLIED | EACH platform
    * SOLUTION: 👀**Continuous Native Generation** 👀

* Continuous Native Generation
  * projects -- are generated from a -- standard template + configuration 
  * developer's responsibility
    * 👀ONLY maintain the definition of their customizations (NOT ALL native project code) 👀

## CNG | React Native apps

* **CNG** can be applied
  * | React Native apps -- via -- [Prebuild](#usage) / 
    * automate upgrades,
    * install or uninstall libraries,
    * apply white label customizations,
    * share configuration | MULTIPLE apps,
    * reduce [orphaned code](#prebuild)
  * | Expo -- by -- combining
    1. [app config](../workflow/configuration.md)
    2. Arguments -- passed to the -- `npx expo prebuild` command
    3. TODO:Version of `expo` that's installed in the project and corresponding [prebuild template](https://github.com/expo/expo/tree/main/templates/expo-template-bare-minimum).
    4. [Autolinking](/more/glossary-of-terms#autolinking), for linking [native modules](/more/glossary-of-terms/#native-module) found in the **package.json**.
    5. Native subscribers, for reducing native code side-effects in entry point files, such as **MainApplication** or **AppDelegate**.
    6. EAS Credentials for code signing additional targets and entitlements.

The end result is a workflow where a developer can express any native application with the app config and generate that project continuously &mdash; by running `npx expo prebuild`.

## Usage

* `npx expo prebuild`
  * creates the **android/** and **ios/**
    * 👀if you MANUALLY modify the generated directories & run `npx expo prebuild --clean` -> risk losing your changes 👀 
    * 💡if you want to modify them -> use [config plugins](../config-plugins/introduction.md) 💡
      * Reason: 🧠 perform modifications | prebuild 🧠
  * see 
    * [Expo Prebuild](#prebuild)
    * [Expo Prebuild optionality](#optionality)

### Usage with EAS Build

If your project does not contain **android** and **ios** directories, EAS Build will run Prebuild to generate these native directories before compilation. This is the default behavior for any project created using `npx create-expo-app`.

For a project that has **android** and **ios** directories, EAS Build will not run Prebuild to avoid overwriting any changes you've made to the native directories.

If you troubleshoot your app by [compiling it locally](/guides/local-app-development/#local-app-compilation) (running `npx expo prebuild`, or `npx expo run:android` or `npx expo run:ios`), you can still use Prebuild with EAS Build to generate fresh native directories during the build process. In this scenario, add the **android** and **ios** directories to **.gitignore** or [**.easignore**](/build-reference/easignore/) files:

```diff .gitignore
+ /android
+ /ios
```

### Usage with Expo CLI run commands

You can perform a native build locally by running:

<Terminal
  cmd={[
    '# Build your native Android project',
    '$ npx expo run:android',
    '',
    '# Build your native iOS project',
    '$ npx expo run:ios',
  ]}
/>

If native directories are absent, `npx expo prebuild` will run once for the specific platform. On subsequent uses of these `run` commands, manually run `npx expo prebuild --clean` to ensure the native code is freshly synchronized with your local configuration.

## Platform support

Prebuild currently supports Android and iOS. Web support is not required because there is no native project to generate for the web and the web app it runs in a web browser. Use the `--platform` option to run prebuild for individual platforms:

<Terminal cmd={['$ npx expo prebuild --platform ios']} />

## Dependencies

Prebuild begins by initializing new native projects from a template corresponding to each Expo SDK version. This also aligns with specific React and React Native versions. You will see a warning when running `npx expo prebuild` when your project's React and React Native versions differ from the expected versions from specified in the `dependencies` field of the [template's **package.json**](https://github.com/expo/expo/tree/main/templates/expo-template-bare-minimum) if they differ.

You can skip changing npm package versions with the `--skip-dependency-update` option:

<Terminal cmd={['$ npx expo prebuild --skip-dependency-update react-native,react']} />

## Package managers

When the [dependencies](#dependencies) are changed, Prebuild will reinstall libraries using the package manager that is currently used in the project (this is inferred from the lockfile). You can force a specific package manager by providing one of: `--npm`, `--yarn`, `--pnpm`.

All installations can be skipped by passing the `--no-install` command, which is useful for testing generation quickly.

## Clean

The `--clean` option deletes any existing native directories before generating. Re-running `npx expo prebuild` without the `--clean` option will layer changes on top of the existing files, which is faster, but may not produce the same results in some cases.

For example, some config plugins aren't idempotent. When a project utilizes multiple "dangerous modifiers" to add regex changes to an app's code, it can lead to unexpected behavior. This is why using the `--clean` option is the safest way to use the prebuild command and is generally recommended in most cases.

#### Using `--clean` option

When using the `--clean` option, you'll be warned if you have any uncommitted changes to your git code repository, as this option will delete and recreate all of your native project files. This prompt is optional and will be skipped when encountered in CI. You can disable this check by enabling the environment variable `EXPO_NO_GIT_STATUS=1`.

There are cases where developers may want to swap between workflows often. For example, you may want to build custom functionality natively in Android Studio and Xcode, and then move that functionality into local config plugins.

## Templates

You can customize how the native folders are generated by [config plugins](/config-plugins/introduction). Many config plugins already exist for lots of modifications, and community libraries often ship their own as well. You can [see a list of some popular plugins](https://github.com/expo/config-plugins) for more information.

Prebuild starts from template files, which are then modified with config plugins. The template files are based on the Expo SDK version and come from the npm package [`expo-template-bare-minimum`](https://github.com/expo/expo/tree/main/templates/expo-template-bare-minimum). You can change the template used by passing `--template /path/to/template.tgz` to the `npx expo prebuild` command. This is not generally recommended because the base modifiers in `@expo/prebuild-config` make some undocumented assumptions about the template files, so it may be tricky to maintain your custom template.

> **Note:** In network environments where all packages are downloaded from a private registry and npm public registry access is blocked, a locally-available template must be passed to the prebuild command. [Learn more about using a local version of the default template](https://expo.fyi/prebuild-without-npm-access).

## Side effects

`npx expo prebuild` performs several side effects outside of generating the **android** and **ios** directories. Work is in progress to eliminate these side effects &mdash; ideally, running `npx expo prebuild` would generate the Android and iOS projects and leave the rest of the project untouched.

In addition to generating the native folders, prebuild also makes the following modifications:

- Modifies the `scripts` field in the **package.json** to replace `expo start --android` and `expo start --ios` with `expo run:android` and `expo run:ios`
- Modifies the `dependencies` field in the **package.json**

The convenience change to the `scripts` field is the only side effect that alters how a developer works on their app before/after prebuild. All other changes can be left in place and committed to git to minimize the diff when running prebuild.

## Optionality

* Prebuild
  * ⚠️optional ⚠️
    * | EXISTING React Native projects / managed manually,
      * ❌NOT use ❌
  * works seamlessly
    * -- with -- ALL 
      * Expo tools
      * Expo services
    * == 
      Developers can continue to make ([direct changes | their native projects](../more/glossary-of-terms.mdx#bare-workflow)) while adopting other Expo tools and workflows. 
      Later on, they can move their manual customizations to app config and/or config plugins, and then adopt CNG.

* ALMOST ALL / offered by Expo ([EAS](/eas/), Expo CLI, Expo SDK's libraries)
  * 👀built to **FULLY support** bare React Native projects 👀
    * Reason: 🧠MINIMUM requirement -- for supporting projects, via -- `npx expo prebuild` 🧠 
* [Expo Go](https://expo.dev/go) app
  * ONLY if they include JS fallbacks for native code absent | Expo Go runtime -> can load arbitrary React Native projects 

## Common questions

### CNG

<Collapsible summary="How does CNG helps with project upgrades?">

React Native developers who don't use **Continuous Native Generation** have reported that upgrading their apps to the latest version of React Native is the number one weakness of the library as per [React Native Survey (2022)](https://results.2022.stateofreactnative.com/opinions/#opinions_pain_points).

When using CNG, the upgrade process simply involves upgrading the npm dependencies, app config, and re-running `npx expo prebuild --clean`.

</Collapsible>

<Collapsible summary="How a React Native library author can adopt CNG?">

React Native library authors can adopt CNG in several ways. It depends on the complexity of their libraries. Here are a few scenarios:

- **No native code or configuration side-effects**: Libraries without native code or configuration side-effects, such as `react-native-blurhash`, can seamlessly integrate with `npx expo prebuild`. They can rely on Node Module Resolution without requiring any additional configuration.

- **Native code with no additional setup after install**: Libraries with native code can often be installed and linked automatically with [Expo Autolinking](/more/glossary-of-terms#autolinking), which runs before the native app is built.

- **Additional configuration side-effects and setup**: Libraries that require additional configuration side-effects can adopt CNG by creating [Expo config plugins](/config-plugins/introduction/) for their libraries. This approach enables library authors to automate adding values such as permission messages to the **Info.plist**, or injecting targets in the Xcode project.

- **Libraries Dependent on Native Runtime Hooks**: Libraries that depend on specific native runtime hooks, such as intercepting the initial launch URL via the `AppDelegate`, `MainActivity`, `MainApplication`, and so on, can utilize [**Lifecycle listeners**](/modules/android-lifecycle-listeners/) in the Expo Modules API. These lifecycle listeners allow these runtime hooks to be applied via Expo Autolinking instead of by modifying these standard native project files, eliminating the need for a config plugin.

Many complex libraries and services already support CNG via Expo Prebuild such as, [MapBox](https://github.com/rnmapbox/maps), [OneSignal](https://github.com/OneSignal/onesignal-expo-plugin), [Stripe](https://github.com/stripe/stripe-react-native), and [React Native Firebase](https://rnfirebase.io/#expo).

Adopting CNG by library authors is not a preqrequisite for using `npx expo prebuild`. If a library author has not adopted CNG, developers can still use `npx expo prebuild` by creating local [Config Plugins](https://github.com/expo/config-plugins/) to modify the native generation pipeline. This flexibility makes CNG accessible and beneficial to all developers within the React Native community.

</Collapsible>

<Collapsible summary="Is CNG limited to React Native projects?">

No, CNG is a versatile pattern that can be applied to any native project. While Expo Prebuild is a tool that implements CNG specifically for React Native projects, the concept itself is not limited to this framework.

</Collapsible>

<Collapsible summary="How does community uses CNG?">

Here are a few community examples of difficult native features converted into simple configuration files, which have allowed developers to build more powerful apps without compromising on iteration speed:

- [iOS Safari Extensions](https://github.com/andrew-levy/react-native-safari-extension): Here, the process of creating a Safari Extension for iOS, which is a notoriously difficult feature to implement, is reduced to a few of lines of JSON.

- [iMessage Sticker App](https://github.com/expo/config-plugins/tree/main/packages/ios-stickers): This Expo config plugin can generate an entire iMessage Sticker App from a JSON object.

- [Cross-platform end-to-end testing](https://github.com/expo/config-plugins/tree/main/packages/detox): Configure native apps to support E2E testing with Detox in a single-line.

- [The entire Firebase suite](https://rnfirebase.io/): Here you can see the entire native Firebase suite going from a multi-step native configuration process across multiple IDEs, down to basic JSON configuration.

- [Cross-platform home screen widgets](https://github.com/gaishimo/eas-widget-example): This Expo config plugin can generate a home screen widget for Android and iOS.

- [Notification extension and code signing](https://github.com/OneSignal/onesignal-expo-plugin): This Expo config plugin generates a notification extension target on iOS and it augments the EAS credentials service to keep zero-config code signing working.

- [Apple App Clips](https://github.com/bndkt/react-native-app-clip): This Expo config plugin takes the process of generating an Apple App Clip from a multi-step process, ranging across multiple targets, and reduces it to a single line `["react-native-app-clip", { "name": "My App Clip" }]`.

At any point, these features can be easily added and removed, without any side effects. CNG allows developers to experiment with complex features and iterate on them quickly without worrying about the long-term maintenance costs or potential orphaned code in their project.

</Collapsible>

<Collapsible summary="Can CNG be used for operating systems other than Android and iOS?">

Absolutely! CNG is an abstract concept that can be applied to any operating system. Although Expo Prebuild officially implements CNG for Android and iOS, it also provides abstract platform support for developers to create implementations for additional platforms.

</Collapsible>

<Collapsible summary="Is using Expo a requirement for CNG?">

Not at all. CNG is an open pattern that can be adopted by any community. We've defined the pattern abstractly to help other communities understand how they can adopt CNG for their own projects.

</Collapsible>

<Collapsible summary="How does CNG compare to web development patterns such as Static Site Generation (SSG)?">

CNG shares similarities with SSG in that it generates a project from a set of inputs. However, CNG differs from SSG in its output. It generates native runtime code instead of static website code. This means the native project is generated on-demand, and the generated source code and configuration are discarded once the native project is compiled into a native app.

</Collapsible>

<Collapsible summary="Is it possible to use CNG with an existing brownfield project?">

CNG is designed to manage the entire state of a native project continuously. As a result, it's not intended for use with existing brownfield projects. However, you can use CNG to generate a new native project, which can then be integrated into an existing brownfield project.

</Collapsible>

### Prebuild

* Expo Prebuild
  * 👀streamlines CNG processing 👀
  * issues / addresses
    * How can Prebuild -- help with -- sensible project upgrades?
      * if you build native code -> requires 
        * familiarity with the platform's tooling
        * comprehension, rather copy & paste code suggestions
      * if you build cross-platform -> requires familiarity with ALL the platform's tooling
      * 💡if you use Prebuild -> ONLY requires updates package.json's versions 💡
        * Reason: 🧠regenerate the native project -- based on -- it 🧠
    * How does Prebuild -- simplify -- cross-platform configuration?
      * _Example of cross-platform configuration:_ app icon, name, splash screen,...
      * cross-platform configuration MUST be implemented manually | native code
      * if you use Prebuild -> cross-platform configurations -- are -- handled | config plugin level
        * -> ONLY needs to set 1! value -- to -- apply | ALL
          * _Example:_ `"icon": "./icon.png"`
    * How can I manage dependency side-effects -- via -- Prebuild?
      * MANY complex native packages -- require -- additional setup (beyond installing & [autolinking](../more/glossary-of-terms.mdx#autolinking))
        * _Example:_ camera library -- requires -- permission settings / 
          * == configuration side effect of a package 
          * added |
            * **AndroidManifest.xml** for Android
            * **Info.plist** for iOS 
          * if you paste | your project's native files 
            * -- can lead to -- DIFFICULT native compilation errors &
            * code / you now own and maintain
      * 👀if you use Prebuild library authors -> they create a [config plugin](../config-plugins/introduction.mdx) / automate adding the required configuration side effects for their library 👀
        * config plugin == script
        * | native code side effects, default [prebuild template](#templates) comes with
          * [Android Lifecycle Listeners](../modules/android-lifecycle-listeners.mdx)
          * [AppDelegate Subscribers](../modules/appdelegate-subscribers.mdx) 
    * How does Prebuild -- help with -- orphaned code?
      * if you uninstall a package -> CONFIRM that ALL required side effects were removed
        * if you miss ANYTHING -> orphaned code / you can NOT trace back to any particular package -> your project harder to understand & maintain
      * 👀if you use Prebuild -> less error-prune orphaned code 👀
        * Reason: 🧠ONLY side effect is the [config plugin](/config-plugins/introduction/) 🧠 

#### use cases / Prebuild NOT right fit | project?

##### Platform compatibility

* Expo Prebuild requirements
  * 👀native platforms / supported by the Expo SDK 👀
    * == Android & iOS
      * ⚠️web does NOT require it ⚠️
        * Reason: 🧠browser is used 🧠

##### Making changes directly is quicker than modularizing and automating

All native changes must be added with native modules (using React Native's built-in Native Module APIs or the Expo Modules API) and config plugins.
This means if you want to quickly add a native file to your project to experiment, then you may be better off running prebuild and adding the file manually, then working your way back into the system with a [monorepo](/guides/monorepos). 
We plan to speed this process up by adding functionality to [Expo Autolinking](/more/glossary-of-terms#expo-autolinking) that finds native project files outside of the native folders and links them before building.

If you want to modify the configuration, such as the **gradle.properties** file, you'll have to write a plugin ([example](https://github.com/expo/expo/blob/1c994bb042ad47fbf6878e3b5793d4545f2d1208/apps/native-component-list/app.config.js#L21-L28)).
This can be easily automated with helper plugin libraries, however, it is a bit slower if you need to do it often.

##### Config plugin support in the community

Not all packages support _Expo Prebuild_ yet.
If you find a library that requires extra setup after installation and doesn't yet have a config plugin, we recommend opening a pull request or an issue so that the maintainer is aware of the feature request.

Many packages, such as [`react-native-blurhash`](https://github.com/mrousavy/react-native-blurhash), don't require any additional native configuration beyond what is handled by [autolinking](/more/glossary-of-terms#autolinking) and so no config plugin is required.

Other packages, such as [`react-native-ble-plx`](https://github.com/Polidea/react-native-ble-plx), do require additional setup and therefore require a config plugin to be used with `npx expo prebuild` (in this case there's an external plugin called [`@config-plugins/react-native-ble-plx`](https://github.com/expo/config-plugins/tree/main/packages/react-native-ble-plx)).

Alternatively, we also have a repo for [out-of-tree config plugins](https://github.com/expo/config-plugins) which provides plugins for popular packages that haven't adopted the system yet. 
Think of this like [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) for TypeScript.
We prefer packages ship their own config plugin, but if they haven't adopted the system yet, the community can use the packages listed in the repo.
