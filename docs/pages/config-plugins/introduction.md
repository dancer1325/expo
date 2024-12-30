---
title: 'Config plugins: Introduction'
description: An introduction to config plugins for the Expo project.
sidebar_title: Introduction
---

* goal
  * config plugin

## What is a config plugin

* Config plugin
  * == automatic setup or system for 
    * extending the [app config](../workflow/configuration)
    * customizing the prebuild process -- for -- your app
    * adding native 
      * modules / are NOT included, by default,
      * code / needs to be configured further
        * _Example:_ generate app icons, set the app name, configure the **AndroidManifest.xml**, **Info.plist**, ...
  * uses
    * module / requires a MORE complex setup
    * automatically configure your native project -- for a -- module
      * -> reduce the complexity -- by avoiding interaction with the -- native project
  * used by
    * Expo CLI
      * to generate and configure ALL the native code / managed project
  * == bundler for native projects
    * `npx expo prebuild` 
      * evaluating ALL the project plugins -> bundle the projects
        * == generate **android/** and **ios/** directories
        * 👀if you MANUALLY modify them -> they can NO longer be safely regenerated WITHOUT potentially overwriting manual modifications 👀

## Use a config plugin

* come -- from -- Node.js modules
  * -> installation == install COMMON packages | your project
* SOME offer flexibility -- by allowing you to pass -- options / customize their configuration
* 👀Expo library / has a config plugin -> specified | library's API reference 👀
  * _Example:_ [`expo-camera` library's config plugin section](../versions/unversioned/sdk/camera.mdx#configuration-in-appjsonappconfigjs)

* _Example:_ `expo-camera` has a plugin / adds camera permissions (custom permission message) -- to the -- **AndroidManifest.xml** and **Info.plist** 
  * `npx expo install expo-camera`
  * add it | your [app's config](../versions/unversioned/config/app.mdx)

    ```json app.json
    {
    "expo": {
        "plugins": [
        [
            "expo-camera",
            {
            "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera."
            }
        ]
        ]
    }
    }
    ```

* `npx expo prebuild`
  * -> 
    * [`mods`](plugins-and-mods.mdx#how-mods-work) are compiled
    * native files change 
      * | rebuild the native project (_Example:_ with Xcode)
      * & you're using config plugins | managed app -> applied | `eas build`'s prebuild phase 
