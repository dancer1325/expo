---
title: Core concepts
description: An overview of Expo tools, features and services.
---

* `expo` npm package
  * 👀enables a suite of features | React Native apps 👀 
  * `npx expo`
  * uses
    * recommended, BUT NOT required, |
      * ANY React Native project
      * [Expo Application Services (EAS)](#services)

## Tools and features

* tools
  * [Expo SDK](versions)
    * == suite of well-tested React Native modules / run | Android, iOS, and web
  * [Develop an app with Expo](workflow/overview.mdx)
    * development process of building an Expo app
      * == mental model of the core development loop
  * [Expo Modules API](modules/overview.mdx)
    * allows
      * write HIGHLY performant native code -- via -- modern Swift and Kotlin API
  * [Prebuild](workflow/continuous-native-generation.mdx)
    * allows
      * React -- is separated from -- Native, to
        * develop | ANY computer,
        * upgrade easily,
        * white label apps,
        * maintain larger projects
  * [Expo CLI](more/expo-cli.mdx)
    * allows
      * managing dependencies,
      * compile native apps,
      * develop for the web,
      * connect -- to -- ANY device / powerful dev server
  * [Expo Go](get-started/set-up-your-environment.mdx)
    * goal
      * learn React -- by -- trying it | your simulator or device

* features
  * ALL are
    * free,
    * optional,
    * can be used INDEPENDENTLY of each other
  * expo's features vs bare React Native

| Feature                                                                             | With `expo` | Without `expo` (bare React Native) |
|-------------------------------------------------------------------------------------| ----------- | ---------------------------------- |
| Develop complex apps **ENTIRELY** in JavaScript.                                    | <YesIcon /> | <NoIcon />                         |
| Write JSI native modules -- via -- Swift and Kotlin.                                | <YesIcon /> | <NoIcon />                         |
| Develop apps WITHOUT Xcode or Android Studio.                                       | <YesIcon /> | <NoIcon />                         |
| Create and share example apps in the browser with [Snack](https://snack.expo.dev/). | <YesIcon /> | <NoIcon />                         |
| Major upgrades WITHOUT native changes.                                              | <YesIcon /> | <NoIcon />                         |
| First-class TypeScript support.                                                     | <YesIcon /> | <NoIcon />                         |
| Install natively compatible libraries from the command line.                        | <YesIcon /> | <NoIcon />                         |
| Develop performant websites with the same codebase.                                 | <YesIcon /> | <NoIcon />                         |
| [Tunnel](/more/expo-cli/#tunneling) your dev server to any device.                  | <YesIcon /> | <NoIcon />                         |

## Services

* **Expo Application Services (EAS)**
  * see
    * main [README](/README.md)
    * [EAS](eas)
