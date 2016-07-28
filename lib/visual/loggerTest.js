const stdout = require('test-console').stdout
const stderr = require('test-console').stderr
const logger = require('./logger')

// Inserts the test-console module between the stdout and stderr functions and allows for testing the contents of console.logs being output

function loggerTest(text, color) {
  const output = stdout.inspectSync(function() {
    logger(text, color)
  })
  return output[0]
}

module.exports = loggerTest
