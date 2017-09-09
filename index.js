// var https = require("https");
// var server = http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.write("<!DOCTYPE html>");
//     response.write("<html>");
//     response.write("<head>");
//     response.write("<title>Hello World Page</title>");
//     response.write("</head>");
//     response.write("<body>");
//     response.write("Hello World!");
//     response.write("</body>");
//     response.write("</html>");
//     response.end();
// });
//
// server.listen(8080);
// console.log("Server is listening");

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})