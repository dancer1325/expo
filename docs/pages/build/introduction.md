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
      * if you want -> ALSO can sign the app
        * -> ready to publish | Google Play Store or Apple App Store
    * makes easier
      * sharing builds -- thanks to -- [internal distribution](internal-distribution.md) 
    * -> ❌NO require❌
      * install Android Studio OR Xcode
  * integrated -- with -- [EAS Submit](../submit)
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
- Cloud builds for Android and iOS with consistent environments
- Automatically provision and manage app signing credentials or use your own
- Share [internal distribution](/build/internal-distribution/) builds with a URL
- Automate builds with [build profiles](/build/eas-json/#build-profiles) in **eas.json** (named sets of build settings) and integrations with [EAS Workflows](/eas/workflows/get-started/) or [CI pipelines](/build/building-on-ci/)
- Auto-submit successful builds to app stores via [`--auto-submit`](/build/automate-submissions/) and EAS Submit
- First-class [`expo-updates` integration](/build/updates/) with per-profile channels and [runtime version](/eas-update/runtime-versions/) guidance
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

## Get started

<BoxLink
  title="Create your first build"
  description="It should only take a few minutes in total to get up and running for iOS and/or Android."
  href="/build/setup"
  Icon={Cube01Icon}
/>

<BoxLink
  title="Share your apps with internal testers"
  description="EAS Build can help share preview builds of your app with a single URL."
  href="/build/internal-distribution"
  Icon={Cube01Icon}
/>

<BoxLink
  title="Automate submissions"
  description="Learn how EAS Build can take your successful builds and handle uploading them to app stores automatically."
  href="/build/automate-submissions"
  Icon={Cube01Icon}
/>

<BoxLink
  title="App version management"
  description="Automate version bumps so you never have to think about them again."
  href="/build-reference/app-versions"
  Icon={Cube01Icon}
/>

<BoxLink
  title="Run builds locally or on your own infrastructure"
  description="EAS Build is a hosted service, and it can also run on your own machine, for example, to debug or to comply with company security policies."
  href="/build-reference/local-builds"
  Icon={Cube01Icon}
/>

<BoxLink
  title="Limitations"
  description="EAS Build is new and rapidly evolving, so we recommend getting familiar with the current limitations."
  href="/build-reference/limitations"
  Icon={Cube01Icon}
/>
