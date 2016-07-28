const loggerTest = require('../../lib/visual/loggerTest')
const test = require('tape')
const stdout = require('test-console').stdout
const stderr = require('test-console').stderr
const loggerTest = require('../../lib/visual/loggerTest')

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
