var stdout = require('test-console').stdout
var stderr = require('test-console').stderr
var logger = require('./logger')

// Inserts the test-console module between the stdout and stderr functions and allows for testing the contents of console.logs being output

function logTest(text, color) {
  var output = stdout.inspectSync(function() {
    logger(text, color)
  })
  return output[0]
}

module.exports = logTest
