

var express = require('express');
var app = express();
var router=require('./route.js');




app.use('/',router);
app.use('/login',router);
app.use('/signup',router);

// app.use(express.static('res'));
// app.use(express.static('img'));



var server = app.listen(process.env.PORT ||8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

