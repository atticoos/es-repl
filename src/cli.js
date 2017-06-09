const meow = require('meow')
const createREPL = require('./repl')
const checkPlugins = require('./checkPlugins')
const checkPresets = require('./checkPresets')
const installPackages = require('./installPackages')
const updateBabelConfiguration = require('./updateBabelConfiguration')

const cli = meow(`
  Usage
    $ es-repl

    Options
      --plugins=a,b,c   plugins to load
      --presets=a,b,c   presets to load
      --save            save the current configuration
`)

const presets = cli.flags.presets ? cli.flags.presets.split(',') : []
const plugins = cli.flags.plugins ? cli.flags.plugins.split(',') : []

const entryPromise = new Promise((resolve, reject) => {
  const presetsToLoad = checkPresets(presets)
  const pluginsToLoad = checkPlugins(plugins)

  const packagesToLoad = presetsToLoad.concat(pluginsToLoad)

  if (packagesToLoad.length > 0) {
    installPackages(packagesToLoad)
      .then(resolve)
      .catch(reject)
  } else {
    resolve()
  }
})

entryPromise.then(() => {
  if (cli.flags.save) {
    return updateBabelConfiguration(presets, plugins)
  }
}).then(() => {
  const repl = createREPL({presets, plugins})
  repl.start()
})
