---
modificationDate: November 27, 2024
title: Additional resources
description: A reference of resources that are useful to learn about Expo tooling and services.
---

## External resources

### Expo team communication

* [Blog](https://expo.dev/blog)
* [Changelog](https://expo.dev/changelog)

### GitHub

- [expo/expo](https://github.com/expo/expo) 
  - == Expo Go + SDK + Docs + Expo CLI
- [expo/eas-cli](https://github.com/expo/eas-cli) - The fastest way to build, submit, and update Android and iOS apps.
- [expo/examples](https://github.com/expo/examples) - Integrations and other examples.
- [expo/config-plugins](https://github.com/expo/config-plugins) - Expo Config Plugins for working with third-party packages.
- [expo/snack](https://github.com/expo/snack) - Build apps from the browser.
- [expo/vscode-expo](https://github.com/expo/vscode-expo) - VS Code extension for working with Expo tools.
- [expo/vscode-expo-theme](https://github.com/expo/vscode-expo-theme) - VS Code theme created by Expo team.
- [expo/fyi](https://github.com/expo/fyi) - Troubleshooting guides for Expo tools and services.
- [expo/orbit](https://github.com/expo/orbit) - Launch builds and start simulators from your macOS menu bar and Windows task bar.

### Documentation

- [React Native](https://reactnative.dev/docs/getting-started)
- [React](https://react.dev/learn)
- [Metro bundler](https://metrobundler.dev/)
- [Hermes engine](https://hermesengine.dev/)
- [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/guidelines/overview/)

### React Native

- [React Native Directory](https://reactnative.directory/) - An interactive directory to find packages for your React Native apps.
- [Intermediate React Native](https://frontendmasters.com/courses/intermediate-react-native/) - Paid course by Frontend Masters.

### Animation and gestures

- [React Native Reanimated](/versions/latest/sdk/reanimated/)
- [React Native Gesture Handler](/versions/latest/sdk/gesture-handler/)

### Navigation

- [React Navigation](https://reactnavigation.org/)

## Talks

<TalkGridWrapper>
  {TALKS.map(talk => (
    <TalkGridCell key={talk.videoId} {...talk} />
  ))}
</TalkGridWrapper>

## Podcasts

<TalkGridWrapper>
  {PODCASTS.map(podcast => (
    <TalkGridCell key={podcast.videoId ?? podcast.event} {...podcast} />
  ))}
</TalkGridWrapper>

## Live streams recordings

<TalkGridWrapper>
  {LIVE_STREAMS.map(stream => (
    <TalkGridCell key={stream.videoId} {...stream} />
  ))}
</TalkGridWrapper>
