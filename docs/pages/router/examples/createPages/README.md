# Create pages with Expo Router

## 💡| create a file | "app/" -> AUTOMATICALLY becomes a route | app💡
TODO:

# Pages
## steps to define a page
TODO:
### | "app/<SUBFOLDER_NAME>/<FILE_NAME>.<ALLOWED_EXTENSION>"
TODO:
### export a React component -- as the -- default value
TODO:
### ALLOWED extensions: .js, .jsx, .tsx, .ts
TODO:
### 👀if FILE_NAME == index -> /<SUBFOLDER_NAME> route👀
TODO:

# Platform specific extensions
## Metro bundler's platform-specific extensions (.ios.tsx, .native.tsx) supported | "app/" ONLY if non-platform version also exists
TODO:
### _layout.web.tsx used | web, _layout.tsx used | all other platforms
TODO:
### ⚠️providing a route file WITHOUT platform-specific extension is required⚠️
TODO:

# Dynamic routes
## match any unmatched path | given segment level
TODO:
### app/blog/[slug].tsx -> matches `/blog/123`
TODO:
### app/blog/[...rest].tsx -> matches `/blog/123/settings`
TODO:
### routes / higher specificity -> matched BEFORE dynamic route
TODO:
### multiple slugs matched -- via -- rest syntax (`...`)
TODO:
### dynamic segments accessible -- as -- route parameters | page component
TODO:

# Non-route files
## every file & sub-directory | "app/" is either a _layout file or a route
TODO:
### ❌other files (components, hooks, utilities) can NOT be placed | "app/"❌
TODO:

## Recommended structure
### sort components & hooks by "feature"
TODO:
### sort routes by "navigation pattern"
TODO:
### keeping routes separate -> simplify refactors
TODO:
### utilize path aliases
TODO:

## Reserved keywords
### ❌NOT use as dynamic route parameters❌
TODO:
#### `screen`
TODO:
#### `params`
TODO:
#### `key`
TODO:
#### Reason: 🧠Expo Router is built | React Navigation🧠
TODO:
