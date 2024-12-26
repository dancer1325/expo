* recommendations
  * develop your app | computer
    * rather than constantly -- interacting with an -- iPhone or iPad
    * use cases
      * network conditions are slow
      * [tunnel connection](/more/expo-cli/#tunneling) -- is required due to -- LAN limitations

* goal
  * how to install the iOS Simulator | your Mac 

* requirements
  * macOS

## Setup Xcode and Watchman

<XcodeInstructions />

### Try it out

* | your Expo app
  * `npx expo start` &
    * press `i`
    * press `shift` + `i` / select a simulator to open
    
      ![](/docs/public/static/images/ios-simulator/simulators-list.png)

* if you get a warning -- about -- accept the Xcode license -> run the command again

![](/docs/public/static/videos/open-in-ios-simulator.mp4)

## Expo Orbit

* see [here](../build/orbit.mdx)

## iOS Simulator limitations

* hardware / unavailable | iOs Simulator
  * Audio Input
  * Barometer
  * Camera
  * Motion Support (accelerometer and gyroscope)
* suspends background apps & processes

* see [Apple's documentation](https://help.apple.com/simulator/mac/current/#/devb0244142d)

## Troubleshooting

* TODO:

### The CLI seems to be stuck when opening a Simulator

Sometimes the iOS Simulator doesn't respond to the open command. If it seems stuck on this prompt, you can open the iOS Simulator manually (`open -a Simulator`) and then in the macOS toolbar, choose **File** &gt; **Open Simulator**, and select an iOS version and device that you'd like to open.

<ContentSpotlight
  alt="Opening a simulator manually from the macOS toolbar."
  src="/static/images/ios-simulator/open-simulator-manually.png"
/>

You can use this menu to open any version of the simulator. You can also open multiple simulators at the same time, however, Expo CLI will always target the most recently opened simulator.

### Simulator opened but the Expo Go app isn't opening inside of it

The first time you install the app in the simulator, iOS will ask if you'd like to open the Expo Go app. You may need to interact with the simulator (click around, drag something) for this prompt to show up, then press **OK**.

### How do I force an update to the latest version?

Create a project with the desired SDK version and open it in a simulator to install a particular version of Expo Go.

<Terminal
  cmd={[
    '# Bootstrap an SDK 51 project',
    '$ npx create-expo-app --template blank@51',
    '',
    '# Open the app on a simulator to install the required Expo Go app',
    '$ npx expo start --ios',
  ]}
/>

### Expo CLI is printing an error message about `xcrun`, what do I do?

For miscellaneous errors, try the following:

- Manually uninstall Expo Go on your simulator and reinstall by pressing <kbd>shift</kbd> + <kbd>i</kbd> in the Expo CLI Terminal UI and selecting the desired simulator.
- If that doesn't help, focus the simulator window and in the Mac toolbar choose **Device** &gt; **Erase All Content and Settings...**<br/>
  This will reinitialize your simulator from a blank image. This is sometimes useful for cases where your computer is low on memory and the simulator fails to store some internal files, leaving the device in a corrupt state.
