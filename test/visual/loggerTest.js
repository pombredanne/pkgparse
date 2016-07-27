var logger = require('../../lib/visual/logger')
var test = require('tape')
var loggerTest = require('../../lib/visual/loggerTest')

test('logTest returns a string', function(t) {
  t.equal(typeof loggerTest('test'), 'string')
  t.end()
})
