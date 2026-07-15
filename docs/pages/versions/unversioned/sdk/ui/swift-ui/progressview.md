---
title: ProgressView
description: A SwiftUI ProgressView component for displaying progress indicators.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['ios', 'tvos', 'expo-go']
---


Expo UI ProgressView matches the official SwiftUI [ProgressView API](https://developer.apple.com/documentation/swiftui/progressview) and supports styling via the [`progressViewStyle`](modifiers/#progressviewstylestyle) modifier.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/progressview/ios-light.webp"
  darkSrc="/static/images/expo-ui/progressview/ios-dark.webp"
  alt="Indeterminate spinner and a determinate ProgressView with a label"
/>

## Installation

<APIInstallSection />

## Usage

> **Note:** When using the `linear` style (which is the default for determinate progress), `ProgressView` is a flexible-width component, it expands to fill available horizontal space. When using `matchContents` on the `Host`, you should apply a [`frame`](modifiers/#frameparams) modifier on the `ProgressView` to give it an explicit width. Alternatively, give the `Host` an explicit size using `style` (for example, `style={{ width: 300 }}` or `style={{ flex: 1 }}`). The `circular` style and indeterminate spinner have a fixed size and work with `matchContents`.

### Indeterminate progress

When no `value` is provided, the progress view displays an indeterminate indicator (spinner).

```tsx IndeterminateExample.tsx

export default function IndeterminateExample() {
  return (
    <Host matchContents>
      <ProgressView />
    </Host>
  );
}
```

### Determinate progress

Provide a `value` between `0` and `1` to show determinate progress.

```tsx DeterminateExample.tsx

export default function DeterminateExample() {
  return (
    <Host style={{ flex: 1 }}>
      <ProgressView value={0.5} />
    </Host>
  );
}
```

### Progress view styles

Use the [`progressViewStyle`](modifiers/#progressviewstylestyle) modifier to change the progress view's appearance. Available styles are: `automatic`, `linear`, and `circular`.

```tsx ProgressViewStylesExample.tsx

export default function ProgressViewStylesExample() {
  return (
    <Host style={{ flex: 1 }}>
      <ProgressView value={0.5} modifiers={[progressViewStyle('linear')]} />
    </Host>
  );
}
```

### With label

You can pass custom components as `children` to provide a label for the progress view.

```tsx LabelExample.tsx

export default function LabelExample() {
  return (
    <Host style={{ flex: 1 }}>
      <ProgressView value={0.25}>
        <Text>Loading...</Text>
      </ProgressView>
    </Host>
  );
}
```

### Tinted progress view

Use the `tint` modifier to change the progress view's color.

```tsx TintedExample.tsx

export default function TintedExample() {
  return (
    <Host style={{ flex: 1 }}>
      <ProgressView value={0.7} modifiers={[tint('red')]} />
    </Host>
  );
}
```

### Timer-based progress

Use the `timerInterval` prop to create a progress view that automatically animates over a time range. This is useful for showing countdown timers or timed operations.

> **Note:** Timer-based progress is only available on iOS 16+ and tvOS 16+.

```tsx TimerExample.tsx

export default function TimerExample() {
  const startDate = new Date();
  const endDate = new Date(Date.now() + 10000); // 10 seconds from now

  return (
    <Host style={{ flex: 1 }}>
      <VStack spacing={16}>
        <ProgressView timerInterval={{ lower: startDate, upper: endDate }} />
        <ProgressView timerInterval={{ lower: startDate, upper: endDate }} countsDown={false}>
          <Text>Counting up</Text>
        </ProgressView>
      </VStack>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/swift-ui/progressview" apiName="ProgressView" />
