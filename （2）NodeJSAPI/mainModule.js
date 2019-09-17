var circleModule = require("./circleModule.js");//得到的值是第三方模块的一个对象
var r = process.argv[2];
var circleObj = circleModule.cirFun(r);
console.log(circleObj.circumference());
console.log(circleObj.area());

