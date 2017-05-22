'use strict';

var http = require('http');

function fnhandler(req,res) {
    console.log('Request URL is ' + req.url + ' and Request method is ' + req.method);
        res.writeHead(200,{
        "Content-Type" : "application\json"
    });
    res.end(JSON.stringify({name : "Name from the JSON object"}) + '\n');
}


http.createServer(fnhandler).listen(3030);
