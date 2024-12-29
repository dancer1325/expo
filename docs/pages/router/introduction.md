---
title: Introduction to Expo Router
description: Expo Router is an open-source routing library for Universal React Native applications built with Expo.
hideTOC: true
sidebar_title: Introduction
---

* Expo Router
  * 👀== file-based router 👀
    * for applications
      * React Native
      * web
  * allows you to
    * 👀manage navigation -- between -- screens | your app 👀 /
      * same components can be reused | MULTIPLE platforms (Android, iOS, and web)
  * how does it work?
    * 👀add the file | **app** directory 👀
      * Reason: 🧠 automatically. the file -- becomes a -- route | your navigation 🧠

## Features

- **Native**
  - 👀== built | our powerful [React Navigation suite](https://reactnavigation.org/) 👀
    - == superset of React Navigation
- **Shareable**
  - 👀== EVERY screen | your app -- is automatically -- deep linkable 👀 
    - deep linkable == shareable -- with -- links
- **Offline-first**
  - -> 
    - if you publish a NEW version -> automatic updates
    - ALL incoming native URLs -> are handled / WITHOUT a network connection or server
  - Reason: 🧠Apps are cached 🧠
- **Optimized**
  - Routes are automatically optimized -- with --
    - lazy-evaluation | production,
    - deferred bundling | development
- **Iteration**
  - Universal Fast Refresh
    - == if you make code changes -> app is updated instantly / WITHOUT losing the app's state
    - ALLOWED | Android, iOS, and web,
  - artifact memoization | bundler
    - == caches built code
- **Universal navigation structure**
  - == SAME | Android, iOS, and web
- **Discoverable**
  - thanks to, Expo Router enables
    - build-time static rendering | web,
    - universal linking -- to -- native
      - == your app can handle web & native URLs
  - -> your app content -- can be indexed by -- search engines

### Alternative navigation libraries

* [React Navigation](https://reactnavigation.org/docs/getting-started#installation) 
  * recommendations
    * use [`createNativeStackNavigator`](https://reactnavigation.org/docs/native-stack-navigator)
* [React Native Navigation by Wix](https://github.com/wix/react-native-navigation)
  * ❌NOT 
    * AVAILABLE | Expo Go
    * YET compatible with `expo-dev-client` ❌

* recommendations
  * use Expo Router
    * Reason: 🧠 you will NOT have PREVIOUS features 🧠

## Common questions

* Expo Router vs Expo vs React Native CLI
  * Expo Router == framework | React Native
    * Remix and Next.js == frameworks | web-only React
    * bring the best architectural patterns

* Can I use Expo Router | EXISTING React Native app?
  * Yes 
  * 👀Expo Router is ONLY AVAILABLE | Expo CLI projects -- with -- Metro 👀
    * Reason: 🧠 deep connection between the router -- and the -- bundler 🧠 
    * [Expo CLI AVAILABLE | ANY React Native project](/bare/using-expo-cli/)

* What are the benefits of file-based routing?
  * file system == well-known & well-understood concept
  * onboard new users -- via an -- universal link / if the app is
    * installed -> opens concrete app's screen
    * NOT installed -> opens concrete web's screen
  * Refactoring is easy
    * Reason: 🧠move files around / WITHOUT having to update any imports or routing components 🧠
  * Expo Router statically type routes automatically
    * -> improve refactoring
      * Reason: 🧠if links are broken -> you'll get type errors 🧠
  * Async Routes (bundle splitting)  
    * == code split into smaller chunks / load on demand
      * != load your entire app | 1! time
    * recommended
      * MAINLY | larger projects
    * -> 
      * development speed
      * upgrades easier
        * Reason: 🧠you can incrementally update or refactor your app page-by-page != ALL at once (traditional React Native) 🧠
  * Deep links work | EVERY page 
    * use cases
      * promote your app,
      * collect bug reports,
      * E2E testing,
      * automating screenshots
  * Expo Head enable -- via automatic links -- deep-native integration 
    * SOME features ONLY require configuration setup, NO code changes
      * _Example:_ Quick Notes, Handoff, Siri context, and universal links 
    * -> enables perfect vertical integration -- with the -- ecosystem of smart devices / user has
      * == user experiences -- via -- universal apps (web ⇄ native)
  * statical & automatically render EACH page | web 
    * Reason: 🧠 thanks to file-based convention 🧠
    * 👀-> enable 👀
      * real SEO
      * FULL discoverability of your app's content
  * if your application follows a known convention -> **Expo CLI** -- can infer -- a lot of information about your application 
    * _Example:_ we could implement
      * automatic bundle splitting / route, or
      * automatically generate a sitemap | your website
    * if your app ONLY has 1! entry point -> IMPOSSIBLE 
  * Re-engagement features are easier to integrate
    * _Example:_ notifications, home screen widgets
    * Reason: 🧠you can simply intercept the launch and deep link -- via -- query parameters | ANYWHERE in the app 🧠
  * analytics and error reporting -- can easily be configured to automatically include the -- route name
    * uses
      * debugging
      * understanding user behavior

* Why to use Expo Router over React Navigation?
  * BOTH are from the Expo team
  * 👀Expo Router enables file-based routing 👀

* How do I server-render my Expo Router website?
  * Basic static rendering (SSG) is supported | Expo Router
  * Server-side rendering requirements
    * custom infrastructure

## Example
* see [here](/templates/expo-template-tabs)
