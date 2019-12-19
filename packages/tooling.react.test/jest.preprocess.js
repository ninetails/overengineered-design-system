module.exports = require('babel-jest').createTransformer({
  presets: ['@nine-overengineered-design-system/react'],
  env: {
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
    }
  }
})
