var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(response){
  response.pipe(bl(function (err, data) {
     console.log(data.toString());
  }))
  response.on('end', function(e){
  //console.log('check end1', e);
  http.get(process.argv[3], function(response){
    response.pipe(bl(function (err, data) {
       console.log(data.toString());
    }))
  response.on('end', function(e){


    http.get(process.argv[4], function(response){
      response.pipe(bl(function (err, data) {
         console.log(data.toString());
      }))
    });

  });
  });

});
});
