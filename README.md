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