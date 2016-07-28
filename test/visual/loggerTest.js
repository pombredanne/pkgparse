const logger = require('../../lib/visual/logger')
const test = require('tape')
const loggerTest = require('../../lib/visual/loggerTest')

test('logTest returns a string', function(t) {
  t.equal(typeof loggerTest('test'), 'string')
  t.end()
})
