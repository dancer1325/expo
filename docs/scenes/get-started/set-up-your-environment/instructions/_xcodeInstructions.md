### Install Xcode

* steps
  * | Mac App Store,
    * search for [Xcode](https://apps.apple.com/us/app/xcode/id497799835) > click Install

TODO: 
</Step>

<Step label="2">

### Install Xcode CL Tools

Open Xcode, choose **Settings...** from the Xcode menu (or press <kbd>cmd ⌘</kbd> + <kbd>,</kbd>)
* Go to the **Locations** and install the tools by selecting the most recent version in the **Command Line Tools** dropdown.


</Step>

<Step label="3">

### Install an iOS Simulator | Xcode

To install an iOS Simulator, open **Xcode > Settings... > Components**, and under **Platform Support > iOS ...**, click **Get**.

</Step>

<Step label="4">

### Install Watchman

* use cases
  * projects / have SDK v55-

* [Watchman](https://facebook.github.io/watchman/docs/install#macos)
  * == tool -- for -- watching changes | filesystem
  * allows
    * better performance
  * ways to install

  ```
  brew update
  brew install watchman
  ```
