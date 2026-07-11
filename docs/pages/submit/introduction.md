---
title: EAS Submit
sidebar_title: Introduction
description: EAS Submit is a hosted service for submitting Android and iOS app binaries to the Google Play Store and Apple App Store from the command line.
---

* **EAS Submit**
  * == EAS' hosted service 
    * -- for -- submitting Android & iOS binaries | Google Play Store & Apple App Store
      * WITHOUT
        * opening the [Google Play Console](https://play.google.com/console)
        * downloading the [Transporter app](https://apps.apple.com/us/app/transporter/id1450874784)
      * enable: Windows & Linux users can upload iOS builds
      * ALLOWED | apps / built
        * -- with -- [EAS Build](../build/introduction)
        * locally
      * ways to trigger
        * -- from -- CLI command
        * AFTER finishing building
        * -- from -- CI/CD service
  * supports
    * \>1 submission profiles 

## Quick start

* requirements
  * [install EAS CLI](../eas/cli.md#installation)

* steps to submit 
  * an Android build

    ```bash
    eas submit --platform android
    ```
  * an iOS build

    ```bash
    eas submit --platform ios
    ```
  * in 1 step

    ```bash
    eas submit --platform ios --auto-submit
    ```

## How EAS Submit works

* **EAS Submit** 
  * delivers your app -- , following the [default submission behavior for app stores](../build/automate-submissions.md#default-submission-behavior-for-app-stores), to the -- app stores' distribution pipelines
    * == ⚠️[ONLY queues up your app -- for -- distribution | Google Play Console & App Store Connect](../build/internal-distribution.md)⚠️

### Android (Google Play Store)

* EAS Submit 
  * uploads the build | Google Play Console | specified track
    * requirements
      * ❌NO FIRST-time❌
        * Reason:🧠FIRST-time submissions MUST be uploaded MANUALLY🧠
    * if you use track =
      * `beta` OR `alpha` OR `internal` -> app is ONLY AVAILABLE -- to -- testers
      * production -> | Google approves the release, AVAILABLE | ALL users 

* specified track
  * == | "eas.json", `.submit[*].track`

### iOS (App Store Connect/TestFlight)

* EAS Submit
  * uploads the build | App Store Connect | TestFlight

* if you want to upload it | production -> steps
  * log in | App Store Connect
  * fill in ALL the metadata + security questionnaire
  * upload app screenshots
  * choose the build
  * submit the build -- for -- App Review

## use cases

| Scenario                                                                                                                                                 | Recommendation                                                                                                                       |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Upload app binaries \| [Google Play Console](https://play.google.com/console/about/) & [Apple App Store](https://developer.apple.com/app-store-connect/) | ✅    |
| Upload iOS app binaries \| NON-macOS machines                                                                                                            | ✅                                                                                                                                    |
| AVOID MANUAL uploads -- through -- Play Console, App Store Connect or Transporter                                                                        | ✅                                                                                                                                    |
| Submit builds -- from -- [CI OR AUTOMATED workflows](../eas/workflows/pre-packaged-jobs.md#submit)                                                       | ✅                                                                                                                                    |
| Standardize release processes -- via -- ["eas.json"](../eas/json)                                                                                        | ✅                                                                                                                                    |
| Reduce human errors \| submission                                                                                                                        | ✅                                                                                                                                    |
| Testing locally & NOT ready \| store submission                                                                                                          | ❌                                                                                                                                    |
| NOT have a store listing configured \| Google Play Store                                                                                                 | ❌                                                                                                                                    |

## Frequently asked questions (FAQ)

### Can I submit builds / were NOT built -- via -- EAS Build?

* Yes
* TODO: EAS Submit accepts any valid **.aab** (Android App Bundle) or **.ipa** (iOS App Archive) file.

For builds created with EAS Build, run `eas submit` and select a build from the list or let it use the latest build automatically.

For local builds, use the `--path` flag to specify the binary:

```bash
eas submit --platform android --path ./my-app.aab

eas submit --platform ios --path ./my-app.ipa
```

The binary must be correctly signed
* For Android, this means a release keystore
* For iOS, this means a distribution certificate and provisioning profile.

### Can I use EAS Submit for TestFlight?

Yes
* All iOS submissions through EAS Submit are uploaded to App Store Connect and appear in TestFlight after processing
* Processing typically takes 10-15 minutes but can vary.

Once processed, you can distribute the build to internal testers immediately or add external testers after a brief Beta App Review
* To release to the App Store, you must manually submit the build for App Review through App Store Connect.

### Can I use EAS Submit inside EAS Workflows or from other CI/CD pipelines?

Yes
* EAS Submit works in CI environments and integrates with [EAS Workflows](/eas/workflows/get-started/)
* You can add a submit job to your workflow configuration
* For example:

```yaml
jobs:
  submit_ios_to_store:
    type: submit
    params:
      platform: ios
    after:
      - build_ios
```

For more information, see [EAS Workflows pre-packaged jobs](/eas/workflows/pre-packaged-jobs/#submit).

For CI pipelines, you can also use the `--non-interactive` flag to skip prompts and `--latest` to automatically select the most recent build:

```bash
eas submit --platform android --latest --non-interactive
```

### Do I need to handle metadata or screenshots?

EAS Submit uploads your binary but does not manage store listing metadata, screenshots, or release notes.

For Google Play Store, configure your store listing directly in [Google Play Console](https://play.google.com/console/about/) before submitting.

For Apple App Store, you can use [EAS Metadata](/eas/metadata/) to automate app information and localized descriptions.

### What credentials do I need?

For Android, you need a [Google Service Account Key](/submit/android/#creating-a-google-service-account) with access to your app in Google Play Console
* Your app must be uploaded manually at least once before API submissions work.

For iOS, you need an Apple Developer account
* EAS Submit requires your [`ascAppId`](/eas/json/#ascappid) (App Store Connect app ID) and will prompt for your Apple ID credentials or use an App Store Connect API Key if configured.

For more information, see [Google's Play Store's prerequisites](/submit/android/#prerequisites) and [Apple's App Store prerequisites](/submit/ios/#prerequisites).

### How do I know why my submission failed?

* steps
  * | [EAS dashboard](https://expo.dev/accounts/[account]/projects/[project]/submissions),
    * submission details page
      * display the logs
      * look for ["Build Annotations" bubble](https://expo.dev/changelog/2023-12-01-build-annotations)
