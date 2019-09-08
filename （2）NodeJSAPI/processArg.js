if(process.argv[2] == undefined || process.argv[2] == "-h"){
    console.log("请输入一个运算符表达式");
}else{
    console.log(process.argv[2] + "=" + eval(process.argv[2]));
}