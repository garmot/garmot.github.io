var _rootLocation;

$(document).ready(function () {
    _rootLocation = getRootLocation();
    //alert(_rootLocation);
}); 

function getRootLocation(){
    var ret ="";
    
    ret = window.location.host;
    
    if (ret.length > 0){
        ret = "http://" + window.location.host;        
    } else {
        ret = window.location.pathname;
        var xPos = ret.lastIndexOf("/");
        ret = ret.substring(0, xPos);
    }
    
    return ret;
}

function OpenBmiCalculator() {
    //window.open("http://" + window.location.host + "/projects/bmi-calculator/index.html"); 
    window.open(_rootLocation + "/projects/bmi-calculator/index.html"); 
}

function OpenPigGame() {
    //window.open("http://" + window.location.host + "/labs/pig-game/index.html");
    window.open(_rootLocation + "/labs/pig-game/index.html");
} 

function OpenEosPaymentCalculator() {
    window.open(_rootLocation + "/projects/eos-payment-calculator/index.html"); 
} 
 
function OpenTgpMemberShipSystem() {
    window.open(_rootLocation + "/projects/tgp-jed-infosys/index.html"); 
} 





