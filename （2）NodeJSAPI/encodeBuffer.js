var username = process.argv[2];
var password = process.argv[3];
console.log("用户名" + username + "密码" + password);
var info = username + ":" + password;
var infoBuffer = Buffer.from(info,"utf8");
var infoBase64 = infoBuffer.toString("base64");
console.log(infoBase64);