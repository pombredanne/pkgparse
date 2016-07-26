var pull = require('pull-stream')

function values(array) {
  var i = 0
  return function read(abort, cb) {
    if (i === array.length || abort) return cb('done')
    cb(null, array[i++])
  }
}

function sink (read) {
  read(null, function next(err, data) {
    if (err) return console.log(err)
    console.log(data)
    read(null, next)
  })
}

source = values([1, 2, 3, 4, 5, 6])

pull(source, sink)
