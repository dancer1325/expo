---
title: Top-level src directory
description: Learn how to use a top-level src directory in your Expo Router project.
---

* top-level "src/"    /    contains "app/" + "components/" + "constants/" + "hooks/"
  * if you create the project -- through -- 
    * default template
      * | SDK v55+, -> ALREADY included
      * | SDK v55-, -> you need to configure MANUALLY
    * ANOTHER approach -> you need to configure MANUALLY

## Using a top-level src directory

* steps
  * refactor your app -- to -- 

    <FileTree
      files={['src/app/_layout.tsx', 'src/app/index.tsx', 'src/components/button.tsx', 'package.json']}
    />
  * | "tsconfig.json",
    * update [TypeScript path aliases](../../guides/typescript.md#path-aliases-optional) == "src/"

        ```json tsconfig.json
        {
          "compilerOptions": {
            "paths": {
              "@/*": ["./src/*"]
            }
          }
        }
        ```
  * 

    ```bash
    # start
    npx expo start
    
    # Or export for production
    npx expo export
    ---
    yarn expo start
    
    # Or export for production
    yarn expo export
    ---
    pnpm expo start
    
    # Or export for production
    pnpm expo export
    ---
    bun expo start
    
    # Or export for production
    bun expo export
    ```

### Notes

TODO: 
- The config files (**app.config.ts**, **app.json**, **package.json**, **metro.config.js**, **tsconfig.json**) should remain in the root directory.
- The **src/app** directory takes higher precedence than the root **app** directory. Only the **src/app** directory will be used if you have both.
- The **public** directory should remain in the root directory.
- Static rendering will automatically use the **src/app** directory if it exists.
- You may consider updating any [type aliases](/guides/typescript#path-aliases) to point to the **src** directory instead of the root directory.

## Custom directory == CUSTOM root directory

* ⚠️HIGHLY discouraged⚠️
  * Reason:🧠it may lead to unexpected behavior
    * MANY tools' assumed root directory: 
      * "app/", OR
      * "src/app/"
    * ONLY tools / exact version of Expo CLI respect the config plugin🧠
