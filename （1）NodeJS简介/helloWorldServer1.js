const http = require("http");

var server = new http.Server();
server.on("request",function(req,res){
    res.write("hello world xinxin1");
    res.end();
});
server.listen(8084);