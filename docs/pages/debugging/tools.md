---
title: Debugging and profiling tools
description: Learn about different tools available to inspect your Expo project at runtime.
sidebar_title: Tools
---

* goal
  * tools / inspect your Expo project | runtime 

* React Native == JS + native code 
  * ⚠️-> if an error is thrown -- from the -- JS code -> you MIGHT NOT find it -- via -- debugging tools | native code ⚠️

## Developer menu

* provides
  * 👀-- access to -- useful debugging functions 👀
    * **Copy link**
      * copy the 
        * dev server address in dev client or
        * [`exp://`](../linking/into-your-app.mdx#test-a-link-using-expo-go) link in Expo of your app
    * **Reload**
      * reload you app
        * NORMALLY, NOT necessary
          * Reason: 🧠 Fast Refresh is enabled by default 🧠
    * **Go Home**
      * leave your app & navigate back to the dev client's or Expo Go app's Home screen
    * **Toggle performance monitor**
      * view the performance information about your app
    * **Toggle element inspector**
      * enable or disable the element inspector overlay
    * **Open JS debugger**
      * see [Debugging with Chrome DevTools](#debugging-with-chrome-devtools)
    * **Fast Refresh**
      * toggle automatic refreshing of the JS bundle | make changes your project's files -- via a -- text editor
* built into
  * dev clients
  * Expo Go
* if you press <kbd>m</kbd> -> you access to it

* alternatives
  * Android device WITHOUT USB
    * Shake the device vertically
  * Android Emulator or device WITH USB
    * Press <kbd>Cmd ⌘</kbd> + <kbd>m</kbd> or <kbd>Ctrl</kbd> + <kbd>m</kbd>
    * run `adb shell input keyevent 82`
  * iOS device WITHOUT USB
    * Shake the device
    * Touch three fingers to the screen
  * iOS Simulator or device WITH USB
    * Press <kbd>Ctrl</kbd> + <kbd>Cmd ⌘</kbd> + <kbd>z</kbd> or <kbd>Cmd ⌘</kbd> + <kbd>d</kbd>

![](/docs/public/static/images/debugging/developer-menu.png)

### Toggle performance monitor

* TODO:
Opens up a small overlay that provides the following performance information about your app:

- RAM usage of a project.
- JavaScript heap (this is an easy way to know of any memory leaks in your application).
- Two Views. The top indicates the number of views for the screen and the bottom indicates the number of views in the component.
- Frames Per Second for the UI and JS threads. The UI thread is used for native Android or iOS UI rendering. The JS thread is where most of your logic runs, including API calls, touch events, and so on.

### Toggle element inspector

Opens up the element inspector overlay:

<ContentSpotlight
  alt="The element inspector overlay which shows details about an element after inspecting it."
  src="/static/images/debugging/element-inspector.png"
  className="max-w-[280px]"
/>

This overlay has capabilities to:

- Inspect: Inspect elements
- Perf: Show Performance overlay
- Network: Show network details
- Touchables: Highlight touchable elements

## Debugging with Chrome DevTools

As with websites, you can use Chrome DevTools to gain insights into the JavaScript code of your app.
With this tool, you can access the [Console](#interacting-with-the-console), [Source](#pausing-on-breakpoints), and [Network](#inspecting-network-requests) tab when using [dev clients](/more/glossary-of-terms/#dev-clients) or Expo Go.

You can use the Chrome DevTools on any app using Hermes. 
To open it, start your app and press <kbd>j</kbd> in the terminal where Expo was started. 
Once you have opened the Chrome DevTools, it will appear as below:

<ContentSpotlight
  alt="The Chrome DevTools, showing one of the files under the source tab."
  src="/static/images/debugging/inspector-source-tab.png"
/>

### Pausing on breakpoints

You can pause your app on specific parts of your code. To do this, set the breakpoint under the Sources tab by clicking the line number, or add the `debugger` statement in your code.

Once your app is executing code that has a breakpoint, it will entirely pause your app. This allows you to inspect all variables and functions in that scope. You can also execute code in the [Console](#interacting-with-the-console) tab as part of your app.

<ContentSpotlight
  alt="The Chrome DevTools, showing one of the files under the source tab."
  src="/static/images/debugging/inspector-breakpoint.png"
/>

> **warning** Breakpoints set through the Chrome DevTools depend heavily on source maps. Unfortunately, these source maps are not always 100% accurate. In some cases, you might have to use a `debugger` statement instead of a breakpoint.

### Pausing on exceptions

If your app throws unexpected errors, it can be hard to find the source of the error. You can use Chrome DevTools to pause your app and inspect the stack trace and variables the moment it throws an error.

<ContentSpotlight
  alt="Enable Pause on exceptions in the right panel of the sources tab"
  src="/static/images/debugging/inspector-pause-exception.png"
  className="max-w-[320px]"
/>

> **info** Some errors might be caught by other components in your app, such as Expo Router. In these cases, you can turn on **Pause on caught exceptions**. It will enable you to inspect any thrown error, even when handled properly.

### Interacting with the console

The Console tab gives you access to an interactive terminal, connected directly to your app. You can write any JavaScript inside this terminal to execute snippets of code as if it were part of your app. The code is executed in the global scope by default. But, when using breakpoints from the [Source](#pausing-on-breakpoints) tab, it executes in the scope of the reached breakpoint. This allows you to invoke methods and access variables throughout your app.

<ContentSpotlight
  alt="Use the console with breakpoints to inspect variables and invoke code through your app"
  src="/static/images/debugging/inspector-breakpoint-console.png"
/>

### Inspecting network requests

The **Network tab** gives you insights into the network requests made by your app. You can inspect each request and response by clicking on them. This includes `fetch` requests, external loaded media, and in some cases, even requests made by native modules.

<ContentSpotlight
  alt="Gain insights in the network requests from your app"
  src="/static/images/debugging/inspector-network-post.png"
/>

> **info** See the [Inspecting network traffic](#inspecting-network-traffic) for alternative ways to inspect network requests.

## Profiling JavaScript performance

> **warning** Profiles are not yet symbolicated with sourcemaps, and [can only be used in debug builds](https://github.com/facebook/hermes/issues/760). These limitations will be addressed in upcoming releases.

You can enable the **JavaScript Profiler tab** within Chrome DevTools to record and analyze the performance of your app JavaScript. The **Performance tab** is not currently supported. To profile the native runtime, use the tools included in Android Studio or Xcode.

### Enable the JavaScript Profiler within Chrome DevTools

- Press <kbd>⌘ cmd</kbd> + <kbd>shift</kbd> + <kbd>p</kbd> (Mac) or <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>p</kbd> (Windows, Linux) to open the command palette.
- Type **javascript** and select **Show JavaScript Profiler**.

<Collapsible summary="Screenshot of the Chrome DevTools command palette">

<ContentSpotlight
  alt="Chrome DevTools showing the command palette."
  src="/static/images/debugging/profiling-enable.png"
/>

</Collapsible>

### Record and read profiles from the JavaScript Profiler tab

- Press **Start**.
- Interact with your app.
- Press **Stop** to finish recording.
- Analyze the profile.

<Collapsible summary="Screenshot of the Chrome DevTools with the JavaScript Profiler tab open">

<ContentSpotlight
  alt="JavaScript Profiler tab opened in the Chrome DevTools."
  src="/static/images/debugging/profiling-start.png"
/>

</Collapsible>

## Debugging with VS Code

> **warning** VS Code debugger integration is experimental. For the most stable debugging experience, [use the Chrome DevTools built into Expo CLI](#debugging-with-chrome-devtools).

VS Code is a popular code editor, which has a built-in debugger. This debugger uses the same system as the Chrome DevTools &mdash; the inspector protocol.

You can use this debugger with the [Expo Tools](https://github.com/expo/vscode-expo#readme) VS Code extension. This debugger allows you to set breakpoints, inspect variables, and execute code through the debug console.

<ContentSpotlight
  alt="Debug your code while you write it"
  src="/static/images/debugging/vscode-expo.png"
/>

To start debugging:

- Connect your app
- Open VS Code command palette (based on your computer, it's either <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd> or <kbd>Cmd ⌘</kbd> + <kbd>Shift</kbd> + <kbd>p</kbd>)
- Run the **Expo: Debug ...** VS Code command.

This will attach VS Code to your running app.

## Debugging with React DevTools

React DevTools is a great way to look at your components' props and state. You can open it by pressing <kbd>Shift</kbd> + <kbd>m</kbd> in the terminal where Expo was started. Once it's open, it will appear as below:

<ContentSpotlight
  alt="Inspect your components using the React DevTools"
  src="/static/images/debugging/react-devtools.png"
/>

React DevTools can also be paired with the [element inspector](#showhide-element-inspector), allowing you to inspect props, state, and instance properties by tapping components inside your app.

Pressing the <kbd>shift</kbd> + <kbd>m</kbd> shortcut will also show installed [dev tools plugins](/debugging/devtools-plugins) to provide additional ways to inspect your app.

## React Native Debugger

> **warning** The React Native Debugger requires Remote JS debugging, which has been deprecated since [React Native 0.73](https://reactnative.dev/docs/other-debugging-methods#remote-javascript-debugging-deprecated).

The React Native Debugger is a standalone app that wraps the React DevTools, Redux DevTools, and the Chrome DevTools. Unfortunately, it requires the [deprecated Remote JS debugging workflow](https://github.com/jhen0409/react-native-debugger/discussions/774) and is incompatible with Hermes.

If you are using Expo **SDK 50** or **above**, you can use the [Expo dev tools plugins](/debugging/devtools-plugins) equivalents to the React Native Debugger:

- [React DevTools](#debugging-with-react-devtools)
- [Redux DevTools](/debugging/devtools-plugins/#redux)
- [Chrome DevTools](#debugging-with-chrome-devtools)

If you are using Expo SDK 49 or below, you can use the React Native Debugger. This section provides quick get started instructions. For in-depth information, check its [documentation](https://github.com/jhen0409/react-native-debugger#documentation).

You can install it via the [release page](https://github.com/jhen0409/react-native-debugger/releases), or if you're on macOS you can run:

<Terminal cmd={['$ brew install react-native-debugger']} />

### Startup

After firing up React Native Debugger, you'll need to specify the port (shortcuts: <kbd>Cmd ⌘</kbd> + <kbd>t</kbd> on macOS, <kbd>Ctrl</kbd> + <kbd>t</kbd> on Linux/Windows) to `8081`. After that, run your project with `npx expo start`, and select `Debug remote JS` from the Developer Menu. The debugger should automatically connect.

In the debugger console, you can see the Element tree, as well as the props, state, and children of whatever element you select. You also have the Chrome console on the right, and if you type `$r` in the console, you will see the breakdown of your selected element.

If you right-click anywhere in the React Native Debugger, you'll get some handy shortcuts to reload your JS, enable/disable the element inspector, network inspector, and to log and clear your `AsyncStorage` content.

<ContentSpotlight file="debugging/react-native-debugger.mp4" />

### Inspecting network traffic

It's easy to use the React Native Debugger to debug your network request: right-click anywhere in the React Native Debugger and select `Enable Network Inspect`. This will enable the Network tab and allow you to inspect requests of `fetch` and `XMLHttpRequest`.

There are however [some limitations](https://github.com/jhen0409/react-native-debugger/blob/master/docs/network-inspect-of-chrome-devtools.md#limitations), so there are a few other alternatives, all of which require using a proxy:

- [Charles Proxy](https://www.charlesproxy.com/documentation/configuration/browser-and-system-configuration/) (~$50 USD, our preferred tool)
- [Proxyman](https://proxyman.io) (Free version available or $49 to $59 USD)
- [mitmproxy](https://medium.com/@rotxed/how-to-debug-http-s-traffic-on-android-7fbe5d2a34#.hnhanhyoz)
- [Fiddler](http://www.telerik.com/fiddler)

## Debugging production apps

* crash and bug reporting system
  * if you implement it -> it can help you -- get -- real-time insights of your production apps 
* see [error reporting services](../debugging/runtime-issues.mdx/#using-error-reporting-services)
