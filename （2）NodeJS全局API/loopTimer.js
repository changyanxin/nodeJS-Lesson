function loop(){
    console.log("I will loop forever!");
}
var timeId1 = setInterval(loop,500);
var timeId2 = setTimeout(function(){
    clearInterval(timeId1);
    console.log("Game over!");
    process.exit();
},5000);
