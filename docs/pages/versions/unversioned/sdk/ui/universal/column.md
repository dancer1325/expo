---
title: Column
description: A vertical layout container for universal @expo/ui components.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'ios', 'web', 'expo-go']
---


A vertical layout container that arranges its children from top to bottom. Delegates to SwiftUI's [`VStack`](../swift-ui/vstack) on iOS, Jetpack Compose's [`Column`](../jetpack-compose/column) on Android, and a flex `View` on web.

## Installation

<APIInstallSection />

## Usage

### Basic column

```tsx ColumnExample.tsx

export default function ColumnExample() {
  return (
    <Host matchContents>
      <Column spacing={8}>
        <Text>First</Text>
        <Text>Second</Text>
        <Text>Third</Text>
      </Column>
    </Host>
  );
}
```

### Alignment

Use [`alignment`](#alignment) to position children along the cross (horizontal) axis.

```tsx ColumnAlignmentExample.tsx

export default function ColumnAlignmentExample() {
  return (
    <Host style={{ flex: 1 }}>
      <Column spacing={8} alignment="center">
        <Text>Centered</Text>
        <Text>Centered</Text>
      </Column>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/universal/column" apiName="Column" />
