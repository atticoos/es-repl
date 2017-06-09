const path = require('path')
const getReplPath = require('./getReplPath')

module.exports = function moduleExists (moduleName) {
  try {
    require.resolve(moduleName);
    return true;
  } catch (e) {
    try {
      require.resolve(
        path.join(
          getReplPath(),
          'node_modules',
          moduleName
        )
      )
      return true
    } catch (e) { }
  }
  return false;
}
