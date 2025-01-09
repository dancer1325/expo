* goal
  * how to create a production build for your app /
    * submit | app stores
    * -- via EAS build, from the -- CL

* ways to build a native app binary -- via --
  * [EAS](../build/setup.md) or
  * [locally](../guides/local-app-development.md)

* requirements to submit your app | stores
  * 👀create a **production build** 👀

* production builds
  * ⚠️!= native app binary ⚠️
  * uses
    * submit | app stores -- for --
      * release to the general public or
      * part of a store-facilitated testing process 
        * _Example:_ TestFlight
  * ways to create -- via --
    * [EAS](#production-builds-using-eas) or
    * [locally](#production-builds-locally) or
    * CI service / -- capable of compiling -- Android and iOS apps

## Production builds -- via -- EAS

* production builds
  * must be installed -- through their -- respective app stores
  * ❌can NOT be installed directly 
    * | your ❌
      * Android Emulator,
      * iOS Emulator, or
      * device 
    * EXCEPT, | your Android build profile, you set `"buildType": "apk"`  
  * by default, `"buildType": "aab"`

### `eas.json` configuration

* if you create your first build -> minimal configuration for building a production build is created 

  {/* prettier-ignore */}
  ```json eas.json
  {
    "build": {
      /* @hide ... */ /* @end */
      "production": {}
      /* @hide ... */ /* @end */
    }
  }
  ```

### Create a production build

* TODO:
To create a production build, run the following command for a platform:

<Tabs tabs={['Android', 'iOS']}>
  <Tab>
    <Terminal cmd={['$ eas build --platform android']} />
  </Tab>
  <Tab>
    <Terminal cmd={['$ eas build --platform ios']} />
  </Tab>
</Tabs>

You can attach a message to the build by passing `--message` to the build command, for example, `eas build --platform ios --message "Some message"`. The message will appear on the Expo dashboard. It comes in handy when you want to specify the purpose of the build for your team.

Alternatively, you can use `--platform all` option to build for Android and iOS at the same time:

<Terminal cmd={['$ eas build --platform all']} />

## Developer account

You will need to have a developer account for the app store you want to submit your app.

<Collapsible summary="Google Play Developer membership is required to distribute to the Google Play Store.">

You can build and sign your app using EAS Build, but you can't upload it to the Google Play Store unless you have a membership, a one-time $25 USD fee.

</Collapsible>

<Collapsible summary="Apple Developer Program membership is required to build for the Apple App Store.">

If you are going to use EAS Build to create production builds for the Apple App Store, you need access to an account with a $99 USD [Apple Developer Program](https://developer.apple.com/programs) membership.

</Collapsible>

## App signing credentials

Before the build process can start for app stores, you need a store developer account and generate or provide app signing credentials.

Whether you have experience with generating app signing credentials or not, EAS CLI can do the heavy lifting. You can opt-in for EAS CLI to handle the app signing credentials process.

### Android app signing credentials

- If you have not yet generated a keystore for your app, use EAS CLI by selecting `Generate new keystore`, and then you are done. The keystore is stored securely on EAS servers.
- If you want to manually generate your keystore, see the [manual Android credentials guide](/app-signing/local-credentials#android-credentials) for more information.

### iOS app signing credentials

- If you have not generated a provisioning profile and/or distribution certificate yet, use EAS CLI by signing in to your Apple Developer Program account and following the prompts.
- If you want to manually generate your credentials, see the [manual iOS credentials guide](/app-signing/local-credentials#ios-credentials) for more information.

## Wait for the build to complete

By default, the `eas build` command will wait for your build to complete, but you can interrupt it if you prefer not to wait. Instead, use the builds details page link prompted by EAS CLI to monitor the build progress and read the build logs. You can also find this page by visiting [your build dashboard](https://expo.dev/builds) or running the following command:

<Terminal cmd={['$ eas build:list']} />

If you are a member of an organization and your build is on its behalf, you will find the build details on [the build dashboard for that account](https://expo.dev/accounts/[account]/builds).

## Production builds locally

To create a production build locally, see the following React Native guides for more information on the necessary steps for Android and iOS.

These guides assume your project has **android** and/or **ios** directories containing the respective native projects. If you use [Continuous Native Generation](/workflow/continuous-native-generation) then you will need to run [prebuild](/workflow/prebuild) to generate the directories before following the guides.

> **Note**: Following the guide below, in step four, when you build the release **.aab** for Android, run `./gradlew app:bundleRelease` from the **android** directory instead of `npx react-native build-android --mode=release`.

<BoxLink
  title="Publishing to Google Play Store"
  description="Learn how to publish an app to Google Play Store by following the necessary steps manually."
  Icon={BookOpen02Icon}
  href="https://reactnative.dev/docs/signed-apk-android"
/>

<BoxLink
  title="Publishing to Apple App Store"
  description="Learn how to publish an app to Apple App Store by following the necessary steps manually."
  Icon={BookOpen02Icon}
  href="https://reactnative.dev/docs/publishing-to-app-store"
/>

## Next step

<BoxLink
  title="App stores best practices"
  description="Learn about the best practices for submitting your app to app stores."
  Icon={BookOpen02Icon}
  href="/distribution/app-stores/"
/>
