# EAS Build Limitations

## Fixed memory & CPU limits | build worker servers
TODO:
### ⚠️if your build process requires a significant amount of memory -> resources available might be INSUFFICIENT⚠️
TODO:
#### SOLUTION: use a `large` resource class | "eas.json"
TODO:

## Limited dependency caching
TODO:
### Build jobs for Android -> install npm and Maven dependencies -- from a -- local cache
TODO:
### Build jobs for iOS -> install npm dependencies -- from a -- local cache + CocoaPods artifacts -- from a -- cache server
TODO:
### intermediate artifacts are NOT cached and restored
TODO:
#### 👀EXCEPT, you commit them | your Git repository👀
TODO:

## Maximum build duration of 2 hours
TODO:
### | free plan, MAXIMUM time varies
TODO:
### | premium plan, MAXIMUM time is 2 hours
TODO:

## Yarn workspaces -- is recommended for -- monorepos
TODO:
### if you use != yarn -> limited Official guidance
TODO:

## Get notified about changes
TODO:
