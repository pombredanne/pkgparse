const Promise = require('promise')
const request = require('superagent-promise')(require('superagent'), Promise)
const chalk = require('chalk')
const moduleLookup = require('./moduleLookup')

function dependencyLookup(module) {
  request
    .get('http://registry.npmjs.org/' + module)
    .end(function(err, res) {
      if (res === undefined) {
        console.error(chalk.red("Looks like you're offline"))
      } else {
        res = JSON.parse(res.text)

        if (res.name !== undefined) {
          const dist = res['dist-tags'].latest

          console.log(chalk.green(res.name))

          for (const i = 0; i < res.name.length; i++) {
            process.stdout.write('-')
          }

          if (res.versions[dist].dependencies !== undefined) {
            console.log('\nDependencies')
            for (const i in Object.keys(res.versions[dist].dependencies)) {
              console.log(chalk.green('↳', Object.keys(res.versions[dist].dependencies)[i]))
            }
          }

          if (res.versions[dist].devDependencies !== undefined) {
            console.log('\nDev Dependencies')

            for (const i in Object.keys(res.versions[dist].devDependencies)) {
              console.log(chalk.green('↳', Object.keys(res.versions[dist].devDependencies)[i]))
            }
          }

          if (res.versions[dist].dependencies === undefined && res.versions[dist].devDependencies === undefined) {
            console.log(chalk.red("\nThis package has no dependencies. It's probably one of those half finished ones?"))
          }

        } else {
          console.log(chalk.red("That package doesn't exist"))
        }
      }
    })
}

module.exports = dependencyLookup
