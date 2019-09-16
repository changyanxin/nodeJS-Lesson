const stream = require("stream");
function MyReadable(){

}
MyReadable.prototype = stream.Readable();

var myRead = new MyReadable();
myRead.push("abcdefghijklmnopqrstuvwxyz");
myRead.push(null);
myRead.pipe(process.stdout);
