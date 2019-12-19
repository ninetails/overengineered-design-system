#!/usr/bin/env node
const { join } = require('path')
const { getConfig, prepare, spawn } = require('@nine-overengineered-design-system/tooling.helpers')

const defaults = {
  color: true,
  config: getConfig(
    ['jest.config.js'],
    [process.cwd(), __dirname]
  ),
  rootDir: process.cwd(),
  setupFilesAfterEnv: getConfig(
    ['jest.setup.js', 'setupTest.js', join('src', 'setupTest.js')],
    [process.cwd(), __dirname]
  )
}

if (process.env.CI) {
  defaults.ci = true
  defaults.reporters = 'jest-silent-reporter'
}

spawn(
  'jest',
  prepare({
    alias: {
      c: 'config'
    },
    boolean: ['ci'],
    default: defaults
  })
)
