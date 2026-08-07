---
title: Clear bundler caches on macOS and Linux
description: Learn how to clear the bundler cache when using Yarn or npm with Expo CLI or React Native CLI on macOS and Linux.
---

* caches / associated -- with -- your project
  * -> can prevent: your project runs as intended
  * steps to clear ALL caches

    ```bash
    $ rm -rf node_modules
    
    # | Yarn
    $ yarn cache clean
    # | npm
    $ npm cache clean --force
    
    # | Yarn
    $ yarn
    # | npm
    $ npm install
    
    $ watchman watch-del-all
    
    $ rm -fr $TMPDIR/haste-map-*
    
    $ rm -rf $TMPDIR/metro-cache
    
    # Expo CLI (Yarn and npm)
    $ npx expo start --clear
    # React Native CLI and Yarn
    $ yarn start -- --reset-cache
    # React Native CLI and npm
    $ npm start -- --reset-cache
    ```

## What these commands are doing

| Command                   | Description                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| `rm -rf node_modules`     | Clear all of the dependencies of your project                                 |
| `yarn cache clean`        | Clear the global Yarn cache                                                   |
| `npm cache clean --force` | Clear the global npm cache                                                    |
| `yarn`/`npm install`      | Reinstall all dependencies                                                    |
| `watchman watch-del-all`  | Reset the `watchman` file watcher                                             |
| `rm -rf $TMPDIR/<cache>`  | Clear the given packager/bundler cache file or directory                      |
| `npx expo start --clear`  | Restart the development server and clear the JavaScript transformation caches |
