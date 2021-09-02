console.log("Hello World!");
var robot = require("robotjs");
var id = setInterval(getPosition,1000);
function getPosition(){
var val = robot.getMousePos();
console.log(val);
if(val.x==0 && val.y==0){
    clearInterval(id,1000);
}
}