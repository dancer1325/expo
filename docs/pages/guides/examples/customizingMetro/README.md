# Metro bundler
## uses: by `npx expo start` & `npx expo export` -- to -- bundle JS code & assets
* [here](../../../more/examples/expoCLI)
## built & optimized -- for -- React Native
TODO:

# Customizing
## follow the steps
* [here](my-app)
### should export a Metro configuration / extends `expo/metro-config`
* [here](my-app/metro.config.js)

# Assets
## Metro resolves files as either source code or assets
TODO:
### Source code: JavaScript, TypeScript, JSON
TODO:
### Assets: images, fonts, other files / NOT transformed by Metro
TODO:
## `resolver.sourceExts` and `resolver.assetExts`
TODO:
### Adding more file extensions to `assetExts`
TODO:

# Aliases
## redirecting an import -- to -- another module or file
TODO:
### using a custom resolver
TODO:
### platform-specific alias
TODO:
### ❌NO cache❌ -- resolutions are NEVER cached
TODO:

# Bundle splitting
## Expo CLI automatically splits bundles -- based on -- async imports (web-only)
TODO:
### can be used with Expo Router -- to -- split bundle based on route files
TODO:

# Tree shaking
TODO:

# Minification
TODO:

# Web support
## Expo CLI has support for bundling websites -- using -- Metro
TODO:
### Expo webpack vs Expo Metro
TODO:
### Adding Web support to Metro
TODO:
#### `expo.web.bundler: "metro"` | app.json
TODO:
#### Development: `npx expo start --web`
TODO:
#### Static files: root public/ directory
TODO:

# TypeScript
## supports `compilerOptions.paths` and `compilerOptions.baseUrl` | tsconfig.json
TODO:
### enables absolute imports and aliases
TODO:

# CSS
TODO:
