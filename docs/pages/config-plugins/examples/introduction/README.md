# Config plugin
## == automatic setup or system for
### extending the app config
TODO:
### customizing the prebuild process -- for -- your app
TODO:
### adding native
#### modules / are NOT included, by default
TODO:
#### code / needs to be configured further
TODO:
_Example:_ generate app icons, set the app name, configure the AndroidManifest.xml, Info.plist, ...

## uses
### module / requires a MORE complex setup
TODO:
### automatically configure your native project -- for a -- module
TODO:
#### -> reduce the complexity -- by avoiding interaction with the -- native project
TODO:
## used by
### Expo CLI -- to generate and configure ALL the native code / managed project
TODO:
## == bundler for native projects
### `npx expo prebuild`
TODO:
#### evaluating ALL the project plugins -> bundle the projects == generate android/ and ios/
TODO:
#### 👀if you MANUALLY modify them -> they can NO longer be safely regenerated WITHOUT potentially overwriting manual modifications👀
TODO:

# how to use a config plugin?
## come -- from -- Node.js modules
TODO:
### -> installation == install COMMON packages | your project
TODO:
## SOME offer flexibility -- by allowing you to pass -- options / customize their configuration
TODO:
## 👀Expo library / has a config plugin -> specified | library's API reference👀
TODO:
### _Example:_ `expo-camera` library's config plugin section
TODO:
## _Example:_ `expo-camera` has a plugin / adds camera permissions -- to the -- AndroidManifest.xml and Info.plist
### `npx expo install expo-camera`
TODO:
### add it | your app's config
TODO:
## `npx expo prebuild`
### -> `mods` are compiled
TODO:
### -> native files change
TODO:
#### | rebuild the native project
TODO:
#### & you're using config plugins | managed app -> applied | `eas build`'s prebuild phase
TODO:
