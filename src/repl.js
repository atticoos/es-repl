const path = require('path')
const exec = require('child_process').exec
const getReplPath = require('./getReplPath')
const getAppRoot = require('./getAppRoot')

function getBabelNodeExecutablePath() {
  return path.resolve(
    path.join(
      getAppRoot(),
      'node_modules',
      '.bin',
      'babel-node'
    )
  )
}

module.exports = function createREPL ({presets = [], plugins = []} = {}) {
  let proc = null;

  const executablePath = getBabelNodeExecutablePath()
  const presetFlag = presets.length > 0 ? `--presets=${presets.join(',')}` : ''
  const pluginFlag = plugins.length > 0 ? `--plugins=${plugins.join(',')}` : ''
  const command = `${executablePath} ${presetFlag} ${pluginFlag}`

  function start () {
    proc = exec(
      command,
      {cwd: getReplPath()}
    );

    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    process.stdin.pipe(proc.stdin);
    proc.stdout.pipe(process.stdout);
  }

  function stop () {
    // @TODO
  }

  return {start, stop};
}
