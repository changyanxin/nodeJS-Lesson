
    function circumference(r){
        console.log(2*Math.PI*r);
    }
    function area(r){
        console.log( Math.PI*r*r);
    }


module.exports = {
    circumference : circumference,
    area:area
}