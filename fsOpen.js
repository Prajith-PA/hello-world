 var fs = require('fs');

fs.open('file.txt','r',function(err,res) {
	var f = res;
	var buf = new Buffer(1000000);

	fs.read(f,buf,0,1000000,null,function(err,res) {
		console.log(buf.toString('utf8',0,res));
		fs.close(f);
	});
	});


