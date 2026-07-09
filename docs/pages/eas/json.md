* goal
  * EAS Build & EAS Submit's properties -- to --
    * configure
    * override default behavior

* **eas.json**
  * == EAS configuration file
    * -- for -- CLI & services
      * generated | run [`eas build:configure` command](../build/setup.md#configure-the-project) for the FIRST time | your project
      * located | root of your project
    * ⭐️[schema](https://github.com/dancer1325/eas-cli/blob/main/packages/eas-json/schema/eas.schema.json)⭐️
  * [`.build`](#eas-build)
  * [`.submit`](#eas-submit)

## EAS Build

* [introduction](../build/introduction)
* `.build` key
  * == EAS Build configuration
  * AVAILABLE properties
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

### Common properties for native platforms

* TODO:
<EasJsonPropertiesTable schema={commonSchema} />

### Android-specific options

<EasJsonPropertiesTable schema={androidSchema} />

### iOS-specific options

<EasJsonPropertiesTable schema={iosSchema} />

## EAS Submit

* [introduction](../submit/introduction)
* `submit` key
  * AVAILABLE properties

### Android-specific options

<EasJsonPropertiesTable schema={submitAndroidSchema} />

### iOS-specific options

<EasJsonPropertiesTable schema={submitIosSchema} />
