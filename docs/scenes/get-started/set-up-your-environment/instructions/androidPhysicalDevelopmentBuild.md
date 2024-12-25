## Set up an Android device -- with a -- development build

<BuildEnvironmentSwitch />

### Install EAS CLI

* `npm install -g eas-cli`

### Create an Expo account and login

1. [Sign up](https://expo.dev/signup) for an Expo account.
2. `eas login`

### Configure your project

* `eas build:configure`
  * create an EAS config | your project 

### Create a build

* `eas build --platform android --profile development`
  * create a development build

### Install the development build | your device

* | AFTER build completion,
  * ways
    * scan the QR code | your terminal or
    * open the link | your device
  * tap **Install**
