var trumpet = require('trumpet');
var fs = require('fs');
var through = require('through2');
var tr = trumpet();

var stream = tr.select('.loud').createStream();

stream.pipe(through (function(buffer, _, next){
  buffer = buffer.toString().toUpperCase();
  this.push(buffer);
  next();
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout)
