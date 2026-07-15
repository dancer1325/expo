---
title: AccessoryWidgetBackground
description: A SwiftUI adaptive background view that provides a standard appearance based on the the widget's environment.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['ios', 'expo-go']
---


Expo UI AccessoryWidgetBackground matches the official SwiftUI [AccessoryWidgetBackground API](https://developer.apple.com/documentation/widgetkit/accessorywidgetbackground) and creates an adaptive background view that provides a standard appearance based on the the widget's environment.

## Installation

<APIInstallSection />

## Usage

### Basic accessory widget background

```tsx BasicAccessoryWidgetBackground.tsx

export default function BasicAccessoryWidgetBackground() {
  return (
    <ZStack>
      <AccessoryWidgetBackground />
      <VStack>
        <Text>MON</Text>
      </VStack>
    </ZStack>
  );
}
```

## API

```tsx
```

<APISection
  packageName="expo-ui/swift-ui/accessorywidgetbackground"
  apiName="AccessoryWidgetBackground"
/>
