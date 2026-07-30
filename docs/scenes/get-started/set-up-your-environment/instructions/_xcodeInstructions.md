* steps
  * [install Xcode](#install-xcode)
  * [install Xcode CL tools](#install-xcode-cl-tools)
  * [install an iOS Simulator | Xcode](#install-an-ios-simulator--xcode)
  * [install watchman](#install-watchman)

### Install Xcode

* steps
  * | Mac App Store,
    * search for [Xcode](https://apps.apple.com/us/app/xcode/id497799835) > click Install

### Install Xcode CL Tools

* | Xcode
  * \> Settings > Locations > install

* if you want to check it's installed -> `xcode-select --version`

### Install an iOS Simulator | Xcode

* | Xcode,
  * \> Settings > Components > Platform Support > iOS > Get

### Install Watchman

* use cases
  * projects / have SDK v55-

* [Watchman](https://facebook.github.io/watchman/docs/install#macos)
  * == tool -- for -- watching changes | filesystem
  * allows
    * better performance
  * steps to install

    ```
    brew update
    brew install watchman
    ```
