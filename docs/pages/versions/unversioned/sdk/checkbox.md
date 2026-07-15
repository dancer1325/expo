---
title: Checkbox
description: A universal React component that provides basic checkbox functionality.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-checkbox'
packageName: 'expo-checkbox'
platforms: ['android', 'ios', 'tvos', 'web', 'expo-go']
---


`expo-checkbox` provides a basic `boolean` input element for all platforms.

## Installation

<APIInstallSection hideBareInstructions />

## Usage

<SnackInline label='Basic Checkbox usage' dependencies={['expo-checkbox']} platforms={['android', 'web']}>

```tsx

export default function App() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Normal checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>Custom colored checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Disabled checkbox</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
```

</SnackInline>

An example of how `expo-checkbox` appears on Android and iOS is shown below:

<ContentSpotlight
  alt="Checkbox component on Android and iOS."
  src="/static/images/sdk/checkbox/example.png"
  className="max-w-[480px]"
/>

## API

```js
```

<APISection packageName="expo-checkbox" apiName="Checkbox" />
