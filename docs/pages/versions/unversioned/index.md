---
title: Expo SDK reference
description: Access device and system functionality in your Expo and React Native apps using Expo SDK packages.
hideTOC: true
---

* [here](../index.md)

TODO: refactor NEXT documentation to PREVIOUS link 


### Beta releases

Before each Expo SDK release, we publish beta versions of the `expo` package and all of the Expo SDK packages
* Beta releases are considered much more stable than canary releases, and we encourage developers to try them out on their apps and share their feedback
* Beta releases use the `beta` tag on npm and follow the instructions in the related [changelog](https://expo.dev/changelog) post.

## Each Expo SDK version depends on a React Native version

### Additional information

<Collapsible summary="Expo SDK policy for tracking React Native releases">

- Each Expo SDK release targets a single React Native version. This is typically the latest stable version at the time of the release.
- React Native currently has six releases per year and aims for every release to include no breaking changes.
- Expo SDK releases aim to follow this cadence.
- Pre-release versions of the upcoming Expo SDK will include support for the latest version of React Native quickly, usually the same day it is released. A member of the Expo SDK team works on the React Native releases team for each release, and is responsible for continuously updating the React Native version in the Expo repository, verifying compatibility, and reporting regressions back to the React Native team.

</Collapsible>

<Collapsible summary="What if I need a change from the latest React Native version and it's not yet in an Expo SDK release?"
>
Expo engineers on the React Native releases team ensure that any urgent fixes are included in the React Native version used by the latest Expo SDK
* If your specific fix won't be cherrypicked into an existing release, perhaps because it is not considered critical or because it involves a breaking change, then you have two options:

1. Use [`patch-package`](https://github.com/ds300/patch-package) to pull in the fix.
2. Use a [pre-release version of the Expo SDK](#using-pre-release-versions).

</Collapsible>

<Collapsible summary="Can I use an older version of React Native with the latest Expo SDK?">

Packages in the Expo SDK are intended to support the target React Native version for that SDK
* Typically, they will not support older versions of React Native, but they may
* When a new version of React Native is released, the latest versions of the Expo SDK packages are typically updated to support it
* However, this may take weeks or more, depending on the extent of the changes in the release.

</Collapsible>

## Support for Android and iOS versions

Each version of Expo SDK supports a minimum OS version of Android and iOS
* For Android, the `compileSdkVersion` is defined which tells the [Gradle](https://developer.android.com/studio/build) which Android SDK version to use to compile the app
* This also means that you can use the Android API features included in that SDK version and from the previous versions
* For iOS, the [Xcode](https://developer.apple.com/news/upcoming-requirements/) tells the minimum Xcode SDK version to use to compile the app.

<AndroidIOSCompatibilityTable />

When deciding whether to upgrade your Expo SDK version, consider both Expo's SDK version and app store submission requirements, as described in the above table
* Google Play Store and Apple App Store periodically increase their minimum required OS versions and API levels, which are required for new app submissions
* Expo has no control over the app store requirements, and you should check [Google](https://developer.android.com/studio/build) and [Apple](https://developer.apple.com/news/upcoming-requirements/) for the current store submission requirements.
