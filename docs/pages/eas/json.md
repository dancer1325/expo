* goal
  * EAS Build & EAS Submit's properties -- to --
    * configure
    * override default behavior

* **eas.json**
  * 👀:= configuration file for EAS CLI and services 👀
  * see
    * [EAS Build](../build/introduction)
    * [EAS Submit](../submit/introduction)

## EAS Build

* `build` key
  * AVAILABLE properties
    * _Example:_ MULTIPLE build profiles

        ```json eas.json
        {
          "build": {
            "base": {
              "node": "12.13.0",
              "yarn": "1.22.5",
              "env": {
                "EXAMPLE_ENV": "example value"
              },
              "android": {
                "image": "default",
                "env": {
                  "PLATFORM": "android"
                }
              },
              "ios": {
                "image": "latest",
                "env": {
                  "PLATFORM": "ios"
                }
              }
            },
            "development": {
              "extends": "base",
              "developmentClient": true,
              "env": {
                "ENVIRONMENT": "development"
              },
              "android": {
                "distribution": "internal",
                "withoutCredentials": true
              },
              "ios": {
                "simulator": true
              }
            },
            "staging": {
              "extends": "base",
              "env": {
                "ENVIRONMENT": "staging"
              },
              "distribution": "internal",
              "android": {
                "buildType": "apk"
              }
            },
            "production": {
              "extends": "base",
              "env": {
                "ENVIRONMENT": "production"
              }
            }
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

* `submit` key
  * AVAILABLE properties
    * _Example:_ production profile

        ```json eas.json
        {
          "cli": {
            "version": ">= 0.34.0"
          },
          "submit": {
            "production": {
              "android": {
                "serviceAccountKeyPath": "../path/to/api-xxx-yyy-zzz.json",
                "track": "internal"
              },
              "ios": {
                "appleId": "john@turtle.com",
                "ascAppId": "1234567890",
                "appleTeamId": "AB12XYZ34S"
              }
            }
          }
        }
        ```

### Android-specific options

<EasJsonPropertiesTable schema={submitAndroidSchema} />

### iOS-specific options

<EasJsonPropertiesTable schema={submitIosSchema} />
