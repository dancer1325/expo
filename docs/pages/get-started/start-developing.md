* goal
  * change t Expo project and see it live on your device

## Start a development server

* `npx expo start`
  * start the development server
  * display QR code | your terminal 

## Open the app | your device

* scan QR code -- to -- open the app | your device
  * if you have problems -> 
    * check your computer's Wi-Fi network == your device's WI-FI network or
    * `npx expo start --tunnel`
      * == **Tunnel** connection type | start the development server
      * -> app reloads speed << app reloads | **LAN** or **Local**, speed

* if you want to use an emulator
  * -> press
    * `a` -- to open the -- app | Android Emulator 
    * `i` -- to open the -- app | iOS Simulator
  * use cases
    * **Tunnel** connection type

## Make your first change

* TODO:
Open the **app/(tabs)/index.tsx** file in your code editor and make a change.

<DiffBlock
  raw={`diff --git a/app/(tabs)/index.tsx b/app/(tabs)/index.tsx
index 45cfa0e..4d1b384 100644
--- a/app/(tabs)/index.tsx
+++ b/app/(tabs)/index.tsx
@@ -17,7 +17,7 @@ export default function HomeScreen() {
       }
     >
       <ThemedView style={styles.titleContainer}>
-        <ThemedText type="title">Welcome!</ThemedText>
+        <ThemedText type="title">Hello World!</ThemedText>
         <HelloWave />
       </ThemedView>
       <ThemedView style={styles.stepContainer}>
  `}
/>

<Collapsible summary="Changes not showing up on your device?">

Expo Go is configured by default to automatically reload the app whenever a file is changed, but let's make sure to go over the steps to enable it in case somehow things aren't working.

- Make sure you have the [development mode enabled in Expo CLI](/workflow/development-mode#development-mode).
- Close the Expo app and reopen it.
- Once the app is open again, shake your device to reveal the developer menu. If you are using an emulator, press <kbd>Ctrl</kbd> + <kbd>M</kbd> for Android or <kbd>Cmd ⌘</kbd> + <kbd>D</kbd> for iOS.
- If you see **Enable Fast Refresh**, press it. If you see **Disable Fast Refresh**, dismiss the developer menu. Now try making another change.

  <ContentSpotlight
    alt="Developer menu in Expo Go app."
    src="/static/images/get-started/developer-menu.png"
    className="max-w-[540px]"
  />

</Collapsible>

</Step>

---

## File structure

Below, you can get familiar with the default project's file structure:

<ProjectStructure />

## Features

The default project template has the following features:

<TemplateFeatures />
