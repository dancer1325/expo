---
title: Spacer
description: A Jetpack Compose Spacer component for adding flexible space between elements.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'expo-go']
---


> **info** For cross-platform usage, see the universal [`Spacer`](../universal/spacer) — it renders the appropriate native component per platform.

Expo UI Spacer matches the official Jetpack Compose [Spacer](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#Spacer) API and is used to add flexible or fixed-size space between elements in a layout.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/spacer/android-light.webp"
  darkSrc="/static/images/expo-ui/spacer/android-dark.webp"
  alt="Two boxes pushed to opposite ends of a Row by a Spacer with weight modifier"
/>

## Installation

<APIInstallSection />

## Usage

### Spacer with weight

Use the `weight()` modifier to make the spacer fill available space proportionally within a `Row` or `Column`.

```tsx SpacerWeightExample.tsx

export default function SpacerWeightExample() {
  return (
    <Host matchContents>
      <Row modifiers={[fillMaxWidth()]}>
        <Text>Left</Text>
        <Spacer modifiers={[weight(1)]} />
        <Text>Right</Text>
      </Row>
    </Host>
  );
}
```

### Spacer with fixed size

Use a `height` or `width` modifier to create a spacer with a fixed dimension.

```tsx SpacerFixedSizeExample.tsx

export default function SpacerFixedSizeExample() {
  return (
    <Host matchContents>
      <Column>
        <Text>Above</Text>
        <Spacer modifiers={[height(24)]} />
        <Text>Below (24dp gap)</Text>
      </Column>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/jetpack-compose/spacer" apiName="Spacer" />
