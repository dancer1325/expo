---
title: Slider
description: A control for selecting a value from a continuous or stepped range.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'ios', 'web', 'expo-go']
---


A controlled slider for selecting a numeric value within a range. Pair [`value`](#value) with [`onValueChange`](#onvaluechange) to manage state from React.

## Installation

<APIInstallSection />

## Usage

### Continuous slider

The default range is `[0, 1]`.

```tsx ContinuousSliderExample.tsx

export default function ContinuousSliderExample() {
  const [value, setValue] = useState(0.5);

  return (
    <Host style={{ flex: 1 }}>
      <Slider value={value} onValueChange={setValue} />
    </Host>
  );
}
```

### Stepped slider with custom range

Use `min`, `max`, and `step` to constrain the values produced by the slider.

```tsx SteppedSliderExample.tsx

export default function SteppedSliderExample() {
  const [volume, setVolume] = useState(50);

  return (
    <Host style={{ flex: 1 }}>
      <Column spacing={8}>
        <Text>Volume: {volume}</Text>
        <Slider value={volume} onValueChange={setVolume} min={0} max={100} step={10} />
      </Column>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/universal/slider" apiName="Slider" />
