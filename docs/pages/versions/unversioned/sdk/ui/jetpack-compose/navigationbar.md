---
title: NavigationBar
description: A Jetpack Compose NavigationBar component for Material 3 bottom navigation.
sourceCodeUrl: 'https://github.com/expo/expo/tree/main/packages/expo-ui'
packageName: '@expo/ui'
platforms: ['android', 'expo-go']
---


Expo UI NavigationBar matches the official Jetpack Compose [`NavigationBar`](https://developer.android.com/develop/ui/compose/components/navigation-bar) API. It displays a row of destinations for switching between top-level app sections.

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/navigationbar/android-light.webp"
  darkSrc="/static/images/expo-ui/navigationbar/android-dark.webp"
  alt="Material 3 navigation bar with selectable destinations"
/>

## Installation

<APIInstallSection />

## Usage

### Basic navigation bar

Manage the selected item in React state and pass `selected` to each `NavigationBarItem`.

```tsx BasicNavigationBar.tsx

const HOME_ICON = require('./assets/home.xml');
const SEARCH_ICON = require('./assets/search.xml');
const SETTINGS_ICON = require('./assets/settings.xml');

export default function BasicNavigationBar() {
  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <Host matchContents>
      <NavigationBar>
        <NavigationBarItem selected={selectedTab === 'home'} onClick={() => setSelectedTab('home')}>
          <NavigationBarItem.Icon>
            <Icon source={HOME_ICON} />
          </NavigationBarItem.Icon>
          <NavigationBarItem.Label>
            <Text>Home</Text>
          </NavigationBarItem.Label>
        </NavigationBarItem>

        <NavigationBarItem
          selected={selectedTab === 'search'}
          onClick={() => setSelectedTab('search')}>
          <NavigationBarItem.Icon>
            <Icon source={SEARCH_ICON} />
          </NavigationBarItem.Icon>
          <NavigationBarItem.Label>
            <Text>Search</Text>
          </NavigationBarItem.Label>
        </NavigationBarItem>

        <NavigationBarItem
          selected={selectedTab === 'settings'}
          onClick={() => setSelectedTab('settings')}>
          <NavigationBarItem.Icon>
            <Icon source={SETTINGS_ICON} />
          </NavigationBarItem.Icon>
          <NavigationBarItem.Label>
            <Text>Settings</Text>
          </NavigationBarItem.Label>
        </NavigationBarItem>
      </NavigationBar>
    </Host>
  );
}
```

## API

```tsx
```

<APISection packageName="expo-ui/jetpack-compose/navigationbar" apiName="NavigationBar" />

<APISection packageName="expo-ui/jetpack-compose/navigationbar" apiName="NavigationBarItem" />
