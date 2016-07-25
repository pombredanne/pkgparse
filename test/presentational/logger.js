var logger = require('../../lib/presentational/logger')
var test = require('tape')
var stdout = require('test-console').stdout
var stderr = require('test-console').stderr

test('logger output is a string', function(t) {
  var output = stdout.inspectSync(function() {
    logger('test')
  })
  t.equal(typeof output[0], 'string')
  t.end()
})


test('test logger with an output value', function(t) {
  var output = stdout.inspectSync(function() {
    logger('test')
  })
  t.deepEqual(output, ['test\n'])
  t.end()
})
