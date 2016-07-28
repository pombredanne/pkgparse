const fs = require('fs')
const Promise = require('promise')
const chalk = require('chalk')
const promiseRead = Promise.denodeify(fs.readFile)
const moduleLookup = require('./moduleLookup')
const gatherDependencies = require('./gatherDependencies')

function getDependencies(fileLocation) {
  promiseRead(fileLocation, 'utf8')

    .then(function(unparsedPackage) {
      console.log(chalk.green('Parsing package from', fileLocation, "\n"))
      const parsedPackage = JSON.parse(unparsedPackage)
      const gatheredDependencies = gatherDependencies(parsedPackage)
      return gatheredDependencies
    })

    .then(function(dependencies) {
      for (const i in dependencies) {
        if (dependencies[i] === dependencies[i - 1]) {
          dependencies.splice(i, 1)
        }
      }
      return dependencies
    })

    .then(function(dependencies) {
      moduleLookup(dependencies)
    })

    .catch(function(err) {
      console.error(chalk.red("Woops, something went wrong!\n"))
      console.error(chalk.cyan("Things to try: \n\n   Is the path to your package.json file correct?\n   Is there actually a package.json file in this directory?    \n   Are you sure you're online?   \n   Perhaps NPM is down? Try http://isup.me/npmjs.org\n   "))
    })
}

module.exports = getDependencies
