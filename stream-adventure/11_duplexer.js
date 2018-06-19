var spawn = require('child_process').spawn;
var dup = require('duplexer2');
module.exports = function(cmd, args){
    var proc = spawn(cmd, args);
    return dup(proc.stdin, proc.stdout);
}
