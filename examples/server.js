var http = require('http')
var pidusage = require('../')

http.createServer(function (req, res) {
  res.writeHead(200)
  res.end('hello world\n')
}).listen(8020)

var interval = setInterval(function () {
  pidusage(process.pid, function (err, stat) {
    if (err) {
      throw err
    }

    console.log(stat)
  })
}, 100)

process.on('exit', function () {
  clearInterval(interval)
})
