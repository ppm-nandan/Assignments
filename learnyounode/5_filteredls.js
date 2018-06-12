var fs = require('fs');
var path = require('path');
var suf = '.' + process.argv[3];
var ans = undefined;
function filterls(callback){
  fs.readdir(process.argv[2], function(err, list){
      ans = list.filter(function(list){
        return path.extname(list) == suf;
      });
      callback();
  });
}

function input(){
  for(var i =0; i<ans.length; i++){
    console.log(ans[i]);
  }
}

filterls(input);
