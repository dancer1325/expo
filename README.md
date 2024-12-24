<!-- Banner Image -->

<p align="center">
  <a href="https://expo.dev/">
    <img alt="expo sdk" height="128" src="./.github/resources/banner.png">
    <h1 align="center">Expo</h1>
  </a>
</p>

<p align="center">
   <a aria-label="SDK version" href="https://www.npmjs.com/package/expo" target="_blank">
    <img alt="Expo SDK version" src="https://img.shields.io/npm/v/expo.svg?style=flat-square&label=SDK&labelColor=000000&color=4630EB" />
  </a>
  <a aria-label="Chat or ask a question" href="https://chat.expo.dev" target="_blank">
    <img alt="Chat or ask a question" src="https://img.shields.io/discord/695411232856997968.svg?style=flat-square&labelColor=000000&color=4630EB&logo=discord&logoColor=FFFFFF&label=Chat%20with%20us" />
  </a>
  <a aria-label="Expo is free to use" href="https://github.com/expo/expo/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-success.svg?style=flat-square&color=33CC12" target="_blank" />
  </a>
  <a aria-label="expo downloads" href="http://www.npmtrends.com/expo" target="_blank">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/expo.svg?style=flat-square&labelColor=gray&color=33CC12&label=Downloads" />
  </a>
</p>

<p align="center">
  <a aria-label="try expo with snack" href="https://snack.expo.dev"><b>Try Expo in the Browser</b></a>
&ensp;•&ensp;
  <a aria-label="expo documentation" href="https://docs.expo.dev">Read the Documentation</a>
&ensp;•&ensp;
  <a aria-label="expo documentation" href="https://expo.dev/blog">Learn more on our blog</a>
&ensp;•&ensp;
  <a aria-label="expo documentation" href="https://expo.canny.io/feature-requests">Request a feature</a>
</p>

<h6 align="center">Follow us on</h6>
<p align="center">
  <a aria-label="Follow @expo on X" href="https://x.com/intent/follow?screen_name=expo" target="_blank">
    <img alt="Expo on X" src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" target="_blank" />
  </a>&nbsp;
  <a aria-label="Follow @expo on GitHub" href="https://github.com/expo" target="_blank">
    <img alt="Expo on GitHub" src="https://img.shields.io/badge/GitHub-222222?style=for-the-badge&logo=github&logoColor=white" target="_blank" />
  </a>&nbsp;
  <a aria-label="Follow @expo on Reddit" href="https://www.reddit.com/r/expo/" target="_blank">
    <img alt="Expo on Reddit" src="https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white" target="_blank" />
  </a>&nbsp;
  <a aria-label="Follow @expo on Bluesky" href="https://bsky.app/profile/expo.dev" target="_blank">
    <img alt="Expo on LinkedIn" src="https://img.shields.io/badge/Bluesky-1DA1F2?style=for-the-badge&logo=bluesky&logoColor=white" target="_blank" />
  </a>&nbsp;
  <a aria-label="Follow @expo on LinkedIn" href="https://www.linkedin.com/company/expo-dev" target="_blank">
    <img alt="Expo on LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" />
  </a>
</p>

## Introduction

* Expo
  * := open-source platform /
    * == universal runtime + libraries  
  * allows
    * building universal native apps / 
      * run | Android, iOS, web
      * -- via -- writing React and JavaScript

* this repository
  * == Expo SDK + Expo Modules API + Go app + CLI + Router + documentation + OTHER supporting tools

* [Expo Application Services (EAS)](https://expo.dev/eas)
  * == platform of hosted services / -- deeply integrated with -- Expo open source tools
  * allows you, about your app -- as an -- individual or a team, 
    * build,
    * ship,
    * iterate

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
