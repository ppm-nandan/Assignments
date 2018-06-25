
var http = require('http');
var fs = require('fs');
//var request = require('request');
var url= require('url');
const qstring = require('querystring');
const csvtojson = require('csvtojson');

// var student_fields= ['Name', 'Roll', 'Phone', 'Email'];
// var teacher_fields= ['Name', 'Dept', 'Phone', 'Email'];
// fs.appendFile('student_record.csv', student_fields+ '\n',function(err){
//   if(err)
//     throw err;
// });
// fs.appendFile('teacher_record.csv', teacher_fields + '\n',function(err){
//   if(err)
//     throw err;
// });
var server = http.createServer(function(request, response){
  var path = url.parse(request.url).pathname;
  var rand_num = Math.ceil(Math.random()*100);
  rand_num = rand_num.toString();
  switch(path){
    case '/':
      fs.readFile('./front_page.html', function(error, data){
        if (error) {
            response.writeHead(404);
            response.write(error);
            response.end();
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        }
      });
      break;

    case '/students/new':
      fs.readFile('./student.html', function(error, data){
        if (error) {
            response.writeHead(404);
            response.write(error);
            response.end();
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        }
      });
      break;

    case '/teachers/new':
        fs.readFile('./teacher.html', function(error, data){
          if (error) {
              response.writeHead(404);
              response.write(error);
              response.end();
          } else {
              response.writeHead(200, {'Content-Type': 'text/html'});
              response.write(data);
              response.end();
          }
        });
       break;

    case '/teachers/created':
      if(request.method === 'POST'){
        var body = "";
        request.on('data', chunk => {
          body+= chunk.toString();
        });
        request.on('end', ()=>{
          var obj = qstring.parse(body);
          var arr = [rand_num, obj.fname, obj.dept, obj.phone, obj.email];
          fs.appendFile('teacher_record.csv', arr+ '\n',function(err){
            if(err)
              throw err;
          });
        })
      }
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write("Teacher details has been submitted.");
      //response.write(qstring.parse(body));
      response.end();
      break;

    case '/students/created':
      if(request.method === 'POST'){
        var body = "";
        request.on('data', chunk => {
          body+= chunk.toString();
        });
        request.on('end', ()=>{
          var obj = qstring.parse(body);
          var arr = [rand_num, obj.fname, obj.roll, obj.phone, obj.email];
          fs.appendFile('student_record.csv', arr+ '\n',function(err){
            if(err)
              throw err;
            });
          })
        }
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write("Student Details has been submitted.");
      response.end();
      break;

    case '/students':
      //console.log("entered");
      csvtojson()
      .fromFile('student_record.csv')
      .then((jsonObj) => {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(jsonObj));
        response.end();
      });
      break;

    case '/teachers':
      csvtojson()
      .fromFile('teacher_record.csv')
      .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(jsonArrayObj));
        response.end();
      });

      break;

    default:
      var ids = path.split("/");
        var thenum = path.match(/\d+/);
        if(thenum != null){
          var num = thenum[0];
          if(ids[1] === "students"){
            csvtojson()
              .fromFile('student_record.csv')
              .on('data', (data)=>{
                var json = JSON.parse(data.toString());
                if(json["ID"] === num){
                  response.end(data.toString());
                }
              })
          }

          if(ids[1] === "teachers"){
            csvtojson()
              .fromFile('teacher_record.csv')
              .on('data', (data)=>{
                var json = JSON.parse(data.toString());
                if(json["ID"] === num){
                  response.end(data.toString());
                }
              })
          }

        }

  }
});

server.listen(8080);
