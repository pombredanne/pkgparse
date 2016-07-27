const examples = require('../../lib/examples.js')
const loggerTest = require('../../lib/visual/loggerTest')
const test = require('tape')
const stdout = require('test-console').stdout
const stderr = require('test-console').stderr

test('examples function returns a string', function(t) {
  t.equal(typeof loggerTest(examples()), 'string')
  t.end()
})
