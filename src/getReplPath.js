const path = require('path')
const getAppRoot = require('./getAppRoot')

module.exports = function getReplPath() {
  return path.resolve(
    path.join(
      getAppRoot(),
      'playground'
    )
  )
}
