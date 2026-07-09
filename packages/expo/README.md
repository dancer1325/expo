* goal
  * Expo npm package


TODO:  
f
ile-based routing that works the same on every platform, and
a curated SDK of native modules you can drop in
* From there, choose your own path — ship straight to the App Store and Play Store 
without ever opening Xcode or Android Studio, or reach for development builds and custom native code 
when your app needs to go further.

Built and maintained in the open by [the Expo team](https://expo.dev/about) and a community of [thousands of contributors](https://github.com/expo/expo/graphs/contributors).

## The Expo ecosystem

Expo is a collection of tools and services that work together, but each piece is independently useful.

### Expo SDK

A large set of first-party, cross-platform modules covering device APIs, media, storage, and system services — [`expo-camera`](https://docs.expo.dev/versions/latest/sdk/camera/), [`expo-image`](https://docs.expo.dev/versions/latest/sdk/image/), [`expo-notifications`](https://docs.expo.dev/versions/latest/sdk/notifications/), [`expo-file-system`](https://docs.expo.dev/versions/latest/sdk/filesystem/), [`expo-sqlite`](https://docs.expo.dev/versions/latest/sdk/sqlite/), [`expo-sensors`](https://docs.expo.dev/versions/latest/sdk/sensors/), and [many more](https://docs.expo.dev/versions/latest/).

Every module is opt-in, fully typed, and maintained by the Expo team — install only what you need with `npx expo install`, and your bundle stays as small as your app demands.

### Expo Router

A [file-based router](https://docs.expo.dev/router/introduction/) for universal navigation across Android, iOS, and the web
* Drop a file into `app/` and you have a route — with typed paths, automatic deep linking, and universal-link config generated for you
* Layouts, modals, tabs, and stacks compose as React components and look the same on every platform.

Under the hood it builds on [`react-native-screens`](https://github.com/software-mansion/react-native-screens) for true native navigators on mobile, plus a real router on the web
* It also brings a fullstack story to React Native: [API routes](https://docs.expo.dev/router/web/api-routes/) and [static rendering](https://docs.expo.dev/router/web/static-rendering/) for SEO-friendly web builds.

### Expo Modules API

A modern Swift and Kotlin [API for writing native modules](https://docs.expo.dev/modules/overview/) — and the foundation the entire Expo SDK and a growing ecosystem of third-party libraries are built on.

You describe a module declaratively: functions, properties, native views, and lifecycle events all live in a small Swift or Kotlin DSL
* The framework handles type coercion and the calls between JavaScript and native automatically — no Objective-C, no Java, no C++, no JNI, no boilerplate
* Scaffold a new module in seconds with `npx create-expo-module@latest`, ship it as a regular npm package, and have it picked up by Expo's autolinking on iOS and Android.

### Expo UI

[Expo UI](https://docs.expo.dev/versions/latest/sdk/ui/) — a set of truly native UI components backed by SwiftUI on iOS and Jetpack Compose on Android
* Use platform controls (pickers, switches, sliders, menus, …) that look and feel exactly like the rest of the OS, from React.

### DOM components

Mark a React component with `"use dom"` and Expo will render it as web content inside your native app — perfect for incrementally migrating web code or reusing a React web component on mobile
* [Learn more](https://docs.expo.dev/guides/dom-components/).

### Continuous Native Generation

Your `ios/` and `android/` folders are generated, not maintained
* Describe your native config in `app.json` and [config plugins](https://docs.expo.dev/config-plugins/introduction/); run `npx expo prebuild` to materialize the projects on demand
* Upgrades, package additions, and native customizations all flow through the same declarative pipeline — no more merge conflicts in native code.

### EAS

[Expo Application Services](https://expo.dev/eas) — hosted infrastructure for shipping React Native apps:

- **[EAS Build](https://docs.expo.dev/build/introduction/)** — cloud builds for iOS and Android, no local Xcode or Android Studio setup required.
- **[EAS Submit](https://docs.expo.dev/submit/introduction/)** — one command to submit to the App Store and Play Store.
- **[EAS Update](https://docs.expo.dev/eas-update/introduction/)** — over-the-air JavaScript and asset updates, with channels and rollbacks.
- **[EAS Workflows](https://docs.expo.dev/eas-workflows/get-started/)** — CI/CD for building, testing, and releasing your app.
- **[EAS Hosting](https://docs.expo.dev/eas/hosting/introduction/)** — host your web app and API routes on Expo's edge.
- **[Expo Launch](https://launch.expo.dev/)** — a guided, browser-based path to ship to the web and App Store without touching configuration
* Built on top of EAS.

EAS is optional, but the fastest path from `git push` to the store.

### Tooling

- **[Expo CLI](https://docs.expo.dev/more/expo-cli/)** — one interface around Metro and the native toolchain (Xcode, Simulator.app, Android Studio, ADB, …)
* Keep dependency versions aligned with `npx expo install`.
- **[Expo Go](https://expo.dev/go)** and **[development builds](https://docs.expo.dev/develop/development-builds/introduction/)** — preview your app on a device in seconds.
- **[Expo Atlas](https://docs.expo.dev/guides/analyzing-bundles/)** — visual bundle analyzer to inspect what's shipping in your JS.
- **[Snack](https://snack.expo.dev)** — try Expo right in your browser, no install needed.

## Why Expo

- **Universal by default.** One codebase targets Android, iOS, and the web — with [tvOS and Android TV](https://docs.expo.dev/guides/building-for-tv/) support too.
- **Production-ready.** Used in tens of thousands of apps on the App Store and Play Store.
- **Customizable all the way down.** Config plugins and the Expo Modules API let you reach the metal when you need to.
- **Open source.** MIT-licensed, actively developed in the open.
