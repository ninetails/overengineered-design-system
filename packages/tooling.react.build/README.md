# React Component Builder

> @nine-overengineered-design-system/tooling.react.component.build

It just export a binary to execute inside any React Component folder.

## Usage

After installing it as a dependency, just run inside your React Component folder:

```sh
$ react-component-build src -d lib
```

It just extends the [babel-cli](https://babeljs.io/docs/en/6.26.3/babel-cli) with some defaults.

## Using as npm script

Add as a `devDependency` to your component `package.json` and add the following scripts:

```js
{
  // ...
  "devDependencies": {
    "@nine-overengineered-design-system/tooling.react.component.build": "^0.0.0"
  },
  // ...
  "scripts": {
    "build": "react-component-build src -d lib",
    "postinstall": "[ -f 'lib/index.js' ] || $npm_execpath run build"
  }
}
```

### Overriding configuration

You can optionally add a `.babelrc`/`babel.config.js` inside your component folder to override default configuration.

## License

[MIT License](./LICENSE) / [Beerware](https://en.wikipedia.org/wiki/Beerware)
