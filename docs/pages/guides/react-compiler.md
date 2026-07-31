---
title: React Compiler
description: Learn how to enable and use the React Compiler in Expo apps.
---

* NEW [React Compiler](https://react.dev/learn/react-compiler) 
  * ⚠️experimental⚠️
    * == by default,
      * ❌NOT enabled❌
  * AUTOMATICALLY memoizes
    * components
    * hooks
    * Reason:🧠enable fine-grained reactivity🧠
    * -> performance improvements | your app

## how to enable React Compiler?

* steps
  * `npx react-compiler-healthcheck@latest`
    * [Check your project's compatibility -- with -- NEW [React Compiler](https://react.dev/learn/react-compiler)](https://react.dev/learn/react-compiler#checking-compatibility)
      * verify if your app is following the [React's rules](https://react.dev/reference/rules)
  * `npx expo install babel-plugin-react-compiler`
  * | your project's app.json

    ```json app.json
    {
      "experiments": {
        "reactCompiler": true
      }
    }
    ```
  * `npx expo install react-compiler-runtime@beta`

### how to enable the linter?

* steps
  * | RIGHT NOW,
    * [`npx expo lint`](using-eslint.md#eslint)
      * ensure ESLint is set up | your app
      * allows
        * CONTINUOUSLY enforce the rules of React | your project
    * `npx expo install eslint-plugin-react-compiler`
    * update your ESLint configuration / include the plugin

        ```js .eslintrc.js
        // https://docs.expo.dev/guides/using-eslint/
        module.exports = {
          extends: 'expo',
          plugins: ['eslint-plugin-react-compiler'],
          rules: {
            'react-compiler/react-compiler': 'error',
          },
        };
        ```

  * | FUTURE releases,
    * AUTOMATED -- by -- Expo CLI

## Incremental adoption

TODO: 
You can incrementally adopt the React Compiler in your app using a few strategies:

<Step label="1">

Configure the Babel plugin to only run on specific files or components
* To do this, add the following to your project's Babel configuration:

```js babel.config.js
module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        'babel-preset-expo',
        {
          'react-compiler': {
            sources: filename => {
              // Match file names to include in the React Compiler.
              return filename.includes('src/path/to/dir');
            },
          },
        },
      ],
    ],
  };
};
```

Whenever you change your **babel.config.js** file, you need to restart the Metro bundler to apply the changes:

<Terminal cmd={['$ npx expo start --clear']} />

</Step>

<Step label="2">

Use the `"use no memo"` directive to opt out of the React Compiler for specific components or files.

```jsx
function MyComponent() {
  'use no memo';

  return <Text>Will not be optimized</Text>;
}
```

</Step>

## Usage

> To better understand how React Compiler works, check out the [React Playground](https://playground.react.dev/).

Improvements are primarily automatic
* You can remove instances of `useCallback`, `useMemo`, and `React.memo` in favor of the automatic memoization
* Class components will not be optimized
* Instead, migrate to function components.

Expo's implementation of the React Compiler will only run on application code (no node modules), and only when bundling for the client (disabled in server rendering).

## Configuration

You can pass additional settings to the React Compiler Babel plugin by using the `react-compiler` object in the Babel configuration:

```js babel.config.js
module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        'babel-preset-expo',
        {
          'react-compiler': {
            // Passed directly to the React Compiler Babel plugin.
            compilationMode: 'strict',
            panicThreshold: 'all_errors',
          },
          web: {
            'react-compiler': {
              // Web-only settings...
            },
          },
        },
      ],
    ],
  };
};
```
