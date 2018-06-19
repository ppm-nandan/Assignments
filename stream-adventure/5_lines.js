var through = require('through2');
var split = require('split');

var odd = true;
var stream = through(function(buffer, encoding, next){

  if(odd){
    buffer = buffer.toString().toLowerCase();
    odd = false;
  }else{
    buffer = buffer.toString().toUpperCase();
    odd = true;
  }
  this.push('\n'+buffer);
  next();
})

process.stdin.pipe(split('\n')).pipe(stream).pipe(process.stdout);
