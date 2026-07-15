---
title: Overlay
description: A SwiftUI Overlay component for layering content on top of another view.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['ios', 'tvOS', 'expo-go']
---


Expo UI Overlay matches the official SwiftUI [overlay](<https://developer.apple.com/documentation/swiftui/view/overlay(alignment:content:)>) modifier and provides a way to layer secondary content on top of a view, positioned with a specified alignment.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/overlay/ios-light.webp"
  darkSrc="/static/images/expo-ui/overlay/ios-dark.webp"
  alt="A bell icon with a red 3 notification badge overlaid at the top-trailing corner"
/>

## Installation

<APIInstallSection />

## Usage

```tsx OverlayExample.tsx
  foregroundStyle,
  frame,
  font,
  background,
  clipShape,
  offset,
} from '@expo/ui/swift-ui/modifiers';

export default function OverlayExample() {
  return (
    <Host style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Overlay alignment="topTrailing">
        <Image
          systemName="bell.fill"
          modifiers={[font({ size: 28 }), foregroundStyle('#007AFF')]}
        />
        <Overlay.Content>
          <Text
            modifiers={[
              font({ size: 11, weight: 'bold' }),
              foregroundStyle('#FFFFFF'),
              frame({ width: 18, height: 18 }),
              background('#FF3B30'),
              clipShape('circle'),
              offset({ x: 8, y: -8 }),
            ]}>
            3
          </Text>
        </Overlay.Content>
      </Overlay>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/swift-ui/overlay" apiName="Overlay" />
