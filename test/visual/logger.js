var logger = require('../../lib/visual/logger')
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

test('logger outputs what it is given (no colour)', function(t) {
  var output = stdout.inspectSync(function() {
    logger('test')
  })
  t.deepEqual(output, ['test\n'])
  t.end()
})

test('logger outputs what it is given (with color)', function(t) {
  var output = stdout.inspectSync(function() {
    logger('test', 'red')
  })
  t.deepEqual(output, ['test\n'])
  t.end()
})
