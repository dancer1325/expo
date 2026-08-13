## Set up an iOS device + development build

### Enroll | Apple Developer Program

* [here](https://developer.apple.com/programs/)

### Install EAS CLI

```bash
$ npm install --global eas-cli
---
$ yarn global add eas-cli
---
$ pnpm add --global eas-cli
---
$ bun add --global eas-cli
```

### Create an Expo account and login

1. [Sign up | Expo account](https://expo.dev/signup)
2. `eas login`

### Configure your project

* `eas build:configure`

### Create an ad hoc provisioning profile

* Reason:🧠install a development build | your iOS device🧠
* `eas device:create`

### Create a development build

* `eas build --platform ios --profile development`

### Install the development build | your device

* | AFTER build completion,
  * ways
    * scan the QR code | your terminal or
    * open the link | your device
  * tap **Install**

### Turn on developer mode

* [here](../../../../pages/guides/ios-developer-mode.md)
