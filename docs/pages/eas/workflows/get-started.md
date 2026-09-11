---
sidebar_title: Get started
title: Get started with EAS Workflows
description: Learn how to use EAS Workflows to automate your development and release processes.
---

* EAS Workflows 
  * RIGHT now,
    * in preview
      * == breaking changes cana happen

* [video](https://www.youtube.com/watch?v=OJ2u9tQCpr4)
  * TODO:

## Set up your project

### Create a project and sync it with EAS

```bash
# 1. create a NEW project
npx create-expo-app@latest workflows-get-started

# 2. login in | EAS
npx eas-cli@latest login

# 3. link your local project -- with -- EAS
cd workflows-get-started
npx eas-cli@latest init

# 4. create a directory | root of your project
mkdir /.eas/workflows
touch /.eas/workflows/hello-world.yaml
```

## Write a workflow

* "ios-build-and-submit.yaml"
  * == `eas build --platform ios --profile production --auto-submit`

## Configure your project

* goal
  * | GitHub events,
    * run EAS workflows

* steps
  * Expo Cloud > projects > choose a project > Github > connect to your Github account > choose the Github repository

## Run your workflow

* ways to trigger the workflow
  * AUTOMATICALLY: -- by -- push a commit | your GitHub repository
  * MANUALLY: `npx eas-cli@latest workflow:run .eas/workflows/<your-workflow-file>.yaml`

* how to check workflow is running?
  * Expo Cloud > projects > choose a project > workflows
