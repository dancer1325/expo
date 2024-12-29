---
title: Root layout
description: Learn how to use the root layout to add global providers to your app when using Expo Router.
hideTOC: true
---

* goal
  * root layout enables
    * add global providers | your app | use Expo Router

* Traditional React Native projects
  * 1! root component 
    * normally named **App.tsx** or **index.tsx**
    * uses
      * inject global providers (Redux, Themes, Styles, ...) | the app
      * 👀delay rendering | assets and fonts are loaded 👀

* Expo Router
  * Root Layout
    * normally named app/_layout.tsx
    * uses
      * 👀add providers / can be accessed -- by -- ANY route | app 👀
        * if you reduce the scope of your providers to ONLY the routes / need them ->
          * improve performance
          * cause fewer rerenders
