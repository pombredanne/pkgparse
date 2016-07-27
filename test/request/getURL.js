var test = require('tape')
var request = require('superagent')
var getURL = require('../../lib/request/getURL')

test('return undefined when a real site is not specified', function(t) {
  t.equal(getURL('notarealwebsite.com'), undefined)
  t.end()
})

test('succesfully fetch from a real website', function(t) {
  t.equal(getURL('npmjs.org'), true)
  t.end()
})
