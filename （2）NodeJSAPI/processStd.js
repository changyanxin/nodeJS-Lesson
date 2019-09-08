var i = 0;
var user = {
    name : "zhangsan",
    qq : "52367415",
    email : "55245445@qq.com",
    mobile : "1567856845"
};
process.stdin.on("data",function(data){
    i++;
    if(i < 5){
        // console.log(data);
        var data1 = data.toString();
        console.log(data1);
        console.log(user[data1]);
    }else{
        console.log(user);
        process.exit();
    }
})
