const { parseArgs } = require('./index.js')

module.exports = function prepare(opts = {}, args = process.argv.slice(2)) {
  const { alias = {}, boolean = [], default: defaults } = opts
  const {
    _: passThrough = [],
    ...parsed
  } = parseArgs(args, opts)
  const aliases = Object.keys(alias)

  return [
    ...passThrough,
    ...Object.keys(parsed)
      .filter(key => defaults[key] || !aliases.includes(key))
      .reduce((acc, key) => {
        if (boolean.includes(key) || typeof parsed[key] === 'boolean') {
          return [...acc, key.length === 1 ? `-${key}` : `--${key}`]
        }

        if (defaults[key]) {
          return [...acc, `--${key}`, parsed[key]]
        }

        return [...acc, key.length === 1 ? `-${key}` : `--${key}`, parsed[key]]
      }, [])
  ]
}
