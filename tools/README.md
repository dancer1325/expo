# Expotools

* == CLI + libraries /
  * uses
    * | Expo repository
      * Test & develop CI locally
      * Run tests locally
      * Assist with the release process

## Prerequisites

* `bundle install`

## Usage

TODO: 
Run `expotools` or `et` from the Expo repository to run the latest version of expotools
* This automatically rebuilds the code according to the latest sources.

For example, running `et --help` will display all the available commands.

## Development
Build the code once using `yarn build`.

`yarn watch` will watch for code changes and rebuild the code each time you save
* The standard workflow for developing expotools is to leave `yarn watch` open in one tab and run `./bin/expotools COMMAND` in the other
* Running `./bin/expotools` avoids the update check that happens when calling `expotools` or `et`.
