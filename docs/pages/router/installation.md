---
title: Install Expo Router
description: Learn how to quickly get started by creating a new project with Expo Router or adding the library to an existing project.
sidebar_title: Installation
---

* goal
  * add Expo Router  
    * from scratch
    * | EXISTING project

## Quick start

* `npx create-expo-app@latest`
  * create a new Expo app / Expo Router library ALREADY installed and configured
* `npx expo start`
  * start the project

## Manual installation

* requirements
  * Expo project / PREVIOUSLY created WITHOUT Expo Router library installed

### Prerequisites

* see [set up for running an Expo app](../get-started/create-a-project)

### Install dependencies

* | 
  * Expo SDK v50+
    * `npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar'`
  *Expo SDK v49-
    * `npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler`

### Setup entry point

* set

    ```json package.json
    {
      "main": "expo-router/entry"
    }
    ```
  * -> [app/_layout.js](advanced/root-layout.md) is initial client file

### Modify project configuration

* TODO:
Add a deep linking `scheme` in your [app config](../workflow/configuration.md):

```json app.json
{
  "scheme": "your-app-scheme"
}
```

If you are developing your app for web, install the following dependencies:

<Terminal cmd={['$ npx expo install react-native-web react-dom']} />

Then, enable [Metro web](/guides/customizing-metro/#adding-web-support-to-metro) support by adding the following to your [app config](/workflow/configuration/):

```json app.json
{
  "web": {
    "bundler": "metro"
  }
}
```

<Step label="4">

### Modify babel.config.js

<Tabs>

<Tab label="SDK 50 and above">

Ensure you use `babel-preset-expo` as the `preset`, in the **babel.config.js** file or delete the file:

```js babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

If you're upgrading from a version of Expo Router that is older than v3, remove the `plugins: ['expo-router/babel']`. `expo-router/babel` was merged in `babel-preset-expo` in SDK 50 (Expo Router v3).

</Tab>

<Tab label="SDK 49 and below">

Add `expo-router/babel` plugin as the last item in the `plugins` array to your project's **babel.config.js**:

{/* prettier-ignore */}
```js babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    /* @info Add the following line. */
    plugins: ['expo-router/babel'],
    /* @end */
  };
};
```

> **Note**: If your project doesn't have **babel.config.js**, run `npx expo customize babel.config.js` to create one.

</Tab>

</Tabs>

</Step>

<Step label="5">

### Clear bundler cache

After updating the Babel config file, run the following command to clear the bundler cache:

<Terminal cmd={['$ npx expo start -c']} />

</Step>

<Step label="6">

### Update resolutions

<Tabs>

<Tab label="SDK 50 and above">
  If you're upgrading from an older version of Expo Router, ensure you remove all outdated Yarn
  resolutions or npm overrides in your **package.json**. Specifically, remove `metro`,
  `metro-resolver`, `react-refresh` resolutions from your **package.json**.
</Tab>

  <Tab label="SDK 49">
    Expo Router requires at least `react-refresh@0.14.0`. React Native hasn't upgraded as of SDK 49 and Expo Router v2, so you need to force upgrade your `react-refresh` version by setting a Yarn resolution or npm override.

    <Tabs>
      <Tab label="Yarn">
          ```json package.json
          {
            /* @hide ... */
            /* @end */
            "resolutions": {
              "react-refresh": "~0.14.0"
            }
          }
          ```
      </Tab>
      <Tab label="npm">
          ```json package.json
          {
            /* @hide ... */
            /* @end */
            "overrides": {
              "react-refresh": "~0.14.0"
            }
          }
          ```
      </Tab>
    </Tabs>

  </Tab>

</Tabs>
</Step>
