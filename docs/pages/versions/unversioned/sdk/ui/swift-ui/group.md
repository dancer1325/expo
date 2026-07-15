---
title: Group
description: A SwiftUI Group component for grouping views without affecting layout.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['ios', 'tvos', 'expo-go']
---


Expo UI Group matches the official SwiftUI [Group API](https://developer.apple.com/documentation/swiftui/group) and groups views together without introducing additional layout structure.

## Installation

<APIInstallSection />

## Usage

### Basic group

Groups are useful for applying modifiers to multiple views at once or organizing views without affecting layout.

```tsx BasicGroupExample.tsx

export default function BasicGroupExample() {
  return (
    <Host matchContents>
      <Group modifiers={[foregroundStyle('blue')]}>
        <Text>First item</Text>
        <Text>Second item</Text>
        <Text>Third item</Text>
      </Group>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/swift-ui/group" apiName="Group" />
