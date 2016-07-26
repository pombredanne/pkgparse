var examples = import('../../lib/examples.js')
var logger = require('../../lib/visual/logger')
var test = require('tape')
var stdout = require('test-console').stdout
var stderr = require('test-console').stderr

test('examples function returns a string', function(t) {
  var output = stdout.inspectSync(function() {
    logger(examples())
  })
  t.equal(typeof output[0], 'string')
  t.end()
})
