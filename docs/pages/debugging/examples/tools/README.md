# React Native == JS + native code
## ⚠️ if an error is thrown -- from the -- JS code -> you MIGHT NOT find it -- via -- debugging tools | native code ⚠️
TODO:

# Developer menu
## provides
### 👀-- access to -- useful debugging functions 👀
TODO:
#### Copy link
##### ⚠️ALLOWED ONLY | dev clients⚠️
* | [here](my-app)
  * `npx expo run:ios`
  * `m`
  * scroll down to find it
###### | Expo Go, NOT ALLOWED
* check source code [`showHostUrl = false`](../../../../../apps/expo-go/ios/Exponent/DevMenu/SwiftUI/DevMenuViewModel.swift)
* | [here](my-app)
  * `npm run start`
  * use device
    * shift + i
  * `m`
    * check that it does NOT appear
##### link -- to the -- dev server address | dev client
TODO:
#### Reload
TODO:
##### reload your app
TODO:
###### NORMALLY, NOT necessary
TODO:
####### Reason: 🧠 Fast Refresh is enabled by default 🧠
TODO:
#### Go Home
TODO:
##### leave your app & navigate back to the dev client's or Expo Go app's Home screen
TODO:
#### Toggle performance monitor
TODO:
##### view the performance information about your app
TODO:
#### Toggle element inspector
TODO:
##### enable or disable the element inspector overlay
TODO:
#### Open JS debugger
TODO:
#### Fast Refresh
TODO:
##### toggle automatic refreshing of the JS bundle | make changes your project's files -- via a -- text editor
TODO:
## built into
### dev clients
TODO:
### Expo Go
#### it's built-into
* ["expo-dev-menu" -- as -- dependency](../../../../../packages/expo-dev-menu)
#### open it
* | [here](my-app)
  * `npm start`
  * open it | some device
    * _Example:_ shit + i
  * `m`
    * check how it's toggled the menu | device

## alternatives
TODO:
### Android device WITHOUT USB
TODO:
#### Shake the device vertically
TODO:
### Android Emulator or device WITH USB
TODO:
#### Press Cmd ⌘ + m or Ctrl + m
TODO:
#### run `adb shell input keyevent 82`
TODO:
### iOS device WITHOUT USB
TODO:
#### Shake the device
TODO:
#### Touch three fingers to the screen
TODO:
### iOS Simulator or device WITH USB
TODO:
#### Press Ctrl + Cmd ⌘ + z or Cmd ⌘ + d
TODO:
## Toggle performance monitor
TODO:
### provide
TODO:
#### RAM usage of a project
TODO:
#### JavaScript heap
TODO:
#### 2 Views
TODO:
##### | top: # views for the screen
TODO:
##### | bottom: # of views | component
TODO:
#### Frames / Second -- for the -- UI & JS threads
TODO:
##### UI thread -- uses -- native Android or iOS UI rendering
TODO:
##### JS thread -- where MOST of your logic runs (API calls + touch events)
TODO:
## Toggle element inspector
TODO:
### capabilities to
TODO:
#### Inspect: Inspect elements
TODO:
#### Perf: Show Performance overlay
TODO:
#### Network: Show network details
TODO:
#### Touchables: Highlight touchable elements
TODO:

# Debugging with React Native DevTools
TODO:
## modern debugging tool -- for -- Expo and React Native apps
TODO:
## tabs
TODO:
### Console
TODO:
### Sources
TODO:
### Network (Expo only)
TODO:
### Memory
TODO:
### Components (React DevTools)
TODO:
### Profiler (React DevTools)
TODO:
## To open it: press `J` in the terminal where Expo was started
TODO:
## Pausing on breakpoints
TODO:
### set breakpoint | Sources tab by clicking the line number
TODO:
### add `debugger` statement in your code
TODO:
### -> entirely pause your app
TODO:
#### inspect all variables and functions in that scope
TODO:
#### execute code in the Console tab as part of your app
TODO:
## Pausing on exceptions
TODO:
### pause your app and inspect the stack trace and variables the moment it throws an error
TODO:
### Pause on caught exceptions
TODO:
#### inspect any thrown error, even when handled properly
TODO:
## Interacting with the console
TODO:
### access to an interactive terminal, connected directly to your app
TODO:
### execute snippets of code as if it were part of your app
TODO:
### code is executed in the global scope by default
TODO:
### when using breakpoints -> executes in the scope of the reached breakpoint
TODO:
## Inspecting network requests (Expo only)
TODO:
### inspect each request and response by clicking on them
TODO:
### includes `fetch` requests, external loaded media, and requests made by native modules
TODO:
## Inspecting memory
TODO:
### inspect memory usage and take a heap snapshot of your app's JavaScript code
TODO:
## Inspecting components
TODO:
### view the props, and styles of each component by hovering that component
TODO:
## Profiling JavaScript performance
TODO:
### record and analyze the performance of your app's JavaScript
TODO:
### ⚠️ Profiles are not yet symbolicated with sourcemaps, can only be used in debug builds
TODO:
## Rozenite
TODO:
### React Native DevTools plugin framework
TODO:
### install plug-and-play integrations -> appear as panels in React Native DevTools
TODO:
### create your own Rozenite plugin
TODO:

# Debugging with VS Code
TODO:
## ⚠️ VS Code debugger integration is in alpha
TODO:
## uses the same system as React Native DevTools — the inspector protocol
TODO:
## use with Expo Tools VS Code extension
TODO:
### set breakpoints, inspect variables, execute code through the debug console
TODO:
## To start debugging
TODO:
### Connect your app
TODO:
### Open VS Code command palette
TODO:
### Run the Expo: Debug ... VS Code command
TODO:
## Radon IDE (alternative)
TODO:
### advanced debugging, network inspector, router integration
TODO:

# React Native Debugger
TODO:
## ⚠️ requires Remote JS debugging, deprecated since React Native 0.73
TODO:
## ❌ incompatible with Hermes
TODO:
## wraps React DevTools + Redux DevTools + React Native DevTools
TODO:
## SDK 50+: use Expo dev tools plugins instead
TODO:
### React Native DevTools
TODO:
### Redux DevTools
TODO:
## Startup
TODO:
### specify port to `8081`
TODO:
### run `npx expo start` -> select `Debug remote JS` from Developer Menu
TODO:
### view Element tree, props, state, children of selected element
TODO:
### type `$r` in console -> breakdown of your selected element
TODO:
## Inspecting network traffic
TODO:
### right-click -> `Enable Network Inspect`
TODO:
### inspect requests of `fetch` and `XMLHttpRequest`
TODO:
### alternatives (require proxy)
TODO:
#### Charles Proxy
TODO:
#### Proxyman
TODO:
#### mitmproxy
TODO:
#### Fiddler
TODO:

# Debugging production apps
TODO:
## crash and bug reporting system -> real-time insights of your production apps
TODO:
### Sentry
TODO:
### BugSnag
TODO:
