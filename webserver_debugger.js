var http = require('http');

function fnHTTPhandler(req,res) {
    var body = 'This is the content from the server';
    var content_length = body.length;

    res.writeHead(200,{
        'Content-Type' : 'text\plain',
        'Content-Length' : content_length
    });

    res.end(body);
}

http.createServer(fnHTTPhandler).listen(3030);