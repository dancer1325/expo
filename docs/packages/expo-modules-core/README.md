# docs/packages/expo-modules-core

* goal
  * 💡allow Expo apps | "docs/" can run `npx expo run:ios` / WITHOUT failing💡

* PROBLEM:
  * Problem1: `expo-modules-autolinking` has `find_repo_root`
    * | `pod install`, climbs directories -- looking for -- `packages/expo-modules-core/spm.config.json`
    * ❌ WITHOUT this directory -> reaches `/expo/` (monorepo root) -> enters monorepo mode
      * -> resolves `expo-modules-core` -- from -- `/expo/packages/expo-modules-core/` instead of app's `node_modules`
      * -> tries to resolve `@expo/expo-modules-macros-plugin` -- from -- monorepo context
      * -> ❌ fails: `Cannot find module '@expo/expo-modules-macros-plugin/package.json'`
    * SOLUTION
      * `spm.config.json`
        * -> `find_repo_root` stops | `docs/` ✅
      * `node_modules/@expo/expo-modules-macros-plugin/`
        * 🧠 once stopped here, autolinking uses `docs/packages/expo-modules-core` as `package_root` -> needs to resolve `@expo/expo-modules-macros-plugin` from here 🧠
        * copied -- from -- any standard Expo app's `node_modules`
