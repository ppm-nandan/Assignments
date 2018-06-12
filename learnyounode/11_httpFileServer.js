var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
  // req.setEncoding('utf8');
  // var msg= '';
  // req.on
  // res.write(fs.createReadStream(req));
  fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(process.argv[2]);
