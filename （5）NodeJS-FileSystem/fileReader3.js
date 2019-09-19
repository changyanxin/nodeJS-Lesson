const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        var reader = fs.createReadStream(process.argv[1]);
        reader.pipe(res);
    }else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            var reader = fs.createReadStream(pathName);
            reader.pipe(res);
        }else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.write("文件不存在");
            res.end();
        }       
    }
}).listen(8081);

console.log("server is istening 8081...");