---
title: IconButton
description: Jetpack Compose IconButton components for displaying native Material3 icon buttons.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'expo-go']
---


Expo UI provides four icon button components that match the official Jetpack Compose [IconButton API](https://developer.android.com/develop/ui/compose/components/icon-button): `IconButton`, `FilledIconButton`, `FilledTonalIconButton`, and `OutlinedIconButton`. All variants share the same props and accept composable children for content.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/iconbutton/android-light.webp"
  darkSrc="/static/images/expo-ui/iconbutton/android-dark.webp"
  alt="Filled, filled tonal, and standard Material 3 icon buttons"
/>

## Installation

<APIInstallSection />

## Usage

### Basic icon button

A standard icon button with no background, typically used for toolbar actions.

```tsx BasicIconButtonExample.tsx

export default function BasicIconButtonExample() {
  return (
    <Host matchContents>
      <IconButton onClick={() => alert('Pressed!')}>
        <Icon source={require('./assets/settings.xml')} size={24} />
      </IconButton>
    </Host>
  );
}
```

### Icon button variants

Use different icon button components to convey varying levels of emphasis.

```tsx IconButtonVariantsExample.tsx
  Host,
  IconButton,
  FilledIconButton,
  FilledTonalIconButton,
  OutlinedIconButton,
  Icon,
  Row,
} from '@expo/ui/jetpack-compose';

export default function IconButtonVariantsExample() {
  return (
    <Host matchContents>
      <Row horizontalArrangement={{ spacedBy: 8 }}>
        <IconButton onClick={() => {}}>
          <Icon source={require('./assets/star.xml')} size={24} />
        </IconButton>
        <FilledIconButton onClick={() => {}}>
          <Icon source={require('./assets/star.xml')} size={24} />
        </FilledIconButton>
        <FilledTonalIconButton onClick={() => {}}>
          <Icon source={require('./assets/star.xml')} size={24} />
        </FilledTonalIconButton>
        <OutlinedIconButton onClick={() => {}}>
          <Icon source={require('./assets/star.xml')} size={24} />
        </OutlinedIconButton>
      </Row>
    </Host>
  );
}
```

## API

```tsx
  IconButton,
  FilledIconButton,
  FilledTonalIconButton,
  OutlinedIconButton,
} from '@expo/ui/jetpack-compose';
```

<APISection packageName="expo-ui/jetpack-compose/iconbutton" apiName="IconButton" />
