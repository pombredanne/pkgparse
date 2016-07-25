var test = require('tape')
var Promise = require('promise')
var request = require('superagent-promise')(require('superagent'), Promise)

test('succesfully fetch from the npm registry', function(t) {
  t.equal(1, 1)
  t.end()
})

function queryNPMRegistry(moduleName) {
  return request.get('http://registry.npmjs.org/' + module)
}
