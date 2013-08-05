var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs = require('fs');
    x=fs.readFileSync("index.html","utf-8")

    test = "Hello World12!";

//    response.send(test);
    response.send(x);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
