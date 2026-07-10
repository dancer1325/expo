## app config
### ALLOWED: 
#### app.json
* [here](appConfigAppJson)
#### app.config.js
* [here](appConfigAppConfigJS)
#### app.config.ts
* [here](appConfigAppConfigTS)
### uses
#### configure Expo Prebuild generation
TODO:
#### configure how a project loads | Expo Go
TODO:
#### OTA update manifest
TODO:
### requirements: locate | root of your project
TODO:
### schema
* [here](../../../versions/unversioned/config/app.md)
#### ⚠️if it has a top-level `expo: {}` object -> used rather than root object⚠️
TODO:


## Reading configuration values | your app
TODO:
### 👀`Constants.expoConfig`👀
TODO:
### fields / filter out -- of the -- public app config
TODO:
### ❌NOT import app.json or app.config.js directly | your JS code❌
TODO:
### `npx expo config --type public`
TODO:

## Extending configuration
TODO:
### Library authors -- via Expo Config plugins -- extend the app config
TODO:

## Dynamic configuration
### use app.config.js or app.config.ts
TODO:
### properties
TODO:
#### Comments, variables, and single quotes
TODO:
#### ESM import syntax
TODO:
#### if Metro bundler reloads -> updated
TODO:
#### ❌NOT support Promises❌
TODO:
#### `"extra"` key -- allows passing arbitrary config data -- to your app
TODO:
### export an object -- to define -- your custom config
TODO:
### export a function -- to access and modify incoming config values
TODO:
### how to switch configuration -- based on the -- environment?
* [here](appConfigAppConfigJS/app.config.js)
* `MY_ENVIRONMENT=production eas update`
  * TODO: check
### -- by -- using "app.config.ts"
* [here](appConfigAppConfigTS)
TODO:
### Configuration resolution rules
TODO:
