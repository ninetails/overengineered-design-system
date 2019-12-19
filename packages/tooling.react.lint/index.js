#!/usr/bin/env node
const { getConfig, prepare, spawn } = require('@nine-overengineered-design-system/tooling.helpers')

spawn(
  'eslint',
  prepare({
    default: {
      config: getConfig(
        ['.eslintrc', '.eslintrc.js'],
        [process.cwd(), __dirname]
      ),
      ext: '.js,.jsx,.ts,.tsx,.mjs'
    }
  })
)
