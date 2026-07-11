# Pre-packaged Jobs
TODO:

## Build
TODO:
### _Examples:_
#### Basic build for a specific platform
* [here](build_basicBuildForASpecificPlatform.yml)
  * | push | main branch, build your iOS app
#### Build for both platforms in parallel
* [here](build_buildForBothPlatformsInParallel.yml)
  * | push | main branch, builds Android & iOS apps in parallel
#### Build with environment variables
* [here](build_buildWithEnvironmentVariables.yml)
  * builds your Android app -- with -- custom environment variables /
    * can be used | build process
#### Build with different profiles
* [here](build_buildWithDifferentProfiles.yml)
  * creates 2 Android builds / DIFFERENT profiles
#### Internal iOS build with refreshed ad hoc profile
* [here](build_internalIOSBuildWithRefreshedAdHocProfile.yml)
  * | push | main branch
    * builds your iOS app -- for -- internal distribution &
    * refreshes the ad hoc provisioning profile

## Deploy
TODO:
### _Examples:_
#### Basic deployment to production
* [here](deploy_basicDeploymentToProduction.yml)
  * deploys your application -- to -- production / using EAS Hosting
#### Deploy to production only on merges to the `main` branch
* [here](deploy_deployToProductionOnlyOnMergesToTheMainBranch.yml)
  * deploys to production | merge to main, non-production deployment | other branches
#### Deployment with custom alias
* [here](deploy_deploymentWithCustomAlias.yml)
  * deploys your application -- to -- a custom alias | production

## Fingerprint
TODO:
### _Examples:_
#### Basic fingerprint calculation
* [here](fingerprint_basicFingerprintCalculation.yml)
  * calculates fingerprints -- for -- both Android & iOS builds
#### Fingerprint with inline environment variables
* [here](fingerprint_fingerprintWithInlineEnvironmentVariables.yml)
  * ⚠️if you depend on inline env variables -> MUST set them | every place (build profile, fingerprint job, update job, etc.)⚠️

## Get Build
TODO:
### _Examples:_
#### Get latest production build
* [here](getBuild_getLatestProductionBuild.yml)
  * retrieves the latest production build for iOS -- from -- store distribution channel
#### Get build by version
* [here](getBuild_getBuildByVersion.yml)
  * retrieves a specific version of an Android build -- by -- app version & build version
#### Get simulator build
* [here](getBuild_getSimulatorBuild.yml)
  * retrieves a simulator build for iOS development / `wait_for_in_progress: true`

## Submit
TODO:
### _Examples:_
#### Submit iOS build
* [here](submit_submitIOSBuild.yml)
  * submits an iOS build -- to -- App Store / using production submit profile
#### Submit Android build
* [here](submit_submitAndroidBuild.yml)
  * submits an Android build -- to -- Play Store / using production submit profile

## TestFlight
TODO:
### _Examples:_
#### Full distribution with internal and external groups
* [here](testflight_fullDistributionWithInternalAndExternalGroups.yml)
  * distributes -- to -- both internal & external TestFlight groups / with changelog
#### Upload with changelog only
* [here](testflight_uploadWithChangelogOnly.yml)
  * uploads a build / with changelog, WITHOUT specifying groups explicitly
#### Auto-distribute to TestFlight after App Store Connect upload
* [here](testflight_autodistributeToTestFlightAfterAppStoreConnectUpload.yml)
  * | build uploaded to App Store Connect -> automatically adds to TestFlight groups & submits for Beta App Review
#### Update the changelog without re-submitting for Beta App Review
* [here](testflight_updateTheChangelogWithoutResubmittingForBetaAppReview.yml)
  * updates "What to Test" notes / WITHOUT triggering Beta App Review (`submit_beta_review: false`)

## Update
TODO:
### _Examples:_
#### Basic update to production channel
* [here](update_basicUpdateToProductionChannel.yml)
  * publishes an update -- to -- production channel | push | main branch
#### Platform-specific updates
* [here](update_platformspecificUpdates.yml)
  * publishes separate updates -- for -- Android & iOS platforms
#### Update with branch-based deployment
* [here](update_updateWithBranchbasedDeployment.yml)
  * publishes updates -- based on -- branch name (staging/production)

## Branch delete
TODO:
* [here](../branch-cleanup.md)

## Maestro
TODO:
### _Examples:_
#### Basic Maestro test
* [here](maestro_basicMaestroTest.yml)
  * runs Maestro tests -- on -- iOS Simulator build / default settings
#### Maestro test with sharding
* [here](maestro_maestroTestWithSharding.yml)
  * runs Maestro tests -- on -- Android Emulator / 3 shards & 2 retries for failed tests
#### Using Maestro prefixed environment variables
* [here](maestro_usingMaestroPrefixedEnvironmentVariables.yml)
  * Maestro reads env variables / prefixed by `MAESTRO_` automatically
#### Generate Maestro flows before running tests
* [here](maestro_generateMaestroFlowsBeforeRunningTests.yml)
  * uses a hook -- to generate -- `maestro_tests` directory BEFORE Maestro starts
#### Recording screen and using a specific device
* [here](maestro_recordingScreenAndUsingASpecificDevice.yml)
  * runs Maestro tests -- on -- Android Emulator / specific device & records screen
#### Saving screenshots and recordings
* [here](maestro_savingScreenshotsAndRecordings.yml)
  * saves assets -- via -- `MAESTRO_TESTS_DIR` env variable
#### Report Maestro artifacts to Slack
* [here](maestro_reportMaestroArtifactsToSlack.yml)
  * saves screenshots/recordings, then uploads -- to -- Slack

## Maestro Cloud
TODO:
### _Examples:_
#### Basic Maestro Cloud test
* [here](maestroCloud_basicMaestroCloudTest.yml)
  * runs Maestro tests -- on -- iOS Simulator build / default settings
#### Using Maestro prefixed environment variables
* [here](maestroCloud_usingMaestroPrefixedEnvironmentVariables.yml)
  * Maestro reads env variables / prefixed by `MAESTRO_` automatically
#### Using Maestro Cloud outputs in subsequent jobs
* [here](maestroCloud_usingMaestroCloudOutputsInSubsequentJobs.yml)
  * runs Maestro Cloud tests & uses results -- in -- Slack notification

## Slack
TODO:
### _Examples:_
#### Basic build notification
* [here](slack_basicBuildNotification.yml)
  * builds iOS app, then sends notification -- with -- app identifier & version from build job outputs
#### Rich build notification with Block Kit
* [here](slack_richBuildNotificationWithBlockKit.yml)
  * builds Android app & sends rich notification -- using -- build job outputs

## GitHub Comment
TODO:
### _Examples:_
#### Auto-discover all builds, updates, and deployments
* [here](githubComment_autodiscoverAllBuildsUpdatesAndDeployments.yml)
  * automatically discovers & posts ALL builds, updates, deployments from the workflow
#### Custom message with auto-discovery
* [here](githubComment_customMessageWithAutodiscovery.yml)
  * adds custom message / still auto-discovering all builds, updates, deployments
#### PR preview with EAS Hosting deployment
* [here](githubComment_prPreviewWithEASHostingDeployment.yml)
  * deploys a preview -- via -- EAS Hosting & posts deployment details | PR
#### Specify exact builds and updates
* [here](githubComment_specifyExactBuildsAndUpdates.yml)
  * explicitly specify which builds & updates -- to include -- | comment
#### Exclude builds, updates, or deployments
* [here](githubComment_excludeBuildsUpdatesOrDeployments.yml)
  * uses empty arrays -- to exclude -- specific content types
#### Fully custom comment with payload
* [here](githubComment_fullyCustomCommentWithPayload.yml)
  * payload mode -> complete control over comment content
#### Conditional comment based on build status
* [here](githubComment_conditionalCommentBasedOnBuildStatus.yml)
  * posts different comments -- based on -- build succeeded or failed

## Apple device registration request
TODO:
### _Examples:_
#### Register a device and notify Slack
* [here](appleDeviceRegistrationRequest_registerADeviceAndNotifySlack.yml)
  * registers iOS device & sends Slack message -- with -- UDID & model
#### Register a device, then run an internal iOS build
* [here](appleDeviceRegistrationRequest_registerADeviceThenRunAnInternalIOSBuild.yml)
  * registers device, then runs iOS internal distribution build / refreshes ad hoc provisioning profile

## Require Approval
TODO:
### _Examples:_
#### Ask for approval before deploying to production
* [here](requireApproval_askForApprovalBeforeDeployingToProduction.yml)
  * deploys to preview, then requires approval BEFORE deploying to production
#### Control flow of the workflow
* [here](requireApproval_controlFlowOfTheWorkflow.yml)
  * requires approval -- before -- revealing the conclusion

## Doc
TODO:
### _Examples:_
#### Display instructions
* [here](doc_displayInstructions.yml)
  * builds iOS app, then displays a Markdown section | workflow logs

## Repack
TODO:
### When to use and when not to use repack?
TODO:
### _Examples:_
#### Continuous Deployment with Fingerprint and Repack
* [here](repack_continuousDeploymentWithFingerprintAndRepack.yml)
  * generates fingerprint, then builds or repacks -- depending on -- whether compatible build exists, finally runs Maestro tests
