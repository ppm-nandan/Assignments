var tar = require('tar');
var zlib = require('zlib');
var through = require('through2');
var crypto = require('crypto')
var concat = require('concat-stream')
var stream = crypto.createDecipher(process.argv[2], process.argv[3]);

var unzip = zlib.createGunzip();
var parser = new tar.Parse();
parser.on('entry', function(e){
  if(e.type !== 'File')
    return e.resume();
   var h = crypto.createHash('md5', {encoding : 'hex'});
   e.pipe(h).pipe(concat(function(hash){
     console.log(hash + ' ' + e.path);
   }))
})


process.stdin
  .pipe(stream)
  .pipe(unzip)
  .pipe(parser);
