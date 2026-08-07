# development build
## := debug build of your app / contains the `expo-dev-client` package

## ALTERNATIVE to Expo Go
TODO:
### benefits vs Expo Go
TODO:
#### gain FULL control over the native runtime
TODO:
##### install ANY native libraries
TODO:
##### modify ANY project configuration
TODO:
##### write your own native code
TODO:
### vs Expo Go
TODO:
#### | Expo Go
TODO:
##### run your project | sandboxed native app environment
TODO:
##### uses: NON-long-term projects == testing projects
TODO:
#### | development builds
TODO:
##### build your OWN native app
TODO:
##### uses: production projects
TODO:

# _Example:_ run a development build
TODO:
## include your app name & icon
TODO:
## 2 lateral pictures
TODO:
## 2 central pictures
TODO:

# `expo-dev-client`'s launcher UI
TODO:
## enables: 👀switch between development servers -- WITHOUT needing to rebuild the -- app binary👀
TODO:
## \+ Continuous Native Generation (CNG) works great
TODO:
### Reason: if you modify your app's native code -> can iterate | JS code WITHOUT needing to rebuild it
TODO:
## uses: teams / have specialized native engineers + application developers
TODO:

# development builds -- via using -- EAS Build
TODO:
## 👀EASIEST way to get started with development builds👀
TODO:
### Reason: build your app | cloud & NOT need to install native build tools locally
TODO:

# development builds | local development environment
TODO:

# Expo Development Builds explanation
TODO:
## recommended approach | production
TODO:
## alternative to Expo Go
TODO:

# Frequently asked questions

# What is a native runtime?
TODO:
## native runtime == runtime environment / your JS application code is executed in
TODO:
### if compiled with `expo-camera` -> native runtime includes the appropriate code -> access from JS
TODO:
### if NOT compiled with `expo-camera` -> you can NOT access that code from JS
TODO:
### `runtimeVersion` specify app runtime's version
TODO:

# development builds vs Expo Go?
TODO:
## Expo Go: fastest and easiest way to start a new project
TODO:
### Reason: NO need to compile ANY native code or install any native tooling
TODO:
### limitations: ⚠️ ONLY allowed native packages included | Expo SDK
TODO:
## development build: 💡ANY library can be included💡
TODO:
### Reason: == normal native app
TODO:

# What other types of builds are there?
TODO:
## production build
TODO:
### use cases: general public, deployed through stores
TODO:
## preview build
TODO:
### enables: your team test your next release
TODO:
#### | Android: installing an APK
TODO:
#### | iOS: use ad hoc or enterprise provisioning
TODO:
