---
title: Pre-packaged jobs in EAS Workflows
sidebar_title: Pre-packaged jobs
description: Learn how to set up and use pre-packaged jobs in EAS Workflows.
---

* goal
  * AVAILABLE pre-packaged jobs | EAS Workflows
  * how to use pre-packaged jobs | your workflows?

* Pre-packaged jobs
  * == ready-to-use workflow jobs
    * help you AUTOMATE COMMON tasks (_Example:_ building, submitting, and testing your app)
    * 👀are
      * [build](#build)
      * [deploy](#deploy)
      * [fingerprint](#fingerprint)
      * [get-build](#get-build)
      * [submit](#submit)
      * [testflight](#testflight)
      * [update](#update)
      * [branch-delete](#branch-delete)
      * [maestro](#maestro)
      * [maestro-cloud](#maestro-cloud)
      * [slack](#slack)
      * [github-comment](#github-comment)
      * [apple-device-registration-request](#apple-device-registration-request)
      * [require-approval](#require-approval)
      * [doc](#doc)
      * [repack](#repack)👀
  * provide
    * standardized way -- to -- handle these operations 
      * WITHOUT having to write CUSTOM job configurations -- from -- scratch

## Build

* requirements
  * ⚠️[completed build -- , via EAS CLI, from -- your local machine](../../build/setup.md)⚠️

* build jobs
  * allow
    * build your project |
      * Android app
      * iOS app
  * [can be customized](../../custom-builds/get-started.md)
    * Reason:🧠| build process, you can execute custom commands🧠
  * syntax

  ```yaml
  jobs:
    build_app:
      type: build
      runs_on: string # optional - see https://docs.expo.dev/build-reference/infrastructure/ for available options
      params:
        platform: android | ios # required
        profile: string # optional - default: production
        message: string # optional
        refresh_ad_hoc_provisioning_profile: boolean # optional
  ```

#### Parameters -- `.params` --

TODO:


| ALLOWED parameters                  | Type    | Description                                                                                                                                                                                                                                                                                                   |
|-------------------------------------| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| platform                            | string  | **Required.** The platform to build for. Can be either `android` or `ios`.                                                                                                                                                                                                                                    |
| profile                             | string  | Optional. The build profile to use. Defaults to `production`.                                                                                                                                                                                                                                                 |
| message                             | string  | Optional. Custom message attached to the build. Corresponds to the `--message` flag when running `eas build`.                                                                                                                                                                                                 |
| refresh_ad_hoc_provisioning_profile | boolean | Optional. Refreshes the managed ad hoc provisioning profile before an iOS internal build starts. Corresponds to the [`--refresh-ad-hoc-provisioning-profile`](/eas/cli/#eas-build) flag when running `eas build`. See [internal distribution on CI](/build/internal-distribution/#automation-on-ci-optional). |

#### Environment variables

If you need certain environment variables during the build process, you can include them in your [eas.json](/eas/json/#environment), for your specified build `profile`
* They will be pulled from [EAS environment variables](/eas/environment-variables/).

#### Outputs

You can reference the following outputs in subsequent jobs:

| Output            | Type   | Description                                                        |
| ----------------- | ------ | ------------------------------------------------------------------ |
| build_id          | string | The ID of the created build.                                       |
| app_build_version | string | The version code/build number of the app.                          |
| app_identifier    | string | The bundle identifier/package name of the app.                     |
| app_version       | string | The version of the app.                                            |
| channel           | string | The update channel used for the build.                             |
| distribution      | string | The distribution method used. Can be `internal` or `store`.        |
| fingerprint_hash  | string | The fingerprint hash of the build.                                 |
| git_commit_hash   | string | The git commit hash used for the build.                            |
| platform          | string | The platform the build was created for. Either `android` or `ios`. |
| profile           | string | The build profile used.                                            |
| runtime_version   | string | The runtime version used.                                          |
| sdk_version       | string | The SDK version used.                                              |
| simulator         | string | Whether the build is for simulator.                                |


## Deploy

Deploy your application using [EAS Hosting](/eas/hosting/introduction).

<Prerequisites>
  <Requirement title="A project set up for EAS Hosting">
    See [Get started with EAS Hosting](/eas/hosting/get-started/#prerequisites) for setup
    instructions.
  </Requirement>
</Prerequisites>

### Syntax

```yaml
jobs:
  deploy_web:
    type: deploy
    params:
      alias: string # optional
      prod: boolean # optional
```

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter | Type    | Description                                                                        |
| --------- | ------- | ---------------------------------------------------------------------------------- |
| alias     | string  | Optional. The [alias](/eas/hosting/deployments-and-aliases/#aliases) to deploy to. |
| prod      | boolean | Optional. Whether to deploy to production.                                         |

#### Outputs

You can reference the following outputs in subsequent jobs:

| Output                | Type   | Description                                                                                                                                      |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| deploy_json           | string | JSON object containing the deployment details (output of `npx eas-cli deploy --json`).                                                           |
| deploy_url            | string | URL to the deployment. It uses production URL if this was a production deployment. Otherwise, it uses the first alias URL or the deployment URL. |
| deploy_alias_url      | string | Alias URL to the deployment (for example, `https://account-project--alias.expo.app`).                                                            |
| deploy_deployment_url | string | Unique URL to the deployment (for example, `https://account-project--uniqueid.expo.app`).                                                        |
| deploy_identifier     | string | Identifier of the deployment.                                                                                                                    |
| deploy_dashboard_url  | string | URL to the deployment dashboard (for example, `https://expo.dev/projects/[project]/hosting/deployments`).                                        |

## Fingerprint

Calculates a fingerprint of your project.

> **Note:** This job type only supports [CNG](/workflow/continuous-native-generation/) workflows. If you commit your **android** or **ios** directories, the fingerprint job won't work.

> **Note:** To ensure fingerprints match your builds, use the same `environment` setting as your build profile. For environment variables, we recommend using [EAS environment variables](/eas/environment-variables/) rather than the [`env`](/eas/workflows/syntax/#jobsjob_idenv) field for better consistency.

### Syntax

```yaml
jobs:
  fingerprint:
    type: fingerprint
    environment: production | preview | development # optional, defaults to production
    env: # optional list of environment variables
      ENV_VAR_NAME: value
```

#### Environment variables

You can pass a list of environment variables into the `env` parameter. These environment variables will be pulled from [EAS environment variables](/eas/environment-variables/). The passed `environment` parameter will be used for the environment variable's environment, which is useful when the same environment variable is defined across different environments.

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter               | Type    | Description                                                                                                                                               |
| ----------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| unstable_skip_cng_check | boolean | Optional. Whether to skip the check for [Continuous Native Generation (CNG)](/workflow/continuous-native-generation/) compatibility. Defaults to `false`. |

#### Outputs

You can reference the following outputs in subsequent jobs:

| Output                   | Type   | Description                       |
| ------------------------ | ------ | --------------------------------- |
| android_fingerprint_hash | string | The fingerprint hash for Android. |
| ios_fingerprint_hash     | string | The fingerprint hash for iOS.     |

## Get Build

Retrieve an existing build from EAS that matches the provided parameters.

### Syntax

```yaml
jobs:
  get_build:
    type: get-build
    params:
      platform: ios | android # optional
      profile: string # optional
      distribution: store | internal | simulator # optional
      channel: string # optional
      app_identifier: string # optional
      app_build_version: string # optional
      app_version: string # optional
      git_commit_hash: string # optional
      fingerprint_hash: string # optional
      sdk_version: string # optional
      runtime_version: string # optional
      simulator: boolean # optional
      wait_for_in_progress: boolean # optional
```

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter            | Type    | Description                                                                    |
| -------------------- | ------- | ------------------------------------------------------------------------------ |
| platform             | string  | Optional. The platform to get the build for. Can be `ios` or `android`.        |
| profile              | string  | Optional. The build profile to use.                                            |
| distribution         | string  | Optional. The distribution method. Can be `store`, `internal`, or `simulator`. |
| channel              | string  | Optional. The update channel.                                                  |
| app_identifier       | string  | Optional. The bundle identifier/package name.                                  |
| app_build_version    | string  | Optional. The build version.                                                   |
| app_version          | string  | Optional. The app version.                                                     |
| git_commit_hash      | string  | Optional. The git commit hash.                                                 |
| fingerprint_hash     | string  | Optional. The fingerprint hash.                                                |
| sdk_version          | string  | Optional. The SDK version.                                                     |
| runtime_version      | string  | Optional. The runtime version.                                                 |
| simulator            | boolean | Optional. Whether to get a simulator build.                                    |
| wait_for_in_progress | boolean | Optional. Whether to wait for a matching in-progress build. Default: `false`.  |

If `wait_for_in_progress` is set to `true`, the job will still prioritize continuing immediately with a successful build, but it will also look for in-progress builds. If no successful build is found, the job will wait for an in-progress build to complete before continuing. If the matched build succeeds, the job will be marked as successful and will return the successful build. If the matched build fails, the job will be marked as successful and its outputs will be empty — as if the build has not been matched.

#### Outputs

You can reference the following outputs in subsequent jobs:

| Output            | Type   | Description                                    |
| ----------------- | ------ | ---------------------------------------------- |
| build_id          | string | The ID of the retrieved build.                 |
| app_build_version | string | The build version of the app.                  |
| app_identifier    | string | The bundle identifier/package name of the app. |
| app_version       | string | The version of the app.                        |
| channel           | string | The update channel used for the build.         |
| distribution      | string | The distribution method used.                  |
| fingerprint_hash  | string | The fingerprint hash of the build.             |
| git_commit_hash   | string | The git commit hash used for the build.        |
| platform          | string | The platform the build was created for.        |
| profile           | string | The build profile used.                        |
| runtime_version   | string | The runtime version used.                      |
| sdk_version       | string | The SDK version used.                          |
| simulator         | string | Whether the build is for simulator.            |

## Submit

Submit an Android or iOS build to the app store using EAS Submit.

<Prerequisites>
  <Requirement title="CI/CD submission configuration">
    Submission jobs require additional configuration to run within a CI/CD process. See the [Google
    Play Store CI/CD submission guide](/submit/android/#submitting-your-app-using-cicd-services) and
    [Apple App Store CI/CD submission guide](/submit/ios/#submitting-your-app-using-cicd-services)
    for more information.
  </Requirement>
</Prerequisites>

### Syntax

```yaml
jobs:
  submit_to_store:
    type: submit
    runs_on: string # optional - see https://docs.expo.dev/build-reference/infrastructure/ for available options
    params:
      build_id: string # required
      profile: string # optional - default: production
    hooks:
      before_submit: step[] # optional - steps to run before the submission starts.
      after_submit: step[] # optional - steps to run after the submission completes.
```

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter | Type   | Description                                                    |
| --------- | ------ | -------------------------------------------------------------- |
| build_id  | string | Required. The ID of the build to submit.                       |
| profile   | string | Optional. The submit profile to use. Defaults to `production`. |

#### Outputs

You can reference the following outputs in subsequent jobs:

| Output                | Type   | Description                                       |
| --------------------- | ------ | ------------------------------------------------- |
| apple_app_id          | string | The Apple App ID of the submitted build.          |
| ios_bundle_identifier | string | The iOS bundle identifier of the submitted build. |
| android_package_id    | string | The Android package ID of the submitted build.    |

#### Hooks

The following hooks are supported for the Submit job:

- `before_submit`: steps to run before the submission starts.
- `after_submit`: steps to run after the submission completes.

See [`jobs.<job_id>.hooks`](/eas/workflows/syntax/#jobsjob_idhooks) for the general hooks syntax.

## TestFlight

Distribute iOS builds to TestFlight internal and external testing groups. This is an alternative to the iOS submit job for when you need more advanced TestFlight features. If you need to control test groups, changelog, or Beta App Review submission, use the `testflight` job instead of submit.

The job supports two approaches: upload a build and submit it to TestFlight (`build_id`), or submit an already uploaded build (`asc_build_id`). In both cases, you can add the build to groups, set "What to Test" notes, and submit for Beta App Review. Provide exactly one of `build_id` or `asc_build_id`.

<Prerequisites>
  <Requirement title="TestFlight test information for external distribution">
    When distributing to external groups or submitting for Beta App Review (`external_groups` and/or
    `submit_beta_review: true`), the build must have the required TestFlight test information
    completed in App Store Connect before the job can succeed. See [Provide test
    information](https://developer.apple.com/help/app-store-connect/test-a-beta-version/provide-test-information/)
    in Apple's documentation.
  </Requirement>
</Prerequisites>

### Shared parameters

Both approaches accept the following parameters in `params`:

| Parameter          | Type     | Description                                                                                                                                                                                                                                                             |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| internal_groups    | string[] | Optional. An array of TestFlight internal group names to add the build to. Only include groups without automatic distribution enabled.                                                                                                                                  |
| external_groups    | string[] | Optional. An array of TestFlight external group names to add the build to.                                                                                                                                                                                              |
| changelog          | string   | Optional. Test notes ("What to Test") for TestFlight testers.                                                                                                                                                                                                           |
| submit_beta_review | boolean  | Optional. Whether to submit for Beta App Review. If not specified, defaults to `true` when `external_groups` are provided, `false` otherwise. Set to `false` to update the changelog or groups on an already-submitted build without re-submitting for Beta App Review. |

### Upload build and submit to TestFlight

Upload an EAS iOS build and submit it to TestFlight in a single workflow job.

<Prerequisites>
  <Requirement title="An iOS store build and Apple Developer account">
    TestFlight jobs require an iOS build created with `distribution: store` and an Apple Developer
    account configured. See the [TestFlight submission
    guide](/submit/ios/#submitting-your-app-using-cicd-services) for more information.
  </Requirement>
</Prerequisites>

#### Syntax

```yaml
jobs:
  testflight_distribution:
    type: testflight
    runs_on: string # optional - see https://docs.expo.dev/build-reference/infrastructure/ for available options
    params:
      build_id: string # required
      profile: string # optional - default: production
      internal_groups: string[] # optional
      external_groups: string[] # optional
      changelog: string # optional
      submit_beta_review: boolean # optional
      wait_processing_timeout_seconds: number # optional - default: 1800 (30 minutes)
```

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter                       | Type   | Description                                                                                                                                                           |
| ------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| build_id                        | string | Required. The ID of the iOS EAS Build to distribute.                                                                                                                  |
| profile                         | string | Optional. The submit profile to use. Defaults to `production`.                                                                                                        |
| wait_processing_timeout_seconds | number | Optional. Timeout in seconds to wait for App Store Connect build processing. Defaults to `1800` (30 minutes). Only applies when distributing via groups or changelog. |

You can also pass any of the [shared parameters](#shared-parameters).

#### Outputs

You can reference the following outputs in subsequent jobs:

| Output                | Type   | Description                                       |
| --------------------- | ------ | ------------------------------------------------- |
| apple_app_id          | string | The Apple App ID of the submitted build.          |
| ios_bundle_identifier | string | The iOS bundle identifier of the submitted build. |

### Submit an already uploaded build

Submit a build that is already in App Store Connect to TestFlight groups, set "What to Test" notes, and submit for Beta App Review. Beta App Review submission is optional. Set `submit_beta_review: false` to update the changelog or groups on an existing build without re-submitting it for review.

<Prerequisites>
  <Requirement title="App Store Connect integration">
    Configure your App Store Connect connection in [Project settings > General >
    Connections](https://expo.dev/accounts/[account]/projects/[project]/settings). The build must
    already exist in App Store Connect and be ready for submission.
  </Requirement>
</Prerequisites>

#### Syntax

```yaml
jobs:
  testflight_distribution:
    type: testflight
    params:
      asc_build_id: string # required
      internal_groups: string[]
      external_groups: string[]
      changelog: string
      submit_beta_review: boolean
```

#### Parameters

| Parameter    | Type   | Description                                                           |
| ------------ | ------ | --------------------------------------------------------------------- |
| asc_build_id | string | Required. The ID of a build that already exists in App Store Connect. |

You can also pass any of the [shared parameters](#shared-parameters).

#### Outputs

| Output       | Type   | Description                     |
| ------------ | ------ | ------------------------------- |
| asc_build_id | string | The App Store Connect build ID. |

## Update

Publish an update using [EAS Update](/eas-update/introduction/).

<Prerequisites>
  <Requirement title="EAS Update configured">
    To publish update previews and to send over-the-air updates. Run `npx eas-cli@latest
    update:configure`, then create new builds. Learn more about [configuring EAS
    Update](/eas-update/getting-started/#prerequisites).
  </Requirement>
</Prerequisites>

### Syntax

```yaml
jobs:
  publish_update:
    type: update
    environment: production | preview | development # optional, defaults to production
    env: # optional list of environment variables
      ENV_VAR_NAME: value
    runs_on: string # optional - see https://docs.expo.dev/build-reference/infrastructure/ for available options
    params:
      message: string # optional
      platform: string # optional - android | ios | all, defaults to all
      branch: string # optional
      channel: string # optional - cannot be used with branch
      rollout_percentage: number # optional - 0 to 100, defaults to 100
      private_key_path: string # optional
      upload_sentry_sourcemaps: boolean # optional - defaults to "try uploading, but don't fail the job if it fails"
```

#### Environment variables

You can pass a list of environment variables into the `env` parameter. These environment variables will be pulled from [EAS environment variables](/eas/environment-variables/). The passed `environment` parameter will be used for the environment variable's environment, which is useful when the same environment variable is defined across different environments.

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter                | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| message                  | string  | Optional. Message to use for the update. If not provided, the commit message will be used.                                                                                                                                                                                                                                                                                                                                                                   |
| platform                 | string  | Optional. Platform to use for the update. Can be `android`, `ios`, or `all`. Defaults to `all`.                                                                                                                                                                                                                                                                                                                                                              |
| branch                   | string  | Optional. Branch to use for the update. If not provided, the branch from the workflow run will be used. For manually run workflows you need to provide a value. Example: `${{ github.ref_name \|\| 'testing' }}`. Provide _either_ a branch or a channel, not both.                                                                                                                                                                                          |
| channel                  | string  | Optional. Channel to use for the update. Provide _either_ a branch or a channel, not both.                                                                                                                                                                                                                                                                                                                                                                   |
| rollout_percentage       | number  | Optional. Percentage of users this update should be immediately available to. Must be an integer between `0` and `100`. This is equivalent to passing `--rollout-percentage` to the EAS CLI.                                                                                                                                                                                                                                                                 |
| private_key_path         | string  | Optional. Path to the file containing the PEM-encoded private key corresponding to the certificate in [EAS Update configuration](/eas-update/code-signing/#publish-a-signed-update-for-your-app). You can reference a file type [EAS environment variable](/eas/environment-variables/) with `"$VARIABLE_NAME"` syntax. This is equivalent to passing `--private-key-path` to the EAS CLI.                                                                   |
| upload_sentry_sourcemaps | boolean | Optional. Whether to upload Sentry sourcemaps. If the value is `true`, the job will upload Sentry source maps and fail if uploading fails. If the value is `false`, the job will not upload sourcemaps to Sentry. If the value is not provided, the job is going to check if `@sentry/react-native` is installed and if it is, try to upload sourcemaps. If that fails, it will only print the error message and continue with the job marked as successful. |

#### Outputs

You can reference the following outputs in subsequent jobs:

| Output                | Type   | Description                                                   |
| --------------------- | ------ | ------------------------------------------------------------- |
| first_update_group_id | string | The ID of the first update group.                             |
| updates_json          | string | A JSON string containing information about all update groups. |

## Branch delete

Delete an [EAS Update](/eas-update/introduction/) branch in the current project. The same as [`eas branch:delete`](/eas-update/eas-cli/#delete-a-branch). Pass the EAS Update branch name in `branch_name`.

### Syntax

```yaml
jobs:
  delete_branch:
    type: branch-delete
    params:
      branch_name: string # required
      fail_on_missing: boolean # optional, default: false
```

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter       | Type    | Description                                                                                                                                                    |
| --------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| branch_name     | string  | Required. Name of the EAS Update branch to delete.                                                                                                             |
| fail_on_missing | boolean | If `false`, the job succeeds when the branch does not exist. If `true`, the job fails with a validation error when the branch is missing. Defaults to `false`. |

#### Outputs

You can reference the following outputs in subsequent jobs:

| Output      | Type   | Description                                                                                       |
| ----------- | ------ | ------------------------------------------------------------------------------------------------- |
| branch_id   | string | UUID of the deleted branch, or `null` if the branch was missing and `fail_on_missing` is `false`. |
| branch_name | string | The branch name from `params.branch_name`.                                                        |


## Maestro

Run Maestro tests on an Android Emulator or iOS Simulator build.

> **important** Maestro tests are in [alpha](/more/release-statuses/#alpha).

### Syntax

```yaml
jobs:
  run_maestro_tests:
    type: maestro
    environment: production | preview | development # optional - defaults to preview
    image: string # optional - see https://docs.expo.dev/build-reference/infrastructure/ for a list of available images.
    params:
      build_id: string # required
      flow_path: string | string[] # required
      shards: number # optional - defaults to 1
      retries: number # optional - defaults to 0
      retry_failed_only: boolean # optional - defaults to true
      record_screen: boolean # optional - defaults to false
      include_tags: string | string[] # optional
      exclude_tags: string | string[] # optional
      maestro_version: string # optional - defaults to latest
      android_system_image_package: string # optional
      device_identifier: string | { android?: string, ios?: string } # optional
      output_format: string # optional - defaults to junit
    hooks:
      before_maestro_tests: step[] # optional - steps to run before the tests start.
      after_maestro_tests: step[] # optional - steps to run after the tests complete.
```

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter                    | Type                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| build_id                     | string                                                | Required. The ID of the build to test.                                                                                                                                                                                                                                                                                                                                                                                                |
| flow_path                    | string or string[]                                    | Required. The path to the Maestro flow file(s) or directory to run.                                                                                                                                                                                                                                                                                                                                                                   |
| shards                       | number                                                | Optional and experimental. The number of shards to split the tests into. Defaults to 1.                                                                                                                                                                                                                                                                                                                                               |
| retries                      | number                                                | Optional. The number of times to retry the tests if they fail. Defaults to 0.                                                                                                                                                                                                                                                                                                                                                         |
| retry_failed_only            | boolean                                               | Optional. When true (default), retries will attempt to re-run only the flows that failed on the previous attempt when applicable. Set to false to re-run all flows on every retry.                                                                                                                                                                                                                                                    |
| record_screen                | boolean                                               | Optional. Whether to record the screen. Defaults to false. Note: recording screen may impact emulator performance. You may want to use large runners when recording screen.                                                                                                                                                                                                                                                           |
| include_tags                 | string or string[]                                    | Optional. Flow tags to include in the tests. Will be passed to Maestro as `--include-tags`.                                                                                                                                                                                                                                                                                                                                           |
| exclude_tags                 | string or string[]                                    | Optional. Flow tags to exclude from the tests. Will be passed to Maestro as `--exclude-tags`.                                                                                                                                                                                                                                                                                                                                         |
| maestro_version              | string                                                | Optional. Version of Maestro to use for the tests. If not provided, the latest version will be used.                                                                                                                                                                                                                                                                                                                                  |
| output_format                | string                                                | Optional. Maestro test report format. Defaults to `junit`. Will be passed to Maestro as `--format`. Can be `junit` or other supported formats.                                                                                                                                                                                                                                                                                        |
| android_system_image_package | string                                                | Optional. Android Emulator system image package to use. Run `sdkmanager --list` on your machine to list available packages. Choose an `x86_64` variant. Examples: `system-images;android-36;google_apis;x86_64`, `system-images;android-35-ext15;google_apis_playstore;x86_64`. Note that newer images require more computing resources, for which you may want to use large runners.                                                 |
| device_identifier            | string or `{ android?: string, ios?: string }` object | Optional. Device identifier to use for the tests. You can also use a single-value expression like `pixel_6`, `iPhone 16 Plus` or `${{ needs.build.outputs.platform == "android" ? "pixel_6" : "iPhone 16 Plus" }}` and an object like `device_identifier: { android: "pixel_6", ios: "iPhone 16 Plus" }`. Note that iOS devices availability differs across runner images. A list of available devices can be found in the jobs logs. |
| skip_build_check             | boolean                                               | Optional. Skip validation of the build (whether an iOS build is a simulator build). Defaults to false.                                                                                                                                                                                                                                                                                                                                |

#### Hooks

The following hooks are supported for the Maestro job:

- `before_maestro_tests`: steps to run before the tests start.
- `after_maestro_tests`: steps to run after the tests complete.

See [`jobs.<job_id>.hooks`](/eas/workflows/syntax/#jobsjob_idhooks) for the general hooks syntax.

## Maestro Cloud

Run Maestro tests on Maestro Cloud.

> **important** This requires a Maestro Cloud account and Cloud Plan subscription. Go to [Maestro docs](https://docs.maestro.dev/maestro-cloud/run-tests-on-maestro-cloud) to learn more.

### Syntax

```yaml
jobs:
  run_maestro_tests:
    type: maestro-cloud
    environment: production | preview | development # optional - defaults to preview
    image: string # optional- see https://docs.expo.dev/build-reference/infrastructure/ for a list of available images.
    params:
      build_id: string # required - ID of the build to test.
      maestro_project_id: string # required - Maestro Cloud project ID. Example: `proj_01jw6hxgmdffrbye9fqn0pyzm0`.
      flows: string # required - Path to the Maestro flow file or directory containing the flows to run. Corresponds to `--flows` param to `maestro cloud`.
      maestro_api_key: string # optional - defaults to `$MAESTRO_CLOUD_API_KEY`
      include_tags: string | string[] # optional - tags to include in the tests. Will be passed to Maestro as `--include-tags`.
      exclude_tags: string | string[] # optional - tags to exclude from the tests. Will be passed to Maestro as `--exclude-tags`.
      maestro_version: string # optional - version of Maestro to use for the tests. If not provided, the latest version will be used.
      maestro_config: string # optional - path to the Maestro `config.yaml` file to use for the tests. Will be passed to Maestro as `--config`.
      device_locale: string # optional - device locale to use for the tests. Will be passed to Maestro as `--device-locale`.
      device_model: string # optional - model of the device to use for the tests. Will be passed to Maestro as `--device-model`. Run `maestro list-cloud-devices` for a list of supported values.
      device_os: string # optional - OS of the device to use for the tests. Will be passed to Maestro as `--device-os`. Run `maestro list-cloud-devices` for a list of supported values.
      name: string # optional - name for the Maestro Cloud upload. Corresponds to `--name` param to `maestro cloud`.
      branch: string # optional - override for the branch the Maestro Cloud upload originated from. By default, if the workflow run has been triggered from GitHub, the branch of the workflow run will be used. Corresponds to `--branch` param to `maestro cloud`.
      async: boolean # optional - run the Maestro Cloud tests asynchronously. If true, the status of the job will only denote whether the upload was successful, _not_ whether the tests succeeded. Corresponds to `--async` param to `maestro cloud`.
    hooks:
      before_maestro_cloud: step[] # optional - steps to run before the Maestro Cloud upload.
      after_maestro_cloud: step[] # optional - steps to run after the Maestro Cloud upload.
```

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter          | Type    | Description                                                                                                                                                                                                                                  |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| build_id           | string  | Required. The ID of the build to test. Example: `${{ needs.build_android.outputs.build_id }}`.                                                                                                                                               |
| maestro_project_id | string  | Required. The ID of the Maestro Cloud project to use. Corresponds to `--project-id` param to `maestro cloud`. Example: `proj_01jw6hxgmdffrbye9fqn0pyzm0`. Go to [Maestro Cloud](https://app.maestro.dev/) to find yours.                     |
| flows              | string  | Required. The path to the Maestro flow file or directory containing the flows to run. Corresponds to `--flows` param to `maestro cloud`.                                                                                                     |
| maestro_api_key    | string  | Optional. The API key to use for the Maestro project. By default, `MAESTRO_CLOUD_API_KEY` environment variable will be used. Corresponds to `--api-key` param to `maestro cloud`.                                                            |
| include_tags       | string  | Optional. The tags to include in the tests. Corresponds to `--include-tags` param to `maestro cloud`. Example: `"pull,push"`.                                                                                                                |
| exclude_tags       | string  | Optional. The tags to exclude from the tests. Corresponds to `--exclude-tags` param to `maestro cloud`. Example: `"disabled"`.                                                                                                               |
| maestro_version    | string  | Optional. The version of Maestro to use. Example: `1.30.0`.                                                                                                                                                                                  |
| maestro_config     | string  | Optional. The path to the Maestro `config.yaml` file to use. Corresponds to `--config` param to `maestro cloud`. Example: `.maestro/config.yaml`.                                                                                            |
| device_locale      | string  | Optional. The locale that will be set on devices used for the tests. Corresponds to `--device-locale` param to `maestro cloud`. Example: `pl_PL`.                                                                                            |
| device_model       | string  | Optional. The model of the device to use for the tests. Corresponds to `--device-model` param to `maestro cloud`. Example: `iPhone-11`. Run `maestro list-cloud-devices` for a list of supported values.                                     |
| device_os          | string  | Optional. The OS of the device to use for the tests. Corresponds to `--device-os` param to `maestro cloud`. Example: `iOS-18-2`. Run `maestro list-cloud-devices` for a list of supported values.                                            |
| name               | string  | Optional. Name for the Maestro Cloud upload. Corresponds to `--name` param to `maestro cloud`.                                                                                                                                               |
| branch             | string  | Optional. Override for the branch the Maestro Cloud upload originated from. By default, if the workflow run has been triggered from GitHub, the branch of the workflow run will be used. Corresponds to `--branch` param to `maestro cloud`. |
| async              | boolean | Optional. Run the Maestro Cloud tests asynchronously. If true, the status of the job will only denote whether the upload was successful, _not_ whether the tests succeeded. Corresponds to `--async` param to `maestro cloud`.               |

> **important** You need to either set `maestro_api_key` parameter or `MAESTRO_CLOUD_API_KEY` environment variable in the job environment. Go to "Settings" on [Maestro Cloud](https://app.maestro.dev/) to generate an API key and then to [Environment variables](https://expo.dev/accounts/[account]/projects/[project]/environment-variables) to add it to your project.

#### Hooks

The following hooks are supported for the Maestro Cloud job:

- `before_maestro_cloud`: steps to run before the Maestro Cloud upload.
- `after_maestro_cloud`: steps to run after the Maestro Cloud upload.

See [`jobs.<job_id>.hooks`](/eas/workflows/syntax/#jobsjob_idhooks) for the general hooks syntax.

#### Outputs

You can reference the following outputs in subsequent jobs:

| Output                     | Type   | Description                                                              |
| -------------------------- | ------ | ------------------------------------------------------------------------ |
| maestro_cloud_url          | string | URL to the Maestro Cloud upload results page.                            |
| total_flows_count          | number | Total number of flows that were executed.                                |
| successful_flows_count     | number | Number of flows that completed successfully (status SUCCESS or WARNING). |
| failed_flows_count         | number | Number of flows that failed (status ERROR or STOPPED).                   |
| successful_flow_names_json | string | JSON array containing the names of successful flows.                     |
| failed_flow_names_json     | string | JSON array containing the names of failed flows.                         |

> **Note:** When using `async: true` mode, only the `maestro_cloud_url` output is guaranteed to be valid. Other outputs (flow counts and flow names) may be invalid or empty because the job does not wait for the upload to complete and the flows have not been executed yet.

You can also define additional outputs for this job using [`jobs.<job_id>.outputs`](/eas/workflows/syntax/#jobsjob_idoutputs).

## Slack

Send a message to a Slack channel using a [Slack webhook URL](https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks).

### Syntax

```yaml
jobs:
  send_slack_notification:
    type: slack
    params:
      webhook_url: string # required
      message: string # required if payload is not provided
      payload: object # required if message is not provided
```

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter   | Type   | Description                                                                                                                                                                                 |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| webhook_url | string | Required. The Slack webhook URL to send the message to. Use an [environment variable](/eas/environment-variables/manage/#manage-environment-variables) with `${{ env.SLACK_WEBHOOK_URL }}`. |
| message     | string | Required if payload is not provided. The message to send.                                                                                                                                   |
| payload     | object | Required if message is not provided. The [Slack Block Kit](https://docs.slack.dev/block-kit) payload to send.                                                                               |

## GitHub Comment

* AUTOMATICALLY post reports of your workflow's completed builds + updates + deployments | GitHub PR
  * if you want to override the comment contents -> provide the `payload` parameter 

* use cases
  * provide instant feedback | PR builds
  * share test builds -- with -- QR codes / easy device testing
  * display EAS Hosting deployment previews
  * automate deployment notifications

* requirements
  * ⚠️[GitHub repository / connected -- to -- your project](../../build/building-from-github.md)⚠️

### Syntax

```yaml
jobs:
  github_comment:
    type: github-comment
    params:
      message: string # optional - custom message to include in the report
      build_ids: string[] # optional - specific build IDs to include, defaults to all related to the running workflow
      update_group_ids: string[] # optional - specific update group IDs to include, defaults to all related to the workflow
      deployment_ids: string[] # optional - specific deployment IDs to include, defaults to all related to the workflow

  # instead of using message and the builds, updates, and deployments table, you can also override the comment contents with `payload`
  custom_github_comment:
    type: github-comment
    params:
      payload: string # optional - raw markdown/HTML content for fully custom comment
```

#### Parameters

The job operates in two mutually exclusive modes:

##### Mode 1: Auto-with-overrides mode

Default behavior is auto discovery builds and updates, you can specify any of these parameters if you want to:

| Parameter        | Type     | Description                                                                                                                                                      |
| ---------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message          | string   | Optional. Custom message to include at the top of the comment. Defaults to "Your builds, updates, and deployments are ready for testing!"                        |
| build_ids        | string[] | Optional. Array of specific build IDs to include. If not specified, auto-discovers all completed/failed/canceled builds. Use empty array `[]` to exclude builds. |
| update_group_ids | string[] | Optional. Array of specific update group IDs to include. If not specified, auto-discovers all successful updates. Use empty array `[]` to exclude updates.       |
| deployment_ids   | string[] | Optional. Array of specific deployment IDs to include. If not specified, auto-discovers all successful deployments. Use empty array `[]` to exclude deployments. |

> **Auto-discovery behavior**: When `build_ids`, `update_group_ids`, or `deployment_ids` are not specified (undefined), the job automatically discovers all relevant builds, updates, and deployments from the current workflow. To explicitly exclude builds, updates, or deployments, pass an empty array `[]`.

##### Mode 2: Payload mode

When using payload mode, you cannot specify any other parameters.

| Parameter | Type   | Description                                                                                    |
| --------- | ------ | ---------------------------------------------------------------------------------------------- |
| payload   | string | Raw markdown or HTML content to post as the comment. Supports workflow variable interpolation. |

#### Outputs

You can reference the following outputs in subsequent jobs:

| Output      | Type   | Description                                                                                |
| ----------- | ------ | ------------------------------------------------------------------------------------------ |
| comment_url | string | URL of the posted GitHub comment (only available when the comment is successfully posted). |

## Apple device registration request

Pause a workflow run until an iOS device enrolls for a specific [Apple Team](https://expo.fyi/apple-team) and a team member approves that enrollment on [expo.dev](https://expo.dev). Use this job to automate registering a device for [internal distribution](/build/internal-distribution/) inside EAS Workflows.

When the workflow reaches this job, the job and the run enter `action-required` and stay paused until the flow completes:

1. The workflow run page shows a QR code and a registration link for the device being enrolled.
2. On the iPhone or iPad, the device downloads a provisioning profile and installs it through Settings. Only one profile is ready at a time, and it is removed if not installed within eight minutes.
3. After installation, the unique device identifier (UDID) and metadata are collected.
4. On the workflow run page, a team member approves or rejects the enrollment. Approval marks the job successful and exposes outputs (UDID, model, and more) to downstream jobs. Rejection fails the job and blocks jobs that use `needs`.

If the UDID is already registered on your account, the job still waits for enrollment and approval before continuing.

### Syntax

```yaml
jobs:
  register_device:
    type: apple-device-registration-request
    params:
      apple_team_identifier: string # optional
```

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter             | Type   | Description                                                                                                                                                                                                                                                                                                                    |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| apple_team_identifier | string | Optional. The Apple Team ID (for example, `ABCDE12345`). If you omit this parameter and your Expo account has exactly one Apple Team, that team is used. You must set this parameter when your account has no Apple Teams or has two or more Apple Teams. When provided, EAS resolves or creates the team from the identifier. |

#### Outputs

After a team member approves the enrolled device, you can reference the following outputs in subsequent jobs:

| Output           | Type   | Description                                                      |
| ---------------- | ------ | ---------------------------------------------------------------- |
| apple_device_id  | string | Expo internal device ID.                                         |
| identifier       | string | Device UDID.                                                     |
| name             | string | Device name. May be empty.                                       |
| model            | string | Hardware model string (for example, `iPhone11,2`). May be empty. |
| device_class     | string | Device class: `iphone`, `ipad`, or `mac`. May be empty.          |
| software_version | string | iOS version string. May be empty.                                |

If a team member rejects the enrollment, the job fails and does not set outputs. Downstream jobs that use `needs` will not run.

## Require Approval

Require approval from a user before continuing with the workflow. A user can approve or reject which translates to success or failure of the job.

### Syntax

```yaml
jobs:
  require_approval:
    type: require-approval
```

#### Parameters

This job doesn't take any parameters.

## Doc

Displays a Markdown section in the workflow logs.

### Syntax

```yaml
jobs:
  show_whats_next:
    type: doc
    params:
      md: string
```

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter | Type   | Description                                                                                 |
| --------- | ------ | ------------------------------------------------------------------------------------------- |
| md        | string | Required. The Markdown content to display. You can use `${{ ... }}` workflow interpolation. |

## Repack

Repackages an app from an existing build. This job repackages the app's metadata and JavaScript bundle without performing a full native rebuild, which is useful for creating a faster build compatible with a specific fingerprint.

### Syntax

```yaml
jobs:
  repack:
    type: repack
    runs_on: string # optional - see https://docs.expo.dev/build-reference/infrastructure/ for available options
    params:
      build_id: string # required
      profile: string # optional
      embed_bundle_assets: boolean # optional
      message: string # optional
      repack_version: string # optional
```

> **Note:** If the build might still be in progress, use [`get-build`](#get-build) with `wait_for_in_progress: true`, then pass its `build_id` to `repack`.

### Common questions

<FAQ>

### When to use and when not to use repack?

Repack job is suitable for the following use cases:

- Reducing CI build times by reusing existing builds
- Triggering full native builds when required
- Delivering faster feedback loops to your team

Repack job is not suitable for the following use cases:

- Production builds that require builds to go through the complete pipeline for correct symbolication and app signing


</FAQ>

#### Parameters

You can pass the following parameters into the `params` list:

| Parameter                               | Type    | Description                                                                                                                                                                                                     |
| --------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| build_id                                | string  | Required. The source build ID of the build to repack.                                                                                                                                                           |
| profile                                 | string  | Optional. The build profile to use. Defaults to the profile of the source build retrieved from `build_id`.                                                                                                      |
| embed_bundle_assets                     | boolean | Optional. Whether to embed the bundle assets in the repacked build. By default, this is automatically determined based on the source build.                                                                     |
| js_bundle_only                          | boolean | Optional. Whether to only repack the JavaScript bundle. Defaults to false, which means the entire app metadata will be updated.                                                                                 |
| message                                 | string  | Optional. Custom message attached to the build. Corresponds to the `--message` flag when running `eas build`.                                                                                                   |
| repack_version                          | string  | Optional. The version of the `@expo/repack-app` to use. Defaults to the latest version.                                                                                                                         |
| ios_signing_use_source_app_entitlements | boolean | Optional. Whether to use fastlane resign `use_app_entitlements` behavior: extract app bundle code signing entitlements and combine them with entitlements from the new provisioning profile. Defaults to false. |
| ios_signing_app_entitlements_path       | string  | Optional. Path to the entitlements file to use, for example, `myApp/MyApp.entitlements`. This is exclusive with `ios_signing_use_source_app_entitlements`                                                       |
