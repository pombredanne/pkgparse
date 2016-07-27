var loggerTest = require('../../lib/visual/loggerTest')
var test = require('tape')
var stdout = require('test-console').stdout
var stderr = require('test-console').stderr
var loggerTest = require('../../lib/visual/loggerTest')

test('logger output is a string', function(t) {
  t.equal(typeof loggerTest('test'), 'string')
  t.end()
})

test('logger outputs provided text without a colour parameter', function(t) {
  t.deepEqual(loggerTest('test'), 'test\n')
  t.end()
})

test('logger outputs provided text in red', function(t) {
  t.deepEqual(loggerTest('test', 'red'), '\x1b[31mtest\x1b[39m\n')
  t.end()
})
