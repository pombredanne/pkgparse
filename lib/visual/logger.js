var chalk = require('chalk')

function logger(value, color) {
  if (!color) {
    console.log(value)
  } else {
    console.log(chalk[color](value))
  }
}

module.exports = logger
