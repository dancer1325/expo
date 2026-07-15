---
title: Column
description: A Jetpack Compose Column component for placing children vertically.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'expo-go']
---


> **info** For cross-platform usage, see the universal [`Column`](../universal/column) — it renders the appropriate native component per platform.

Expo UI Column matches the official Jetpack Compose [Column](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#Column) API and places children vertically with configurable arrangement and alignment.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/column/android-light.webp"
  darkSrc="/static/images/expo-ui/column/android-dark.webp"
  alt="Three colored boxes stacked vertically inside a Column"
/>

## Installation

<APIInstallSection />

## Usage

`Column` places children vertically. Use `verticalArrangement` and `horizontalAlignment` to control spacing and alignment.

```tsx ColumnExample.tsx

export default function ColumnExample() {
  return (
    <Host matchContents>
      <Column
        verticalArrangement={{ spacedBy: 8 }}
        horizontalAlignment="center"
        modifiers={[fillMaxWidth(), paddingAll(16)]}>
        <Text>First</Text>
        <Text>Second</Text>
        <Text>Third</Text>
      </Column>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/jetpack-compose/column" apiName="Column" />
