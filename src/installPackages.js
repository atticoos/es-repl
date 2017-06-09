const path = require('path')
const npm = require('npm-programmatic')
const getAppRoot = require('./getAppRoot')

module.exports = function installPackages (packages) {
  return npm.install(packages, {
    cwd: getAppRoot(),
    output: true,
    save: false,
    noSave: true
  })
}
