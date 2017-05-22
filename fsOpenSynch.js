var fs = require('fs');
var buf = new Buffer(100000);

var fhandler = fs.openSync('file.txt','r');
var read = fs.readSync(fhandler,buf,0,100000);

//console.log(buf);
//console.log(buf.toString('utf8'));
console.log(buf.toString('utf8',0,read));
