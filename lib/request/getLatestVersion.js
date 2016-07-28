function getLatestVersion(res) {
 return res['dist-tags'].latest
}

module.exports = getLatestVersion
