---
title: Glossary of terms
description: List of non-obvious terms used within the documentation, related to Expo or cross-platform development in general.
---

### App config

* == **app.json** / **app.config.json** / **app.config.js** / **app.config.ts** | root project directory 
* see [app config configuration](../workflow/configuration.md)
* uses
  * configure how [Expo CLI](#expo-cli) works
  * generate a project's public [manifest](#expo-manifest) | EAS Update 
    * == native apps' **index.html**
  * list Expo's [config plugins](#config-plugin) / 👀influence how `npx expo prebuild` -- generates -- native code 👀

### app.json

* == [app config](#app-config)

### Apple capabilities

Cloud services that are provided by Apple. These services must be enabled for an application in the [Apple Developer Portal](#apple-developer-portal).

### Apple Developer Portal

Apple's [official website](https://developer.apple.com/) for managing application code signing. EAS Credentials automate most of the common reasons a developer might visit this website when developing an app.

### Auto capability signing

A feature of EAS Build that automatically enables or disables [Apple capabilities](#apple-capabilities) based on the project's entitlements file. [Learn more](/build-reference/ios-capabilities/).

### Autolinking

* == cross-platform tool / 
  * native modules -- , via native package managers, are automatically linked to -- native apps
  * |
    * Android, the tool is 
      * used | **android/app/build.gradle**
      * invoked | [Gradle](#gradle) sync process
    * iOS, the tool is
      * used | [CocoaPods](#cocoapods) **ios/Podfile**
      * invoked | `pod install`
  * built-in versions
    * [Expo Autolinking](#expo-autolinking)
    * [Community Autolinking](#community-autolinking)

* default [Prebuild template](#prebuild-template) includes support for [Expo Autolinking](#expo-autolinking), and the [Community Autolinking](#community-autolinking) fork.

### Babel

Transpiler used for removing language features that aren't available in the runtime's [JavaScript engine](#javascript-engine).
[Metro](#metro-bundler) uses Babel internally.

Projects can configure how Babel is used by modifying the **babel.config.js** file in the project directory.
This file is optional when using [Expo CLI](#expo-cli).
Expo projects should extend the default Babel preset [`babel-preset-expo`](https://github.com/expo/expo/tree/main/packages/babel-preset-expo).

### Bare workflow

* := approach / native projects (**android/** and **ios/**) are
  * versioned | Git
  * maintained manually
* uses
  * "bare" React Native apps / you MANUALLY make changes | native projects
    * pros
      * freedom to customize
    * HIGH maintenance overhead

* != approach / use [app config & prebuild](../workflow/continuous-native-generation.md)
  * -> native projects are
    * NOT versioned
    * generated on demand -- via -- `npx expo prebuild`, which is the [recommended approach](../workflow/continuous-native-generation.md#prebuild)

### Bun

A JavaScript runtime and a drop-in alternative for Node.js. For more information about usage with Expo and EAS, see [using Bun](/guides/using-bun/) guide.

### CocoaPods

The iOS package manager that is used to link native modules to the native iOS project. This package manager is configured using the **ios/Podfile** file and updated when a user runs `pod install` in the **ios** directory.

### Community Autolinking

This refers to the React Native community [fork](https://github.com/react-native-community/cli/issues/248#issue-422591744) of the [Expo Autolinking](#expo-autolinking). The requirements for linking a module are different from [Expo Autolinking](#expo-autolinking), however, the implementation is the same.

### Config introspection

A process for evaluating the results of [`npx expo prebuild`](#prebuild) in-memory without persisting any code changes. This is used in [Auto Capability Signing](#auto-capability-signing) to determine what the entitlements file will look like without generating any native code. This process is also used in the [VS Code Expo](#vs-code-expo) extension to debug [Config Mods](#config-mods).

### Config Mods

Async functions that are appended to the [app config](#app-config) for use in [Prebuild](#prebuild). These functions are given a single native file to modify such as **AndroidManifest.xml** or **Info.plist**. Config mods are chained together and come from the package `@expo/config-plugins`. For more information, see [Config plugins](/config-plugins/introduction/).

### Config Plugin

A JavaScript function that is used to append [config mods](#config-mods) to the [app Config](#app-config) for use in [Prebuild](#prebuild). For more information, see [Config Plugins](/config-plugins/introduction/).

### Continuous Native Generation (CNG)

An abstract concept that describes the process of generating native projects from a set of inputs. In the context of Expo, CNG is implemented via the [`prebuild`](#prebuild) command. See [CNG](/workflow/continuous-native-generation/) and [Expo Prebuild](/workflow/prebuild/) for more information.

### create-expo-app

A standalone command line tool (CLI) for bootstrapping new React Native apps with the `expo` package installed. See [`create-expo-app` reference](/more/create-expo/) for more information.

### create-react-native-app

A standalone command line tool (CLI) for bootstrapping new React Native apps with the `expo` package installed and the native code generated. This CLI also enables the use of bootstrapping from an example project in [expo/examples](https://github.com/expo/examples).

This package can be used by running any of the following commands:

- `npx create-expo-app`
- `yarn create expo-app`
- `npm create expo-app`

### Dangerous Mods

Config [modifiers](#config-mods) that apply unstable changes to a native project during [prebuild](#prebuild). Using these modifiers is unpredictable and prone to breaking changes between major version bumps in [Expo SDK](#expo-sdk).

### Development build

* == debug build of your app / contains the `expo-dev-client` package
* == evolution of [Expo Go](#expo-go) /
  * ❌NOT have Expo Go's limitations ❌
  * can be customized -- to -- your application's needs
* uses
  * 💡build production-grade apps -- with -- Expo 💡
* see [Development builds](../get-started/set-up-your-environment.md)

### Dev clients

`expo-dev-client` is a library that allows you to create a development build and includes useful development tools. You might also come across "custom dev client", a synonym for [Development builds](#development-build).

### Development server

* := server / started locally
  * -- via -- `npx expo start` from [Expo CLI](#expo-cli)
  * typically hosted | `http://localhost:8081`
  * hosts a [manifest](#expo-manifest) | `/` 
    * used by the client -- to request, from the bundler, the -- JS bundle 

### EAS

[Expo Application Services (EAS)](/eas) are deeply integrated cloud services for Expo and React Native apps, such as [EAS Build](/build/introduction), [EAS Submit](/submit/introduction) and [EAS Update](/eas-update/introduction).

### EAS CLI

The command-line tool for working with EAS. {/* Pending creation of eas-cli [Read more](/eas-cli). */}

### EAS Config

The **eas.json** file used to configure [EAS CLI](#eas-cli). For more information, see [Configuring EAS Build with eas.json](/build/eas-json/).

### EAS Metadata

A command-line tool for uploading and downloading Apple App Store metadata as JSON. This tool is available in the [EAS CLI](#eas-cli) package and should be used to improve the iOS submission process. For more information, see [EAS Metadata](/eas/metadata).

### EAS Update

1. The cloud hosting service [EAS Update](/eas-update/introduction/) that is used for OTA Updates.
2. The CLI command `eas update` from [EAS CLI](#eas-cli) used to publish static files to the cloud hosting service.

### Emulator

Emulator is used to describe software emulators of Android devices on your computers. Typically, iOS emulators are referred to as [Simulators](#simulator).

### Entry point

The entry point usually refers to the initial JavaScript file used to load an application. In apps using [Expo CLI](#expo-cli), the default entry point is **./node_modules/expo/AppEntry.js** which simply imports the **App.js** file from the root project directory and registers it as the initial component in the native app.

### Experience

A synonym for an app that usually implies something more single-use and smaller in scope, sometimes artistic and whimsical.

### Expo Autolinking

The original [Autolinking](#autolinking) system is designed for projects using `expo-modules-core`. This system links modules based on the existence of an **expo-module.config.json** in the library's root directory.

### Expo CLI

* == CL tool -- for working with -- Expo 
  * NOWADAYS -- refers to the -- [Local Expo CLI](#local-expo-cli--versioned-expo-cli)
  * HISTORICALLY -- refers to the -- [Global Expo CLI](#global-expo-cli)
* see [Expo CLI](../more/expo-cli.md)

### Expo client

The former name for the [Expo Go](#expo-go) app.

### Expo export

Refers to the command `npx expo export` from [Expo CLI](#expo-cli). This command is used to bundle the app's JavaScript and assets, and then export them into a static folder that can be uploaded to a hosting service like [EAS Update](#eas-update), and embedded in a [native runtime](#native-runtime) for offline use.

### Expo Go

* == Android and iOS app /
  * uses
    * sandbox for
      * learning React Native
      * experimenting with React Native
  * limitations
    * ⚠️NOT possible to include CUSTOM native code ⚠️
  * recommendations 
    * ❌NOT for building & distributing production apps ❌
      * -> use better [development build](#development-build)

### Expo install

Refers to the command `npx expo install` from [Expo CLI](#expo-cli). This command is used to install npm packages containing [native modules](#native-module) that work with the currently installed version of `expo` in the project. Not all packages are supported. This command wraps the globally installed [package managers](#package-manager).

### Expo Module Config

A file named **expo-module.config.json** that lives in the root directory of a [native module](#native-module). For more information, see [Module Config](/modules/module-config/).

### Expo SDK

A collection of [npm](#npm) packages containing [native modules](#native-module) that provides access to device/system functionality such as camera, push notification, contacts, file system, and more.

- Each package supports Android, iOS, and web whenever possible.
- The interface is completely written in [TypeScript](#typescript).
- All packages in the Expo SDK work with each other and can safely be compiled together.
- Any package in the SDK can be used in any [React Native](#react-native) app, with minimal, shared setup. [Learn more](/bare/installing-expo-modules/).
- All packages are [open source](https://github.com/expo/expo/tree/main/packages) and can be freely customized.

### Expo start

Refers to the command `npx expo start` from [Expo CLI](#expo-cli). This command is used to start a local [development server](#development-server) that a [client](#expo-client) connects to interact with the [Metro bundler](#metro-bundler).

### Fabric

The React Native rendering system which is used to create and manage native views. For more information, see [Fabric Renderer](https://reactnative.dev/architecture/fabric-renderer).

### Flipper

A mobile app debugger used internally at Meta. It was previously recommended for use with React Native, but the integration is now deprecated and no longer supported by the React Native team [(RFC-0641)](https://github.com/react-native-community/discussions-and-proposals/blob/main/proposals/0641-decoupling-flipper-from-react-native-core.md).

### FYI

Sometimes referred to as **Expo FYI**, is a collection of tailored solutions to complex issues that live at [expo.fyi](https://expo.fyi/). FYI links are utilized throughout Expo's developer tooling to help provide a better developer experience to users.

### Global Expo CLI

* `expo-cli` / installed globally | user's machine
  * used ACROSS ALL projects
  * story of it
    * introduced | SDK 30 (2018)
    * deprecated -- in favor of the -- [Local Expo CLI](#local-expo-cli--versioned-expo-cli) | SDK 46 (2022)

### Gradle

Gradle is a build automation tool for multi-language software development. It's used to build Android apps. It controls the development process in the tasks of compilation and packaging to testing, deployment, and publishing.

### Hermes engine

A [JavaScript engine](#javascript-engine) developed by [Meta](#meta) specifically for use with [React Native](#react-native). Hermes features ahead-of-time static optimization and compact bytecode to improve performance with focus on mobile devices, and is the default JS engine.

### iOS

The operating system used on iPhone, iPad, and Apple TV. [Expo Go](#expo-go) currently runs on iOS for iPhone and iPad.

### JavaScript engine

A native package that can evaluate JavaScript on-device. In React Native, we predominantly use [Hermes](#hermes-engine) by [Meta](#meta). Other options include [JavaScriptCore](#javascriptcore-engine) by Apple, and V8 by Google.

### JavaScriptCore engine

A [JavaScript engine](#javascript-engine) developed by Apple and built-in to [iOS](#ios). React Native for [Android](#android) also can use a version of JavaScriptCore for parity. Debugging with JavaScriptCore is less sophisticated than V8 or [Hermes](#hermes-engine) which implement the [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/).

### Linking

Linking can mean [deep linking into apps similar to how you link to websites on the web](/linking/overview/) or [autolinking](#autolinking).

### Local Expo CLI / "Versioned Expo CLI"

* == `@expo/cli` -- installed with the -- `expo` package
* "Versioned Expo CLI"
  * Reason: 🧠 it's installed | user's project 🧠
  * != NOW deprecated `expo-cli` / installed globally

### Expo Manifest

* == [web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
* == information /
  * used by Expo Go -- to run the -- app

### Meta

Formerly Facebook, Meta is the group that develops [React Native](#react-native), [Metro Bundler](#metro-bundler), [Hermes Engine](#hermes-engine), [Yoga](#yoga) and more. The Expo team collaborates with Meta to deliver the best possible developer experience.

### Metro bundler

The bundler used for converting JavaScript files and assets into a format that runs on a [native runtime](#native-runtime). This bundler is maintained by [Meta](#meta) and used for React Native (including web) apps. For more information, see [Metro documentation](https://metrobundler.dev/).

### Metro Config

The **metro.config.js** file used to configure [Metro bundler](#metro-bundler). This should extend the package `@expo/metro-config` when using [Expo CLI](#expo-cli). For more information, see [Customizing Metro](/guides/customizing-metro).

### Monorepo

A project that has multiple sub-projects which are all linked together via the package manager. A monorepo is a great way to maintain codebase for a cross-platform app.

### Native directory

The React Native ecosystem has thousands of libraries. Without a purpose-built tool, it's hard to know what the libraries are, to search through them, to determine the quality, try them out, and filter out the libraries that won't work for your project (some don't work with Expo, some don't work with Android or iOS). [React Native Directory](https://reactnative.directory/) is a website that aims to solve this problem, we recommend you use it to find packages to use in your projects.

### Native module

A module written in native code that exposes native platform functionality to the JavaScript engine via the JS global. This functionality is usually accessed via `import { NativeModules } from 'react-native';`.

### Native runtime

A native application containing a [JavaScript engine](#javascript-engine), and is capable of running a React application. This includes [Expo Go](#expo-go), [development build](#development-build), [standalone apps](#standalone-app), and even web browsers like Chrome.

### npm

[npm](https://www.npmjs.com/) is a package manager for JavaScript and the registry where the packages are stored. An alternative package manager, which we use internally at Expo, is [yarn](#yarn).

### Package manager

Automates the process of installing, upgrading, configuring, and removing libraries, also known as dependencies, from your project. See [npm](#npm) and [yarn](#yarn).

### Platform extensions

Platform extensions are a feature of the [Metro bundler](#metro-bundler) which enables users to substitute files on a per-platform basis given a specific filename. For example, if a project has a **.index.js** file and a **.index.ios.js** file, then the **index.ios.js** will be used when bundling for iOS, and the **index.js** file will be used when bundling for all other platforms.

By default, platform extensions are resolved in `@expo/metro-config` using the following formula:

- Android: **\*.android.js**, **\*.native.js**, **\*.js**
- iOS: **\*.ios.js**, **\*.native.js**, **\*.js**
- Web: **\*.web.js**, **\*.js**

{/* TODO: Multi-Resolution Asset Extensions */}

### Prebuild

* := process of generating, for a React Native project based on the [app config](#app-config), the temporary native
  * `android/` &
  * `ios/` 
* how to run it?
  * running `npx expo prebuild`
    * from [Expo CLI](#expo-cli)
    * | project directory

### Prebuild template

* React Native project template
  * uses
    * first step of [Prebuilding](#prebuild)
  * versioned with the [Expo SDK](#expo-sdk)
    * -> depends on project's installed version of `expo` 
  * steps
    * clone the template
    * run `npx expo prebuild`
      * [Config mods](#config-mods) -- can modify -- various template's files

* `npx expo prebuild --template /path/to/template`
  * choose the prebuild template

* [`expo-template-bare-minimum`](https://github.com/expo/expo/tree/main/templates/expo-template-bare-minimum)
  * default Prebuild template

### Publish

We use the word "publish" as a synonym for "deploy".
When you publish an app, it becomes available at a persistent URL from Expo Go, or in the case of [Standalone apps](#standalone-app), it updates the app.

### React Native

[React Native](https://reactnative.dev/) lets you build mobile apps using only JavaScript. 
It uses the same design as React, letting you compose a rich mobile UI from declarative components.

### React Native Web

A high-performing abstraction on top of `react-dom` that enables core primitives from [React Native](#react-native) to run in the browser. React Native for web (RNW) was developed at X and is currently used for their [main website](https://x.com). [Expo SDK](#expo-sdk) and [Expo CLI](#expo-cli) have first-class support for RNW.

### React Navigation

The preferred navigation library for React Native apps, developed and sponsored by the Expo team.

### Remote Debugging

Remote Debugging is a deprecated way of debugging React Native apps. A better alternative today is to use [Hermes](#hermes-engine), as you can connect Chrome Dev Tools to it.

Also known as Async Chrome Debugging, it was an experimental system for debugging React Native apps. The system works by executing the application JavaScript in a Chrome tab's web worker, then sending native commands over a websocket to the native device.

### Simulator

An emulator for iOS devices that you can run on macOS (or in [Snack](#snack)) to work on your app without having to have a physical device handy.

### Slug

`slug` in the [app config]((#appjson) is a URL-friendly name for your project. It is unique across your Expo account.

### Snack

[Snack](https://snack.expo.dev/) is an in-browser development environment where you can build Expo [experiences](#experience) without installing any tools on your phone or computer.

### Software Mansion

A development agency in Kraków, Poland. Maintainers of `react-native-gesture-handler`, `react-native-screens`, and `react-native-reanimated`. The platform team at Expo is composed of a number of contractors from Software Mansion. All of Software Mansion's core React Native libraries are supported in [Expo Go](#expo-go).

### Standalone app

Synonymous with "Production build". An application binary that can be submitted to the Google Play Store or Apple App Store. For more information, see [Build your project for app stores](/deploy/build-project/) or [Run builds locally or on your own infrastructure](/build-reference/local-builds/).

### Store Config

The **store.config.json** file used to configure [EAS Metadata](#eas-metadata). This file can be generated from an existing App Store entry using `eas metadata:pull`.

### Sweet API

The Swift and Kotlin API for writing React Native modules. This API is provided by the library `expo-modules-core` which is shipped with the `expo` package. For more information, see [Module API](/modules/module-api/).

### TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. The Expo SDK is written in TypeScript, and we highly recommend using it. For more information, see our [TypeScript guide](/guides/typescript/).

### Updates

Traditionally, apps for Android and iOS are updated by submitting an updated binary to the App and Play stores. Updates allow you to push an update to your app without the overhead of submitting a new release to the stores. For more information, see [Publishing](/eas-update/introduction) documentation.

### VS Code Expo Tools

The VS Code extension for improving the developer experience of working with app config files. This extension provides autocomplete and intellisense for the [app config](#app-config), [Store Config](#store-config), [Expo Module Config](#expo-module-config), and [EAS Config](#eas-config). For more information, see the [VS Code Expo Tools extension](https://marketplace.visualstudio.com/items?itemName=expo.vscode-expo-tools).

### Watchman

The file watcher used by [Metro](#metro-bundler) to perform hot reloads during development. Watchman contains native code and may cause issues when installed globally. Watchman is maintained by [Meta](#meta).

### webpack

The deprecated bundler used by [Expo CLI](#expo-cli) for developing [`react-native-web`](#react-native-web) apps.

### Yarn

A package manager for JavaScript. For more information, see [Yarn](https://yarnpkg.com/) documentation.

### Yarn workspaces

The [monorepo](#monorepo) solution we recommend for Expo users. See [Working with Monorepos](/guides/monorepos) for more information on how to configure Yarn workspaces.

### Yoga

A native cross-platform library used by React Native internally to provide [CSS FlexBox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) support to native views. React Native styles are passed to Yoga to lay out and style elements on the screen. For more information, see [Yoga](https://github.com/facebook/yoga) documentation.
