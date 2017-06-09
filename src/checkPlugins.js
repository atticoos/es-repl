const moduleExists = require('./moduleExists');

module.exports = function checkPlugins (plugins) {
  return plugins
    .map(plugin => `babel-plugin-${plugin}`)
    .filter(plugin => !moduleExists(plugin))
}
