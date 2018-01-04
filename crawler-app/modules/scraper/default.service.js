'use strict';
const http = require('request');
const cheerio = require('cheerio');

const parseTitle = (urls) => {
    return Promise.all(urls.map(
        item => {

            if(!item.startsWith('http://') && !item.startsWith('https://'))
                item = 'http://' + item;

            return new Promise(resolve => {
                http(item, (error, response, html) => {
                    if(!error) {
                        const $ = cheerio.load(html);
                        const t =  $('title').text();

                        resolve({adr:item,title:t});
                    } else {
                        resolve({adr:item,title:'NO RESPONSE'});
                    }
                });
            });
        })
    );
};

module.exports = {parseTitle};