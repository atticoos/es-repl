const fs = require('fs')
const path = require('path')
const npm = require('npm-programmatic')
const getReplPath = require('./getReplPath')

module.exports = function installPackages (packages) {
  return npm.install(packages, {
    cwd: getReplPath(),
    output: true,
    save: false,
    noSave: true
  })
}
