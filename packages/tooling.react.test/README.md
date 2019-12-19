# React Component Tester

> @nine-overengineered-design-system/tooling.react.component.test

It just export a binary to execute inside any React Component folder.

## Usage

After installing it as a dependency, just run inside your React Component folder:

```sh
$ react-component-test
```

It just extends the [jest-cli](https://jestjs.io/docs/en/cli) with some defaults.

## Using as npm script

Add as a `devDependency` to your component `package.json` and add the following scripts:

```js
{
  // ...
  "devDependencies": {
    "@nine-overengineered-design-system/tooling.react.component.test": "^0.0.0"
  },
  // ...
  "scripts": {
    "coverage": "$npm_execpath run test -- --coverage",
    "test": "react-component-test"
  }
}
```

### Overriding configuration

You can optionally add a `jest.config.json` inside your component folder to override default configuration. You can do the same for `jest.setup.js`/`setupTest.js`/`src/setupTest.js`.

## License

[MIT License](./LICENSE) / [Beerware](https://en.wikipedia.org/wiki/Beerware)
