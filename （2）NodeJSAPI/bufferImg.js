var http = require("http");
var fs = require("fs");
var path = require("path");
http.createServer(function(req,res){
    var imgPath = path.join(__dirname,"/shaosiming.jpg");
    var imgContent = fs.readFileSync(imgPath);
    var imgBase64 = imgContent.toString("base64");
    var imgSrc = "data:image/jpg;base64," + imgBase64;
    var htmlContent = "<!DOCTYPT html><head></head>" + 
    "<body><img src='" + imgSrc + "'/>" + "</body></html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
}).listen(8081);

console.log("server is listening 8081");