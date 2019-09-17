var base64Str = "emhhbmdzYW46MTIzNDU2";
var bufferStr = Buffer.from(base64Str,"base64");
var utf8Str = bufferStr.toString("utf8");
console.log(utf8Str);