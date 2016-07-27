var logger = require('../../lib/visual/logger')
var test = require('tape')
var stdout = require('test-console').stdout
var stderr = require('test-console').stderr
var logTest = require('../../lib/visual/logTest')

test('logger output is a string', function(t) {
  t.equal(typeof logTest('test'), 'string')
  t.end()
})

test('logger outputs provided text without a colour parameter', function(t) {
  t.deepEqual(logTest('test'), 'test\n')
  t.end()
})

test('logger outputs provided text in red', function(t) {
  t.deepEqual(logTest('test', 'red'), '\x1b[31mtest\x1b[39m\n')
  t.end()
})
