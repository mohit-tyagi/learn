'use strict'

var express = require('express');
var app = express();
var request = require('request');
var path = require('path');

app.set('views', __dirname + '/src');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var port = 4000;

console.log(' Starting server on port %d ', port);
app.use(express.static(path.join(__dirname + '/src')));

app.listen(port);

console.log("port started");

app.get('/', function(req, res, next) {
    res.render('templates/index.html');
    console.log("got your hit : refreshing");
});
