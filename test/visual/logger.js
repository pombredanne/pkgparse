var logger = require('../../lib/visual/logger')
var test = require('tape')
var stdout = require('test-console').stdout
var stderr = require('test-console').stderr
var logTest = require('./logTest')

test('logger output is a string', function(t) {
  var output = stdout.inspectSync(function() {
    logger('test')
  })
  t.equal(typeof output[0], 'string')
  t.end()
})

test('logger outputs provided text without a colour parameter', function(t) {
  var output = stdout.inspectSync(function() {
    logger('test')
  })
  t.deepEqual(output, ['test\n'])
  t.end()
})

test('logger outputs provided text in red', function(t) {
  var output = stdout.inspectSync(function() {
    logger('test', 'red')
  })
  t.deepEqual(output, ['\x1b[31mtest\x1b[39m\n'])
  t.end()
})
