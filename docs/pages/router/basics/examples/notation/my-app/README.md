# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## TODO:

* _Example:_
  <FileTree
  files={[
  ['src/app/(home)/\_layout.tsx'],
  ['src/app/(home)/index.tsx'],
  ['src/app/(home)/feed.tsx'],
  ['src/app/(home)/profile.tsx'],
  ['src/app/\_layout.tsx'],
  ['src/app/users/[userId].tsx'],
  ['src/app/+not-found.tsx'],
  ['src/app/about.tsx'],
  ]}
  />

- **src/app/about.tsx** is a static route that matches `/about`.
- **src/app/users/[userId].tsx** is a dynamic route that matches `/users/123`, `/users/456`, and so on.
- **src/app/(home)** is a route group. It will not factor into the URL, so `/feed` will match **src/app/(home)/feed.tsx**.
- **src/app/(home)/index.tsx** is the default route for the **(home)** directory, and will match the `/` URL.
- **src/app/(home)/\_layout.tsx** is a layout file defining how the pages inside **src/app/(home)/** relate to each other.
- **src/app/\_layout.tsx** is the root layout file, and is rendered before any other route in the app.
- **src/app/+not-found.tsx** is a special route that will be displayed if the user navigates to a route that doesn't exist in your app.
