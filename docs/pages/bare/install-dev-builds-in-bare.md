---
title: Install expo-dev-client in an existing React Native project
sidebar_title: Install expo-dev-client
description: Learn how to install and configure expo-dev-client in your existing React Native project.
---

* goal
  * how to install & configure `expo-dev-client`

### | create a NEW project

```bash
npx create-expo-app -e with-dev-client
---
yarn create expo-app -e with-dev-client
---
pnpm create expo-app -e with-dev-client
---
bun create expo -e with-dev-client
```

### | project / use CNG

* [here](../develop/development-builds/create-a-build)

### | existing React Native project / WITHOUT CNG

* requirements
  * install & configure the expo package

#### 1. Install expo-dev-client

```bash
npx expo install expo-dev-client
---
yarn expo install expo-dev-client
---
pnpm expo install expo-dev-client
---
bun expo install expo-dev-client
```

* if your project has an "ios/" -> run

  ```bash
  npx pod-install
  ---
  yarn dlx pod-install
  ---
  pnpm dlx pod-install
  ---
  bunx pod-install
  ```

#### 2. Configure deep links

* deep link
  * uses
    * Expo CLI use it -- to -- launch your project
  * use cases
    * [you want to launch preview updates -- via -- `expo-dev-client`](../eas-update/getting-started)
    * you have NOT configured your app's `scheme` / support deep linking -> use [`uri-scheme` library](https://www.npmjs.com/package/uri-scheme)

    ```bash
    # List your project's schemes
    npx uri-scheme list
    # Add a scheme to your project
    npx uri-scheme add your-scheme
    ---
    # List your project's schemes
    yarn dlx uri-scheme list
    # Add a scheme to your project
    yarn dlx uri-scheme add your-scheme
    ---
    # List your project's schemes
    pnpm dlx uri-scheme list
    # Add a scheme to your project
    pnpm dlx uri-scheme add your-scheme
    ---
    # List your project's schemes
    bunx uri-scheme list
    # Add a scheme to your project
    bunx uri-scheme add your-scheme
    ```

#### 3. Build & install the app

* == create a debug build of your app -- via -- your chosen tools
  * _Examples:_
    * [locally -- via -- Expo CLI](../guides/local-app-development.md)
    * [| cloud, -- via -- EAS Build](../develop/development-builds/create-a-build)
