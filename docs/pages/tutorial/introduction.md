---
title: 'Tutorial: Using React Native and Expo'
sidebar_title: Introduction
description: An introduction to a React Native tutorial on how to build a universal app that runs on Android, iOS and the web using Expo.
---

* goal
  * create an Expo app / 
    * 1! codebase
    * runs | Android, iOS, and web

* [complete code](https://github.com/dancer1325/expo-examples/tree/master/stickersmash)

## About React Native and Expo tutorial

* It'll cover the following topics:

TODO: 

- Implement a two-screen bottom tabs layout with Expo Router
- Break down the app layout and implement it with flexbox
- Use each platform's system UI to select an image from the media library
- Create a sticker modal using the `<Modal>` and `<FlatList>` components from React Native
- Add touch gestures to interact with a sticker
- Use third-party libraries to capture a screenshot and save it to the disk
- Handle platform differences between Android, iOS, and web
- Finally, go through the process of configuring a status bar, a splash screen, and an icon to complete the app

These topics provide a foundation to learn the fundamentals of building an Expo app
* The tutorial is self-paced and can take up to two hours to complete.

To keep it beginner friendly, we divided the tutorial into nine chapters so that you can follow along or put it down and come back to it later
* Each chapter contains the necessary code snippets to complete the steps, so you can follow along by creating an app from scratch or copy and paste it.

* [video](../../public/static/videos/tutorial/final.mp4)

## How to use this tutorial

Throughout the tutorial, any important code or code that has changed between examples will be <span className="tutorial-code-annotation">highlighted in green</span>
* You can hover over the highlights (on desktop) or tap them (on mobile) to learn more about the change
* For example, the code highlighted in the snippet below explains what it does:

{/* prettier-ignore */}
```tsx Hello World|collapseHeight=300

export default function Index() {
  return (
    <View style={styles.container}>
      /* @tutinfo This used to say: "Edit app/index.tsx to edit this screen.". Now it says: "Hello world!". */<Text>Hello world!</Text>/* @end */
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
