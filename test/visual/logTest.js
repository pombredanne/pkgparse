var logger = require('../../lib/visual/logger')
var test = require('tape')
var loggerOutputTest = require('../../lib/visual/loggerOutputTest')

test('logTest returns a string', function(t) {
  t.equal(typeof loggerOutputTest('test'), 'string')
  t.end()
})
