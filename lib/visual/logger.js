var chalk = require('chalk')

function logger(value, color) {
  console.log(chalk['green'](value))
}

module.exports = logger
