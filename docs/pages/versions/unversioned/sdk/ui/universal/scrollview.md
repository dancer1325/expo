---
title: ScrollView
description: A scrollable container that supports vertical or horizontal scrolling.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'ios', 'web', 'expo-go']
---


A scrollable container, defaulting to vertical scrolling. Use [`direction="horizontal"`](#direction) for horizontal lists.

## Installation

<APIInstallSection />

## Usage

### Vertical scrolling

```tsx VerticalScrollViewExample.tsx

export default function VerticalScrollViewExample() {
  return (
    <Host style={{ flex: 1 }}>
      <ScrollView>
        <Column spacing={8}>
          {Array.from({ length: 30 }).map((_, i) => (
            <Text key={i}>Row {i + 1}</Text>
          ))}
        </Column>
      </ScrollView>
    </Host>
  );
}
```

### Horizontal scrolling

```tsx HorizontalScrollViewExample.tsx

export default function HorizontalScrollViewExample() {
  return (
    <Host style={{ flex: 1 }}>
      <ScrollView direction="horizontal">
        <Row spacing={12}>
          {Array.from({ length: 20 }).map((_, i) => (
            <Text key={i}>Item {i + 1}</Text>
          ))}
        </Row>
      </ScrollView>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/universal/scrollview" apiName="ScrollView" />
