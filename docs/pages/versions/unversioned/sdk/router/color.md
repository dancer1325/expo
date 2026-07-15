---
title: Router Color
sidebar_title: Color
description: An Expo Router API for accessing platform-specific native colors.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-router'
packageName: 'expo-router'
platforms: ['android', 'ios']
---


The Color API provides access to platform-specific native colors.

> See the [Expo Router](./index) reference for installation and configuration.

## Usage

```tsx

export default function MyComponent() {
  useColorScheme();
  return (
    <View style={{ flex: 1, backgroundColor: Color.android.dynamic.primary }}>
      <Text style={{ color: Color.ios.label }}>Hello</Text>
    </View>
  );
}
```

## API

```js
```

<APISection packageName="expo-router/color" apiName="Color" />
