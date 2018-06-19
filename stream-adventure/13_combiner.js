var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');

module.exports = function(){

  var count;
  var file = [];

  var input = through(write,end);
  return combine(
    split(),
    input,
    zlib.createGzip()
  );

  function write(line, _, next){
    if(line.length === 0)
      return next();
    var data = JSON.parse(line);

    if(data.type === 'genre'){
      if(count){
        this.push(JSON.stringify(count)+ '\n');
      }
      count = {name: data.name, books:[]};
    }
    else if(data.type === 'book'){
      count.books.push(data.name);
    }
    next();

  }
  function end(done){
    if(count){
      this.push(JSON.stringify(count)+ '\n');
    }
    done();
  }
}
