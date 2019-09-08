const http = require("http");
const fs = require("fs");
var path = require("path");

var server = http.createServer(function(req,res){
    var htmlPath = path.join(__dirname,"/view/view.html");
    console.log(htmlPath);
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("UTF8");
    res.writeHead(200,{"Content-Type":"text:html"});
    res.write(htmlContent);
    res.end();
});

server.listen(8080);
console.log("server is listening 8080");
