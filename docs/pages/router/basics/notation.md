---
title: Expo Router notation
description: Learn how to use special filenames and notation to expressively define your app's navigation tree within your project's file structure.
sidebar_title: Router notation
searchRank: 8
---

* goal
  * file-based routing notation
    * uses
      * define complex navigation patterns

## Types of route notation

### Simple names/NO notation

* == static routes
* == regular file + directory names / WITHOUT any notation
  * 's URL == location | your file tree
* _Example:_
  <FileTree files={[['src/app/home.tsx'], ['src/app/feed/favorites.tsx']]} />
  * "src/app/feed/favorites.tsx" URL == `/feed/favorites`

### Square brackets

* == dynamic route
* ALLOWED |
  * directory name, OR
  * file name
* how to use?
  * `useLocalSearchParams` hook | that page
* _Example:_
  <FileTree files={[['src/app/[userName].tsx'], ['src/app/products/[productId]/index.tsx']]} />
  * "src/app/[userName].tsx" 
    * == | file name
    * -> can match with URLs for ANY userName
      * `/evanbacon`
      * `/alfred`
      * ...
  * "src/app/products/[productId]/index.tsx"
    * == | directory name

### Parentheses

* == _route group_
* allows
  * grouping routes together WITHOUT affecting the URL
* uses
  * define complex relationships between routes
* _Example:_
  <FileTree files={[['src/app/(home)/index.tsx'], ['src/app/(home)/settings.tsx']]} />
  * "src/app/(home)/settings.tsx" -> URL: `/settings`
    * ALTHOUGH, it's NOT | "src/app"

### "index.tsx" files

* == directory's default route 
* _Example:_
    <FileTree files={[['src/app/(home)/index.tsx'], ['src/app/profile/index.tsx']]} />
  * "profile/index.tsx"'s URL: `/profile`
  * "(home)/index.tsx"'s URL: `/`
    * == your entire app's default route 

### "\_layout.tsx" files

* ❌!= pages themselves❌
* are rendered BEFORE page routes | that directory
* allows
  * defining how the groups of routes | directory, relate to EACH OTHER
* _Example:_
  <FileTree
    files={[['src/app/\_layout.tsx'], ['src/app/(home)/\_layout.tsx'], ['src/app/feed/\_layout.tsx']]}
  />
  * "src/app/\_layout.tsx"
    * is rendered BEFORE ANYTHING else | app
    * == PREVIOUSLY, 
      * "App.jsx"
* MORE COMMON used components
  * `<Stack>`
  * `<Tabs>`

### Plus sign

* [`+not-found`](../error-handling#unmatched-routes)
* [`+html`](../web/static-rendering#root-html)
* [`+native-intent`](../advanced/native-intent)
* [`+middleware`](../web/middleware)

* _Example:_
  <FileTree
    files={[
      ['src/app/+not-found.tsx'],
      ['src/app/+html.tsx'],
      ['src/app/+native-intent.tsx'],
      ['src/app/+middleware.ts'],
    ]}
  />
