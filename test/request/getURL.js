const test = require('tape')
const request = require('superagent')
const getURL = require('../../lib/request/getURL')

test('return undefined when a real site is not specified', function(t) {
  t.equal(getURL('notarealwebsite.com'), undefined)
  t.end()
})

test('succesfully fetch from a real website', function(t) {
  t.equal(getURL('npmjs.org'), true)
  t.end()
})

test('succesfully get a response from the npm registry', function(t) {
  t.equal(getURL('http://registry.npmjs.org/' + module), true)
  t.end()
})

// test('npm response is a parsable object', function(t) {
//   const registryObject = getURL('http://registry.npmjs.org/pkgparse')
//   const pkgparseObject = JSON.parse(registryObject)  t.deepEqual(pkgparseObject.name, 'pkgparse')
//   t.end()
// })
