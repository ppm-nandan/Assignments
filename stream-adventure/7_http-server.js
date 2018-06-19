var http = require('http')
var through = require('through2');

var stream = through(function(buffer, encoding, next){
  buffer = buffer.toString().toUpperCase();
  this.push(buffer);
  next();
})

var server = http.createServer(function (req, res){

  if(req.method === 'POST'){
    req.pipe(stream).pipe(res);
  }
})

server.listen(process.argv[2]);
