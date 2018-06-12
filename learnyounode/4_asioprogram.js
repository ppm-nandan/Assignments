var fs = require('fs');
var num = undefined;

function addOne(callback){
  fs.readFile(process.argv[2], function doneReading(err, data){
    num = data.toString().split('\n').length - 1;
    callback();
  });
}

function printNum(){
  console.log(num);
}

addOne(printNum);
