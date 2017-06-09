const moduleExists = require('./moduleExists')

module.exports = function checkPresets(presets) {
  return presets
    .map(preset => `babel-preset-${preset}`)
    .filter(preset => !moduleExists(preset))
}
