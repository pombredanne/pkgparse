const examples = require('../../lib/examples.js')
const loggerOutputTest = require('../../lib/visual/loggerOutputTest')
const test = require('tape')
const stdout = require('test-console').stdout
const stderr = require('test-console').stderr

test('examples function returns a string', function(t) {
  t.equal(typeof loggerOutputTest(examples()), 'string')
  t.end()
})
