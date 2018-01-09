'use strict';

const express = require('express');
const routes = require('./modules/routes');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var cors = require('cors');


// Constants
const PORT = process.env.server_port || 8080;
const HOST = process.env.server_host || "0.0.0.0";
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("", routes);

app.use('*',function(req, res, next){
    res.status(404);
    res.render('404', { url: req.url });
    return;
});

app.listen(PORT, HOST);
console.log('Running on http://'+HOST+':'+PORT);

