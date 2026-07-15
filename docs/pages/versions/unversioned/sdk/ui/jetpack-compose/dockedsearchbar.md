---
title: DockedSearchBar
description: A Jetpack Compose DockedSearchBar component for displaying an inline search input.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'expo-go']
---


Expo UI DockedSearchBar matches the official Jetpack Compose [SearchBar API](https://developer.android.com/develop/ui/compose/components/search-bar) and displays a search input that remains anchored in its parent layout rather than expanding to full screen.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/dockedsearchbar/android-light.webp"
  darkSrc="/static/images/expo-ui/dockedsearchbar/android-dark.webp"
  alt="Material 3 docked search bar with search icon and placeholder text"
/>

## Installation

<APIInstallSection />

## Usage

### Basic docked search bar

```tsx BasicDockedSearchBarExample.tsx

export default function BasicDockedSearchBarExample() {
  const [query, setQuery] = useState('');

  return (
    <Host matchContents>
      <DockedSearchBar onQueryChange={setQuery} />
    </Host>
  );
}
```

### With placeholder and leading icon

Use the `DockedSearchBar.Placeholder` and `DockedSearchBar.LeadingIcon` slot components to customize the search bar appearance.

```tsx DockedSearchBarWithSlotsExample.tsx

export default function DockedSearchBarWithSlotsExample() {
  const [query, setQuery] = useState('');

  return (
    <Host matchContents>
      <DockedSearchBar onQueryChange={setQuery}>
        <DockedSearchBar.Placeholder>
          <Text>Search items...</Text>
        </DockedSearchBar.Placeholder>
        <DockedSearchBar.LeadingIcon>
          <Text>🔍</Text>
        </DockedSearchBar.LeadingIcon>
      </DockedSearchBar>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/jetpack-compose/dockedsearchbar" apiName="DockedSearchBar" />
