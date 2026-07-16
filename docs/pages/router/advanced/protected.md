---
title: Protected routes
description: Learn how to make screens inaccessible to client-side navigation.
hasVideoLink: true
---

* [video](https://www.youtube.com/watch?v=zHZjJDTTHJg)
  * TODO:

* Protected screens
  * ⚠️requirements⚠️
    * Expo Router v5
  * allow you to
    * if users are 
      * ❌NOT authenticated -> can NOT access certain routes❌
      * SUDDENLY log out -> will be redirected -- to the --
        * anchor route OR
        * first available screen | stack
  * use cases
    * client-side navigation
  * 👀vs redirects👀
    * MORE powerful
    * LESS MANUAL configuration

TODO: 
<FileTree
  files={[
    'src/app/_layout.tsx',
    'src/app/index.tsx',
    'src/app/about.tsx',
    ['src/app/login.tsx', 'Should only be available while not authenticated'],
    ['src/app/private/_layout.tsx', 'Should only be available while authenticated'],
    'src/app/private/index.tsx',
    'src/app/private/page.tsx',
  ]}
/>

```tsx src/app/_layout.tsx

const isLoggedIn = false;

export function AppLayout() {
  return (
    <Stack>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="private" />
      </Stack.Protected>
      {/* Expo Router includes all routes by default
* Adding Stack.Protected creates exceptions for these screens
* */}
    </Stack>
  );
}
```

In this example, the `/private` route is inaccessible because the `guard` is false
* When a user attempts to access `/private`, they are redirected to the anchor route, which is the **index** screen.

Additionally, if the user is on `/private/page` and the `guard` condition changes to **false**, they will be redirected automatically.

When a screen's **guard** is changed from **true** to **false**, all of its history entries will be removed from the navigation history.

## Using Protected Routes

* [video](https://www.youtube.com/watch?v=XCTaMu0qnFY)
  * how to use Protected Routes | Expo Router v5?
  * TODO: 

TODO:
* Consider the following project structure that has a `/sign-in` route that
  is always accessible and a `(app)` group that requires authentication:

<FileTree
files={[
['src/app/_layout.tsx', <span>Controls what is protected</span>],
[
'src/app/sign-in.tsx',
<span>
Always accessible <LockUnlocked01Icon className="mb-1 inline" />
</span>,
],
[
'src/app/(app)/_layout.tsx',
<span>
Requires authorization <Lock01Icon className="mb-1 inline" />
</span>,
],
['src/app/(app)/index.tsx', <span>Should be protected by the (app)/_layout</span>],
]}
/>

<Step label="1">

To follow the above example, set up a [React Context provider](https://react.dev/reference/react/createContext) that can expose an authentication session to the entire app
* You can implement your custom authentication session provider or use the one from the **Example authentication context** below.

Example authentication context

This provider uses a mock implementation
* You can replace it with your own [authentication provider](/guides/authentication/).

```tsx src/ctx.tsx


const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
} | null>(null);

// Use this hook to access the user info.
export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error('useSession must be wrapped in a <SessionProvider />');
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession('xxx');
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
```

The following code snippet is a basic hook that persists tokens securely on native with [`expo-secure-store`](/versions/latest/sdk/securestore) and in local storage on web.

{/* prettier-ignore */}
```tsx src/useStorageState.ts

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<T>(
  initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> {
  return useReducer(
    (state: [boolean, T | null], action: T | null = null): [boolean, T | null] => [false, action],
    initialValue
  ) as UseStateHook<T>;
}

export async function setStorageItemAsync(key: string, value: string | null) {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e);
    }
  } else {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
}

export function useStorageState(key: string): UseStateHook<string> {
  // Public
  const [state, setState] = useAsyncState<string>();

  // Get
  useEffect(() => {
    if (Platform.OS === 'web') {
      try {
        if (typeof localStorage !== 'undefined') {
          setState(localStorage.getItem(key));
        }
      } catch (e) {
        console.error('Local storage is unavailable:', e);
      }
    } else {
      SecureStore.getItemAsync(key).then((value: string | null) => {
        setState(value);
      });
    }
  }, [key]);

  // Set
  const setValue = useCallback(
    (value: string | null) => {
      setState(value);
      setStorageItemAsync(key, value);
    },
    [key]
  );

  return [state, setValue];
}
```


</Step>

<Step label="2">

Create a **SplashScreenController** to manage the splash screen
* Authentication loading is asynchronous, so keep the splash screen visible until authentication loads.

```tsx src/splash.tsx

SplashScreen.preventAutoHideAsync();

export function SplashScreenController() {
  const { isLoading } = useSession();

  if (!isLoading) {
    SplashScreen.hide();
  }

  return null;
}
```

</Step>

<Step label="3">

Add the `SessionProvider` to your root layout
* This gives your entire app access to the authentication context
* Ensure the `SplashScreenController` is inside the `SessionProvider`.

```tsx src/app/_layout.tsx


export default function Root() {
  // Set up the auth context and render your layout inside of it.
  return (
    <SessionProvider>
      <SplashScreenController />
      <RootNavigator />
    </SessionProvider>
  );
}

// Create a new component that can access the SessionProvider context later.
function RootNavigator() {
  return <Stack />;
}
```

</Step>

<Step label="4">

Create the `/sign-in` screen
* This screen toggles authentication using `signIn()`
* Since this screen is outside the `(app)` group, the group's layout and authentication check do not run when rendering this screen
* This lets logged-out users access this screen.

```tsx src/app/sign-in.tsx|collapseHeight=480


export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          signIn();
          // Navigate after signing in
* You may want to tweak this to ensure sign-in is successful before navigating.
          router.replace('/');
        }}>
        Sign In
      </Text>
    </View>
  );
}
```

</Step>

<Step label="5">

Now modify the `RootNavigator` to protect routes based on your `SessionProvider`.

```tsx src/app/_layout.tsx|collapseHeight=400
// All import statements remain the same except you need to import `useSession` from your `ctx.tsx` file.

// All of the above code remains unchanged
* Update the `RootNavigator` to protect routes based on your `SessionProvider` below.

function RootNavigator() {
  const { session } = useSession();

  return (
    <Stack>
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen name="sign-in" />
      </Stack.Protected>
    </Stack>
  );
}
```

</Step>

<Step label="6">

Implement an authenticated screen that lets users sign out.

```tsx src/app/(app)/index.tsx|collapseHeight=480


export default function Index() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          // The guard in `RootNavigator` redirects back to the sign-in screen.
          signOut();
        }}>
        Sign Out
      </Text>
    </View>
  );
}
```

</Step>

<Step label="7">

Create the **src/app/(app)/\_layout.tsx**:

```tsx src/app/(app)/_layout.tsx

export default function AppLayout() {
  // This renders the navigation stack for all authenticated app routes.
  return <Stack />;
}
```

</Step>

You now have an app that will present the splash screen until the initial authentication state has loaded and will redirects to the sign-in screen if the user is not authenticated
* If a user visits a deep link to any routes with the authentication check, they'll be redirected to the sign-in screen.

## Multiple protected screens

In Expo Router, a screen can **only exist in one active route group at a time**.

You should only declare a screen only once, in the most appropriate group or stack
* If a screen's availability depends on logic, wrap it in a conditional group instead of duplicating the screen.

```tsx src/app/_layout.tsx

const isLoggedIn = true;
const isAdmin = true;

export function AppLayout() {
  return (
    <Stack>
      <Stack.Protected guard={true}>
        <Stack.Screen name="profile" />
      </Stack.Protected>
      <Stack.Screen name="profile" /> // ❌ Not allowed: duplicate screen
    </Stack>
  );
}
```

## Nesting protected screens

Protected screens can be nested to define hierarchical access control logic.

```tsx src/app/_layout.tsx

const isLoggedIn = true;
const isAdmin = true;

export function AppLayout() {
  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Protected guard={isAdmin}>
          <Stack.Screen name="private" />
        </Stack.Protected>

        <Stack.Screen name="about" />
      </Stack.Protected>
    </Stack>
  );
}
```

In this case:

- `/private` is only protected if the user is logged in and is an admin.
- `/about` is protected to any logged-in user.

## Falling back -- to a -- specific screen

You can configure the navigator to fall back to a specific screen if access is denied.

<FileTree
  files={[
    'src/app/_layout.tsx',
    'src/app/index.tsx',
    'src/app/about.tsx',
    'src/app/login.tsx',
    'src/app/private/_layout.tsx',
    'src/app/private/index.tsx',
    'src/app/private/page.tsx',
  ]}
/>

```tsx src/app/_layout.tsx

const isLoggedIn = false;

export function AppLayout() {
  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="index" />
        <Stack.Screen name="private" />
      </Stack.Protected>

      <Stack.Screen name="login" />
    </Stack>
  );
}
```

In the above example, since the **index** screen is protected and the `guard` is **false**, the router redirects to the first available screen — **login**.

## Tabs and Drawer

Protected routes are also available for [Tabs](/router/advanced/tabs/) and [Drawer](/router/advanced/drawer/) navigators.

```tsx src/app/_layout.tsx

const isLoggedIn = false;

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ tabBarLabel: 'Home' }} />
      <Tabs.Protected guard={isLoggedIn}>
        <Tabs.Screen name="private" options={{ tabBarLabel: 'Private' }} />
        <Tabs.Screen name="profile" options={{ tabBarLabel: 'Profile' }} />
      </Tabs.Protected>

      <Tabs.Protected guard={!isLoggedIn}>
        <Tabs.Screen name="login" options={{ tabBarLabel: 'Login' }} />
      </Tabs.Protected>
    </Tabs>
  );
}
```

## Custom navigators

`Protected` is also available for [custom navigators](/router/migrate/from-react-navigation/#rewrite-custom-navigators) using the `withLayoutContext` hook.

## Static rendering considerations

Protected screens are evaluated on the client side only
* During static site generation, no HTML files are created for protected routes
* However, if users know the URLs of these routes, they can still request the corresponding HTML or JavaScript files directly
* Protected screens are not a replacement for server-side authentication or access control.
