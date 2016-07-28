const request = require('superagent')

function getURL(url) {
  return request.get(url).text
}

module.exports = getURL
