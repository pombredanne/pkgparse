var stdout = require('test-console').stdout
var stderr = require('test-console').stderr

function logTest(logFunction) {
    return (
      stdout.inspectSync(function() {
        logFunction
      })
    )
}

module.exports = logTest
