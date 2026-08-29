---
title: BlurView
description: A React component that blurs everything underneath the view.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-blur'
packageName: 'expo-blur'
iconUrl: '/static/images/packages/expo-blur.png'
platforms: ['android', 'ios', 'tvos', 'web', 'expo-go']
---

* == React component /
  * blurs everything | view
  * uses
    * navigation bars
    * tab bars
    * modals

## Known issues

* AFTER the dynamic content component,  render `BlurView`
  * Reason:🧠OTHERWISE, blur effect does NOT update🧠

## Installation

```bash
npx expo install expo-blur
---
yarn expo install expo-blur
---
pnpm expo install expo-blur
---
bun expo install expo-blur
```

## Usage

* legacy way
  * ALLOWED |
    * iOS
    * web
  * NOT ALLOWED |
    * Android
      * ONLY semi-transparent background

TODO: 

<Collapsible summary={<>Basic <CODE>BlurView</CODE> usage with Android support</>}>
  To blur the background of a view on Android, wrap the content to be blurred in a `BlurTargetView` component and pass its ref to the `BlurView`.
  > **info** **Note:** Notice that, as long as all of the `BlurViews` fit into the bounds of a single `BlurTargetView`, you can use the single `BlurTargetView` for multiple `BlurViews`
* This is more efficient than creating multiple `BlurTargetViews`.
  <SnackInline label='Basic BlurView usage with Android support' dependencies={['expo-blur']}>

```tsx

export default function App() {
  const targetRef = useRef<View | null>(null);
  const text = 'Hello, my container is blurring contents underneath!';

  return (
    <View style={styles.container}>
      <BlurTargetView ref={targetRef} style={styles.background}>
        {[...Array(20).keys()].map(i => (
          <View
            key={`box-${i}`}
            style={[styles.box, i % 2 === 1 ? styles.boxOdd : styles.boxEven]}
          />
        ))}
      </BlurTargetView>
      <BlurView
        blurTarget={targetRef}
        intensity={100}
        style={styles.blurContainer}
        blurMethod="dimezisBlurView">
        <Text style={styles.text}>{text}</Text>
      </BlurView>
      <BlurView
        blurTarget={targetRef}
        intensity={80}
        tint="light"
        style={styles.blurContainer}
        blurMethod="dimezisBlurView">
        <Text style={styles.text}>{text}</Text>
      </BlurView>
      <BlurView
        blurTarget={targetRef}
        intensity={90}
        tint="dark"
        style={styles.blurContainer}
        blurMethod="dimezisBlurView">
        <Text style={[styles.text, { color: '#fff' }]}>{text}</Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  background: {
    flex: 1,
    flexWrap: 'wrap',
    ...StyleSheet.absoluteFill,
  },
  box: {
    width: '25%',
    height: '20%',
  },
  boxEven: {
    backgroundColor: 'orangered',
  },
  boxOdd: {
    backgroundColor: 'gold',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});
```

  </SnackInline>

</Collapsible>

## Android support

* | SDK v55+,
  * `expo-blur` is stable | Android 
    * ⚠️BUT require some changes⚠️

### API

To blur the background of a view on Android, wrap the content to be blurred in a `BlurTargetView` component and 
pass its ref to the `BlurView`

### Performance

The blur can be achieved efficiently only by using the [RenderNode](https://developer.android.com/reference/android/graphics/RenderNode) Android API, which was introduced in Android SDK 31 (Android 12.0)
* Due to this, on older versions of Android `expo-blur` uses the much less efficient [RenderScript](https://developer.android.com/guide/topics/renderscript/compute) API.
If you want to avoid the performance penalty on older platforms you can use the `dimezisBlurViewSdk31Plus` [BlurMethod](#blurmethod-1)
which will only blur on newer versions of Android and fall back to the [`none`](#blurmethod-1) on older versions.

## API

```js
```

<APISection packageName="expo-blur" />

## Using `borderRadius` with `BlurView`

When using `BlurView` on Android and iOS, the `borderRadius` property is not applied when provided explicitly
* To fix this, you can use the `overflow: 'hidden'` style since `BlurView` inherits props from `<View>`
* See [Usage](#usage) for an example.
