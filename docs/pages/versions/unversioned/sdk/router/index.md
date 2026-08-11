---
title: Router
sidebar_title: Overview
description: A file-based routing library for React Native and web applications.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-router'
packageName: 'expo-router'
platforms: ['android', 'ios', 'tvos', 'web', 'expo-go']
searchRank: 6
---

* `expo-router`
  * == routing library -- for -- React Native & web apps
    * enables
      * navigation management -- via -- file-based routing system
    * provides
      * native navigation components
  * [guides](../../../../router)
  * requirements
    * ⚠️| Expo SDK v56+, 
      * Expo Router NO longer supports importing -- from -- external `@react-navigation/*` packages⚠️
        * [how to migrate Expo SDK v55 -- to -- v56](../../../../router/migrate/sdk-55-to-56#automated-migration)

## Installation

* [how to install Expo Router](../../../../router/installation.md)

## Configuration | app config

* if you create the project -- through -- the default template -> `expo-router`'s [config plugin](../../../../config-plugins/introduction) is ALREADY configured | your app config

  ```json app.json
  {
    "expo": {
      "plugins": ["expo-router", ConfigPluginProperties]
    }
  }
  ```
  * `ConfigPluginProperties`
    * `root`
      * == routes directory 
      * recommendation
        * ONLY change if you need it
      * by default,
        * `"app"`
    * `origin`
      * Production origin URL where assets | public folder -- are -- hosted
      * the `fetch` function -- is polyfilled to support -- relative requests from this origin | production
      * development origin -- is inferred via -- Expo CLI development server
      * by default,
        * `undefined`
    * `headOrigin`
      * MORE specific origin URL -- used in -- `expo-router/head` module -- for -- iOS handoff
      * by default,
        * `origin`
    * `asyncRoutes`
      * enable async routes (lazy loading)
      * possible values
        * boolean
        * string (`"development"` or `"production"`)
        * object with platform-specific values (`{ android, ios, web, default }`)
      * ⚠️ `production` -- is currently -- web-only -> will be DISABLED | native
      * by default,
        * `undefined`
    * `platformRoutes`
      * enable or disable platform-specific routes (_Example:_ `index.android.tsx` and `index.ios.tsx`)
      * by default,
        * `true`
    * `sitemap`
      * enable or disable the automatically generated sitemap | `/_sitemap`
      * by default,
        * `true`
    * `partialRouteTypes`
      * enable partial typed routes generation
      * -> TypeScript -- can provide -- type checking for routes / WITHOUT requiring ALL routes to be statically known
      * by default,
        * `true`
    * `redirects`
      * array of static redirect rules
      * each rule
        * `source`
        * `destination`
        * `permanent` ⚠️ optional (by default, `false`)
        * `methods` ⚠️ optional -- HTTP methods to redirect --
      * by default,
        * `undefined`
    * `rewrites`
      * array of static rewrite rules
      * each rule
        * `source`
        * `destination`
        * `methods` ⚠️ optional -- HTTP methods to rewrite --
      * by default,
        * `undefined`
    * `headers`
      * list of headers -- set on -- EVERY route response from the server
      * value
        * string or array of strings
      * by default,
        * `undefined`
    * `disableSynchronousScreensUpdates`
      * disable synchronous layout updates for native screens
      * 🧠 can help with performance in SOME cases 🧠
      * by default,
        * `false`
    * `unstable_useServerMiddleware` ⚠️ experimental
      * enable server middleware support -- with a -- `+middleware.ts` file
      * ⚠️ requires `web.output: "server"` | app config
      * by default,
        * `false`
    * `unstable_useServerDataLoaders` ⚠️ experimental
      * enable data loader support
      * ⚠️ ONLY supported for `web.output: "static"` outputs
      * by default,
        * `false`
    * `unstable_useServerRendering` ⚠️ experimental
      * enable server-side rendering
      * ⚠️ when enabled with `web.output: "server"` -> HTML -- is rendered at -- request time != pre-rendered at build time
      * by default,
        * `false`

## Usage

* [Expo router core concepts](../../../../router/basics/core-concepts.md)

## APIs

| API                          | Description                                     |
|------------------------------| ----------------------------------------------- |
| [Stack](stack)               | Stack navigator, toolbar, and screen components |
| [Link](link)                 | Link and Redirect components                    |
| [Color](color)               | Platform color utilities                        |
| [Native Tabs](native-tabs)   | Native tab navigation                           |
| [Split View](split-view)     | Split view layout                               |
| [UI](ui)                     | Headless tab components                         |

## API

```js
```

<APISection packageName="expo-router" />
