#!/usr/bin/env node
const { getConfig, prepare, spawn } = require('@nine-overengineered-design-system/tooling.helpers')

spawn(
  'babel',
  prepare({
    alias: {
      s: 'source-maps',
      x: 'extensions'
    },
    boolean: ['source-maps'],
    default: {
      'config-file': getConfig(
        ['babel.config.js', '.babelrc', '.babelrc.js'],
        [process.cwd(), __dirname]
      ),
      extensions: '.ts,.tsx,.js,.jsx,.mjs',
      ignore: [
        '**/*.d.ts',
        '**/*.stories.tsx',
        '**/*.stories.ts',
        '**/*.stories.js',
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.test.js'
      ].join(','),
      'source-maps': true
    }
  })
)
