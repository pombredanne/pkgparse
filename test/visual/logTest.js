var logger = require('../../lib/visual/logger')
var test = require('tape')
var logTest = require('../../lib/visual/logTest')

test('logTest returns a string', function(t) {
  t.equal(typeof logTest('test'), 'string')
  t.end()
})
