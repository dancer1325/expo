* goal
  * better development environment -- for -- React Native apps

* **development build**
  * 💡:= debug build of your app / contains the [`expo-dev-client` package](../../versions/unversioned/sdk/dev-client.md) 💡
  * 👀ALTERNATIVE to [Expo Go](/get-started/set-up-your-environment/) 👀 /
    * benefits vs Expo Go
      * gain FULL control over the native runtime -> you can
        * [install ANY native libraries](../../workflow/using-libraries.md#determining-third-party-library-compatibility),
        * [modify ANY project configuration](../../config-plugins/introduction.md),
        * [write your own native code](../../modules/get-started.md) 
    * vs Expo Go
      * | Expo Go
        * run your project | sandboxed native app environment
        * uses
          * NON-long-term projects == testing projects
      * | development builds,
        * build your OWN native app
        * uses
          * production projects

* _Example:_ run a development build
  * include your app name & icon
    * != "Microfoam"
  * 2 lateral pictures
    * launcher UI
      * | left, iOS
      * | right, Android
  * 2 central pictures
    * app / run | development build

  ![](/docs/public/static/images/dev-client/preview.png)

* `expo-dev-client`'s launcher UI
  * enables
    * 👀switch between development servers -- WITHOUT needing to rebuild the -- app binary 👀
  * \+ [Continuous Native Generation (CNG)](../../workflow/continuous-native-generation.md) works great 
    * Reason: 🧠 if you modify your app's native code -> you can generate a single development build / you can iterate | JS code WITHOUT needing to rebuild it 🧠
  * uses 
    * teams / have 
      * specialized native engineers / work | native runtime
      * application developers / specialize in React to [achieve web-like iteration speeds](https://blog.expo.dev/javascript-driven-development-with-custom-runtimes-eda87d574c9d) | native apps

* [development builds -- via using -- EAS Build](create-a-build.md)
  * 👀EASIEST way to -- get started with -- development builds 👀
    * Reason: 🧠build your app | cloud & NOT need to install native build tools locally 🧠

* [development builds | local development environment](../../guides/local-app-development.md)

* [Expo Development Builds explanation](https://www.youtube.com/watch?v=7J8LRpja9_o)
  * recommended approach | production
  * alternative to Expo Go

## Frequently asked questions

* What is a native runtime?
  * native runtime == runtime environment / your JS application code is executed in 
    * if your development build -- is compiled with -- `expo-camera` installed -> native runtime -- will include the -- appropriate code
      * -> you can access that functionality -- from -- JS
    * if the build was NOT compiled with `expo-camera` -> you can NOT access that code -- from -- your JS code 
    * [`runtimeVersion`](../../eas-update/runtime-versions.mdx) specify app runtime's version

* development builds vs Expo Go?
  * [Expo Go](../../get-started/set-up-your-environment.md)
    * fastest and easiest way to start a new project -- with -- Expo
      * Reason: 🧠 NO need to
        * compile ANY native code or
        * install any native tooling 🧠
    * limitations
      * ⚠️ ONLY allowed the native packages / included | [Expo SDK](../../versions/unversioned/) ⚠️
  * development build
    * 💡ANY library can be included💡
      * Reason: 🧠 == normal native app 🧠

* What other types of builds are there?
  * [production build](../../deploy/build-project.md)
    * use cases
      * general public,
      * deployed -- through -- stores
  * [preview build](../../build/internal-distribution.mdx)
    * enables
      * your team test your next release -- via --
        * | Android,
          * installing an APK
        * | iOS,
          * use ad hoc or
          * enterprise provisioning 
