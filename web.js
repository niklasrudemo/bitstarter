var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var mbuffer = fs.readFileSync("index.html");
    var testbuf = new Buffer("Hello World4!","utf-8");
    buffer.write(testbuf);
//    response.send(mbuffer.toString('utf-8', fs.readFileSync("index.html")));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
