---
title: EAS Build
sidebar_title: Introduction
description: EAS Build is a hosted service for building app binaries for your Expo and React Native projects.
---

* goal
  * EAS Build

* EAS Build
  * := hosted service /
    * build app binaries 
      * -- for your --
        * Expo projects
        * React Native projects
        * native projects
      * if you want -> 
        * ALSO can sign the app
          * -> ready to publish | Google Play Store or Apple App Store
        * can be [auto-submitted | app stores -- via -- `--auto-submit` + EAS Submit](automate-submissions)
      * | consistent environments
      * -- based on -- [build profiles](eas-json.md#build-profiles)
    * makes easier
      * sharing builds -- thanks to -- [internal distribution](internal-distribution.md) 
    * -> ❌NO require❌
      * install Android Studio OR Xcode
  * integrated -- with -- 
    * [EAS Submit](../submit)
    * [EAS Workflows](../eas/workflows/get-started)
    * [CI pipelines](building-on-ci)
  * FIRST-class support -- for -- [`expo-updates` library](updates.md)

## Quick start

* requirements
  * [install EAS CLI](../eas/cli.md#installation)

* steps to build your app
  * `eas build --platform all` OR `eas build --platform android` OR `eas build --platform ios` 
    * what does it make under the hood?
      * sends your project -- to -- EAS Build
      * produces installable binaries -- for -- Android & iOS

## Key features

TODO: 

- Reuse [development builds](/develop/development-builds/introduction/) across your team
  * When two team members run `eas build:dev` and the project fingerprint matches, the existing build is downloaded from EAS instead of creating a new one
- Faster builds via [dependency caching and custom cache paths](/build-reference/caching/)
- Install builds and updates on devices with [Expo Orbit](https://expo.dev/orbit)


| use cases                                                                            | Recommendation |
|--------------------------------------------------------------------------------------|----------------|
| Build production-ready binaries for app stores                                       | ✅              |
| Share builds with testers via [internal distribution](/build/internal-distribution/) | ✅              |
| Consistent builds across team members without local environment setup                | ✅              |
| Automate builds from CI or [EAS Workflows](/eas/workflows/get-started/)              | ✅              |
| Managed app signing credentials                                                      | ✅              |
| Debugging native code locally                                                        | ❌              |

## Frequently asked questions

### How do I share builds with my team before submitting to app stores?

Use [internal distribution](/build/internal-distribution/) to share builds with a URL
* Set `"distribution": "internal"` in your [build profile](/build/eas-json/#build-profiles) in **eas.json** to 
generate installable Android Package (APK) files for Android or [ad hoc builds](/build/internal-distribution/) for iOS.

### Can I use EAS Build with existing React Native projects?

Yes
* EAS Build works with existing React Native projects created with `npx react-native init` or similar tools
* See [Overview of using Expo with existing React Native apps](/bare/overview/) for more information.

### Does EAS Build handle app signing credentials?

Yes
* EAS Build can generate and manage Android [keystores](/app-signing/app-credentials/#android), 
iOS [provisioning profiles](/app-signing/app-credentials/#ios) and [distribution certificates](/app-signing/app-credentials/#ios), or
use credentials you provide
* See [App signing credentials](/app-signing/app-credentials/) for more information.

### Can I run builds locally instead of in the cloud?

Yes
* Use [local builds](/build-reference/local-builds/) with `eas build --local` to run builds on your machine
* This is useful for debugging or for security policies that require local builds.

### Can I use EAS Build with EAS Workflows or CI pipelines?

Yes
* EAS Build integrates with [EAS Workflows](/eas/workflows/get-started/) using the `build` job type
* Add a build job to your workflow configuration, for example:

```yaml
jobs:
  build_ios:
    type: build
    params:
      platform: ios
```

The build job supports builds for both platforms or conditional builds based on the branch:

```yaml
jobs:
  build:
    type: build
    params:
      platform: all
      profile: ${{ github.ref_name == 'main' && 'production' || 'preview' }}
```

For more information and other usage examples, see the [EAS Workflows build job](/eas/workflows/pre-packaged-jobs#build).

EAS Build supports [builds from GitHub](/build/building-from-github/) and [building on CI](/build/building-on-ci/) with any provider.

### What build server infrastructure does EAS Build use?

Android builds run on Linux runners hosted in Google Cloud Platform, and iOS builds run on macOS runners hosted in Expo's macOS cloud
* See [Build server infrastructure](/build-reference/infrastructure/).
