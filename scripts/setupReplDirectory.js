const fs = require('fs')
const path = require('path')
const getReplPath = require('../src/getReplPath')
const getAppRoot = require('../src/getAppRoot')

const replPath = path.resolve(
  path.join(
    __dirname,
    '..',
    'playground'
  )
)
const templatePath = path.resolve(
  path.join(
    __dirname,
    '..',
    'src',
    'templates'
  )
)

const packagePath = path.resolve(
  path.join(
    replPath,
    'package.json'
  )
)
const babelConfigurationPath = path.resolve(
  path.join(
    replPath,
    '.babelrc'
  )
)

const packageTemplatePath = path.resolve(
  path.join(
    templatePath,
    'package.tpl.json'
  )
)
const babelConfigurationTemplatePath = path.resolve(
  path.join(
    templatePath,
    'babelrc.tpl.json'
  )
)

if (!fs.existsSync(replPath)) {
  fs.mkdirSync(replPath)
}

if (!fs.existsSync(packagePath)) {
  fs.createReadStream(packageTemplatePath)
    .pipe(
      fs.createWriteStream(packagePath)
    )
}

if (!fs.existsSync(babelConfigurationPath)) {
  fs.createReadStream(babelConfigurationTemplatePath)
    .pipe(
      fs.createWriteStream(babelConfigurationPath)
    )
}
