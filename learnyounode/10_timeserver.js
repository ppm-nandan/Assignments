var net = require('net');

var server = net.createServer(function(socket){
  socket.end(formatDate(new Date()));

})

server.listen(process.argv[2]);

function formatDate(date) {

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var new_day = ('0' + day).slice(-2);
  var new_month = ("0" + month).slice(-2);
  var hour =('0'+ date.getHours()).slice(-2);
  var min = ('0'+ date.getMinutes()).slice(-2);
  var final_date = year + '-' + new_month+ '-'+ new_day+ ' '+ hour+ ':'+ min+ '\n';
  return final_date;
}
