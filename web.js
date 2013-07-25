var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs1 = require('fs');
    var mbuffer = fs1.readFileSync("index.html");
    response.send(mbuffer.toString('utc-8', fs1.readFileSync("index.html")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
