---
title: package.json
description: A reference for Expo-specific properties that can be used in the package.json file.
---


* "package.json"
  * TOOD: refactor to linkis a JSON file that contains the metadata for a JavaScript project
  * This is a reference to Expo-specific properties that can be used by adding an `expo` field in the **package.json** file.

<PaddedAPIBox>

## `expo.install.exclude`

* use cases
  * commands / check: libraries installed | project vs library version / recommended 
    * if libraries installed | project != library version / recommended -> give a warning 
    * are
      * `npx expo start` & `npx expo-doctor`
      * `npx expo install` OR `npx expo install --check` OR `npx expo install --fix`

* steps
  * | "package.json",
    * add `expo.install.exclude`

        ```json package.json
        {
          "expo": {
            "install": {
              "exclude": ["expo-updates", "expo-splash-screen"]
            }
          }
        }
        ```

</PaddedAPIBox>

<PaddedAPIBox>

## `expo.autolinking`

Allows configuring module resolution behavior by using `autolinking` property in **package.json**.

```json package.json
{
  "expo": {
    "autolinking": {
      "nativeModulesDir": "./modules"
    }
  }
}
```

For complete reference, see [Autolinking configuration](/modules/autolinking/#configuration).

</PaddedAPIBox>

<PaddedAPIBox>

## `doctor`

Allows configuring the behavior of the [`npx expo-doctor`](/develop/tools/#expo-doctor) command.

<PaddedAPIBox>

### `reactNativeDirectoryCheck`

By default, Expo Doctor validates your project's packages against the [React Native directory](https://reactnative.directory/)
* This check throws a warning with a list of packages that are not included in the React Native Directory.

You can customize this check by adding the following configuration in your project's **package.json** file:

```json package.json
{
  "expo": {
    "doctor": {
      "reactNativeDirectoryCheck": {
        /* @info Use this option to disable/enable the check. */
        "enabled": true,
        /* @end */
        /* @info Use this option to exclude specific packages. */
        "exclude": ["/foo/", "bar"],
        /* @end */
        /* @info Use this option to disable/enable listing unknown packages. */
        "listUnknownPackages": true
        /* @end */
      }
    }
  }
}
```

By default, the check is enabled and unknown packages are listed.

</PaddedAPIBox>

<PaddedAPIBox>

### `appConfigFieldsNotSyncedCheck`

Expo Doctor checks if your project includes native project directories such as **android** or **ios**
* If these directories exist but are not listed in your **.gitignore** or [**.easignore**](/build-reference/easignore) files, Expo Doctor verifies the presence of an app config file
* If this file exists, it means your project is configured to use [Prebuild](/more/glossary-of-terms/#prebuild).

When the **android** or **ios** directories are present, EAS Build does not sync app config properties to the native projects
* Expo Doctor throws a warning if these conditions are true.

You can disable or enable this check by adding the following configuration to your project's **package.json** file:

```json package.json
{
  "expo": {
    "doctor": {
      "appConfigFieldsNotSyncedCheck": {
        "enabled": false
      }
    }
  }
}
```

</PaddedAPIBox>

</PaddedAPIBox>
