const fs = require('fs')
const path = require('path')
const Ora = require('ora')
const chalk = require('chalk')
const npm = require('npm-programmatic')
const getReplPath = require('./getReplPath')


module.exports = function installPackages (packages) {
  const spinner = new Ora()
  spinner.text = `Installing ${packages.length} packages`
  spinner.start()
  return npm.install(packages, {
    cwd: getReplPath(),
    save: false,
    noSave: true
  }).then(() => {
    spinner.succeed(chalk.green(`Installed ${packages.length} packages`))
  }).catch(e => {
    spinner.fail(chalk.red('Installation failed'))
    throw e
  })
}
