const path = require('path')

module.exports = function getAppRoot () {
  return path.dirname(process.mainModule.filename)
}
