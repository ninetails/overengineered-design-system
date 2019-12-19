const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = async ({ config }) => {
  config.module.rules.push({
    enforce: 'pre',
    test: /\.js$/,
    use: 'source-map-loader'
  })

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: [/node_modules\//],
    include: path.resolve(__dirname, '../..'),
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@nine-overengineered-design-system/react'],
          plugins: [require.resolve('react-refresh/babel')]
        }
      },
      require.resolve('react-docgen-typescript-loader')
    ]
  })

  config.resolve.extensions.push('.tsx', '.ts')

  config.plugins.push(new ReactRefreshWebpackPlugin({ disableRefreshCheck: true }))

  return config
}
