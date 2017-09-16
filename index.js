

var express = require('express');
var app = express();
var router=require('./route.js');

app.use(express.static('res'));
// app.set('view engine', 'pug');
//
// app.get('/', function(req, res) {
//     res.render('index', { title: 'About dogs', message: 'Dogs rock!' });
// });
app.use(function (req, res, next) {// middle-ware
    console.log('Time:', Date.now());
    next();
});
app.use('/', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});
app.use('/', function (req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
    },
    function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});
 app.use('/', function (req,res,next) {
     console.log('In the first router');/*TODO: Check here the user is logged in or not and accordingly call:next('route')
                                                and/or send the login page*/
     next('route');
 });
 app.use('/',router);// sends the home page as response
// app.use('/login',router);
// app.use('/signup',router);


// app.use(express.static('img'));


var server = app.listen(process.env.PORT ||8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});

