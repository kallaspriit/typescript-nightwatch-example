# TypeScript Nightwatch Example
**Working nightwatch browser automated testing example using TypeScript.**

## Commands
- `yarn install` the first time to install dependencies (or use `npm install` etc).
- `yarn start` to run the tests (automatically downloads selenium and chromedriver if missing).
- `yarn prettier` to automatically format your code (done automatically before commit).

## Features
- Uses TypeScript & includes type definitions (based on [npm-nightwatch](https://github.com/types/npm-nightwatch)) for [nightwatch.js](http://nightwatchjs.org/) for nice auto-completion and it's harder to shoot oneself in the leg.
- Uses [prettier](https://github.com/prettier/prettier) to enforce common formatting between developers.
- Use [VSCode](https://code.visualstudio.com/) with [prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for best experience.
- Prettier is automatically run before each commit so the styles are enforced even if not using VSCode/Atom etc with the appropriate plugins.
- Uses [selenium-download](https://github.com/groupon/selenium-download) to automatically download selenium binary and chrome driver if does not already exist.
- Uses [node-config](https://github.com/lorenwest/node-config) for powerful configuration management.

## Configuration
- The configuration typings are defined in `src/config/config.dt.ts`, edit this file to reflect the needed structure.
- The default configuration is in `src/config/default.ts`. This should be checked into the repository.
- Developers can create a `src/config/local.ts` with similar structure and only define the properties that are different than the default configuration to override them. This file should not be checked in.