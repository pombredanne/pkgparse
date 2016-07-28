const test = require('tape')
const checkConnection = require('../../lib/request/checkConnection')

test('returns correct response if the user is offline', function(t) {
  t.deepEqual(checkConnection(undefined), undefined)
  t.end()
})

test('return the correct response if the user is online', function(t) {
  const res =
  t.equal(checkConnection(res), res)
})
