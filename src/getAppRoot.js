const path = require('path')

module.exports = function getAppRoot () {
  return path.resolve(
    path.join(
      __dirname,
      '..'
    )
  )
}
