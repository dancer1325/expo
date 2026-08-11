---
title: Core concepts of file-based routing in Expo Router
description: Learn the ground rules of Expo Router and how it relates to the rest of your code.
sidebar_title: Core concepts
searchRank: 10
---

* goal
  * Expo Router's file-based routing core concepts 
  * Expo Router project structure != React Native project structure

## Expo Router rules

### 1. ALL screens/pages == files | "src/app/"

* ALL your app's navigation routes
  * == (files + sub-directories) | [src/app](../reference/src-directory)
    * 💡EACH file / has a `export default` == DISTINCT page | your app💡
      * ⚠️EXCEPT TO: "\_layout" files⚠️
    * 💡EACH directory | "src/app" == groups of related screens💡

### 2. All pages have a URL

* pages' URL path
  * == file's location | "src/app/" 
  * uses
    * | web,
      * navigate -- to -- that page 
    * | native mobile app,
      * app-specific deep link
  * enable
    * [universal deep-linking](../../linking/overview)
      * == ALL pages | your app can be navigated to -- with -- a URL

### 3. FIRST "index.tsx" == initial route (`/`)

* -> ❌you do NOT define an initial route OR first screen❌
* | default template,
  * it's "src/app/index.tsx"
* ⚠️if you want to use a deeper part of your navigation tree -> use a [route group](notation#parentheses)⚠️

TODO:
* If you want your first screen to be a group of tabs, you might put all of the tab pages inside the **src/app/(tabs)** 
directory and define the default tab as **index.tsx**
* With this arrangement, the `/` URL will take the user directly to **src/app/(tabs)/index.tsx** file.

### 4. Root \_layout.tsx replaces App.jsx/tsx

Every project should have a **\_layout.tsx** file directly inside the **src/app** directory
* This file is rendered before any other route in your app and is where you would put the initialization code that
may have previously gone inside an **App.jsx** file, such as loading fonts, setting up theme providers, or 
interacting with the splash screen
* For example, the default template wraps the app with a `ThemeProvider` for dark and light mode support and
renders the `AppTabs` component from this file.

### 5. Default template uses platform-specific tabs

The default template uses two different tab implementations depending on the platform
* On Android and iOS, tabs are rendered using [native tabs](/router/advanced/native-tabs/), which use the platform's built-in tab bar 
for a native look and feel
* On web, tabs are rendered using [custom tabs](/router/advanced/custom-tabs/) from `expo-router/ui`, which are unstyled and flexible components that
allow full control over the tab bar's appearance.

This is achieved through [platform-specific file extensions](/router/advanced/platform-specific-modules/)
* The tab component is defined in two files: **src/components/app-tabs.native.tsx** for Android and iOS, and 
**src/components/app-tabs.tsx** for web
* Expo's module resolution automatically picks the correct file based on the platform
* This pattern is used because native platforms have a system tab bar that provides expected behaviors like 
scroll-to-top on tap and native animations, while web requires a custom-styled tab bar that fits typical
website navigation patterns.

### 6. Non-navigation components live outside the src/app directory

In Expo Router, the **src/app** directory is exclusively for defining your app's routes
* Other parts of your app, like components, hooks, utilities, and so on, should be placed in other directories 
such as **src/components**, **src/hooks**, and **src/constants**
* If you put a non-route inside the **src/app** directory, Expo Router will attempt to treat it like a route.

### 7. Customizing stack and tab navigators

Stack and tab navigators accept a wide range of configuration options for headers, animations, gestures, and more
* See the [Stack](/router/advanced/stack/) and [Tabs](/router/advanced/tabs/) guides for the full list of options and examples.

## The rules of Expo Router applied

Let's apply these foundational rules of Expo Router to quickly identify key elements of the following project file 
structure:

<FileTree
  files={[
    ['src/app/index.tsx'],
    ['src/app/home.tsx'],
    ['src/app/\_layout.tsx'],
    ['src/app/profile/friends.tsx'],
    ['src/components/app-tabs.native.tsx'],
    ['src/components/app-tabs.tsx'],
    ['src/components/text-field.tsx'],
    ['src/components/toolbar.tsx'],
  ]}
/>

- **src/app/index.tsx** is the initial route, and will appear first when you open the app or navigate to 
your web app's root URL.
- **src/app/home.tsx** is a page with the route `/home`, so you can navigate to it with a URL like `yourapp.com/home` in the browser, or `yourapp://home` in a native app.
- **src/app/\_layout.tsx** is the root layout
* Any initialization code you may have previously put in **App.jsx** should go here.
- **src/app/profile/friends.tsx** is a page with the route `/profile/friends`.
- **src/components/app-tabs.native.tsx** and **src/components/app-tabs.tsx** are [platform-specific](/router/advanced/platform-specific-modules/) tab components
* The **.native.tsx** file is used on Android and iOS, while the **.tsx** file is used on web
* The root layout imports these to render the tab navigator.
- **src/components/text-field.tsx** and **src/components/toolbar.tsx** are not in the **src/app** directory, so they will not be considered pages
* They will not have a URL, and they cannot be the target of a navigation action
* However, they can be used as components in the pages inside the **src/app** directory.
