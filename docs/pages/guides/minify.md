---
title: Minifying JavaScript
sidebar_title: Minification
description: Learn about customizing the JavaScript minification process in Expo CLI with Metro bundler.
---

* Minification
  * == optimization build step
    * Reason:🧠
      * reduces the final size 
        * _Examples:_ vs source code,
          * removes unnecessary characters ( as collapses whitespace)
          * removes comments
          * shortens static operations 
      * improves load times🧠

## Minification | Expo CLI

* | Expo CLI,
  * minification happens | JS files | production export
  
    ```shell
    npx expo export
    
    ## OR
    npx expo export:embed
    
    ## OR
    eas build
    
    ## ...
    ```

* if you want to preserve comments -> use `/** @preserve */` directive

## Remove console logs

* steps
  * | "metro.config.js"
    * `transformer.minifierConfig.compress.drop_console` == Terser minifier config

      ```js metro.config.js
      const { getDefaultConfig } = require('expo/metro-config');
      
      const config = getDefaultConfig(__dirname);
      
      config.transformer.minifierConfig = {
        compress: {
          // 1. removes ALL console logs statements | production
          drop_console: true,
          // 2. remove console logs / CERTAIN level
          // drop_console: ['log', 'info']    // preserve console.warn & console.error
        },
      };
      
      module.exports = config;
      ```

## Customizing the minifier | Expo CLI, -- via -- Metro bundler

* minifiers 
  * have tradeoffs: speed vs compression
* steps to customize the minifier | Expo CLI
  * modify your project's "metro.config.js"

### [Terser](https://github.com/terser/terser)

* | [Metro@0.73.0+](https://github.com/facebook/metro/releases/tag/v0.73.0)
  * default minifier 

* steps
  * | a project

    ```bash
    $ npm install --save-dev metro-minify-terser
    ---
    $ yarn add --dev metro-minify-terser
    ---
    $ pnpm add --save-dev metro-minify-terser
    ---
    $ bun add --dev metro-minify-terser
    ```
  * | "metro.config.js",
    * `transformer.minifierPath = 'metro-minify-terser'`
    * `transformer.minifierConfig` == [`terser` options](https://github.com/terser/terser#compress-options) 

    ```js metro.config.js
    const { getDefaultConfig } = require('expo/metro-config');
    
    const config = getDefaultConfig(__dirname);
    
    // | Metro v0.73+, Terser == default minifier
    //      -> NOT necessary;        config.transformer.minifierPath = 'metro-minify-terser'; 
    config.transformer.minifierPath = 'metro-minify-terser';
    config.transformer.minifierConfig = {
      // Terser options...
    };
    
    module.exports = config;
    ```

### Unsafe Terser options

* For additional compression that may not work in all JavaScript engines,
* enable the [`unsafe` `compress` options](https://terser.org/docs/miscellaneous/#the-unsafe-compress-option)

```js metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer.minifierPath = 'metro-minify-terser';

config.transformer.minifierConfig = {
  compress: {
    // Enable all unsafe optimizations.
    unsafe: true,
    unsafe_arrows: true,
    unsafe_comps: true,
    unsafe_Function: true,
    unsafe_math: true,
    unsafe_symbols: true,
    unsafe_methods: true,
    unsafe_proto: true,
    unsafe_regexp: true,
    unsafe_undefined: true,
    unused: true,
  },
};

module.exports = config;
```

### [esbuild](https://esbuild.github.io/)

* [`metro-minify-esbuild`](https://github.com/EvanBacon/metro-minify-esbuild)
  * uses
    * minify EXPONENTIALLY
      * -> 's speed >> `uglify-es`output's speed `terser`output's speed


### [Uglify](https://github.com/mishoo/UglifyJS)

* steps
  * | a project,

    ```bash
    # check
    #   `metro-minify-uglify` version == your project's metro's
    
    $ npm install --save-dev metro-minify-uglify
    ---
    $ yarn add --dev metro-minify-uglify
    ---
    $ pnpm add --save-dev metro-minify-uglify
    ---
    $ bun add --dev metro-minify-uglify
    ```
  * | "metro.config.js",
    * `transformer.minifierPath = 'metro-minify-uglify'`
    * `transformer.minifierConfig` == [options](https://github.com/mishoo/UglifyJS#compress-options)

    ```js metro.config.js
    const { getDefaultConfig } = require('expo/metro-config');
    
    const config = getDefaultConfig(__dirname);
    
    config.transformer.minifierPath = 'metro-minify-uglify';
    config.transformer.minifierConfig = {
      // Options: https://github.com/mishoo/UglifyJS#compress-options
    };
    
    module.exports = config;
    ```
