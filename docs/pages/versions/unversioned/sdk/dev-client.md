---
title: DevClient
description: A library that allows creating a development build and includes useful development tools.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-dev-client'
packageName: 'expo-dev-client'
iconUrl: '/static/images/packages/expo-dev-client.png'
platforms: ['android', 'ios', 'tvos']
---

* `expo-dev-client`
  * == library / 
    * enables creating a development build
    * includes useful development tools
      * [support for network debugging](../../../debugging/tools.mdx/#inspecting-network-requests)
      * [support for launching updates](../../../eas-update/expo-dev-client.mdx) (_Example:_ [PR previews](../../../develop/development-builds/development-workflows.mdx#pr-previews))
      * default in-app development tools UI / provided by React Native -- are replaced with -- [in-app UI](../../../debugging/tools.md/#developer-menu)

* 💡[development builds](/develop/development-builds/introduction/) := debug builds / include `expo-dev-client` 💡 

## Installation

* TODO:
<APIInstallSection hideBareInstructions />

If you are installing this in an [existing React Native app](/bare/overview/), start by installing [`expo`](/bare/installing-expo-modules/) in your project.
Then, follow the instructions from [Install `expo-dev-client` in an existing React Native project](/bare/install-dev-builds-in-bare/).

When you create a build with EAS Build, set `developmentClient` to `true` on a build profile in your **eas.json**. Without it, EAS Build produces a standalone build with no development tools. For example:

```json eas.json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
      /* @hide ... */ /* @end */
    }
  }
  /* @hide ... */ /* @end */
}
```

For more information, see the [`developmentClient` property in the eas.json reference](/eas/json/#developmentclient).


## Configuration in app.json/app.config.js

You can configure development client launcher using its built-in [config plugin](/config-plugins/introduction/) if you use config plugins in your project ([EAS Build](/build/introduction) or `npx expo run:[android|ios]`).
The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect.

<ConfigPluginExample>

```json app.json
{
  "expo": {
    "plugins": [
      [
        "expo-dev-client",
        {
          "launchMode": "most-recent",
          "defaultLaunchURL": "http://localhost:8081",
          "android": {
            "defaultLaunchURL": "http://10.0.2.2:8081"
          },
          "toolsButton": true,
          "skipOnboarding": false,
          "showMenuAtLaunch": true
        }
      ]
    ]
  }
}
```

</ConfigPluginExample>

<ConfigPluginProperties
  properties={[
    {
      name: 'launchMode',
      description: [
        'Determines whether to launch the most recently opened project or navigate to the launcher screen.',
        '* `most-recent` - Attempt to launch directly into a previously opened project and if unable to connect, fall back to the launcher screen.',
        '* `launcher` - Opens the launcher screen.',
      ].join('\n'),
      default: '"most-recent"',
    },
    {
      name: 'addGeneratedScheme',
      description: [
        'By default, `expo-dev-client` will register a custom URL scheme to open a project. Set this property to `false` to disable this scheme.',
      ].join('\n'),
      default: 'true',
    },
    {
      name: 'defaultLaunchURL',
      description: [
        'Launch directly into this URL instead of navigating to launcher screen.',
        'If `launchMode` is set to `most-recent`, then launcher will use the `defaultLaunchURL` as a fallback.',
      ].join('\n'),
    },
    {
      name: 'toolsButton',
      description: 'Whether to show the floating tools button.',
      default: 'true',
    },
    {
      name: 'skipOnboarding',
      description:
        'Skip the onboarding screen that shows in the dev menu on the first launch of the app.',
      default: 'false',
    },
    {
      name: 'showMenuAtLaunch',
      description: 'Show the developer menu immediately after launching the app.',
      default: 'true',
    },
  ]}
/>

## TV support

- **Android TV**: All operations are supported, similar to an Android phone.
- **Apple TV**: Basic operations with a local or tunneled packager are supported. Authentication to EAS and listing of EAS builds and updates is not yet supported.

## API

```js
import * as DevClient from 'expo-dev-client';
```

<APISection packageName={['expo-dev-client']} apiName="DevClient" />
