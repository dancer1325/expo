## Introduction

* Expo
  * := platform /
    * open-source
    * == universal runtime + libraries  
  * allows
    * building universal native apps / 
      * run | Android, iOS, web
      * -- via -- writing React and JavaScript

* this repository
  * == [Expo SDK](docs/pages/versions) + Expo Modules API + Expo Go app + [Expo CLI](docs/pages/more/expo-cli.md) + [Router](docs/pages/router) + documentation + OTHER supporting tools

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
    * 👀 | ANY React Native app / REGARDLESS using `expo` 👀

* Expo Go app
  * := sandbox -- for -- trying out Expo quickly
    * ❌== NOT | long-term projects ❌
  * free | app store

## 📚 Documentation

* [here](docs/README.md)

## 🗺 Project Layout

* [`packages`](packages)
  * ALL source code -- for -- Expo modules
* [`apps`](apps/README.md)
* [`docs`](/docs)
* [`templates`](/templates)
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
  * [FAQ](docs/pages/faq.md)
  * [Discord](https://chat.expo.dev)
