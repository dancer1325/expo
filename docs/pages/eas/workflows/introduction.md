---
title: Introduction to EAS Workflows
sidebar_title: Introduction
description: EAS Workflows is a CI/CD service for automating builds, updates, submissions, and tests for React Native and Expo apps.
hasVideoLink: true
---

* **EAS Workflows**
  * == EAS' CI/CD service/
    * allow
      * 👀AUTOMATE REPEATED tasks👀 
        * _Examples:_ 
          * build Android and iOS binaries
          * publishing over-the-air updates
          * submitting | app stores
          * running E2E tests -- with -- Maestro
          * deploying web apps | EAS Hosting
      * FASTER iteration
        * == [Fingerprint](pre-packaged-jobs.md#fingerprint) + [Get Build](pre-packaged-jobs.md#get-build) + [Update jobs](pre-packaged-jobs.md#update)
        * | when it's POSSIBLE, avoid 
          * redundant native builds
          * publish OTA (over-the-air) updates 
      * Slack notification
        * if workflows run successfully OR fail -> send notifications -- to -- Slack channels
      * repack
        * == reuse an EXISTING build's metadata & JS bundle -- to -- create a compatible build faster
    * run | managed cloud environments 
      * -- with -- [pre-packaged job types](pre-packaged-jobs.md)
      * == ❌NO require to manage infrastructure❌
    * ALL build artifacts + updates + logs appear | EAS dashboard
    * integrated -- with -- Github
      * _Example:_ trigger AUTOMATICALLY workflows |
        * push 
        * PR
        * label
        * ref deletion events / branch & path filtering
  * if the EAS project is linked to GitHub -> teams can trigger workflows -- from --
    * GitHub events (push, pull request, labels) OR
    * schedules (cron) OR
    * run them MANUALLY -- via the -- EAS CLI

* workflow
  * == sequence of jobS /
    * / EACH job, there are
      * prerequisites
      * conditionals
  * == ".yaml" | root of your project's ".eas/workflows/" /
    * contain
      * `name`
      * triggers (`on`)
        * OPTIONAL
      * \>=1 `jobs` / run | cloud

TODO: 
Blazing fast M4 Pro powered workers
Pre-packaged CI job configurations
Instant CI jobs, automatic caching, and repacked builds
Integrations with GitHub and other CI tools

## Quick start

* requirements
  * [install EAS CLI](../cli.md#installation)
  
* steps
  * `eas workflow:run .eas/workflows/your-workflow.yml`

## Workflow trigger types

### Push workflows

* trigger
  * | push commits -- to -- matching branches OR tags
* support -- with -- glob patterns
  * branch
  * tag
  * path filtering 

### Ref delete workflows

* | delete GitHub branches OR tags
* support -- with -- glob patterns
  * branch
  * tag
  * path filtering
* uses
  * clean up EAS Update branches / share names -- with -- Git branches
* [`on.ref_delete` syntax](syntax.md#onref_delete)

### Pull request workflows

* trigger
  * | open PR
  * | update PR
  * | label PR
* uses
  * BEFORE merge, 
    * preview builds
    * automated testing 

### Scheduled workflows

* ONLY run | 
  * default branch
  * cron schedule 
    * _Example:_ nightly builds OR weekly regression tests

### MANUAL workflows

* run on-demand | use `eas workflow:run`
* support
  * parameterized inputs
    * Reason:🧠-- for -- flexible execution🧠

### App Store Connect workflows

* run | occur selected App Store Connect events
  * _Example:_ change the 
    * app version state
    * build upload states
    * external beta states
    * beta feedback events

* steps to use App Store Connect | EAS dashboard
  * [Project settings > General > Connections](https://expo.dev/accounts/[account]/projects/[project]/settings)

* [`on.app_store_connect` syntax](syntax.md#onapp_store_connect)

## use case

| Scenario                                                                              | Recommendation        |
|---------------------------------------------------------------------------------------|-----------------------|
| Automate Android & iOS builds -- for -- your Expo & React Native apps                 | ✅                     |
| Submit builds AUTOMATICALLY \| App Store & Google Play                                | ✅                     |
| Publish over-the-air updates \| every commit OR merge                                 | ✅    |
| Run E2E tests with Maestro -- as part of -- CI                                        | ✅                     |
| Trigger builds & updates -- from -- GitHub push OR PR events                          | ✅                     |
| Deploy web apps \| EAS Hosting                                                        | ✅                     |
| Use fingerprint-based logic -- to -- skip redundant native builds                     | ✅                     |
| CI/CD WITHOUT managing your OWN infrastructure OR macOS machines                      | ✅                     |
| Highly customized pipelines with non-EAS services (_Example:_ Docker, custom runners) | ❌                     |
| Matrix builds -- with -- MULTIPLE configuration variations \| parallel                | ❌                     |
| CI/CD for non-React Native projects                                                   | ❌                     |

## Frequently asked questions (FAQ)

### vs CI services?

* All job types run on EAS, so you'll only have to manage one set of YAML files, and all the artifacts 
from your job runs will appear on [expo.dev](https://expo.dev/).

Other CI services, like CircleCI and GitHub Actions, are more generalized and have the ability to do more than workflows
* However, those services also require you to understand more about the implementation of each job
* While that is necessary in some cases, workflows help you get common tasks done quickly by pre-packaging 
the most essential types of jobs for app developers
* In addition, workflows are designed to provide you with the fastest possible cloud machine for the task at hand, and
we're constantly updating those for you.

EAS Workflows are great for operations related to your Expo apps, while other CI/CD services will provide a better experience 
for other types of workflows.

### Can I trigger a workflow without GitHub?

* Yes
* Any workflow can be run manually using `eas workflow:run` regardless of the `on` trigger configuration
* You can also use scheduled triggers with cron syntax.

### What cloud machines do workflows run on?

Workflows run on EAS's managed infrastructure:

- **Linux workers**: `linux-medium` (4 vCPU, 16 GB RAM) or `linux-large` (8 vCPU, 32 GB RAM)
- **Linux with nested virtualization** for Android emulators: `linux-medium-nested-virtualization` or `linux-large-nested-virtualization`
- **macOS workers** for iOS builds and simulators: `macos-medium` (5 cores, 20 GB RAM) or `macos-large` (10 cores, 40 GB RAM)

### Can workflows run jobs in parallel?

* Yes
* Jobs without dependencies run in parallel by default.

Use `needs` to specify that a job should wait for another job to succeed, or 
`after` to wait for a job to complete regardless of success or failure.

### Can I use environment variables in workflows?

* Yes
* Workflows support [EAS environment variables](/eas/environment-variables/) and inline `env` values
* Environment variables can be referenced using `${{ env.VARIABLE_NAME }}` syntax.

### What are the current limitations?

No shared workflow configurations (each workflow must be defined independently), and no matrix builds 
(cannot run multiple variations with different configurations in parallel)
* See [Limitations](/eas/workflows/limitations) for more details and updates.

### Can I run custom scripts in a workflow?

* Yes
* [Custom jobs](/eas/workflows/syntax/#custom-jobs) with `steps` let you run shell commands, 
use built-in functions like `eas/checkout` and `eas/install_node_modules`, and
set outputs for downstream jobs.

### Does EAS Workflows work -- with -- EXISTING React Native projects?

* Yes
* EAS Workflows 
  * ⚠️requirements to use | project⚠️
    * configure -- for -- EAS Build
  * works -- with --
    * [CNG](../../workflow/continuous-native-generation.md)
    * [EXISTING React Native projects](../../bare/overview)  
