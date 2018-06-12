var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var total = 0;
for(var i =0; i< str.length; i++){
  if(str[i] == '\n'){
    total++;
  }
}

console.log(total);
