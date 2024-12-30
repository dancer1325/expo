---
title: Configure with app config
description: Learn about what app.json/app.config.js/app.config.ts files are and how you can customize and use them dynamically.
---

* goal
  * app.json/app.config.js/app.config.ts
    * what are they for?
    * how to customize?
    * how to use them dynamically?

* app config
  * ALLOWED
    * **app.json**,
    * **app.config.js**,
    * **app.config.ts**
  * uses
    * configure 
      * [Expo Prebuild](continuous-native-generation.md) generation, 
      * how a project loads | [Expo Go](../get-started/set-up-your-environment.md),
      * OTA update manifest
  * requirements
    * locate | root of your project (== next to the **package.json**)

    ```json app.json
    {
        "name": "My app",
        "slug": "my-app"
    }
    ```

  * 👀if it has a top-level `expo: {}` object -> it's used rather than root object & ALL other keys will be ignored 👀
    * see [here](../versions/unversioned/config/app.mdx)

## Properties

* app name, icon, splash screen, deep linking scheme, API keys to use 
* see [app config reference](../versions/unversioned/config/app.mdx)

* if you use Visual Studio Code -> install the [Expo Tools](https://marketplace.visualstudio.com/items?itemName=expo.vscode-expo-tools)

## Reading configuration values | your app

* 👀if you want to add app config | runtime, -- from your -- JS code -> use [`Constants.expoConfig`](../versions/unversioned/sdk/constants.mdx) 👀
  * fields / filter out -- of the -- public app config
    * [`hooks`](../versions/unversioned/config/app.mdx#hooks)
    * [`ios.config`](../versions/unversioned/config/app.mdx#config)
    * [`android.config`](../versions/unversioned/config/app.mdx#config-1)
    * [`updates.codeSigningCertificate`](../versions/unversioned/config/app.mdx#codesigningcertificate)
    * [`updates.codeSigningMetadata`](../versions/unversioned/config/app.mdx#codesigningmetadata)
  * ONLY use `Constants.expoConfig`, ❌NOT import **app.json** or **app.config.js** directly | your JS code ❌
    * Reason: 🧠 it will import the ENTIRE file rather than a processed version of it 🧠
* `npx expo config --type public`
  * verify the configuration / will be embedded | your builds/updates & available | runtime  

## Extending configuration

* Library authors -- ,via [Expo Config plugins](../config-plugins/introduction.md), extend the -- app config 

## Dynamic configuration

* use **app.config.js** or **app.config.ts**
* properties
  - Comments, variables, and single quotes.
  - ESM import syntax (== `import` keyword)
    - requirements
      - use [TypeScript with `ts-node`](../guides/typescript.mdx#appconfigjs)  
  - JS files / compatible with your current version of Node.js -> can be imported -- via -- `require()`
  - TypeScript support with nullish coalescing and optional chaining.
  - if Metro bundler reloads -> updated 
  - Provide environment information to your app
  - ❌NOT support Promises ❌
  - `"extra"` key
    - allows
      - passing arbitrary configuration data -- to -- your app
    - 's value -- is accessed via -- [`expo-constants`](/versions/latest/sdk/constants/) 

* _Example:_ export an object -- to define -- your custom config

```js app.config.js
const myValue = 'My App';

module.exports = {
  name: myValue,
  version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.0.0',
  // All values in extra will be passed to your app.
  extra: {
    fact: 'kittens are cool',
  },
};
```

```js App.js
import Constants from 'expo-constants';

Constants.expoConfig.extra.fact === 'kittens are cool';
```

* TODO:
You can access and modify incoming config values by exporting a function that returns an object. 
This is useful if your project also has an **app.json**. 
By default, Expo CLI will read the **app.json** first and send the normalized results to the **app.config.js**.

For example, your **app.json** could look like this:

```json app.json
{
  "name": "My App"
}
```

And in your **app.config.js**, you are provided with that configuration in the arguments to the exported function:

```js app.config.js
module.exports = ({ config }) => {
  console.log(config.name); // prints 'My App'
  return {
    ...config,
  };
};
```

### Switching configuration based on the environment

It's common to have some different configuration in development, staging, and production environments, or to swap out configuration entirely to white label an app. 
To accomplish this, you can use **app.config.js** along with environment variables.

```js app.config.js
module.exports = () => {
  if (process.env.MY_ENVIRONMENT === 'production') {
    return {
      /* your production config */
    };
  } else {
    return {
      /* your development config */
    };
  }
};
```

To use this configuration with Expo CLI commands, set the environment variable either for specific commands or in your shell profile.
To set environment variables for specific commands, prefix the command with the variables and values as shown in the example:

<Terminal cmd={['$ MY_ENVIRONMENT=production eas update']} />

This is not anything unique to Expo CLI. On Windows you can approximate the above command with:

<Terminal cmd={['$ npx cross-env MY_ENVIRONMENT=production eas update']} />

Or you can use any other mechanism that you are comfortable with for environment variables.

### Using TypeScript for configuration: app.config.ts instead of app.config.js

You can use autocomplete and doc-blocks with an Expo config in TypeScript. Create an **app.config.ts** with the following contents:

```ts app.config.ts
import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'my-app',
  name: 'My App',
});
```

To import other TypeScript files into **app.config.ts** or customize the language features, we recommend using [`ts-node`](/guides/typescript/#appconfigjs). `ts-node` also enables using `import` syntax in any file imported by **app.config.ts**. This means you can write local [config plugins](/config-plugins/introduction/) in TypeScript with full language features.

### Configuration resolution rules

There are two different types of configs: static (**app.config.json**, **app.json**), and dynamic (**app.config.js**, **app.config.ts**). Static configs can be automatically updated with CLI tools, whereas dynamic configs must be manually updated by the developer.

1. The static config is read if **app.config.json** exists (falls back to **app.json**). If no static config exists, then default values are inferred from the **package.json** and your dependencies.
2. The dynamic config is read if either **app.config.ts** or **app.config.js** exist. If both exist, then the TypeScript config is used.
3. If the dynamic config returns a function, then the static config is passed to the function with `({ config }) => ({})`. This function can then mutate the static config values. Think of this like middleware for the static config.
4. The return value from the dynamic config is used as the final config. It cannot have any promises.
5. All functions in the config are evaluated and serialized before any tool in the Expo ecosystem uses it. The config must be a JSON manifest when it is hosted.
6. If the final config object has a top-level `expo: {}` object, then this will be used in place of the root object and all other keys will be ignored.

Running `npx expo config` will display the final configuration that will be used in Expo CLI after resolution has occurred.
