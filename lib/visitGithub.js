var Promise = require('promise')
var request = require('superagent-promise')(require('superagent'), Promise)

function visitGithub() {
  request
    .get('http://registry.npmjs.org/' + module)
    .end(function(err, res) {
      if (res === undefined) {
        console.error(chalk.red("Looks like you're offline"))
      } else {
        res = JSON.parse(res.text)

        if (res.name !== undefined) {
          var dist = res['dist-tags'].latest

          console.log(chalk.green(res.name))

          for (var i = 0; i < res.name.length; i++) {
            process.stdout.write('-')
          }

          if (res.versions[dist].dependencies !== undefined) {
            console.log('\nDependencies')
            for (var dep in Object.keys(res.versions[dist].dependencies)) {
              console.log(chalk.green('↳', Object.keys(res.versions[dist].dependencies)[dep]))
            }
          }

          if (res.versions[dist].devDependencies !== undefined) {
            console.log('\nDev Dependencies')

            for (var devDep in Object.keys(res.versions[dist].devDependencies)) {
              console.log(chalk.green('↳', Object.keys(res.versions[dist].devDependencies)[devDep]))
            }
          }

          if (res.versions[dist].dependencies === undefined && res.versions[dist].devDependencies === undefined) {
            console.log(chalk.red("\nThis package has no dependencies. It's probably one of those half finished ones?"))
          }

        } else {
          console.log(chalk.red("That package doesn't exist"))
        }
}

module.exports = visitGithub
