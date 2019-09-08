function Bomb(){

};
Bomb.prototype.message = "bomb!!!"
Bomb.prototype.explode = function(){
    console.log(this.message);
}
var bomb = new Bomb();
setTimeout(function(){
    bomb.explode();
},2000);