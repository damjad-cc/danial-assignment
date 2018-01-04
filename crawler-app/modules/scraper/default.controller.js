/**
 * Created by damjad on 12/5/17.
 */
'use strict';

var express = require('express');
var _ = require('lodash');
const scraper = require('./default.service');

var appRoute = new express.Router();

module.exports = function (container) {

    appRoute.get('', function(req, res){

    });

    appRoute.get('/I/want/title/', function(req, res){
        let urls = req.query['address'] || [];
        if(typeof urls === 'string') {
            urls = [urls];
        }
        console.log("--->>>" + urls);

        scraper.parseTitle(urls)
            .then(titles => {
                res.render('index', { title: 'Danial | Assignment', 'result' : titles});
        });
    });
    return appRoute;
}
