---
title: Text
description: A component for displaying styled text content.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'ios', 'web', 'expo-go']
---


A component for displaying text. Adapts to the platform color scheme (light/dark) by default and exposes a focused subset of typography knobs through [`textStyle`](#textstyle).

## Installation

<APIInstallSection />

## Usage

### Basic text

```tsx TextExample.tsx

export default function TextExample() {
  return (
    <Host matchContents>
      <Text>Hello, world!</Text>
    </Host>
  );
}
```

### Styled text

Use [`textStyle`](#textstyle) for typography-specific properties (font size, weight, alignment).

```tsx StyledTextExample.tsx

export default function StyledTextExample() {
  return (
    <Host matchContents>
      <Text textStyle={{ fontSize: 24, fontWeight: '700', textAlign: 'center' }}>Headline</Text>
    </Host>
  );
}
```

### Truncating long text

Use [`numberOfLines`](#numberoflines) to clamp long text with a trailing ellipsis.

```tsx TruncatedTextExample.tsx

export default function TruncatedTextExample() {
  return (
    <Host style={{ flex: 1 }}>
      <Text numberOfLines={1}>
        A very long line of text that will be truncated when it does not fit on a single line.
      </Text>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/universal/text" apiName="Text" />
