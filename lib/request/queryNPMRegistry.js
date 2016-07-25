var Promise = require('promise')
var request = require('superagent-promise')(require('superagent'), Promise)

function queryNPMRegistry(moduleName) {
  return request.get('http://registry.npmjs.org/' + moduleName)
}

console.log(queryNPMRegistry('pkgparse'))

module.exports = queryNPMRegistry
