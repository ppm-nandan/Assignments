var through = require('through2').obj;
var dup = require('duplexer2');

module.exports = function(counter){

  
  var input = through(write, end);
  return dup({objectMode: true}, input, counter);

  function write(buffer, _, next){
    count[buffer.country] = (count[buffer.country] || 0) + 1;
    next();
  }

  function end(done){
    counter.setCounts(count);
    done();
  }

}
