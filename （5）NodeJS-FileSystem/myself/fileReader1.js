const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer(function(req,res){
    if(process.argv[2] == undefined){
        var filePath = __filename;
        fs.readFile(filePath,function(err,data){
            res.write(data.toString());
            res.end();
        })
    }else{
        var filePath = path.join(__dirname,"/" + process.argv[2]);
        if(fs.existsSync(filePath)){
            fs.readFile(filePath,function(err,data){
                res.write(data.toString());
                res.end();  
            });
        }else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.write("dangqianwenjianbucunzai");
            res.end();
        }
    }
}).listen(8081);

console.log("server is istening 8081...");