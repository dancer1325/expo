
# App config
## == **app.json** / **app.config.json** / **app.config.js** / **app.config.ts** | root project directory 
TODO:
## see [app config configuration](../workflow/configuration.md)
TODO:
## uses
TODO:
### configure how [Expo CLI](#expo-cli) works
TODO:
### generate a project's public [manifest](#expo-manifest) | EAS Update 
TODO:
#### == native apps' **index.html**
TODO:
### list Expo's [config plugins](#config-plugin) / 👀influence how `npx expo prebuild` -- generates -- native code 👀
TODO:

# app.json
## == [app config](#app-config)
TODO:

# Apple capabilities
## These services must be enabled for an application in the [Apple Developer Portal](#apple-developer-portal).
TODO:

# Apple Developer Portal
## EAS Credentials automate most of the common reasons a developer might visit this website when developing an app.
TODO:

# Auto capability signing
## [Learn more](/build-reference/ios-capabilities/).
TODO:

# Autolinking
## == cross-platform tool / 
TODO:
### native modules are AUTOMATICALLY linked -- , via native package managers, to -- native apps
TODO:
### |
TODO:
#### Android, the tool is 
TODO:
##### used | **android/app/build.gradle**
TODO:
##### invoked | [Gradle](#gradle) sync process
TODO:
#### iOS, the tool is
TODO:
##### used | [CocoaPods](#cocoapods) **ios/Podfile**
TODO:
##### invoked | `pod install`
TODO:
### built-in versions
TODO:
#### [Expo Autolinking](#expo-autolinking)
TODO:
#### [Community Autolinking](#community-autolinking)
TODO:
## default [Prebuild template](#prebuild-template) includes support for [Expo Autolinking](#expo-autolinking), and the [Community Autolinking](#community-autolinking) fork.
TODO:

# Babel

# Bare workflow
## ⚠️[Deprecated](../more/release-statuses.md#deprecated)⚠️
TODO:
## ❌NO separation BETWEEN "managed" & "bare" workflows❌
TODO:
## := approach / native projects (**android/** and **ios/**) are
TODO:
### versioned | Git
TODO:
### maintained MANUALLY
TODO:
## uses
TODO:
### "bare" React Native apps / you MANUALLY make changes | native projects
TODO:
#### pros
TODO:
##### freedom to customize
TODO:
#### HIGH maintenance overhead
TODO:
## != approach / use [app config & prebuild](../workflow/continuous-native-generation.md)
TODO:
### -> native projects are
TODO:
#### NOT versioned
TODO:
#### generated on demand -- via -- [`npx expo prebuild`](../workflow/continuous-native-generation.md#prebuild)
TODO:
#### ALL projects use -- , based on Continuous Native Generation (CNG), -- the SAME architecture 
TODO:

# Bun
## Bun can also be used as a [package manager for JavaScript](#package-manager)
TODO:
## For more information about usage with Expo and EAS, see [using Bun](/guides/using-bun/) guide.
TODO:

# CocoaPods
## This package manager is configured using the **ios/Podfile** file and updated when a user runs `pod install` in the **ios** directory.
TODO:

# Community Autolinking
## == [React Native community fork -- of the -- Expo Autolinking](https://github.com/react-native-community/cli/issues/248#issue-422591744) /
TODO:
### DIFFERENT requirements
TODO:
### SAME implementation
TODO:

# Config introspection
## This is used in [Auto Capability Signing](#auto-capability-signing) to determine what the entitlements file will look like without generating any native code
TODO:
## This process is also used in the [VS Code Expo Tools](#vs-code-expo-tools) extension to debug [Config Mods](#config-mods).
TODO:

# Config Mods
## These functions are given a single native file to modify such as **AndroidManifest.xml** or **Info.plist**
TODO:
## Config mods are chained together and come from the package `@expo/config-plugins`
TODO:
## For more information, see [Config plugins](/config-plugins/introduction/).
TODO:

# Config Plugin
## For more information, see [Config Plugins](/config-plugins/introduction/).
TODO:

# Continuous Native Generation (CNG)
## In the context of Expo, CNG is implemented via the [`prebuild`](#prebuild) command
TODO:
## See [Continuous Native Generation](/workflow/continuous-native-generation/) for more information.
TODO:

# create-expo-app
## See [`create-expo-app` reference](/more/create-expo/) for more information.
TODO:

# create-expo-module
## See [`create-expo-module` reference](/more/create-expo-module/) for more information.
TODO:

# create-react-native-app
## This CLI also enables the use of bootstrapping from an example project in [expo/examples](https://github.com/expo/examples).
TODO:

# Dangerous mods
## Using these modifiers is unpredictable and prone to breaking changes between major version bumps in [Expo SDK](#expo-sdk)
TODO:
## For more information, see [Using a dangerous mod](/config-plugins/dangerous-mods/).
TODO:

# Development build
## == debug build of your app / contains the `expo-dev-client` package
TODO:
## == evolution of [Expo Go](#expo-go) /
TODO:
### ❌NOT have Expo Go's limitations ❌
TODO:
### can be customized -- to -- your application's needs
TODO:
## uses
TODO:
### 💡build production-grade apps -- with -- Expo 💡
TODO:
## see [Development builds](../get-started/set-up-your-environment.md)
TODO:

# Dev clients
## You might also come across "custom dev client", a synonym for [Development builds](#development-build).
TODO:

# Development server
## := server / started locally
* [here](../../../get-started/examples/startDeveloping)
### -- via -- `npx expo start` from [Expo CLI](#expo-cli)
* [here](../../../get-started/examples/startDeveloping)
### typically hosted | `http://localhost:8081`
* check the
  * output terminal
  * | browser
### hosts a [manifest](#expo-manifest) | `/` 
* hit [sample.http](sample.http)
#### used by the client -- to request, from the bundler, the -- JS bundle 
* check the content

# Expo Application Services (EAS)

# EAS Build
## EAS Build can be used to build [development builds](#development-build) and [standalone apps](#standalone-app).
TODO:

# EAS CLI
## For more information, see [EAS CLI](/eas/cli/) reference.
TODO:

# EAS Config
## For more information, see [Configuring EAS Build with eas.json](/build/eas-json/).
TODO:

# EAS Hosting

# EAS Insights
## It uses the `expo-insights` library to send events to EAS Insights from the app.
TODO:

# EAS Metadata
## This tool is available in the [EAS CLI](#eas-cli) package and should be used to improve the iOS submission process
TODO:
## For more information, see [EAS Metadata](/eas/metadata/).
TODO:

# EAS Observe
## It uses the `expo-observe` library to collect metrics from production builds, which can then be viewed in the Observe dashboard.
TODO:

# EAS Update
## The cloud hosting service [EAS Update](/eas-update/introduction/) from [EAS](#expo-application-services-eas) that is used for OTA Updates.
TODO:
## The CLI command `eas update` from [EAS CLI](#eas-cli) used to publish static files to the cloud hosting service.
TODO:

# EAS Workflows
## Workflows are configured in YAML files under the **.eas/workflows** directory.
TODO:

# Emulator
## Typically, iOS emulators are referred to as [Simulators](#simulator).
TODO:

# Entry point
## In apps using [Expo CLI](#expo-cli), the default entry point is **./node_modules/expo/AppEntry.js** which simply imports the **App.js** file from the root project directory and registers it as the initial component in the native app.
TODO:

# Experience

# Expo Atlas
## It is used to inspect bundle size and identify which libraries contribute to the production bundle.
TODO:

# Expo Autolinking
## == ORIGINAL [Autolinking](#autolinking) system /
TODO:
### 's goal: projects / use `expo-modules-core`
TODO:
### links modules -- based on the -- existence of an "expo-module.config.json" | library's root directory
TODO:

# Expo CLI
## == CL tool -- for working with -- Expo 
TODO:
### NOWADAYS -- refers to the -- [Local Expo CLI](#local-expo-cli--versioned-expo-cli)
TODO:
### HISTORICALLY -- refers to the -- [Global Expo CLI](#global-expo-cli)
TODO:
## see [Expo CLI](../more/expo-cli.md)
TODO:

# Expo client

# Expo Doctor
## To use it, run `npx expo doctor` from your project's directory.
TODO:

# Expo export
## This command is used to bundle the app's JavaScript and assets, and then export them into a static folder that can be uploaded to a hosting service like [EAS Update](#eas-update), and embedded in a [native runtime](#native-runtime) for offline use.
TODO:

# Expo Fingerprint
## The hash represents native layer state, so tools can tell whether a TypeScript/JavaScript bundle is compatible with a given build without rebuilding
TODO:
## Primarily used for EAS Update's fingerprint runtime version policy and EAS Workflows for CI/CD automation.
TODO:

# Expo Go
## == Android and iOS app /
TODO:
### uses
TODO:
#### sandbox for
TODO:
##### learning React Native
TODO:
##### experimenting with React Native
TODO:
### limitations
TODO:
#### ⚠️NOT possible to include CUSTOM native code ⚠️
TODO:
### recommendations 
TODO:
#### ❌NOT for building & distributing production apps ❌
TODO:
##### -> use better [development build](#development-build)
TODO:

# Expo install
## This command is used to install npm packages containing [native modules](#native-module) that work with the currently installed version of `expo` in the project
TODO:
## Not all packages are supported
TODO:
## This command wraps the globally installed [package managers](#package-manager).
TODO:

# Expo MCP server
## It enables them to interact directly with your Expo projects.
TODO:

# Expo Module Config
## For more information, see [Module Config](/modules/module-config/).
TODO:

# Expo Modules API
## This API is provided by the library `expo-modules-core` which is included in the `expo` package.
TODO:

# Expo Orbit

# Expo Router
## It allows you to manage navigation between screens in your app, allowing users to move seamlessly between different parts of your app's UI, using the same components on multiple platforms (Android, iOS, and web).
TODO:

# Expo SDK
## [Learn more](/bare/installing-expo-modules/).
TODO:

# Expo start
## This command is used to start a local [development server](#development-server) that a [client](#expo-client) connects to interact with the [Metro bundler](#metro-bundler).
TODO:

# Fabric
## For more information, see [Fabric Renderer](https://reactnative.dev/architecture/fabric-renderer).
TODO:

# FYI
## FYI links are utilized throughout Expo's developer tooling to help provide a better developer experience to users.
TODO:

# Global Expo CLI
## `expo-cli` / installed globally | user's machine
TODO:
### used ACROSS ALL projects
TODO:
### story of it
TODO:
#### introduced | SDK 30 (2018)
TODO:
#### deprecated -- in favor of the -- [Local Expo CLI](#local-expo-cli--versioned-expo-cli) | SDK 46 (2022)
TODO:

# Gradle
## It's used to build Android apps
TODO:
## It controls the development process in the tasks of compilation and packaging to testing, deployment, and publishing.
TODO:

# Hermes engine
## Hermes features ahead-of-time static optimization and compact bytecode to improve performance with focus on mobile devices, and is the default JS engine.
TODO:

# iOS
## [Expo Go](#expo-go) currently runs on iOS for iPhone and iPad.
TODO:

# JavaScript engine
## In React Native, we predominantly use [Hermes](#hermes-engine) by [Meta](#meta)
TODO:
## Other options include [JavaScriptCore](#javascriptcore-engine) by Apple, and V8 by Google.
TODO:

# JavaScriptCore engine
## React Native for [Android](#android) also can use a version of JavaScriptCore for parity
TODO:
## Debugging with JavaScriptCore is less sophisticated than V8 or [Hermes](#hermes-engine) which implement the [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/).
TODO:

# Linking

# Local Expo CLI / "Versioned Expo CLI"
## == `@expo/cli` -- installed with the -- `expo` package
TODO:
## "Versioned Expo CLI"
TODO:
### Reason: 🧠 it's installed | user's project 🧠
TODO:
### != NOW deprecated `expo-cli` / installed globally
TODO:

# Expo Manifest
* hit [development server](#development-server) requests
## == [web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
TODO:
## == information /
### used by Expo Go -- to run the -- app
TODO:

# Meta
## The Expo team collaborates with Meta to deliver the best possible developer experience.
TODO:

# Metro bundler
## This bundler is maintained by [Meta](#meta) and used for React Native (including web) apps
TODO:
## For more information, see [Metro documentation](https://metrobundler.dev/).
TODO:

# Metro config
## This should extend the package `@expo/metro-config` when using [Expo CLI](#expo-cli)
TODO:
## For more information, see [Customizing Metro](/guides/customizing-metro).
TODO:

# Monorepo
## A monorepo is a great way to maintain codebase for a cross-platform app.
TODO:

# Native directory
## Without a purpose-built tool, it's hard to know what the libraries are, to search through them, to determine the quality, try them out, and filter out the libraries that won't work for your project (some don't work with Expo, some don't work with Android or iOS)
TODO:
## [React Native Directory](https://reactnative.directory/) is a website that aims to solve this problem, we recommend you use it to find packages to use in your projects.
TODO:

# Native module
## This functionality is usually accessed via `import { NativeModules } from 'react-native';`.
TODO:

# Native runtime
## This includes [Expo Go](#expo-go), [development build](#development-build), [standalone apps](#standalone-app), and even web browsers like Chrome.
TODO:

# npm

# Package manager
## See [Bun](#bun), [npm](#npm), [pnpm](#pnpm), and [Yarn](#yarn).
TODO:

# Package manager workspaces
## See [Working with Monorepos](/guides/monorepos) guide for more information on how to configure workspaces with supported package managers.
TODO:

# Platform extensions
## For example, if a project has a **.index.js** file and a **.index.ios.js** file, then the **index.ios.js** will be used when bundling for iOS, and the **index.js** file will be used when bundling for all other platforms.
TODO:

# pnpm

# Prebuild
## := process of generating, for a React Native project based on the [app config](#app-config), the temporary native
TODO:
### `android/` &
TODO:
### `ios/` 
TODO:
## how to run it?
TODO:
### running `npx expo prebuild`
TODO:
#### from [Expo CLI](#expo-cli)
TODO:
#### | project directory
TODO:

# Prebuild template
## React Native project template
TODO:
### uses
TODO:
#### first step of [Prebuilding](#prebuild)
TODO:
### versioned with the [Expo SDK](#expo-sdk)
TODO:
#### -> depends on project's installed version of `expo` 
TODO:
### steps
TODO:
#### clone the template
TODO:
#### run `npx expo prebuild`
TODO:
##### [Config mods](#config-mods) -- can modify -- various template's files
TODO:
## `npx expo prebuild --template /path/to/template`
TODO:
### choose the prebuild template
TODO:
## [`expo-template-bare-minimum`](https://github.com/expo/expo/tree/main/templates/expo-template-bare-minimum)
TODO:
### default Prebuild template
TODO:

# Publish

# React Native
## 
TODO:

# React Native Web
## React Native for web (RNW) was developed at X and is currently used for their [main website](https://x.com)
TODO:
## [Expo SDK](#expo-sdk) and [Expo CLI](#expo-cli) have first-class support for RNW.
TODO:

# React Navigation

# Remote Debugging
## A better alternative today is to use [Hermes](#hermes-engine), as you can connect React Native DevTools to it.
TODO:
## The system works by executing the application JavaScript in a Chrome tab's web worker, then sending native commands over a websocket to the native device.
TODO:

# Simulator

# Slug
## It is unique across your Expo account.
TODO:

# Snack

# Software Mansion
## Maintainers of `react-native-gesture-handler`, `react-native-screens`, and `react-native-reanimated`
TODO:
## The platform team at Expo is composed of a number of contractors from Software Mansion
TODO:
## All of Software Mansion's core React Native libraries are supported in [Expo Go](#expo-go).
TODO:

# Standalone app
## An application binary that can be submitted to the Google Play Store or Apple App Store
TODO:
## For more information, see [Build your project for app stores](/deploy/build-project/) or [Run builds locally or on your own infrastructure](/build-reference/local-builds/).
TODO:

# Store config
## This file can be generated from an existing App Store entry using `eas metadata:pull`.
TODO:

# Sweet API
## This API is provided by the library `expo-modules-core` which is shipped with the `expo` package
TODO:
## For more information, see [Module API](/modules/module-api/).
TODO:

# TypeScript
## The Expo SDK is written in TypeScript, and we highly recommend using it
TODO:
## For more information, see our [TypeScript guide](/guides/typescript/).
TODO:

# Updates
## Updates allow you to push an update to your app without the overhead of submitting a new release to the stores
TODO:
## For more information, see [Publishing](/eas-update/introduction) documentation.
TODO:

# VS Code Expo Tools
## This extension provides autocomplete and intellisense for the [app config](#app-config), [Store Config](#store-config), [Expo Module Config](#expo-module-config), and [EAS Config](#eas-config)
TODO:
## For more information, see the [VS Code Expo Tools extension](https://marketplace.visualstudio.com/items?itemName=expo.vscode-expo-tools).
TODO:

# Watchman
## Watchman contains native code and may cause issues when installed globally
TODO:
## Watchman is maintained by [Meta](#meta).
TODO:

# webpack

# Yarn
## It has two mainline versions [Yarn v1 (Classic)](https://classic.yarnpkg.com/lang/en/) and [Yarn Berry](https://github.com/yarnpkg/berry).
TODO:

# Yoga
## React Native styles are passed to Yoga to lay out and style elements on the screen
TODO:
## For more information, see [Yoga](https://github.com/facebook/yoga) documentation.
TODO:
