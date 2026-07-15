---
title: SearchBar
description: A Jetpack Compose SearchBar component for search input functionality.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'expo-go']
---


Expo UI SearchBar matches the official Jetpack Compose [Search](https://developer.android.com/develop/ui/compose/components/search-bar) API and provides a search input with support for placeholder text and expanded full-screen search.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/searchbar/android-light.webp"
  darkSrc="/static/images/expo-ui/searchbar/android-dark.webp"
  alt="Material 3 search bar with placeholder text"
/>

## Installation

<APIInstallSection />

## Usage

### Basic search bar

```tsx BasicSearchBarExample.tsx

export default function BasicSearchBarExample() {
  const [query, setQuery] = useState('');

  return (
    <Host matchContents>
      <SearchBar onSearch={searchText => setQuery(searchText)} />
    </Host>
  );
}
```

### Search bar with placeholder

Use the `SearchBar.Placeholder` sub-component to display hint text when the search field is empty.

```tsx SearchBarPlaceholderExample.tsx

export default function SearchBarPlaceholderExample() {
  const [query, setQuery] = useState('');

  return (
    <Host matchContents>
      <SearchBar onSearch={searchText => setQuery(searchText)}>
        <SearchBar.Placeholder>Search items...</SearchBar.Placeholder>
      </SearchBar>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/jetpack-compose/searchbar" apiName="SearchBar" />
