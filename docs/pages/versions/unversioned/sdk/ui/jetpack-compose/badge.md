---
title: Badge
description: A Jetpack Compose Badge component for displaying status indicators and counts.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'expo-go']
---


Expo UI Badge matches the official Jetpack Compose [`Badge`](https://developer.android.com/develop/ui/compose/components/badges) API. It renders as a small colored indicator dot, or with content such as a count number.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/badge/android-light.webp"
  darkSrc="/static/images/expo-ui/badge/android-dark.webp"
  alt="Material 3 badges showing count and dot indicators on icons"
/>

## Installation

<APIInstallSection />

## Usage

### Indicator dot

A badge with no children renders as a small dot indicator.

```tsx BadgeDot.tsx

export default function BadgeDot() {
  return (
    <Host matchContents>
      <Badge />
    </Host>
  );
}
```

### Badge with count

Pass a `Text` child to display a number or label.

```tsx BadgeCount.tsx

export default function BadgeCount() {
  return (
    <Host matchContents>
      <Badge containerColor="#EF5350" contentColor="#FFFFFF">
        <Text>3</Text>
      </Badge>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/jetpack-compose/badge" apiName="Badge" />
