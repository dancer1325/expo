# Create a new project
## npx create-expo-app@latest --template default@sdk-57
* [here](templateDefault)
## yarn create expo-app --template default@sdk-57
TODO:
## pnpm create-expo-app@latest --template default@sdk-57
TODO:
## bun create expo-app --template default@sdk-57
TODO:

# Options

## `--yes`
* [here](yes)
### ❌NO create a wrapper directory❌
* "yes/" has been created MANUALLY

## `--no-install`
* [here](no-install)
### skips installing npm dependencies (== node_modules/) or CocoaPods
* NOT found node_modules/

## `--no-agents-md`
* [here](no-agents-md)
### skips
#### generating **AGENTS.md**, **CLAUDE.md**, and **.claude/settings.json**
* NOT found
  * vs [yes](yes) / it contains
#### AUTOMATIC `expo` skills plugin configuration
* NOT found
  * vs [yes](yes/.claude/settings.json) / it contains

## `--template`
### `default`
* [here](templateDefault)
#### MULTI-screen apps
* [index](templateDefault/src/app) & [explore](templateDefault/src/app/explore.tsx)
  * vs [blank](templateBlank)
#### used tools: 
##### Expo CLI
* [here](templateDefault/package.json)'s `scripts`
##### Expo Router library
* [here](templateDefault/package.json)'s "main": "expo-router/entry"
##### TypeScript configuration
* [here](templateDefault/tsconfig.json)

### `blank`
* [here](templateBlank)
#### Installs MINIMUM required npm dependencies
* [here](templateBlank/package.json)
#### NO configure navigation
* [NO find expo-router dependency](templateBlank/package.json)

### `blank-typescript`
* [here](templateBlankTypescript)
#### Blank template / TypeScript enabled
* [tsconfig.json](templateBlankTypescript/tsconfig.json)

### `tabs`
* [here](templateTabs)
#### file-based routing
* [here](templateTabs/app/(tabs))
#### Expo Router & TypeScript enabled
* ["main": "expo-router/entry"](templateTabs/package.json)
* [tsconfig.json](templateTabs/tsconfig.json)

### `bare-minimum`
* [here](templateBareMinimum)
#### Blank template / | setup, generate NATIVE directories (**android** and **ios**)
* [android](templateBareMinimum/android)
* [ios](templateBareMinimum/ios)

## `--example`
### initialize a project -- from -- an [expo/examples](https://github.com/expo/examples)
#### `npx create-expo-app --example`: shows the interactive list of AVAILABLE examples / you choose
* follow the step
* [output](exampleNoArgumentChosenBlank)
#### `npx create-expo-app --example <SOME_EXAMPLE>`
* `npx create-expo-app --example stickersmash`
  * [output](exampleArgumentStickersmash)

## `--version`
### prints the version number & exits
* `npx create-expo-app --version`
  * check the output

## `--help`
### prints the list of available options & exits
* `npx create-expo-app --help`
  * check the output
