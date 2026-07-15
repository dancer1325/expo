---
title: ZStack
description: A SwiftUI ZStack component for overlapping layouts.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['ios', 'tvos', 'expo-go']
---


Expo UI ZStack matches the official SwiftUI [ZStack API](https://developer.apple.com/documentation/swiftui/zstack) and overlays its children on top of each other.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/zstack/ios-light.webp"
  darkSrc="/static/images/expo-ui/zstack/ios-dark.webp"
  alt="Three colored rounded squares stacked along the z-axis with diagonal offsets in a ZStack"
/>

## Installation

<APIInstallSection />

## Usage

### Basic overlapping stack

```tsx BasicZStackExample.tsx

export default function BasicZStackExample() {
  return (
    <Host matchContents>
      <ZStack>
        <Rectangle modifiers={[frame({ width: 100, height: 100 })]} />
        <Text modifiers={[foregroundStyle('white')]}>Overlay</Text>
      </ZStack>
    </Host>
  );
}
```

### With alignment

The `alignment` prop controls how children are positioned within the stack. Available options include: `center`, `leading`, `trailing`, `top`, `bottom`, `topLeading`, `topTrailing`, `bottomLeading`, and `bottomTrailing`.

```tsx ZStackAlignmentExample.tsx

export default function ZStackAlignmentExample() {
  return (
    <Host matchContents>
      <ZStack alignment="bottomTrailing">
        <Rectangle modifiers={[frame({ width: 100, height: 100 }), foregroundStyle('blue')]} />
        <Circle modifiers={[frame({ width: 30, height: 30 }), foregroundStyle('red')]} />
      </ZStack>
    </Host>
  );
}
```

### Creating a badge overlay

```tsx ZStackBadgeExample.tsx

export default function ZStackBadgeExample() {
  return (
    <Host matchContents>
      <ZStack alignment="topTrailing">
        <Image systemName="bell.fill" size={32} color="blue" />
        <Circle modifiers={[frame({ width: 16, height: 16 }), foregroundStyle('red')]} />
      </ZStack>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/swift-ui/zstack" apiName="ZStack" />
