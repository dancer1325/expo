## Set up: Android physical device + development build + EAS

### Install EAS CLI

* `npm install -g eas-cli`

### Create an Expo account and login

1. [Sign up | Expo account](https://expo.dev/signup)
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
