var fs = require('fs');
var path = require('path');
var ans = undefined;
module.exports = function (dirname, extension, callback){
  fs.readdir(dirname, function(err, list){
    if(err)
      return callback(err);
    ans = list.filter(function(list){
        return path.extname(list) == ('.'+extension);
    });
    callback(null, ans);
  });
}
