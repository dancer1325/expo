* goal
  * EAS Build & EAS Submit's properties -- to --
    * configure
    * override default behavior

* **eas.json**
  * == EAS configuration file
    * -- for -- EAS CLI & EAS services
      * generated | run [`eas build:configure` command](../build/setup.md#configure-the-project) for the FIRST time | your project
      * located | root of your project
    * ⭐️[schema](https://github.com/dancer1325/eas-cli/blob/main/packages/eas-json/schema/eas.schema.json)⭐️
  * [`.build`](#eas-build)
  * [`.submit`](#eas-submit)

## EAS Build

* [introduction](../build/introduction)
* `.build` key
  * == EAS Build configuration
  * ⭐️[schema](https://github.com/dancer1325/eas-cli/blob/main/packages/eas-json/schema/eas.schema.json)'s `Build`⭐️
  * default one

    ```json eas.json
    {
      "build": {
        "development": {
          "developmentClient": true,
          "distribution": "internal"
        },
        "preview": {
          "distribution": "internal"
        },
        "production": {}
      }
    }
    ```
    * == 3 build profiles 

### Common properties for native platforms

* `.build` key
  * ⭐️[schema](https://github.com/dancer1325/eas-cli/blob/main/packages/eas-json/schema/eas.schema.json)'s `Build`⭐️

### Android-specific options

* `.build[*].android` key
  * ⭐️[schema](https://github.com/dancer1325/eas-cli/blob/main/packages/eas-json/schema/eas.schema.json)'s `BuildProfileAndroid`⭐️


### iOS-specific options

* `.build[*].ios` key
  * ⭐️[schema](https://github.com/dancer1325/eas-cli/blob/main/packages/eas-json/schema/eas.schema.json)'s `BuildProfileIos`⭐️

## EAS Submit

* [introduction](../submit/introduction)
* `.submit` key
  * ⭐️[schema](https://github.com/dancer1325/eas-cli/blob/main/packages/eas-json/schema/eas.schema.json)'s `Submit`⭐️

### Android-specific options

* `.submit[*].android` key
⭐️[schema](https://github.com/dancer1325/eas-cli/blob/main/packages/eas-json/schema/eas.schema.json)'s `SubmitProfileAndroid`⭐️

### iOS-specific options

* `.submit[*].ios` key
⭐️[schema](https://github.com/dancer1325/eas-cli/blob/main/packages/eas-json/schema/eas.schema.json)'s `SubmitProfileIos`⭐️
