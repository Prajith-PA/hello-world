// include fs module

var fs = require('fs');

function fnRead(path,callback) {
    fs.open(path,'r',function(err,f){
        if(err) {
            callback(err); 
            return;
        } else if(!f) {
            callback(makeerror("invalid handler","Invalid handler from the fs.open"));
            return;
        }
        fs.stat(path,function(err,stats){
            if(err) {
                callback(err);
                return;
            }
            if(stats.isFile()) {
                var buf = new Buffer(10000);
                fs.read(f,buf,0,10000,null,function(err,bytes,buffer){
                    if(err) {
                        callback(err);
                        return;
                    }
                    console.log(buffer.toString('utf8',0,bytes));
                    fs.close(f,function(err){
                        if(err) {
                            callback(err);
                        }
                        console.log(bytes);
                        console.log(buffer.toString('utf8',0,bytes));
                        //callback(null,buf.toString('utf8'));
                        //callback(null,buf.toString('utf8',bytes));
                       //callback(null,buf.toString('utf8',bytes,buffer));
                    });
                })
                
            } else {
                callback(makeerror("invalid file","Not a valid file"));
            }
        });
    })
}


//--------------------

function makeerror(code,mesg) {
    var e = new Error(mesg);
    e.code = mesg;
    return e;
}


fnRead('file.txt',function(err,content) {
    if(err) {
        console.log(err);
    } else {
        console.log(content);
        console.log(content.length);
    }
    
});