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
    npx create-expo-app@latest --template default@sdk-57
    ```
  * Yarn
    ```
    yarn create expo-app --template default@sdk-57
    ```  
  * pnpm
    ```
    pnpm create expo-app --template default@sdk-57
    ```
  * bun
    ```
    bun create expo --template default@sdk-57
    ```

* will prompt to enter the app name
  * see [app config's `name`](/versions/latest/config/app/#name) property

## Options

### `--yes`

* uses ALL default options

### `--no-install`

* skips installing npm dependencies or CocoaPods

### `--no-agents-md`

Skips generating **AGENTS.md**, **CLAUDE.md**, and **.claude/settings.json**. By default, `create-expo-app` generates these files so AI coding agents (such as Claude Code) have Expo-specific context and the [`expo` skills plugin](https://expo.dev/expo-skills) configured automatically. The generated **AGENTS.md** points to the versioned Expo docs matching your project's SDK version.

### `--template`

* select one of the AVAILABLE templates

> **info** Looking for more templates? Check out the [`--example`](#--example) option to initialize your project with one of the example apps that demonstrate specific features and integrations.

| Template                                                                                              | Description                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`default`](https://github.com/expo/expo/tree/main/templates/expo-template-default)                   | Default template. Designed to build multi-screen apps. Includes recommended tools such as Expo CLI, Expo Router library and TypeScript configuration enabled. Suitable for most apps. |
| [`blank`](https://github.com/expo/expo/tree/main/templates/expo-template-blank)                       | Installs minimum required npm dependencies without configuring navigation.                                                                                                            |
| [`blank-typescript`](https://github.com/expo/expo/tree/main/templates/expo-template-blank-typescript) | A Blank template with TypeScript enabled.                                                                                                                                             |
| [`tabs`](https://github.com/expo/expo/tree/main/templates/expo-template-tabs)                         | Installs and configures file-based routing with Expo Router and TypeScript enabled.                                                                                                   |
| [`bare-minimum`](https://github.com/expo/expo/tree/main/templates/expo-template-bare-minimum)         | A Blank template with native directories (**android** and **ios**) generated. Runs [`npx expo prebuild`](/workflow/continuous-native-generation) during the setup.                    |

### `--example`

* initialize a project -- from -- an [expo/examples](https://github.com/expo/examples)
  * _Example:_ 
    * `npx create-expo-app --example` shows an interactive list of available examples to choose from
    * `npx create-expo-app --example with-router` set up a project / has Expo Router library
    * `npx create-expo-app --example with-react-navigation` sets up a project similar to the default template, but configured with plain React Navigation library

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

```yaml .yarnrc.yml
nodeLinker: node-modules
```

#### EAS installation

Yarn Modern on EAS requires enabling [Corepack](https://github.com/nodejs/corepack) for the build. Set [`corepack`](/eas/json/#corepack) to `true` in your build profile in **eas.json**:

```json eas.json
{
  "build": {
    "production": {
      "corepack": true
    }
  }
}
```

Then, pin the Yarn version in your project's **package.json** using the [`packageManager`](https://nodejs.org/api/packages.html#packagemanager) field. Running `yarn set version <version>` locally will update this field for you:

```json package.json
{
  "packageManager": "yarn@4.14.1"
}
```

After adding both of the above configurations, Corepack automatically downloads and uses the pinned Yarn version when EAS installs dependencies.

### pnpm

#### Local installation

Requires installing Node.js. See [pnpm documentation](https://pnpm.io/installation) for installation instructions.

By default, a project created with `create-expo-app` and pnpm uses [`nodeLinker`](https://pnpm.io/settings#nodelinker) with its value set to `hoisted` to install dependencies.

```yaml pnpm-workspace.yaml
nodeLinker: hoisted
```

> **info** In **SDK 54** and later, Expo supports isolated installations, and you can delete the `nodeLinker` setting if you prefer to use isolated dependencies.

#### EAS installation

Supported by default if the project directory contains **pnpm-lock.yaml**.

### Bun

See [Bun](/guides/using-bun/) guide for details on creating a new Expo project with `bun`, migration from another package manager, and usage with EAS.
