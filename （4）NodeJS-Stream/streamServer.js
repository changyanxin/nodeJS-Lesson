const http = require("http");
const path = require("path");
const fs = require("fs");

http.createServer(function(req,res){
    var filePath = path.join(__dirname,"data.txt");
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
}).listen(8081);

console.log("server is listening 8081");