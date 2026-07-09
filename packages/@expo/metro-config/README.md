# `@expo/metro-config`

* goal
  * default Metro config 

* uses
  * Expo CLI can bundle apps
* [MORE](../../../docs/pages/versions/unversioned/config/metro.md)

TODO: 
`metro.config.js`

```js
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = config;
```

## Exotic

> As of SDK 51, the exotic transformer has been fully removed in favor of the default `@expo/metro-config` transformer
* The export `@expo/metro-config/transformer` no longer exists.

Most of the [Exotic mode](https://blog.expo.dev/drastically-faster-bundling-in-react-native-a54f268e0ed1) performance benefits have been integrated in the default Expo CLI bundling pipeline (e.g
* [less AST cloning](https://github.com/facebook/metro/pull/854), [faster worker creation](https://github.com/facebook/metro/pull/856)), and as such, the feature no longer needs to be enabled/disabled
* Setting `mode: "exotic"` will no longer have any additional effects over the default.

Ensure you extend the `@expo/metro-config/babel-transformer` when customizing babel
* Learn more: [Extending the Babel transformer](https://docs.expo.dev/versions/latest/config/metro/#extending-the-babel-transformer).
