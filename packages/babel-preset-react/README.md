# @nine-overengineered-design-system/babel-preset-react

> Default Babel Preset for React bindings

## Usage

Just import inside your `package.json` and use it as **preset** inside your `babel.config.js` file:

```js
// babel.config.js
module.exports = {
  presets: ["@nine-overengineered-design-system/react"],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}]
      ]
    }
  }
}
```
