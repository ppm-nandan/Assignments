var http = require('http');

http.get(process.argv[2], function(res) {
  //console.log("Got response: " + res.statusCode);
  res.on("data", function (data) {
   /* ... */
   console.log(data.toString());
 })
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
