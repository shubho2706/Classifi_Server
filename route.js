var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
    res.sendFile('home.html',{root:'res/html'});
});
router.get('/login',function (req,res) {
    res.send('login page');
});
router.get('/signup',function (req,res) {
    res.send('sign up page');
});

module.exports = router;