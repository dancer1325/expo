---
title: Platform-specific Modules
description: Learn how to switch modules based on the platform in Expo Router.
---

* goal
  * show specific content -- based on the -- CURRENT platform
    * ways to achieve it
      * platform-specific modules
      * platform-specific extensions

## Platform module

* requirements
  * ⚠️Expo Router v3.5.0-⚠️

* allows
  * | platform, 
    * make the experience MORE native

* if you want to detect the CURRENT platform -> use the [React Native `Platform` module](https://reactnative.dev/docs/platform-specific-code#platform-module)

## Platform specific extensions

* requirements
  * ⚠️Expo Router v3.5.0+⚠️

TODO: 
Metro bundler's platform-specific extensions (for example, **.ios.tsx** or **.native.tsx**) are not supported in the **app** directory
* This ensures that routes are universal across platforms for deep linking
* However, you can create platform-specific files outside the **app** directory and use them from within the **app** directory.

Consider the following project:

<FileTree
  files={[
    'app/_layout.tsx',
    'app/index.tsx',
    'app/about.tsx',
    'components/about.tsx',
    'components/about.ios.tsx',
    'components/about.web.tsx',
  ]}
/>

For example, the designs require you to build different `about` screens for each platform
* In that case, you can create a component for each platform in the **components** directory using platform extensions
* When imported, Metro will ensure the correct component version is used based on the current platform
* You can then re-export the component as a screen in the **app** directory.

```tsx app/about.tsx
export { default } from '../components/about';
```

> **info** **Best practice:** Always provide a file without a platform extension to ensure every platform has a default implementation.
