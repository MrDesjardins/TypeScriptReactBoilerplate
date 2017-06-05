var express = require('express');
var app = express();
var webpack = require('webpack');
var path = require('path');

app.use(express.static('deploy'));
app.get('/', function (req, res) {
    res.sendfile('./deploy/index.html');
});

app.listen(8080);