const { spawn: nodeSpawn } = require('child_process')

const defaults = {
  cwd: process.cwd(),
  detached: true,
  stdio: 'inherit'
}

module.exports = function spawn(executable, args = [], opts = {}) {
  const {
    onclose = process.exit.bind(process),
    spawn = nodeSpawn,
    ...override
  } = opts

  return spawn(executable, args, {
    ...defaults,
    ...override
  }).on('close', onclose)
}
