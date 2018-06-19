var concat = require('concat-stream');

process.stdin.pipe(concat (function(body){
  var rev= body.toString().split('').reverse().join('');
  console.log(rev);
}))
