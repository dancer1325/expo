* `create-expo-app`
  * == CL tool / p
    * allows, about a NEW Expo and React Native project, 
      * create
      * set up 
    * provide various templates / NO need manual configuration

## Create a new project

* ways
  * npx
    ```
    npx create-expo-app@latest
    ```
  * Yarn
    ```
    yarn create expo-app
    ```  
  * pnpm
    ```
    pnpm create expo-app
    ```
  * bun
    ```
    bun create expo
    ```

* will prompt to enter the app name
  * see [app config's `name`](/versions/latest/config/app/#name) property

## Options

### `--yes`

* uses ALL default options

### `--no-install`

* skips installing npm dependencies or CocoaPods

### `--template`

* select one of the AVAILABLE templates

| Template                                                                                              | Description                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`default`](https://github.com/expo/expo/tree/main/templates/expo-template-default)                   | Default template <br/> build multi-screen apps <br/> include recommended tools (Expo CLI, Expo Router library and TypeScript configuration enabled) <br/> suitable for MOST apps |
| [`blank`](https://github.com/expo/expo/tree/main/templates/expo-template-blank)                       | Installs MINIMUM required npm dependencies / WITHOUT configuring navigation.                                                                                                     |
| [`blank-typescript`](https://github.com/expo/expo/tree/main/templates/expo-template-blank-typescript) | Blank template / TypeScript enabled.                                                                                                                                             |
| [`tabs`](https://github.com/expo/expo/tree/main/templates/expo-template-tabs)                         | Installs and configures file-based routing / Expo Router and TypeScript enabled.                                                                                                 |
| [`bare-minimum`](https://github.com/expo/expo/tree/main/templates/expo-template-bare-minimum)         | Blank template + native directories (**android** and **ios**) generated <br/> runs [`npx expo prebuild`](/workflow/prebuild/) during the setup.                                  |

### `--example`

* initialize a project -- from -- an [expo/examples](https://github.com/expo/examples)
  * _Example:_ `npx create-expo-app --example with-router` set up a project / has Expo Router library

### `--version`

* prints the version number & exits

### `--help`

* prints the list of available options & exits

## Node Package Managers support

* TODO:
Creating a new project with `create-expo-app` also handles setting up additional configuration needed for a specific Node Package Manager.

**If you are migrating from one package manager to another**, you've to manually carry out the additional configuration in your project. **If you are using [EAS](/eas/)**, you also have to configure your project for any additional required steps manually.

All the additional steps for each package manager are listed below.

### npm

#### Local installation

npm is installed as part of Node.js installation. See [Node.js documentation](https://nodejs.org/en/download/package-manager) for installation instructions.

#### EAS installation

Supported by default if the project directory contains **package-lock.json**.

### Yarn 1 (Classic)

#### Local installation

Yarn 1 (Classic) is usually installed as a global dependency of npm. See [Yarn 1 documentation](https://classic.yarnpkg.com/en/docs/getting-started) for installation instructions.

#### EAS installation

Supported by default if the project directory contains **yarn.lock**.

### Yarn 2+ (Modern)

#### Local installation

See [Yarn documentation](https://yarnpkg.com/getting-started/install) for installation instructions.

Yarn 2+ handles package management differently than Yarn 1. One of the core changes in Yarn 2+ is the [Plug'n'Play (PnP)](https://yarnpkg.com/features/pnp) node linking model that does not work with React Native.

By default, a project created with `create-expo-app` and Yarn 2+ uses [`nodeLinker`](https://yarnpkg.com/features/linkers#nodelinker-node-modules) with its value set to `node-modules` to install dependencies.

```yml .yarnrc.yml
nodeLinker: node-modules
```

#### EAS installation

Yarn Modern on EAS requires adding [`eas-build-pre-install` hook](/build-reference/npm-hooks/). In your project's **package.json**, add the following configuration:

```json package.json
{
  "scripts": {
    "eas-build-pre-install": "corepack enable && yarn set version 4"
  }
}
```

### pnpm

#### Local installation

Requires installing Node.js. See [pnpm documentation](https://pnpm.io/installation) for installation instructions.

By default, a project created with `create-expo-app` and pnpm uses [`node-linker`](https://pnpm.io/npmrc#node-linker) with its value set to `hoisted` to install dependencies.

```ini .npmrc
node-linker=hoisted
```

#### EAS installation

Supported by default if the project directory contains **pnpm-lock.yaml**.

### Bun

See [Bun](/guides/using-bun/) guide for details on creating a new Expo project with `bun`, migration from another package manager, and usage with EAS.
