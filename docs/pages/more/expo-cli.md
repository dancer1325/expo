* goal
  * Expo CLI

* Expo CLI
  * := CL tool / 
    * 👀primary interface between a developer -- & -- OTHER Expo tools 👀

* `expo` package
  * see [coreConcepts](../core-concepts.md)

## Highlights

- `npx expo start`
  - [Start a server](#develop) -- for -- developing your app
- `npx expo prebuild`
  - [Generate the native Android & iOS directories](#prebuild) 
- `npx expo run:ios` & `npx expo run:android`
  - [Build & run](#compiling) the NATIVE apps 
- `npx expo install package-name`
  - [Install & update packages](#install) / 's version -- compatible with -- the version of `react-native` | your project 
- `npx expo` + `npx react-native` (SIMULTANEOUSLY)

## Installation

* Expo CLI
  * included | `expo` package
  * `npm add expo` or `yarn add expo`
    * install it

* Bare projects
  * == projects / NOT use [Expo Prebuild](#prebuild)
  * requirements
    * additional setup / ensure ALL custom Expo bundling features work
      * see [Metro: Bare workflow setup](../versions/unversioned/config/metro.mdx#bare-workflow-setup)

## Develop

* start a development server -- to -- work | your project

  ```
  npx expo start
  # or using the alias
  npx expo
  ```
  * uses
    * by a client, to interact with the bundler
      * 👀default bundler is [Metro](https://metrobundler.dev/) 👀
  * server, by default, | `http://localhost:8081`  

* **Terminal UI**
  * == UI / 
    * shows up | process
    * contains
      * QR code (for the dev server URL)
      * list of keyboard shortcuts / you can press:

| Keyboard shortcut               | Description                                                                                                                                                                              |
| ------------------------------- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <kbd>A</kbd>                    | Open the project on a connected Android device.                                                                                                                                          |
| <kbd>Shift</kbd> + <kbd>A</kbd> | Select an Android device or emulator to open.                                                                                                                                            |
| <kbd>I</kbd>                    | Open the project in an iOS Simulator.                                                                                                                                                    |
| <kbd>Shift</kbd> + <kbd>I</kbd> | Select an iOS Simulator to open.                                                                                                                                                         |
| <kbd>W</kbd>                    | Open the project in a web browser <br/> requirements: install webpack in your project.                                                                                   |
| <kbd>R</kbd>                    | Reload the app on any connected device.                                                                                                                                                  |
| <kbd>S</kbd>                    | Switch the launch target between Expo Go and development builds.                                                                                                                         |
| <kbd>M</kbd>                    | Open the dev menu on any connected native device (web not supported).                                                                                                                    |
| <kbd>Shift</kbd> + <kbd>M</kbd> | Choose more commands to trigger on connected devices.<br/>This includes toggling the performance monitor, opening the element inspector, reloading the device, and opening the dev menu. |
| <kbd>J</kbd>                    | Open Chrome Dev Tools for any connected device that is using Hermes as the JavaScript engine. [Learn more](/guides/using-hermes#javascript-inspector-for-hermes).                        |
| <kbd>O</kbd>                    | Open project code in your editor. This can be configured with the `EXPO_EDITOR` and `EDITOR` [environment variables](#environment-variables).                                            |
| <kbd>E</kbd>                    | Show the development server URL as a QR code in the terminal.                                                                                                                            |
| <kbd>?</kbd>                    | Show all Terminal UI commands.                                                                                                                                                           |

### Launch target

* `npx expo start`
  * 👀if `expo-dev-client` is installed | project -> ALSO launches the app | development build 👀
    * OTHERWISE -> app is launched | Expo Go
  * if you want to force the launch target -> pass the flags
    * `--dev-client`
      * == launch the app | development build
    * `--go`
      * == launch the app | Expo Go

* | runtime,
  * if you want to switch the launch target -> press <kbd>S</kbd> | **Terminal UI**

### Server URL

* 👀by default, the project is served | LAN connection 👀
* `npx expo start --localhost`
  * if you want to serve the project | ONLY localhost
  * alternatives to `--localhost`
    * `--port`
      * == port | start the dev server on
      * ❌NOT valid, if you are using ❌
        * webpack or
        * [tunnel URLs](#tunneling)
      * `--port 0`
        * == use the first available port
          * by default **8081**
    * `--https`
      * == | secure origin
      * ONLY supported | web

* `EXPO_PACKAGER_PROXY_URL`
  * == environment variable / enable ANY URL value
  * _Example:_

    ```
    export EXPO_PACKAGER_PROXY_URL=http://expo.dev
    
    # if you launch it -> open the app | "exp://expo.dev:80" -- 80 temporary workaround for Android WebSockets --
    npx expo start
    ```

#### Tunneling

* difficult to connect a remote device -- , via lan/localhost, to your -- dev server
  * use cases  
    * restrictive network conditions (_Example:_ public Wi-Fi),
    * firewalls (_Example:_ Windows users),
    * Emulator misconfiguration 
  * alternative
    * **tunneling**
      * == connect -- via a -- proxy URL
      * requirements
        * internet access  
        * third-party hosting service
          * typical issues
            * `ngrok tunnel took too long to connect`
            * `Tunnel connection has been closed. This is often related to intermittent connection problems with the Ngrok servers...`.

* **tunneling**
  * 👀`npx expo start` provides built-in support -- via -- [ngrok][ngrok] 👀
  * steps
    * `npm i -g @expo/ngrok`
    * `npx expo start --tunnel`
      * start your dev server -- from a -- _tunnel_ URL
        * == app is served | public URL 
          * _Example:_ `http://xxxxxxx.bacon.19000.exp.direct:80`
  * drawbacks 
    * tunneling speed << local connections speed
      * Reason: 🧠 requests -- must be forwarded to a -- public URL 🧠
    * risky -- to be accessible by -- ANY device / network connection
      * entropy | beginning of the URL
        * added by Expo CLI
        * if you clear your project's `.expo/`-> Entropy is reset 
    * BOTH devices require a network connection
      * -> can NOT be used -- with the -- `--offline` flag

#### Offline

* `npx expo start --offline`
  * develop WITHOUT a network connection
    * -> CLI will NOT making network requests
  * 👀if you do NOT specify flag & your computer has NO internet connection -> offline support automatically enabled 👀

* Expo CLI network requests
  * uses
    * sign manifests -- with -- your user credentials

### ".expo/" directory

* ".expo/"
  * created |
    * first time / you start the development server
    * root of the project
  * == `devices.json` + `settings.json` 
    * `devices.json`
      * == information about devices / have opened this project recently
    * `settings.json`
      * == information about server configuration / used to serve the project's manifest
    * ⚠️BOTH informations are specific to your local computer ⚠️
      * ⚠️-> include | **.gitignore** ⚠️

## Building

* React Native app == native runtime ([compiling](#compiling)) + static files (_Example:_ JS bundles & assets) ([exporting](#exporting))

### Compiling

* `npx expo run:ios` / `npx expo run:android`
  * build directly | connected devices 
    * `--device` flag -> NO global side effects 
    * supports locked devices
      * == retry instantly / NO need to rebuild
  * AUTOMATICALLY codesign iOS apps
    * for development
    * from the CLI / NO need to open Xcode
  * from your project source code -> smart log parsing / -- shows -- warnings and errors 
    * != Xcode 
      * from your node modules -> surfaces hundreds of benign warnings 
  * FATAL errors surfaced | terminal
    * == your app crashes 
  * ⚠️if your project does NOT have the corresponding native directories (`android/` or `ios`) -> `npx expo prebuild` command will run | BEFORE building ⚠️
    * _Example:_  if your project does NOT have `ios/` & you run `npx expo run:ios` -> FIRST runs `npx expo prebuild -p ios`

* `npx expo run:ios`
  * requirements
    * install Xcode
    * run | Mac

* `npx expo run:android`
  * requirements
    * install & configure
      * Android Studio
      * Java

* `eas build -p ios`
  * build the app | cloud -- from -- ANY computer  
  
* Building locally
  * uses
    * develop native modules
    * [debugging complex native issues](../debugging/runtime-issues.mdx#native-debugging) 

* Building remotely
  * -- via -- `eas build`
  * MUCH MORE resilient option
    * Reason: 🧠 due to the pre-configured cloud environment 🧠

* CROSS-Platform arguments:
  * `--no-build-cache`
    * clear the native cache | BEFORE building
      * uses
        * profile your build times
      * _Example:_ | iOS, `derived data/` 
  * `--no-install`
    * skip installing dependencies
      * & | iOS, skip running `npx pod-install`
  * `--no-bundler`
    * skip starting the dev server
    * if the dev server is ALREADY serving the app -- from a -- different process -> enabled automatically
  * `-d, --device [deviceNameOrId]`
    * device / build the app on
    * `[deviceNameOrId]`
      * optional
      * if you do NOT pass it -> you select the device | list of available options
    * supports
      * connected devices
      * virtual devices
  * `-p, --port <port>`
    * port -- to start the -- development server
      * by default, 8081
    * ONLY relevant | development builds
    * production builds
      * will [export](#exporting) the project
      * embed the files | native binary | BEFORE installing them | device
  * `--binary <pathToTheBinary>`
    * if it's provided -> the
      * build process -- will be -- skipped
      * binary -- will attempt to be -- installed directly
    * if the binary was NOT built for the correct device (_Example:_ built for the simulator or installed | device) -> it fails

#### Compiling Android

* if Android apps have MULTIPLE **variants** / defined | project's `build.gradle` -> use `--variant` flag
  * _Example:_ 
    ```
    npx expo run:android --variant debug
    
    # compile -- for -- production
    # NOT code-signed -- for -- submit | Google Play Store
    # uses: test bugs 
    npx expo run:android --variant release
    ```

  * 👀if you want to generate a production build / code signed for the Play Store -> use [EAS Build](../build/introduction.md) 👀

* `open -a /Applications/Android Studio.app android`
  * debug the native Android project -- via -- native debugging tools
    * open the `android/` | Android Studio

* if you have a customized Android project / different product flavors -> use the `--variant` and `--app-id` flags
  * _Example:_ 
    ```
    npx expo run:android --variant freeDebug --app-id dev.expo.myapp.free
    ```

* see [local builds -- via -- Android product flavors](../guides/local-app-development.md#local-builds-using-android-product-flavors)

#### Compiling iOS

* TODO:
An iOS app can have multiple **schemes** for representing different sub-apps like App Clips, watchOS apps, Safari Extensions, and so on. 
By default, `npx expo run:ios` will choose the scheme for your iOS app. 
You can pick a custom scheme with the `--scheme <my-scheme>` argument. 
If you pass in the `--scheme` argument alone, then Expo CLI will prompt you to choose a scheme from the list of available options in your Xcode project.

The scheme you select will filter out which `--device` options show up in the selection prompt, for example, selecting an Apple TV scheme will only show available Apple TV devices.

You can compile an iOS app for production by running:

<Terminal cmd={['$ npx expo run:ios --configuration Release']} />

This build is not automatically code signed for submission to the Apple App Store. `npx expo run:ios` should mostly be used to test bugs that only show up in production builds. Native code signing requires several network requests and is prone to many different types of errors from the Apple servers. To generate a production build that is code signed for the App Store, we recommend using [EAS Build](/build/introduction).

When you compile your app onto a Simulator, the Simulator's native error logs will be piped to the Expo CLI process in the terminal. This is useful for quickly seeing bugs that may cause a fatal error. For example, missing permission messages. Error piping is not available for physical iOS devices.

You can debug using `lldb` and all of the native Apple debugging tools by opening the project in Xcode and rebuilding from Xcode:

<Terminal cmd={['$ xed ios']} />

Building from Xcode is useful because you can set native breakpoints and profile any part of the application. Be sure to track changes in source control (git) in case you need to regenerate the native app with `npx expo prebuild -p ios --clean`.

**iOS development signing**

If you want to see how your app will run on your device, all you have to do is connect it, run `npx expo run:ios --device`, and select your connected device.

Expo CLI will automatically sign the device for development, install the app, and launch it.

If you don't have any developer profiles setup on your computer then you'll need to set them up manually outside of Expo CLI by following this guide: [Setup Xcode signing](https://expo.fyi/setup-xcode-signing).

### Exporting

You can export the JavaScript and assets for your app using Metro bundler by running:

<Terminal cmd={['$ npx expo export']} />

This is done automatically when using `eas update` or when compiling the native runtime. The `export` command works similar to most web frameworks:

- A bundler transpiles and bundles your application code for **production** environments, stripping all code guarded by the `__DEV__` boolean.
- All static files are copied into a static `dist/` folder which can be served from a static host.
- Contents of the `public/` folder are copied into the `dist/` folder as-is.

The following options are provided:

- `--platform <platform>`: Choose the platform to compile for: 'ios', 'android', 'all'. **Default: all**. 'web' is also available if configured in the app config. For more information, see [Customizing Metro](/guides/customizing-metro).
- `--dev`: Bundle for **development** environments without minifying code or stripping the `__DEV__` boolean.
- `--output-dir <dir>`: The directory to export the static files to. **Default: dist**
- `--max-workers <number>`: Maximum number of tasks to allow the bundler to spawn. Setting this to `0` will run all transpilation on the same process, meaning you can easily debug Babel transpilation.
- `-c, --clear`: Clear the bundler cache before exporting.
- `--no-minify`: Skip minifying JavaScript and CSS assets.
- `--no-bytecode`: Skip generating Hermes bytecode for native platforms (SDK 50 and above). Only use this for analyzing bundle sizes and never ship UTF-8 bundles to native platforms as this will lead to drastically longer startup times.

#### Hosting with sub-paths

> Experimental functionality. Available from SDK 50.

You can configure the prefix for static assets by setting the `experiments.baseUrl` field in your [app config](/workflow/configuration/):

```json app.json
{
  "expo": {
    "experiments": {
      "baseUrl": "/my-root"
    }
  }
}
```

This will export the website with all resources prefixed with `/my-root`. For example, an image at `assets/image.png` will be expected to be hosted at **/my-root/assets/image.png**. The actual file will be located in the same file system location as the entire directory is expected to be hosted at `/my-root` on the server.

Expo Router has built-in support for `baseUrl`. When using the `Link` and `router` APIs, the `baseUrl` will be automatically prepended to the URL.

```jsx app/blog/index.tsx
import { Link } from 'expo-router';

export default function Blog() {
  return <Link href="/blog/123">Go to blog post</Link>;
}
```

This will **export** to the following:

```html Output HTML
<a href="/my-root/blog/123">Go to blog post</a>
```

If you use `<a>`, React Navigation, or the `Linking` API directly, you'll need to manually prepend the `baseUrl`.

The `baseUrl` functionality is production-only and must be set before exporting the website. If you change the value, you must re-export the website.

Images and other assets will work automatically if you `require` or `import` them. If you directly reference a resource URL then you will need to append the **baseUrl** manually.

```jsx app/index.tsx
import { Image } from 'expo-image';

export default function Blog() {
  return <Image source={require('@/assets/image.png')} />;
}
```

This will **export** to the following:

```html Output HTML
<img src="/my-root/assets/assets/image.png" />
```

Manually passing a URL will need to be manually prefixed:

```jsx app/index.tsx
export default function Blog() {
  return <img src="/my-root/assets/image.png" />;
}
```

### Exporting with webpack

> **warning** **Deprecated**: In SDK 50 and above, Expo Webpack has been deprecated in favor of universal Metro (`npx expo export`). Learn more in [migrating from Webpack to Expo Router](/router/migrate/from-expo-webpack).

You can export the JavaScript and assets for your web app using webpack by running the following:

<Terminal cmd={['$ npx expo export:web']} />

- `--dev`: Bundle in 'development' mode without minifying code or stripping the `__DEV__` boolean.
- `-c, --clear`: Clear the bundler cache before exporting.

This command will be disabled if your project is configured to use `metro` for bundling web projects in the `app.json` via the `expo.web.bundler: 'metro'` field.

## Prebuild

* `npx expo prebuild`
  * generate the native code -- for -- your project
    * happens | BEFORE compile the native app
* 👀if you [compile](#compiling) & NOT exist the native directories -> prebuild is run 1! 👀
  
* see [Expo Prebuild docs](../workflow/continuous-native-generation.md)

## Config

* TODO:
Evaluate the app config (**app.json**, or **app.config.js**) by running:

<Terminal cmd={['$ npx expo config']} />

- `--full`: Include all project config data.
- `--json`: Output in JSON format, useful for converting an `app.config.js` to an `app.config.json`.
- `-t, --type`: [Type of config](#config-type) to show.

### Config type

There are three different config types that are generated from the app config:

- `public`: The manifest file to use with OTA updates. Think of this like an `index.html` file's `<head />` element but for native apps.
- `prebuild`: The config that is used for [Expo Prebuild](/workflow/prebuild) including async modifiers. This is the only time the config is not serializable.
- `introspect`: A subset of the `prebuild` config that only shows in-memory modifications like `Info.plist` or **AndroidManifest.xml** changes. Learn more about [introspection](/config-plugins/development-and-debugging/#introspection).

## Install

* ❌React Native is NOT backwards compatible ❌
  * != React web
  * -> 👀npm packages / strict versions 👀
    * _Example:_ versions sensitivity
      ```
        {
        "dependencies": {
            "react-native": "0.71.0",
            // These MUST be compatible with RN 0.71.0
            "react-native-maps": "1.3.2",     // Works
            "react-native-maps": "1.4.0"      // Might break!
        }
        }
      ```
  * SOLUTION | Expo projects
    * 👀use `npx expo install package` 👀
      * Reason: 🧠analyzes the compatible version 🧠 
      * _Example:_ `npx expo install expo-camera`

### Version validation

You can perform validation and correction with the `--check` and `--fix` flags:

- `--check`: Check which installed packages need to be updated.
- `--fix`: Automatically update any invalid package versions.

Example:

<Terminal
  cmd={[
    '# Check all packages for incorrect versions, prompt to fix locally',
    '$ npx expo install --check',
  ]}
  cmdCopy="npx expo install --check"
/>

`npx expo install --check` prompts you about packages that are installed incorrectly. It also prompts about installing these packages to their compatible versions locally. It exits with non-zero in Continuous Integration (CI). This means you can use this to do continuous immutable validation. In contrast, `npx expo install --fix` will always fix packages if needed, regardless of the environment.

You can validate specific packages by passing them:

<Terminal
  cmd={[
    '# Check only react-native and expo-sms',
    '$ npx expo install react-native expo-sms --check',
  ]}
  cmdCopy="npx expo install react-native expo-sms --check"
/>

The command `npx expo install expo-camera` and `npx expo install expo-camera --fix` serve the same purpose, the `--fix` command is useful for upgrading all packages in your project like:

<Terminal cmd={['$ npx expo install --fix']} />

### Configuring dependency validation

There may be circumstances where you want to use a version of a package that is different from the version recommended by `npx expo install`. In this case, you can exclude specific packages from version checking by using the [`expo.install.exclude`](/versions/latest/config/package-json/#exclude) property in your project's **package.json**.

### Install package managers

`npx expo install` has support for `bun`, `npm`, `pnpm`, and `yarn`.

You can force the package manager using a named argument:

- `--bun`: Use `bun` to install dependencies. Default when **bun.lockb** exists.
- `--npm`: Use `npm` to install dependencies. Default when **package-lock.json** exists.
- `--pnpm`: Use `pnpm` to install dependencies. Default when **pnpm-lock.yaml** exists.
- `--yarn`: Use `yarn` to install dependencies. Default when **yarn.lock** exists.

## Authentication

Expo CLI provides authentication methods to use with the `npx expo start` command. Authentication is used to "code sign" manifests for secure OTA usage. Think of this like HTTPS on the web.

1. Register an account with `npx expo register`.
2. Login to your account with `npx expo login`.
3. Check which account is currently authenticated with `npx expo whoami`.
4. Logout with `npx expo logout`.

These credentials are shared across Expo CLI and EAS CLI.

## Customizing

Sometimes you may want to customize a project file that would otherwise be generated in memory by Expo CLI. When utilizing tools other than Expo CLI, you'll need to have the default config files present, otherwise your app may not work as expected. You can generate files by running:

<Terminal cmd={['$ npx expo customize']} />

From here, you can choose to generate basic project files like:

- **babel.config.js** -- The Babel configuration. This is required to be present if you plan to use tooling other than Expo CLI to bundle your project.
- **webpack.config.js** -- The default webpack config for web development.
- **metro.config.js** -- The default Metro config for universal development. This is required for usage with `npx react-native`.
- **tsconfig.json** -- Create a TypeScript config file and install the required dependencies.

## Environment Variables

| Name                                 | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `HTTP_PROXY`                         | **string**  | HTTP/HTTPS proxy URL to connect for all network requests. Configures [Undici EnvHttpProxyAgent](https://github.com/nodejs/undici/blob/main/docs/docs/api/EnvHttpProxyAgent.md).                                                                                                                                                                                                                                                 |
| `EXPO_NO_WEB_SETUP`                  | **boolean** | Prevents the CLI from forcing web dependencies (`react-dom`, `react-native-web`, `@expo/webpack-config`) to be installed before using web functionality.<br/>This is useful for cases where you wish to perform non-standard web development.                                                                                                                                                                                   |
| `EXPO_OFFLINE`                       | **boolean** | Skip all network requests when applicable. This leads to faster development in areas with poor network connection.                                                                                                                                                                                                                                                                                                              |
| `EXPO_NO_TYPESCRIPT_SETUP`           | **boolean** | Prevents the CLI from forcing TypeScript to be configured on `npx expo start`.<br/>For more information, see [TypeScript guide](/guides/typescript/).                                                                                                                                                                                                                                                                           |
| `DEBUG=expo:*`                       | **string**  | Enables debug logs for the CLI, you can configure this using the [`debug` convention](https://github.com/debug-js/debug#conventions).                                                                                                                                                                                                                                                                                           |
| `EXPO_DEBUG`                         | **boolean** | An alias for `DEBUG=expo:*`.                                                                                                                                                                                                                                                                                                                                                                                                    |
| `EXPO_PROFILE`                       | **boolean** | Enable profiling stats for the CLI, this does not profile your application.                                                                                                                                                                                                                                                                                                                                                     |
| `EXPO_NO_CACHE`                      | **boolean** | Disable all global caching. By default, app config JSON schemas, Expo Go binaries for simulators and emulators, and project templates are cached in the global **.expo** folder on your machine.                                                                                                                                                                                                                                |
| `CI`                                 | **boolean** | When enabled, the CLI will disable interactive functionality, skip optional prompts, and fail on non-optional prompts.<br/>Example: `CI=1 npx expo install --check` will fail if any installed packages are outdated.                                                                                                                                                                                                           |
| `EXPO_NO_TELEMETRY`                  | **boolean** | Disables anonymous usage collection. [Learn more about telemetry](#telemetry).                                                                                                                                                                                                                                                                                                                                                  |
| `EXPO_NO_GIT_STATUS`                 | **boolean** | Skips warning about git status during potentially dangerous actions like `npx expo prebuild --clean`.                                                                                                                                                                                                                                                                                                                           |
| `EXPO_NO_REDIRECT_PAGE`              | **boolean** | Disables the redirect page for selecting an app, that shows when a user has `expo-dev-client` installed, and starts the project with `npx expo start` instead of `npx expo start --dev-client`.                                                                                                                                                                                                                                 |
| `EXPO_PUBLIC_FOLDER`                 | **string**  | Public folder path to use with Metro for web. [Learn more about customizing Metro](/guides/customizing-metro/).<br/>Default: `public`                                                                                                                                                                                                                                                                                           |
| `EDITOR`                             | **string**  | Name of the editor to open when pressing <kbd>O</kbd> in the Terminal UI. This value is used across many command line tools.                                                                                                                                                                                                                                                                                                    |
| `EXPO_EDITOR`                        | **string**  | An Expo-specific version of the `EDITOR` variable which takes higher priority when defined.                                                                                                                                                                                                                                                                                                                                     |
| `EXPO_IMAGE_UTILS_NO_SHARP`          | **boolean** | Disable the usage of global Sharp CLI installation in favor of the slower Jimp package for image manipulation. This is used in places like `npx expo prebuild` for generating app icons.                                                                                                                                                                                                                                        |
| `EXPO_TUNNEL_SUBDOMAIN`              | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="experimental" /></div>Disable using `exp.direct` as the hostname for `--tunnel` connections. This enables **https://** forwarding which can be used to test universal links on iOS. This may cause unexpected issues with `expo-linking` and Expo Go. Select the exact subdomain to use by passing a `string` value that is not one of: `true`, `false`, `1`, `0`. |
| `EXPO_METRO_NO_MAIN_FIELD_OVERRIDE`  | **boolean** | Force Expo CLI to use the [`resolver.resolverMainFields`](https://metrobundler.dev/docs/configuration/#resolvermainfields) from the project's **metro.config.js** for all platforms. By default, Expo CLI will use `['browser', 'module', 'main']`, which is the default for webpack, for the web and the user-defined main fields for other platforms.                                                                         |
| ~~`EXPO_NO_INSPECTOR_PROXY`~~        | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="deprecated" /></div>Disable the customized inspector proxy with improved support for the Chrome DevTools protocol.<br/>This includes support for the network inspector.                                                                                                                                                                                            |
| `EXPO_NO_CLIENT_ENV_VARS`            | **boolean** | <div className="flex items-center pb-1.5"><StatusTag note="SDK 49+" /></div>Prevent inlining `EXPO_PUBLIC_` environment variables in client bundles.                                                                                                                                                                                                                                                                            |
| `EXPO_NO_DOTENV`                     | **boolean** | <div className="flex items-center pb-1.5"><StatusTag note="SDK 49+" /></div>Prevent all `.env` file loading across Expo CLI.                                                                                                                                                                                                                                                                                                    |
| `EXPO_NO_METRO_LAZY`                 | **boolean** | Prevent adding the `lazy=true` query parameter to Metro URLs (`metro@0.76.3` and greater). This disables `import()` support.                                                                                                                                                                                                                                                                                                    |
| `EXPO_USE_TYPED_ROUTES`              | **boolean** | Use `expo.experiments.typedRoutes` to enable statically typed routes in Expo Router.                                                                                                                                                                                                                                                                                                                                            |
| `EXPO_METRO_UNSTABLE_ERRORS`         | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="experimental" /></div>Enable unstable error message improvements in Metro bundler. The features behind this flag are subject to removal and may be upstreamed.                                                                                                                                                                                                     |
| ~~`EXPO_USE_METRO_WORKSPACE_ROOT`~~  | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="deprecated" note="SDK 52+" /></div>Enable auto server root detection for Metro. This will change the server root to the workspace root. Useful for monorepos.                                                                                                                                                                                                      |
| `EXPO_NO_METRO_WORKSPACE_ROOT`       | **boolean** | <div className="flex items-center pb-1.5"><StatusTag note="SDK 52+" /></div>Disable auto server root detection for Metro. Disabling will not change the server root to the workspace root. Enabling this is useful for monorepos.                                                                                                                                                                                               |
| ~~`EXPO_USE_UNSTABLE_DEBUGGER`~~     | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="deprecated" note="SDK 52+" /></div>Enable the experimental debugger from React Native.                                                                                                                                                                                                                                                                             |
| `EXPO_ADB_USER`                      | **string**  | <div className="flex items-center pb-1.5"><StatusTag status="SDK 50+" /></div>Set the `user` number that should be passed to `--user` with ADB commands. Used for installing APKs on Android devices with multiple profiles. Defaults to `0`.                                                                                                                                                                                   |
| `EXPO_NO_TELEMETRY_DETACH`           | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="SDK 51+" /></div>Send telemetry events in the main thread of `@expo/cli`. This causes the CLI to slow down as it waits for all the events to be sent.                                                                                                                                                                                                              |
| `EXPO_USE_FAST_RESOLVER`             | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="SDK 51+" /></div>Enable up to 6x faster resolving in Metro. There are no known issues and this will likely become the default.                                                                                                                                                                                                                                     |
| `EXPO_UNSTABLE_ATLAS`                | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="experimental" /><StatusTag status="SDK 51+" /></div>Gather Metro bundle information during development or export.                                                                                                                                                                                                                                                  |
| `EXPO_NO_BUNDLE_SPLITTING`           | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="experimental" /><StatusTag status="SDK 51+" /></div>Disable Metro splitting chunks on async imports in production (web-only).                                                                                                                                                                                                                                      |
| `EXPO_USE_METRO_REQUIRE`             | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="SDK 52+" /></div>Enable the use of Expo's custom Metro `require` implementation and `string` based module IDs. This enables better debugging and deterministic IDs for React Server Components. Does not support legacy RAM bundles.                                                                                                                               |
| `EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH` | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="experimental" /><StatusTag status="SDK 52+" /></div>Enable eager bundling where transformation runs uncached after the entire bundle has been created. This is required for production tree shaking and is less optimized for development bundling.                                                                                                                |
| `EXPO_UNSTABLE_TREE_SHAKING`         | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="experimental" /><StatusTag status="SDK 52+" /></div>Enable unstable tree shaking support across all platforms. See [tree shaking](/guides/tree-shaking) for more details.                                                                                                                                                                                          |
| `EXPO_NO_REACT_NATIVE_WEB`           | **boolean** | <div className="flex items-center pb-1.5"><StatusTag status="experimental" /><StatusTag status="SDK 52+" /></div>Enable experimental mode where React Native Web isn't required to run Expo apps on web.                                                                                                                                                                                                                        |

## Telemetry

Expo dev tools collect anonymous data about general usage. This helps us know when a feature is not working as expected. Telemetry is completely optional, you can opt out by using the `EXPO_NO_TELEMETRY=1` environment variable.

[ngrok]: https://ngrok.com
