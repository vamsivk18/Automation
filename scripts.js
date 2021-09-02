var robot = require("robotjs");
var fs = require("fs");
setTimeout(openApps,1000);

function openApps(){
    var appdata = fs.readFileSync("./ROBOTJS/apps.json");
    var apps = JSON.parse(appdata);
    for(var i=0;i<apps.length;i++){
        openApp(apps[i]);
    }
}

function openApp(name){
    robot.moveMouse(55,697);
    robot.mouseClick();
    robot.setMouseDelay(1000);
    robot.setKeyboardDelay(1000);
    robot.typeString(name);
    robot.keyTap("enter");
    robot.moveMouse(500,500);
    if(name=="chrome"){
        setTimeout(callChrome,1000);
    }
}
function callChrome(){
    var cData = fs.readFileSync("./ROBOTJS/chrome.json");
    var tabs = JSON.parse(cData);
    for(var i=0;i<tabs.length;i++){
        if(i!=0){
            robot.keyToggle("control","down");
            robot.keyTap("n");
            robot.keyToggle("control","up");
        }
        for(var j=0;j<tabs[i].length;j++){
            if(j!=0){
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
            }
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");
        }
    }
    setTimeout(() => {
        openApp("notepad");
        printNotepad();
    }, 1000);
}
function printNotepad(){
    robot.typeString("The system is ready to use");
}
