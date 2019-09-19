const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];
//argv[0]:node安装文件路径，arg[1]当前脚本文件路径
http.createServer(function(req,res){
    if(fileName == undefined){
        var str="";
        /**
         * fs.readFile()是一个异步方法，执行到该语句时不会等待文件读取完成，直接执行
         * 后面的语句
         * 回调函数等待文件读取完成之后才执行
         */
        fs.readFile(process.argv[1],function(err,data){
            if(err){
                console.log(err);
            }else{
                //当data为img时，直接向浏览器传入buffer数据，浏览器自动解析
                str=data.toString();
                res.write(str);
                res.end();
            }
        });
    }else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.readFile(pathName,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    res.write(data.toString());
                    res.end();
                }
            })
        }else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.write("文件不存在");
            res.end();
        }
    }
}).listen(8081);

console.log("server is istening 8081...");