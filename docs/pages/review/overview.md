---
title: Overview of distributing apps for review
sidebar_title: Distributing apps for review
description: Learn about how to distribute your app for review using app stores, internal distribution, and EAS Update.
---


* goal
  * ways to share a preview version of your app
    * [app store testing tracks](#app-store-testing-tracks)
    * [internal distribution](#internal-distribution----via----eas-build)
    * [development builds + EAS Update](#development-builds--eas-update)

## Can I use Expo Go for reviewing releases?

* ❌NOT❌

## App store testing tracks

* ⚠️ONLY work with release builds⚠️

### Android: Google Play Beta

* [Google Play beta](https://support.google.com/googleplay/android-developer/answer/9845334?visit_id=638740965629093187-3840249980&rd=1)
  * use cases
    * BEFORE completing public release
  * allows
    * distributing your app -- to -- testers /
      * distribution types
        * internal
          * <= 100 testers
        * closed
          * you need to invite people
        * open
          * ANYONE can join
      * collect feedback & crash reports | Google Play Console
  * steps to use it
    * you upload your app -- as an -- AAB | Google Play Console
    * set up a test track

### iOS: TestFlight

* TestFlight
  * requirements
    * paid Apple Developer account
    * [upload your app | App Store Connect](../submit/ios.md) & wait for review
  * allows you to 
    * create test groups (<= 100 members of your Apple Developer account team)
      * those can download the app -- through the -- TestFlight app
    * share your app with <= 10,000 users -- via -- email OR public link

## Internal distribution -- via -- EAS Build

* [Internal distribution](../build/internal-distribution.md)

* work with
  * release builds
  * development builds

## Development builds + EAS Update

You can use [development builds](/develop/development-builds/introduction/) to load previews of your app during the review stage by publishing an update with [EAS Update](/eas-update/introduction/)
* After sharing a development build through internal distribution and installing it, you can launch any update that you published 
with EAS Update, as long as it is compatible with the installed build
* Learn more about [Runtime versions and updates](/eas-update/runtime-versions/).

### You can use the EAS dashboard to launch updates and share a link to a specific update.

<ContentSpotlight controls file="review/eas-update-01.mp4" />

### You can explore and launch updates directly from a development build.

<ContentSpotlight controls file="review/eas-update-02.mp4" />

### You can configure GitHub Actions to automatically publish updates on PRs and commits.

<ContentSpotlight controls file="review/eas-update-03.mp4" />

This approach is uniquely powerful because it allows you to respond to feedback as quickly as you can run `eas update`
* It can take seconds to share a new version of your app with your team, and you can do so without needing to rebuild the app or 
upload it to a store test track.

<BoxLink
  title="Get started with EAS Update"
  description={
    <>
      Learn how to get started using <CODE>expo-updates</CODE> library and use EAS Update in your
      project.
    </>
  }
  href="/eas-update/getting-started/"
  Icon={LayersTwo02Icon}
/>

<BoxLink
  title="Use GitHub Actions"
  description="Learn how to use GitHub Actions to automate the process of publishing updates with EAS Update
* It also makes deploying updates consistent and fast, leaving you more time to develop your app."
  href="/eas-update/github-actions/"
  Icon={GithubIcon}
/>

<BoxLink
  title={
    <>
      Use <CODE>expo-dev-client</CODE> with EAS Update
    </>
  }
  description={
    <>
      Learn how to use <CODE>expo-dev-client</CODE> in your project to launch different app versions
      and preview a published update inside a development build.
    </>
  }
  href="/eas-update/expo-dev-client/"
  Icon={LayersTwo02Icon}
/>
