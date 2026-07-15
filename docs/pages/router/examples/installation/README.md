# Manual installation

## Install dependencies
### | Expo SDK v50+
TODO:
### | Expo SDK v49-
TODO:

## Setup entry point
### set `"main": "expo-router/entry"` | package.json
TODO:
### custom entry point
TODO:
#### use cases
TODO:
##### initializing global services (analytics, error reporting, ...)
TODO:
##### setting up polyfills
TODO:
##### ignoring specific logs -- using -- LogBox
TODO:
#### steps
TODO:
##### create index.js | root of your project
TODO:
##### import `expo-router/entry` LAST
TODO:
##### update `main` | package.json -- to point to -- new entry file
TODO:

## Modify project configuration
### add deep linking `scheme` | app.json
TODO:
### enable typed routes | app.json
TODO:
### | web: install react-native-web & react-dom
TODO:
### | web: enable Metro web support (`expo.web.bundler: "metro"`)
TODO:

## Modify babel.config.js
### ensure you use `babel-preset-expo` as the preset
TODO:
### if you don't need custom Babel config -> can delete the file
TODO:

## Configure path aliases
### | tsconfig.json, add `compilerOptions.paths`
TODO:
### `@/*` maps to `./src/*`
TODO:

## Clear bundler cache
### `npx expo start --clear` / `yarn expo start --clear` / `pnpm expo start --clear` / `bun expo start --clear`
TODO:

## Update resolutions
### remove outdated Yarn resolutions or npm overrides | package.json
TODO:
### specifically remove: `metro`, `metro-resolver`, `react-refresh`
TODO:
