const fs = require("fs");
const path = require("path");
var readPath = path.join(__dirname,"/from.txt");
var writePath = path.join(__dirname,"/to.txt");
var streamReader = fs.createReadStream(readPath);
var streamWriter = fs.createWriteStream(writePath);
streamReader.pipe(streamWriter);