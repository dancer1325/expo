---
title: Switch
description: A Jetpack Compose Switch component for toggle controls.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'expo-go']
---


> **info** For cross-platform usage, see the universal [`Switch`](../universal/switch) — it renders the appropriate native component per platform.

Expo UI Switch matches the official Jetpack Compose [Switch](https://developer.android.com/develop/ui/compose/components/switch) API.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/switch/android-light.webp"
  darkSrc="/static/images/expo-ui/switch/android-dark.webp"
  alt="Two Material 3 switches showing on and off states"
/>

## Installation

<APIInstallSection />

## Usage

### Toggle switch

```tsx ToggleSwitchExample.tsx

export default function ToggleSwitchExample() {
  const [checked, setChecked] = useState(false);

  return (
    <Host matchContents>
      <Switch value={checked} onCheckedChange={setChecked} />
    </Host>
  );
}
```

### Custom colors

```tsx CustomColorsExample.tsx

export default function CustomColorsExample() {
  const [checked, setChecked] = useState(false);

  return (
    <Host matchContents>
      <Switch
        value={checked}
        onCheckedChange={setChecked}
        colors={{
          checkedThumbColor: '#6200EE',
          checkedTrackColor: '#EDE9FE',
          uncheckedThumbColor: '#9CA3AF',
          uncheckedTrackColor: '#F3F4F6',
          uncheckedBorderColor: '#D1D5DB',
        }}
      />
    </Host>
  );
}
```

### Custom thumb content

Use `Switch.ThumbContent` to render a custom element inside the thumb. `Switch.DefaultIconSize` gives you the M3 default icon size so your content fits perfectly.

```tsx ThumbContentExample.tsx

export default function ThumbContentExample() {
  const [checked, setChecked] = useState(false);

  return (
    <Host matchContents>
      <Switch
        value={checked}
        onCheckedChange={setChecked}
        colors={{
          checkedThumbColor: '#7C3AED',
          checkedTrackColor: '#EDE9FE',
          checkedIconColor: '#7C3AED',
          uncheckedThumbColor: '#9CA3AF',
          uncheckedTrackColor: '#F3F4F6',
          uncheckedBorderColor: '#D1D5DB',
          uncheckedIconColor: '#9CA3AF',
        }}>
        <Switch.ThumbContent>
          <Box
            modifiers={[
              size(Switch.DefaultIconSize, Switch.DefaultIconSize),
              clip(Shapes.Circle),
              background(checked ? '#FFFFFF' : '#E5E7EB'),
            ]}
          />
        </Switch.ThumbContent>
      </Switch>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/jetpack-compose/switch" apiName="Switch" />
