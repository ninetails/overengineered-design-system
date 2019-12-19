module.exports = () => ({
  presets: [
    require('@babel/preset-env'),
    require('@babel/preset-react'),
    require('@babel/preset-typescript')
  ],
  plugins: [
    [require('@babel/plugin-proposal-class-properties'), { loose: true }],
    require('@babel/plugin-proposal-object-rest-spread'),
    require('babel-plugin-macros'),
    [require('@babel/plugin-proposal-pipeline-operator'), { proposal: 'minimal' }]
  ]
})
