var express = require('express');
var path    = require('path');
var request = require('request')

var url = 'https://www.reddit.com/r/all/top/.json?before=t3_1juwvl&t=all'



var app = express();
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.sendFile(path.join(__dirname+'/index.html'));
})

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});