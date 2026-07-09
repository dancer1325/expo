---
title: Why Metro?
description: Learn why Metro is the future of universal bundling in React Native and how it benefits developers.
---

* goal
  * why Expo is developed -- around -- Metro? 

* [Metro](https://metrobundler.dev/)
  * == 💡official bundler -- for -- Expo & React Native💡
    * == central build tool | Expo framework
    * | Expo,
      * first-class Metro support
  * maintained -- by -- Meta /
    * 's goal
      * fast
      * reliable
    * work close -- to develop -- Metro for Expo Router
  * pros
    * SOME features are implemented FIRSTLY | mobile vs web
      * _Example:_ React Fast Refresh
        * [launched | Metro | 2019](https://reactnative.dev/blog/2019/09/18/version-0.61)
        * [| React](https://github.com/facebook/create-react-app/pull/9375)
    * | instant native startup,
      * transform JS -- to -- Hermes bytecode 
    * [React Native DevTools / FIRST-class support -- for -- network & JS debugging](../debugging/tools.md#debugging-with-react-native-devtools)
    * React Compiler
      * -- as -- Metro-compatible Babel plugin
    * active ecosystem
      * -> NEW features
  * use cases
    * bundle MANY largest apps | app stores
      * _Example:_ TODO:

## Battle-tested at scale

TODO: 
Nearly every React Native app in the world uses Metro, making it a battle-tested solution optimized for large-scale projects
* This makes it suitable for developers of all sizes, from hobbyists to large companies
* Metro is designed specifically to handle large-scale Meta apps, which is why it has features such as native file watching with Watchman and [shared remote caches](https://metrobundler.dev/docs/caching).

## On-demand processing

In development, Metro doesn't perform any platform-specific work until requested
* This allows developers to work on large projects without paying a performance cost for the number of platforms they support
* In conjunction with aggressive caching and [async routes](/router/reference/async-routes/), developers can incrementally bundle only the parts of the app that they're actively working on.

## Multi-dimensional

Unlike traditional bundlers, which create multiple instances to bundle server and client code, Metro maximizes resource reuse across platforms and environments (server, client, DOM components)
* This architecture is ideal for multiplatform and server development.

## Reusable transform memoization

Metro is incremental and can create cached transform artifacts that can be used across machines
* This enables large teams to reuse work from remote builders, a technique used at Meta for all large projects.

## Optimized for custom runtimes

While other bundlers are designed around the static specification of web browsers, Metro is optimized for the flexibility of React Native
* This enables features like generating the specific set of supported language features required for Hermes bytecode compilation which enables faster app startup in production
* This will also extend to Static Hermes, which will compile static type information into machine code for native apps.

## Cross-technology support

Expo leverages Metro's technology to create novel functionality like [DOM components](/guides/dom-components/)
* This allows a React component in a native app to be dynamically bundled as an entire website with all the same defaults as the parent app, on-demand.

## Native asset exports

Unlike traditional bundlers, where the end result is a fully hosted app, Metro's configuration options support exporting bundles to embed as native artifacts in standalone app binaries
* This leverages OS-specific optimizations such as `xcassets` on Apple platforms.

## Concurrent processing

All AST transformation in Metro is performed concurrently across all available threads, maximizing the use of hardware.

## Comparison with other approaches

While Metro is designed for universal app development, it's often compared to other web-only bundlers
* Here are some key differences:

### Browser ESM versus bundling

While bundlers like Vite leverage built-in ESM support in the browser, this approach can lead to slower practical development times at medium to large scales due to thousands of cascading network requests
* Metro performs bundling in local development, which aligns the development results much closer to the production results and is better suited for React Native's larger module count.

### JavaScript versus native languages

Several bundlers are opting to write their core in Rust for performance reasons, but this comes with some trade-offs, such as more challenging contributions, patches, and development
* Metro uses a mix of technologies based on the operation:

- The core bundler and utilities are written in JS/Flow.
- File watching is written in C++ via Watchman, with a JS fallback
* Watchman is then used across projects on your computer.
- AST is parsed with Hermes parser (WebAssembly) to a Babel-compatible format.
- AST transformation is done with Babel
* This maximizes developer customization.
- Minification uses Hermes on native platforms and Terser (with optional ESBuild support) for web.
- CSS parsing and minification is performed with [LightningCSS](https://lightningcss.dev/) (Rust).

This approach aligns with Meta and community tools while allowing easier debugging, profiling, and patching for developers.
