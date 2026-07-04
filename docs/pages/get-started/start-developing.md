* goal
  * change t Expo project and see it live on your device

## Start a development server

* `npx expo start` OR `yarn expo start` OR `pnpm expo start` OR `bun expo start`
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

Make sure you are on the same Wi-Fi network on your computer and your device.

If it still doesn't work, it may be due to the router configuration — this is common for public networks. You can work around this by choosing the **Tunnel** connection type when starting the development server, then scanning the QR code again.

<Terminal
cmd={{
npm: ['$ npx expo start --tunnel'],
yarn: ['$ yarn expo start --tunnel'],
pnpm: ['$ pnpm expo start --tunnel'],
bun: ['$ bun expo start --tunnel'],
}}
/>

> Using the **Tunnel** connection type will make the app reloads considerably slower than on **LAN** or **Local**, so it's best to avoid tunnel when possible. You may want to install and use an emulator or simulator to speed up development if **Tunnel** is required to access your machine from another device on your network.

## Make your first change

* TODO:
Open the **src/app/index.tsx** file in your code editor and make a change.

<DiffBlock
  raw={`diff --git a/src/app/index.tsx b/src/app/index.tsx
index 45cfa0e..4d1b384 100644
--- a/src/app/index.tsx
+++ b/src/app/index.tsx
@@ -17,7 +17,7 @@ export default function HomeScreen() {
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
-           Welcome to&nbsp;Expo
+           Hello World!
          </ThemedText>
        </ThemedView>
  `}
/>

<Collapsible summary="Changes not showing up on your device?">

Expo Go is configured by default to automatically reload the app whenever a file is changed, but let's make sure to go over the steps to enable it in case somehow things aren't working.

- Make sure you have the [development mode enabled in Expo CLI](/workflow/development-mode#development-mode).
- Close the Expo app and reopen it.
- Once the app is open again, shake your device to reveal the developer menu. Press <kbd>Cmd ⌘</kbd> + <kbd>D</kbd>.
- If you see **Fast Refresh** enabled, toggle it. If you see **Disable Fast Refresh**, dismiss the developer menu. Now try making another change.

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
