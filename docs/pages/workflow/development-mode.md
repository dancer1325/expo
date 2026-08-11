---
title: Development and production modes
description: Learn how to run a project in development mode or production mode.
---

* project running modes
  * [development](#development-mode)
  * [production](#production-mode)

## Development mode

* uses
  * | run your project locally, 
    * -- through -- `npx expo start`

* provide
  * useful warnings 
    * Reason:🧠performs validations🧠
    * _Examples:_ 
      * you use a deprecated property
      * you forgot to pass a required property | component
  * access -- to -- [tools](../debugging/tools.md) / 
    * make easier
      * development
      * [debugging](../debugging/runtime-issues.md) 

* 's speed < production mode's speed
* [how to switch to production mode](#production-mode)
  * AFTER switching,
    * close & re-open your app

* _Example:_ [demo video](../../public/static/videos/dev-prod/dev-mode.mp4)

## Production mode

* uses
  * published project 
    * == -- through -- `eas update`
  * standalone app

* use cases
  * test your app's performance
  * catch bugs / ONLY show up | production

* provide
  * [your code minified](../guides/customizing-metro.md#minification) 
  * performance == end users' devices performance



TODO: 
The easiest way to simulate how your project will run on end users' devices is with the command:

<Terminal cmd={['$ npx expo start --no-dev --minify']} />

It runs the JavaScript of your app in production mode (which tells the Metro bundler to set the `__DEV__` environment variable to `false`, among a few other things)
* The `--minify` flag minifies your app
* This flag also eliminates unnecessary data such as comments, formatting, and unused code
* If you are getting an error or crash in your standalone app, running your project with this command can save you a lot of time in finding the root cause.

To completely compile your app for production see [Compiling Android](/more/expo-cli/#compiling-android) and [Compiling iOS](/more/expo-cli/#compiling-ios).
