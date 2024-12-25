* [Expo Orbit](https://expo.dev/orbit)
  * AVAILABLE |
    * macOS
    * Windows
  * enables faster to
    * install
    * launch builds
    * updates -- from -- EAS, local files,
    * run Snack projects | simulators and physical devices

![](/docs/public/static/videos/orbit/basic-features.mp4)

## Why Orbit

* WITHOUT Orbit,
  * MANUALLY, 
    * you 
      * install builds
      * updates from EAS (on Android and iOS physical devices or emulator/simulator) or
      * running Snack projects | simulators
    * steps
      * `eas build:run`
      * select a build -- for -- your chosen device
      * download the archive
      * if you use iOS -> drag and drop it | simulator
      * | Snack projects,
        * install Expo Go | virtual device,
        * logging in,
        * selecting the Snack -- from the -- list
* Orbit
  * ALL PREVIOUS steps -- are, as seamless as possible -- made

## Highlights

- List & launch simulators
- install & launch builds
  - from EAS
  - | simulators & real devices
- [Install & open updates from EAS](/review/with-orbit/) | Android Emulators or iOS Simulators
- Launch Snack projects | your simulators
- Install and launch apps -- from -- local files  
  - via
    - Finder or
    - drag and drop a file | menu bar app
  - supported formats
    - Android **.apk**,
    - iOS Simulator compatible **.app**, OR ad-hoc signed apps
- from your [EAS dashboard](https://expo.dev)
  - see pinned projects
  - quickly launch your latest builds

## Installation

* requirements
  * [Android Studio](/workflow/android-studio-emulator/)
    * Reason: 🧠Orbit -- relies on the -- Android SDK 🧠
  * [Xcode](/workflow/ios-simulator/)
    * Reason: 🧠| macOS, Orbit -- relies on the -- `xcrun` 🧠 

* |
  * macOS, via
    * [GitHub releases](https://github.com/expo/orbit/releases), 
    * `brew install expo-orbit`
  * Windows
    * requirements
      * x64 or x86 machines
    * ONLY preview
    * [GitHub releases](https://github.com/expo/orbit/releases)

## Notes

* if you want Orbit / start | log in automatically -> Orbit icon | menu bar, **Settings**, select the **Launch on Login** option
