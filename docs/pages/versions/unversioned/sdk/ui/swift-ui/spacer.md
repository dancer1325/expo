---
title: Spacer
description: A SwiftUI Spacer component for flexible spacing.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['ios', 'tvos', 'expo-go']
---


> **info** For cross-platform usage, see the universal [`Spacer`](../universal/spacer) — it renders the appropriate native component per platform.

Expo UI Spacer matches the official SwiftUI [Spacer API](https://developer.apple.com/documentation/swiftui/spacer) and expands to fill available space in a stack.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/spacer/ios-light.webp"
  darkSrc="/static/images/expo-ui/spacer/ios-dark.webp"
  alt="A red A square at the leading edge and a blue B square at the trailing edge of an HStack, separated by a Spacer"
/>

## Installation

<APIInstallSection />

## Usage

### Basic spacer in HStack

Use Spacer to push content to opposite ends of a horizontal stack.

```tsx SpacerHStackExample.tsx

export default function SpacerHStackExample() {
  return (
    <Host style={{ flex: 1 }}>
      <HStack>
        <Text>Left</Text>
        <Spacer />
        <Text>Right</Text>
      </HStack>
    </Host>
  );
}
```

### Basic spacer in VStack

Use Spacer to push content to opposite ends of a vertical stack.

```tsx SpacerVStackExample.tsx

export default function SpacerVStackExample() {
  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <Text>Top</Text>
        <Spacer />
        <Text>Bottom</Text>
      </VStack>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/swift-ui/spacer" apiName="Spacer" />
