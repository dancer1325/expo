---
title: DevClient
description: A library that allows creating a development build and includes useful development tools.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-dev-client'
packageName: 'expo-dev-client'
iconUrl: '/static/images/packages/expo-dev-client.png'
platforms: ['android', 'ios']
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

## Configuration in app.json/app.config.js

You can configure development client launcher using its built-in [config plugin](/config-plugins/introduction/) if you use config plugins in your project ([EAS Build](/build/introduction) or `npx expo run:[android|ios]`).
The plugin allows you to configure various properties that cannot be set at runtime and require building a new app binary to take effect.

<ConfigPluginExample>

```json app.json
{
  "expo": {
    "plugins": [
      [
        "expo-dev-launcher",
        {
          "launchMode": "most-recent"
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
  ]}
/>

## API

```js
import * as DevClient from 'expo-dev-client';
```

<APISection packageName={['expo-dev-client']} apiName="DevClient" />
