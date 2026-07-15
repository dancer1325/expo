---
title: BottomSheet
description: A SwiftUI BottomSheet component that presents content from the bottom of the screen.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['ios', 'tvos', 'expo-go']
---


> **info** For cross-platform usage, see the universal [`BottomSheet`](../universal/bottomsheet) — it renders the appropriate native component per platform.

Expo UI BottomSheet matches the official SwiftUI [sheet API](<https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)>) and presents content from the bottom of the screen.

<ContentSpotlight
  variant="component"
  aspect="portrait"
  src="/static/images/expo-ui/bottomsheet/ios-light.webp"
  darkSrc="/static/images/expo-ui/bottomsheet/ios-dark.webp"
  alt="A BottomSheet at medium detent showing a Sort By list with Most Recent selected"
/>

> **info** On iOS, to show a bottom sheet on top of another, nest the second `BottomSheet` inside the first sheet's content rather than beside it. This is a limitation of the underlying SwiftUI [`sheet`](<https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)>) modifier. See [how to present multiple sheets](https://www.hackingwithswift.com/quick-start/swiftui/how-to-present-multiple-sheets) for more information.

## Installation

<APIInstallSection />

## Usage

### Basic bottom sheet

```tsx BasicBottomSheetExample.tsx

export default function BasicBottomSheetExample() {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <Button label="Open Sheet" onPress={() => setIsPresented(true)} />
        <BottomSheet isPresented={isPresented} onIsPresentedChange={setIsPresented}>
          <Text>Hello, world!</Text>
        </BottomSheet>
      </VStack>
    </Host>
  );
}
```

### Bottom sheet that fits content

Use the [`fitToContents`](#fittocontents) prop to automatically size the sheet to fit its content.

```tsx BottomSheetFitsContentExample.tsx

export default function BottomSheetFitsContentExample() {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <Button label="Open Sheet" onPress={() => setIsPresented(true)} />
        <BottomSheet isPresented={isPresented} onIsPresentedChange={setIsPresented} fitToContents>
          <VStack>
            <Text>This sheet automatically sizes to fit its content.</Text>
            <Button label="Close" onPress={() => setIsPresented(false)} />
          </VStack>
        </BottomSheet>
      </VStack>
    </Host>
  );
}
```

### Bottom sheet with presentation detents

Use the [`presentationDetents`](modifiers/#presentationdetentsdetents-options) modifier on `Group` to control the available heights. You can use:

- `'medium'`: System medium height (approximately half screen)
- `'large'`: System large height (full screen)
- `{ fraction: number }`: Fraction of screen height (0-1)
- `{ height: number }`: Fixed height in points

```tsx BottomSheetWithDetentsExample.tsx

export default function BottomSheetWithDetentsExample() {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <Button label="Open Sheet" onPress={() => setIsPresented(true)} />
        <BottomSheet isPresented={isPresented} onIsPresentedChange={setIsPresented}>
          <Group
            modifiers={[
              presentationDetents(['medium', 'large', { fraction: 0.3 }, { height: 200 }]),
            ]}>
            <Text>This sheet can snap to multiple heights.</Text>
          </Group>
        </BottomSheet>
      </VStack>
    </Host>
  );
}
```

### Bottom sheet with detent selection tracking

Pass `selection` and `onSelectionChange` options to [`presentationDetents`](modifiers/#presentationdetentsdetents-options) to programmatically control which detent the sheet snaps to.

```tsx BottomSheetWithDetentSelectionExample.tsx
  presentationDetents,
  presentationDragIndicator,
  foregroundStyle,
} from '@expo/ui/swift-ui/modifiers';

export default function BottomSheetWithDetentSelectionExample() {
  const [isPresented, setIsPresented] = useState(false);
  const detents: PresentationDetent[] = [{ height: 300 }, { fraction: 0.3 }, 'medium', 'large'];
  const [selectedDetent, setSelectedDetent] = useState<PresentationDetent>('medium');

  const formatDetent = (detent: PresentationDetent): string => {
    if (typeof detent === 'string') return detent;
    if ('fraction' in detent) return `Fraction ${detent.fraction}`;
    return `Height ${detent.height}`;
  };

  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <Button label="Show Sheet" onPress={() => setIsPresented(true)} />
        <BottomSheet isPresented={isPresented} onIsPresentedChange={setIsPresented}>
          <Group
            modifiers={[
              presentationDetents(detents, {
                selection: selectedDetent,
                onSelectionChange: setSelectedDetent,
              }),
              presentationDragIndicator('visible'),
            ]}>
            <List>
              <Section title="Change Detent">
                <Button label="Height 300" onPress={() => setSelectedDetent({ height: 300 })} />
                <Button label="Fraction 0.3" onPress={() => setSelectedDetent({ fraction: 0.3 })} />
                <Button label="Medium" onPress={() => setSelectedDetent('medium')} />
                <Button label="Large" onPress={() => setSelectedDetent('large')} />
              </Section>
              <Section title="Current">
                <Text modifiers={[foregroundStyle('secondaryLabel')]}>
                  {formatDetent(selectedDetent)}
                </Text>
              </Section>
            </List>
          </Group>
        </BottomSheet>
      </VStack>
    </Host>
  );
}
```

### Bottom sheet with background interaction

Use the [`presentationBackgroundInteraction`](modifiers/#presentationbackgroundinteractioninteraction) modifier to allow interactions with content behind the sheet.

```tsx BottomSheetWithBackgroundInteractionExample.tsx
  presentationDetents,
  presentationBackgroundInteraction,
} from '@expo/ui/swift-ui/modifiers';

export default function BottomSheetWithBackgroundInteractionExample() {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <Button label="Open Sheet" onPress={() => setIsPresented(true)} />
        <BottomSheet isPresented={isPresented} onIsPresentedChange={setIsPresented}>
          <Group
            modifiers={[
              presentationDetents(['medium', 'large']),
              presentationBackgroundInteraction({ type: 'enabledUpThrough', detent: 'medium' }),
            ]}>
            <Text>Interact with content behind when at medium height.</Text>
          </Group>
        </BottomSheet>
      </VStack>
    </Host>
  );
}
```

### Non-dismissible bottom sheet

Use the [`interactiveDismissDisabled`](modifiers/#interactivedismissdisabledisdisabled) modifier to prevent users from dismissing the sheet by swiping.

```tsx NonDismissibleBottomSheetExample.tsx

export default function NonDismissibleBottomSheetExample() {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <Button label="Open Sheet" onPress={() => setIsPresented(true)} />
        <BottomSheet isPresented={isPresented} onIsPresentedChange={setIsPresented}>
          <Group modifiers={[interactiveDismissDisabled()]}>
            <VStack>
              <Text>This sheet cannot be dismissed by swiping.</Text>
              <Button label="Close" onPress={() => setIsPresented(false)} />
            </VStack>
          </Group>
        </BottomSheet>
      </VStack>
    </Host>
  );
}
```

### Bottom sheet with React Native content

Use `RNHostView` to embed React Native components inside the bottom sheet. Set `matchContents` to automatically size the host view to fit its content.

```tsx BottomSheetWithRNContentExample.tsx

export default function BottomSheetWithRNContentExample() {
  const [isPresented, setIsPresented] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <Button label="Open Sheet" onPress={() => setIsPresented(true)} />
        <BottomSheet isPresented={isPresented} onIsPresentedChange={setIsPresented} fitToContents>
          <Group modifiers={[presentationDragIndicator('visible')]}>
            <RNHostView matchContents>
              <View style={{ padding: 24 }}>
                <RNText style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
                  React Native Content
                </RNText>
                <RNText style={{ color: '#666', marginBottom: 16 }}>Counter: {counter}</RNText>
                <Pressable
                  style={{
                    backgroundColor: '#007AFF',
                    padding: 12,
                    borderRadius: 8,
                    alignItems: 'center',
                    marginBottom: 12,
                  }}
                  onPress={() => setCounter(counter + 1)}>
                  <RNText style={{ color: 'white', fontWeight: '600' }}>Increment</RNText>
                </Pressable>
                <Pressable
                  style={{
                    backgroundColor: '#FF3B30',
                    padding: 12,
                    borderRadius: 8,
                    alignItems: 'center',
                  }}
                  onPress={() => setIsPresented(false)}>
                  <RNText style={{ color: 'white', fontWeight: '600' }}>Close</RNText>
                </Pressable>
              </View>
            </RNHostView>
          </Group>
        </BottomSheet>
      </VStack>
    </Host>
  );
}
```

### Bottom sheet with flexible React Native content

When using React Native content with `flex: 1`, omit the `matchContents` prop on `RNHostView` and use [`presentationDetents`](modifiers/#presentationdetentsdetents-options) to control the sheet height.

```tsx BottomSheetWithFlexRNContentExample.tsx

export default function BottomSheetWithFlexRNContentExample() {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <Host style={{ flex: 1 }}>
      <VStack>
        <Button label="Open Sheet" onPress={() => setIsPresented(true)} />
        <BottomSheet isPresented={isPresented} onIsPresentedChange={setIsPresented}>
          <Group
            modifiers={[
              presentationDetents(['medium', 'large']),
              presentationDragIndicator('visible'),
            ]}>
            <RNHostView>
              <View style={{ flex: 1, backgroundColor: '#007AFF', padding: 24 }}>
                <RNText style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
                  Flexible React Native Content
                </RNText>
                <RNText style={{ color: 'white', marginTop: 8 }}>
                  This content fills the available space in the sheet.
                </RNText>
              </View>
            </RNHostView>
          </Group>
        </BottomSheet>
      </VStack>
    </Host>
  );
}
```

### Scrollable React Native content

Nest a scrollable React Native list such as `FlatList`, `ScrollView`, or a high-performance list like [FlashList](https://shopify.github.io/flash-list/) or [Legend List](https://github.com/LegendApp/legend-list) inside the sheet with `RNHostView`. Size the sheet with [`presentationDetents`](modifiers/#presentationdetentsdetents-options) and the list scrolls within that height.

```tsx BottomSheetWithScrollableContentExample.tsx

const DATA = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

export default function BottomSheetWithScrollableContentExample() {
  const [isPresented, setIsPresented] = useState(false);

  return (
    <Host matchContents>
      <VStack>
        <Button label="Open Sheet" onPress={() => setIsPresented(true)} />
        <BottomSheet isPresented={isPresented} onIsPresentedChange={setIsPresented}>
          <Group
            modifiers={[
              presentationDetents(['medium', 'large']),
              presentationDragIndicator('visible'),
            ]}>
            <RNHostView>
              <View style={{ padding: 16 }}>
                <FlatList
                  data={DATA}
                  keyExtractor={item => item}
                  renderItem={({ item }) => <RNText style={{ paddingVertical: 16 }}>{item}</RNText>}
                />
              </View>
            </RNHostView>
          </Group>
        </BottomSheet>
      </VStack>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/swift-ui/bottomsheet" apiName="BottomSheet" />
