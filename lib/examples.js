var chalk = require('chalk')

function examples() {
  console.log('')
  console.log('   Examples:')
  console.log('')
  console.log('  The flags in brackets eg: [-o chalk] are to be run in the terminal like so: pkgparse -o chalk')
  console.log('')
  console.log(chalk.yellow('   I\'ve assumed your file is not always called package.json so you have to specify it.'))
  console.log('')
  console.log('   [-f] by itself will scan the current directory (use pwd) your terminal window is at')
  console.log('')
  console.log('   [-f ~/Development/0050_pkgparse/package.json]')
  console.log('')
  console.log('   [-f /usr/local/oddplacefora/package.json]')
  console.log('')
  console.log('   [-s tape] would return info about the module tape')
  console.log('')
  console.log('   [-d inu] would return the dependencies that inu relies on')
  console.log('')
  console.log('   [-o pkgparse] would open the pkgparse npm page in your default browser')
  console.log('')
  console.log('   [-o promise chrome] would open the promise npm page in chrome')
  console.log('')
  console.log('   [-o superagent firefox] would open the superagent npm page in firefox')
  console.log('')
  console.log(chalk.yellow('   Technically speaking, you can run any application with -o but you\'ll void your warranty!'))
  console.log('')
}

module.exports = examples
