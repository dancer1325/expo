# Types of route notation
## Simple names/NO notation
### == static routes
TODO:
### == regular file + directory names / WITHOUT any notation
TODO:
#### 's URL == location | your file tree
TODO:
### "src/app/feed/favorites.tsx" URL == `/feed/favorites`
TODO:
## Square brackets
TODO:
### == dynamic route
TODO:
### ALLOWED |
TODO:
#### directory name, OR
TODO:
#### file name
TODO:
### how to use?
TODO:
#### `useLocalSearchParams` hook | that page
TODO:
### "src/app/[userName].tsx"
TODO:
#### == | file name
TODO:
#### -> can match with URLs for ANY userName
TODO:
##### `/evanbacon`
TODO:
##### `/alfred`
TODO:
### "src/app/products/[productId]/index.tsx"
TODO:
#### == | directory name
TODO:
## Parentheses
TODO:
### == _route group_
TODO:
### allows
TODO:
#### grouping routes together WITHOUT affecting the URL
TODO:
### uses
TODO:
#### define complex relationships between routes
TODO:
### "src/app/(home)/settings.tsx" -> URL: `/settings`
TODO:
#### ALTHOUGH, it's NOT | "src/app"
TODO:
## "index.tsx" files
TODO:
### == directory's default route
TODO:
### "profile/index.tsx"'s URL: `/profile`
TODO:
### "(home)/index.tsx"'s URL: `/`
TODO:
#### == your entire app's default route
TODO:
## "\_layout.tsx" files
TODO:
### ❌!= pages themselves❌
TODO:
### are rendered BEFORE page routes | that directory
TODO:
### allows
TODO:
#### defining how the groups of routes | directory, relate to EACH OTHER
TODO:
### "src/app/\_layout.tsx"
TODO:
#### is rendered BEFORE ANYTHING else | app
TODO:
#### == PREVIOUSLY, "App.jsx"
TODO:
### MORE COMMON used components
TODO:
#### `<Stack>`
TODO:
#### `<Tabs>`
TODO:
## Plus sign
TODO:
### [`+not-found`](../error-handling#unmatched-routes)
TODO:
### [`+html`](../web/static-rendering#root-html)
TODO:
### [`+native-intent`](../advanced/native-intent)
TODO:
### [`+middleware`](../web/middleware)
TODO:
