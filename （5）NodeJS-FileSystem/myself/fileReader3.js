var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(req,res){
    if(process.argv[2] == undefined){
        var reader = fs.createReadStream(__filename);
        reader.pipe(res);
    }else{
        var pathName = path.join(__dirname,process.argv[2]);
        if(fs.existsSync(pathName)){
            var reader = fs.createReadStream(pathName);
            reader.pipe(res);
        }else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.write("dangqianwenjianbucunzai");
            res.end();
        }
    }
}).listen(8081);