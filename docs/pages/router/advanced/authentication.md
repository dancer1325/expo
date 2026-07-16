---
title: Authentication in Expo Router
sidebar_title: Authentication
description: How to implement authentication and protect routes with Expo Router.
hasVideoLink: true
---

* Expo Router
  * allow
    * ALL routes are ALWAYS
      * defined
      * accessible
    * 👀authenticate users👀
      * -- via -- runtime logic / redirect users away -- from -- SPECIFIC screens
      * ways to control
        * [protected routes](protected.md)
          * requirements
            * ⚠️Expo SDK v53+⚠️
        * [Authentication (redirects)](authentication-rewrites)
      * ways to render it
        * FULL-screen
        * [modal sign in](#modals-sign-in)

## Modals sign in

* sign-in modal | top of the app
  * == pattern /
    * enables you to
      * | complete the authentication, dismiss & partially preserve deep links
    * ⚠️requirements⚠️
      * render routes | background
        * Reason:🧠these routes require handling data loading WITHOUT authentication🧠

TODO: 

<FileTree
  files={[
    ['src/app/_layout.tsx', 'Declares global session context'],
    'src/app/(app)/_layout.tsx',
    ['src/app/(app)/sign-in.tsx', <span>Modal presented over the root</span>],
    ['src/app/(app)/(root)/_layout.tsx', <span>Protects child routes</span>],
    [
      'src/app/(app)/(root)/index.tsx',
      <span>
        Requires authorization <Lock01Icon className="mb-1 inline" />
      </span>,
    ],
  ]}
/>

```tsx src/app/(app)/_layout.tsx|collapseHeight=480

export const unstable_settings = {
  initialRouteName: '(root)',
};

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(root)" />
      <Stack.Screen
        name="sign-in"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
```

## Middleware

* Expo Router 
  * | web.
    * RIGHT NOW,
      * support
        * build-time static generation
      * ❌NO support❌
        * CUSTOM middleware or serving
          * == server-side redirection / protect routes
          * SOLUTION:
            * implement authentication -- via -- client-side redirects + loading state
