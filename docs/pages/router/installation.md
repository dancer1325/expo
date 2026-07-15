---
title: Manual installation
description: Learn how to add Expo Router to an existing project with these detailed instructions.
sidebar_title: Manual installation
searchRank: 6
---

* goal
  * | EXISTING project, 
    * add Expo Router

## steps

### Install dependencies

* | Expo SDK v49-

  ```bash
  npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
  ---
  yarn expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
  ---
  pnpm expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
  ---
  bun expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
  ```

* | Expo SDK v50+

  ```bash
  npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
  ---
  yarn expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
  ---
  pnpm expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
  ---
  bun expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
  ```

### Setup entry point

* set

    ```json package.json
    {
      "main": "expo-router/entry"
    }
    ```
  * -> [app/_layout.js](advanced/root-layout.md) 
    * == INITIAL client file

TODO: 
You can create a custom entry point in your Expo Router project to initialize and load side-effects before your app loads the root layout (**src/app/\_layout.tsx**)
Below are some of the common cases for a custom entry point:

- Initializing global services like analytics, error reporting, and so on.
- Setting up polyfills
- Ignoring specific logs using `LogBox` from `react-native`

1. Create a new file in the root of your project, such as **index.js**. After creating this file, the project structure should look like this:

   <FileTree files={['src/app/_layout.tsx', 'index.js', 'package.json', 'Other project files']} />

2. Import or add your custom configuration to the file. Then, import `expo-router/entry` to register the app entry
Remember to always import it last to ensure all configurations are properly set up before the app renders.

   ```js index.js
   // Import side effects first and services

   // Initialize services

   // Register app entry through Expo Router
   import 'expo-router/entry';
   ```

3. Update the `main` property in **package.json** to point to the new entry file.

   ```json package.json
   {
     "main": "index.js"
   }
   ```

### Modify project configuration

Add a deep linking `scheme` and enable [typed routes](/router/reference/typed-routes/) in your [app config](/workflow/configuration/):

```json app.json
{
  "expo": {
    "scheme": "your-app-scheme",
    "experiments": {
      "typedRoutes": true
    }
  }
}
```

If you are developing your app for web, install the following dependencies:

```bash
npx expo install react-native-web react-dom
---
yarn expo install react-native-web react-dom
---
pnpm expo install react-native-web react-dom
---
bun expo install react-native-web react-dom
```

Then, enable [Metro web](/guides/customizing-metro/#adding-web-support-to-metro) support by adding the following to your [app config](/workflow/configuration/):

```json app.json
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```

<Step label="4">

### Modify babel.config.js

If your project has a **babel.config.js** file, ensure you use `babel-preset-expo` as the `preset`. If you don't need any custom Babel configuration, you can delete the file entirely:

```js babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

</Step>

<Step label="5">

### Configure path aliases

If you are using the [`src` directory](/router/reference/src-directory/), add path aliases to your **tsconfig.json** so you can use short import paths like `@/components/button` instead of relative paths:

```json tsconfig.json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx", ".expo/types/**/*.ts", "expo-env.d.ts"]
}
```

The `@/*` alias maps to the **src** directory in the above example.

</Step>

<Step label="6">

### Clear bundler cache

After updating the configuration, run the following command to clear the bundler cache:

```bash
npx expo start --clear
---
yarn expo start --clear
---
pnpm expo start --clear
---
bun expo start --clear
```

</Step>

<Step label="7">

### Update resolutions

If you're upgrading from an older version of Expo Router, ensure you remove all outdated Yarn resolutions or npm overrides in your **package.json**. Specifically, remove `metro`, `metro-resolver`, `react-refresh` resolutions from your **package.json**.

</Step>
