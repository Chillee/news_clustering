var express = require('express');
var path    = require('path');
var request = require('request');
var cors    = require('cors');


var app = express();
// app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res, next) {

    res.sendFile(path.join(__dirname+'/index.html'));
});


var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});