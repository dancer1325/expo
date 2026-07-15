---
title: Checkbox
description: A toggle control that represents a checked or unchecked state.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'ios', 'web', 'expo-go']
---


A controlled checkbox. Pair [`value`](#value) with [`onValueChange`](#onvaluechange) to manage state from React.

## Installation

<APIInstallSection />

## Usage

### Basic checkbox

```tsx CheckboxExample.tsx

export default function CheckboxExample() {
  const [accepted, setAccepted] = useState(false);

  return (
    <Host matchContents>
      <Checkbox label="I accept the terms" value={accepted} onValueChange={setAccepted} />
    </Host>
  );
}
```

### Disabled

```tsx DisabledCheckboxExample.tsx

export default function DisabledCheckboxExample() {
  return (
    <Host matchContents>
      <Checkbox label="Locked option" value onValueChange={() => {}} disabled />
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/universal/checkbox" apiName="Checkbox" />
