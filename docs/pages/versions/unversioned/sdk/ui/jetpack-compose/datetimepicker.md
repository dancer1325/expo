---
title: DateTimePicker
description: A Jetpack Compose DateTimePicker component for selecting dates and times.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'expo-go']
---


Expo UI DateTimePicker matches the official Jetpack Compose [Date Picker](https://developer.android.com/develop/ui/compose/components/datepickers) and [Time Picker](https://developer.android.com/develop/ui/compose/components/time-pickers) APIs and supports date, time, and combined selection.

> **Note:** The date variants render Material's calendar grid and input field, both of which scroll horizontally internally. The parent `Host` must provide a finite width on the horizontal axis, use `matchContents={{ vertical: true }}` together with `style={{ width: '100%' }}` (or any finite width). See [Match contents in Host reference](host/#match-contents) for details.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/datetimepicker/android-light.webp"
  darkSrc="/static/images/expo-ui/datetimepicker/android-dark.webp"
  alt="Material 3 date picker showing a selected date in a calendar grid"
/>

## Installation

<APIInstallSection />

## Usage

### Date picker

```tsx DatePickerExample.tsx

export default function DatePickerExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Host matchContents={{ vertical: true }} style={{ width: '100%' }}>
      <DateTimePicker
        onDateSelected={date => {
          setSelectedDate(date);
        }}
        displayedComponents="date"
        initialDate={selectedDate.toISOString()}
        variant="picker"
      />
    </Host>
  );
}
```

### Time picker

```tsx TimePickerExample.tsx

export default function TimePickerExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Host matchContents={{ vertical: true }} style={{ width: '100%' }}>
      <DateTimePicker
        onDateSelected={date => {
          setSelectedDate(date);
        }}
        displayedComponents="hourAndMinute"
        initialDate={selectedDate.toISOString()}
        variant="picker"
      />
    </Host>
  );
}
```

### Input variant

Use `variant="input"` to display the picker as a text input field instead of the default picker UI.

```tsx InputVariantExample.tsx

export default function InputVariantExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Host matchContents={{ vertical: true }} style={{ width: '100%' }}>
      <DateTimePicker
        onDateSelected={date => {
          setSelectedDate(date);
        }}
        displayedComponents="date"
        initialDate={selectedDate.toISOString()}
        variant="input"
      />
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/jetpack-compose/datetimepicker" apiName="DateTimePicker" />
