var express = require('express');
var app = express();
var webpack = require('webpack');
var path = require('path');


app.use(express.static('deploy'));
app.get('/', function (req, res) {
    res.sendfile('./deploy/index.html');
});

// Step 1: Create & configure a webpack compiler
var webpack = require('webpack');
var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../webpack.config.js');
var compiler = webpack(webpackConfig);

// Step 2: Attach the dev middleware to the compiler & the server
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

// Step 3: Attach the hot middleware to the compiler & the server
app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.listen(8080);