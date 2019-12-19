const { existsSync } = require('fs')
const { join } = require('path')

module.exports = function getConfig(fileNames, paths = [process.cwd()]) {
  let configFullPath
  for (let path of paths) {
    for (let fileName of fileNames) {
      configFullPath = join(path, fileName)
      if (existsSync(configFullPath)) {
        return configFullPath
      }
    }
  }

  return null
}
