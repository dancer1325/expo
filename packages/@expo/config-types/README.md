* ⭐️Types -- for the -- Expo config object "app.config.ts"⭐️
  * ⚠️100% generated -- based on the -- versioned JSON schemas / hosted | Expo server⚠️

## Usage

```ts
import { ExpoConfig } from '@expo/config-types';

export default (): ExpoConfig => {
  return {
    name: 'My App',
    slug: 'my-app',
  };
};
```

## how to generate them?

TODO: 
- `pnpm generate` - uses the major version from the `package.json`.
- `pnpm generate --path ../../../../universe/server/www/xdl-schemas/UNVERSIONED-schema.json` - uses the latest version from your local directory.
- `pnpm generate 39` - uses the given version.
- `pnpm generate unversioned` - uses the latest version.
