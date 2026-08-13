## Set up an Android Emulator -- with a -- development build

* [how to set up Android Studio](../instructions/_androidStudioInstructions.md)
* [how to set up Android emulator](../instructions/_androidEmulatorInstructions.md)

## Create a development build

### Install EAS CLI

```
npm install -g eas-cli
yarn global add eas-cli
pnpm add --global eas-cli
bun add --global eas-cli
```

### Create an Expo account and login

1. [Sign up | Expo account](https://expo.dev/signup)
2. `eas login`

### Configure your project

* `eas build:configure`
  * create an EAS config | your project

### Create a development build

* `eas build --platform android --profile development`
  * create a development build

### Install the development build | your emulator

* | AFTER build completion
  * ways
    * press `Y`
    * download the build -- from the -- link provided + drag & drop it | Android Emulator
