function cirFun(r){
    function circumference(){
        return 2*Math.PI*r;
    }
    function area(){
        return Math.PI*r*r;
    }
    return {
        circumference : circumference,
        area : area
    }
}

module.exports = {
    cirFun : cirFun
}