var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs = require('fs');
    fs.readFile("index.html");

fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

    response.send('Hello World7!');
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
