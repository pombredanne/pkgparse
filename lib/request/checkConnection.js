function checkConnection(res) {
  if (res === undefined) {
    return undefined
  } else {
    return JSON.parse(res)
  }
}

module.exports = checkConnection
