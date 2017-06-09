const fs = require('fs')
const path = require('path')
const getReplPath = require('./getReplPath')
const appendUniquely = require('./utils/appendUniquely')

const ConfigurationTemplate = {
  presets: [],
  plugins: []
}

function readConfiguration(path) {
  try {
    const content = fs.readFileSync(path)
    return JSON.parse(content)
  } catch (e) {
    return null
  }
}

function writeConfiguration(path, configuration) {
  const content = JSON.stringify(configuration)
  fs.writeFileSync(path, content)
}

function addPlugins(configuration, pluginsToAdd) {
  const plugins = appendUniquely(configuration.plugins, pluginsToAdd)
  return Object.assign({}, configuration, {plugins})
}

function addPresets(configuration, presetsToAdd) {
  const presets = appendUniquely(configuration.presets, presetsToAdd)
  return Object.assign({}, configuration, {presets})
}

module.exports = function updateBabelConfiguration(presets, plugins) {
  const configurationPath = path.resolve(path.join(getReplPath(), '.babelrc'))

  const configuration = readConfiguration(configurationPath) || ConfigurationTemplate

  const updatedConfiguration = addPlugins(
      addPresets(
      configuration,
      presets
    ),
    plugins
  )

  writeConfiguration(configurationPath, updatedConfiguration)
}
