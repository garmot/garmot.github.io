var _rootLocation;

$(document).ready(function () {
    //alert("Index.js");
    _rootLocation = getRootLocation();
    alert(_rootLocation);
}); 

function OpenBmiCalculator() {
    window.open("http://" + window.location.host + "/projects/bmi-calculator/index.html"); 
    //window.open(_rootLocation + "/projects/bmi-calculator/index.html"); 
}

function OpenPigGame() {
    window.open("http://" + window.location.host + "/labs/pig-game/index.html");
    //window.open(_rootLocation + "/labs/pig-game/index.html");
} 

function getRootLocation(){
    var ret ="";
    
    ret = window.location.host;
    if (ret !== ""){
        ret = "http://" + _rootLocation;        
    } else {
        ret = window.location.pathname;
        var xPos = ret.lastIndexOf("/");
        ret = ret.substring(0, xPos);
    }
    
    return ret;
}

 

