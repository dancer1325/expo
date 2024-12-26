## Introduction

* Expo
  * := open-source platform /
    * == universal runtime + libraries  
  * allows
    * building universal native apps / 
      * run | Android, iOS, web
      * -- via -- writing React and JavaScript

* this repository
  * == [Expo SDK](docs/pages/versions) + Expo Modules API + Expo Go app + [Expo CLI](docs/pages/more/expo-cli.mdx) + [Router](/docs/pages/router) + documentation + OTHER supporting tools

* [Expo Application Services (EAS)](https://expo.dev/eas)
  * == platform of hosted services / -- deeply integrated with -- Expo open source tools
  * allows you, about your app -- as an -- individual or a team, 
    * build,
      * uses
        * install | your device or emulator
    * ship | stores,
    * iterate
    * send push notifications
  * uses
    * | ANY React Native app / REGARDLESS using `expo`

* Expo Go app
  * := sandbox -- for -- trying out Expo quickly
    * ❌== NOT | long-term projects ❌
  * free | app store

## Table of contents

- [📚 Documentation](#-documentation)
- [🗺 Project Layout](#-project-layout)
- [🏅 Badges](#-badges)
- [👏 Contributing](#-contributing)
- [❓ FAQ](#-faq)

## 📚 Documentation

* goal
  * Learn about universal apps,
    * building
    * deploying

## 🗺 Project Layout

- [`packages`](/packages)
  - ALL source code -- for -- Expo modules
- [`apps`](/apps)
  - Expo projects / linked to the development modules
  - uses
    - testing
- [`apps/expo-go`](/apps/expo-go)
  - source code for Expo Go
- [`apps/expo-go/ios/Exponent.xcworkspace`](/apps/expo-go/ios)
  - Xcode workspace
  - uses
    - | developing iOS, ALWAYS open this
      - instead of `Exponent.xcodeproj`
      - Reason: 🧠 workspace ALSO loads the CocoaPods dependencies 🧠
- [`docs`](/docs)
  - source code for **https://docs.expo.dev**
- [`templates`](/templates)
  - template projects / get -- via running -- `npx create-expo-app`
- [`react-native-lab`](/react-native-lab)
  - fork of `react-native`
  - uses
    - build Expo Go
- [`guides`](/guides)
  - In-depth tutorials
  - uses
    - advanced topics
- [`tools`](/tools)
  - build + configuration tools
- [`template-files`](/template-files)
  - templates for files / require private keys
  - populated -- via the -- keys | `template-files/keys.json`
- [`template-files/ios/dependencies.json`](/template-files/ios/dependencies.json)
  - app's CocoaPods dependencies

## ❓ FAQ

* see 
  * [FAQ](docs/pages/faq.mdx)
  * [Discord](https://chat.expo.dev)
