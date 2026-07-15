---
title: Layout routes
description: Learn how to define shared UI elements such as tab bars and headers.
---

* routes
  * by default, fill the ENTIRE screen
  * if you move BETWEEN routes == FULL-page transition / NO animation

* layout routes
  * allows
    * create shared elements / persist BETWEEN pages
      * _Example of shared elements:_ headers, tab bars

## Create a layout route

* NORMALLY,
  * 1 layout route /  directory 
    * steps
      * create "\_layout.tsx" | directory
      * export a React component -- as -- `default`

TODO: 
```tsx app/home/_layout.tsx
import { Slot } from 'expo-router';

export default function HomeLayout() {
  return <Slot />;
}
```

From the above example, **Slot** will render the current child route, think of this like the `children` prop in React
* This component can be wrapped with other components to create a layout.

```tsx app/home/_layout.tsx
import { Slot } from 'expo-router';

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
}
```

* if you want >1 layout routes -> add >1 directories

<FileTree files={['app/_layout.tsx', 'app/home/_layout.tsx', 'app/home/index.tsx']} />

```tsx app/_layout.tsx
import { Tabs } from 'expo-router';

export default function Layout() {
  return <Tabs />;
}
```

```tsx app/home/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack />;
}
```

* if you want >1 layout routes WITHOUT modifying the URL -> use [groups](#groups)

## Groups

You can prevent a segment from showing in the URL by using the group syntax `()`.

- **app/root/home.tsx** matches `/root/home`
- **app/(root)/home.tsx** matches `/home`

This is useful for adding layouts without adding additional segments to the URL
* You can add as many groups as you want.

Groups are also good for organizing sections of the app
* In the following example, we have **app/(app)** which is where the main app lives, and **app/(aux)** which is where auxiliary pages live
* This is useful for adding pages which you want to link to externally, but don't need to be part of the main app.

<FileTree
  files={[
    'app/(app)/index.tsx',
    'app/(app)/user.tsx',
    'app/(aux)/terms-of-service.tsx',
    'app/(aux)/privacy-policy.tsx',
  ]}
/>

## Native layouts

One of the best advantages to React Native is being able to use native UI components
* Expo Router provides a few drop-in native layouts that you can use to easily achieve familiar native behavior
* To change between truly-native layouts on certain platforms and custom layouts on others, see [Platform-specific modules](/router/advanced/platform-specific-modules).

```tsx app/home/_layout.tsx
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ ..
* }} />
  );
}
```

* built-in layouts
  * [stack](advanced/stack)
  * [Tab navigation](advanced/tabs.md)
  * [Drawers](advanced/drawer.md)
  * [Modals](advanced/modals.md)

## Advanced

Expo Router supports additional conventions and systems to build complex UIs that native app users expect
* These are not required to use Expo Router but are available if you need them.

<BoxLink
  title="Nesting navigators"
  Icon={BookOpen02Icon}
  description="Add multiple layouts to a route."
  href="/router/advanced/nesting-navigators"
/>

<BoxLink
  title="Shared Routes"
  Icon={BookOpen02Icon}
  description="Create routes which appear in multiple places simultaneously, while using the same URL."
  href="/router/advanced/shared-routes"
/>
