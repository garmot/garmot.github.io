
$( document ).ready(function() {
	$("#radialSec").hide();
	$("#barSec").hide();
	$("#infoSec").hide();
	$("#jumboUnderWeight").hide();
	$("#jumboHealthy").hide();
	$("#jumboOverWeight").hide();
	$("#jumboObese").hide();
    $("#divMsgArea").hide();    
	
	//Height Slider [ENGLISH]
	$("#htEn").slider();
	$("#htEn").on("slide", function(slideEvt){
		sliderChanged(slideEvt.value.newValue);
	});	
	$("#htEn").on("change", function(slideEvt){
		sliderChanged(slideEvt.value.newValue);
	});
	
	//Height Feet SpinBox [ENGLISH]
	$("#htFtEnSb").jqxNumberInput({
		width: '60px',
		height: '25px',
		min: 4, max: 6,
		decimalDigits: 0,
		spinButtons: true,
		digits: 1,
		inputMode: 'simple', 
		spinMode: 'advanced'
	});	
	$('#htFtEnSb').val(5);
	$("#htFtEnSb").on('valueChanged', function (event)
	{				
		var ftVal = event.args.value;	
		var inVal = $("#htInEnSb").val();
		setEnglishLimit(ftVal, inVal);		
	});
	
	//Height Inch SpinBox [ENGLISH]
	$("#htInEnSb").jqxNumberInput({
		width: '60px',
		height: '25px',
		min: 0, max: 11,
		decimalDigits: 0,
		spinButtons: true,
		digits: 2,
		inputMode: 'simple', 
		spinMode: 'advanced'
	});	
	$('#htInEnSb').val(7);	
	$("#htInEnSb").on('valueChanged', function (event)
	{	
		var inVal = event.args.value;			
		var ftVal = $("#htFtEnSb").val();
		setEnglishLimit(ftVal, inVal);
	});
    $('#htInEnSb').on('textchanged', function (event) 
    {
        return false;
    });
    
    
    setEnglishLimit($("#htFtEnSb").val(), $("#htInEnSb").val());
    
	//Weight Slider
	$("#wtEn").slider();
	$("#wtEn").on("slide", function(slideEvt){
		$('#wtMtSb').val(slideEvt.value);
	});		
	$("#wtEn").on("change", function(slideEvt){
		$('#wtEnSb').val(slideEvt.value.newValue);
	});	    
    
	//Weight SpinBox [ENGLISH]
	$("#wtEnSb").jqxNumberInput({
		width: '60px',
		height: '25px',
		min: 66, max: 331,
		decimalDigits: 0,
		spinButtons: true,
		digits: 3,
		inputMode: 'simple', 
		spinMode: 'advanced'
	});
	$('#wtEnSb').val(154);	
	$("#wtEnSb").on('valueChanged', function (event)
	{
		var wt = event.args.value;
		if(wt > 331){
			wt = 331;
		}else if (wt < 66){
			wt = 66;
		}
		$("#wtEn").slider('setValue', wt);
	});    
    
    
	//Height Slider
	$("#htMetric").slider();
	$("#htMetric").on("slide", function(slideEvt){
		$('#htMtSb').val(slideEvt.value.newValue);
	});	
	$("#htMetric").on("change", function(slideEvt){
		$('#htMtSb').val(slideEvt.value.newValue);
	});
	
	//Height SpinBox
	$("#htMtSb").jqxNumberInput({
		width: '60px',
		height: '25px',
		min: 130, max: 200,
		decimalDigits: 0,
		spinButtons: true,
		digits: 3,
		inputMode: 'simple', 
		spinMode: 'advanced'
	});					
	$('#htMtSb').val(170);	
	$("#htMtSb").on('valueChanged', function (event)
	{
		var ht = event.args.value;
		if(ht > 200){
			ht = 200;
		}else if (ht < 130){
			ht = 200;
		}
		$("#htMetric").slider('setValue', ht);
	}); 
	
	//Weight Slider
	$("#wtMetric").slider();
	$("#wtMetric").on("slide", function(slideEvt){
		$('#wtMtSb').val(slideEvt.value);
	});		
	$("#wtMetric").on("change", function(slideEvt){
		$('#wtMtSb').val(slideEvt.value.newValue);
	});	
	
	//Weight SpinBox
	$("#wtMtSb").jqxNumberInput({
		width: '60px',
		height: '25px',
		min: 30, max: 150,
		decimalDigits: 0,
		spinButtons: true,
		digits: 3,
		inputMode: 'simple', 
		spinMode: 'advanced'
	});
	$('#wtMtSb').val(70);	
	$("#wtMtSb").on('valueChanged', function (event)
	{
		var wt = event.args.value;
		if(wt > 150){
			wt = 150;
		}else if (wt < 30){
			wt = 30;
		}
		$("#wtMetric").slider('setValue', wt);
	}); 
	
	//Radial Indicator
	$('#radial').radialIndicator({
		barColor: {	 
			0 : '#0000FF', 
			18.5 : '#008000', 
			25 : '#999900', 				
			30 : '#FF0000',
			88.70 : '#FF0000'
		},
		initValue: 0,
		barWidth: 10,        
		minValue: 0,
		maxValue: 88.70,
		roundCorner : true,
		percentage: false,
		format: '###',
		frameTime: 0.1
	});
	
	//Bar Indicator
	var opt = {
		horBarHeight: 30,
		labelVisibility: 'hidden',
		numType: 'absolute',
		numMin: 0,
		numMax: 40,
		colorRange: true,
		colorRangeLimits: {
		newRangeOne: '0-18.4-blue',
		newRangeTwo: '18.5-24.9-green',
		newRangeThree: '25-29.9-#999900',			
		newRangeFour: '30-40-red',
		},
		milestones: {
			1: {
			mlPos: 0,
			mlId: false,
			mlDim: '200%',
			mlLabel: 'Underweight',
			mlLabelVis: 'visible',
			mlHoverRange: 15,
			mlLineWidth: 2
			},
			2: {
			mlPos: 18.5,
			mlId: false,
			mlDim: '200%',
			mlLabel: 'Healthy',
			mlLabelVis: 'visible',
			mlHoverRange: 15,
			mlLineWidth: 2
			},
			3: {
			mlPos: 25,
			mlId: false,
			mlDim: '200%',
			mlLabel: 'Overweight',
			mlLabelVis: 'visible',
			mlHoverRange: 15,
			mlLineWidth: 2
			},
			4: {
			mlPos: 30,
			mlId: false,
			mlDim: '200%',
			mlLabel: 'Obese',
			mlLabelVis: 'visible',
			mlHoverRange: 15,
			mlLineWidth: 2
			}
		}
	};	
	$("#bar").barIndicator(opt);      
});	

function sliderChanged(cmVal){
	var valNan = isNaN(cmVal);
	if(valNan === false){
		var feet, feetVal, inch, inchVal;
		feetVal = cmVal / 30.48;
		feet = Math.trunc(feetVal);
		$('#htFtEnSb').val(feet);
		
		inchVal = (feetVal - feet) * 12;	
		inc = Math.trunc(Math.round(inchVal));
		if(inc > 11){
			inc = 11;
		}
		$('#htInEnSb').val(inc);
	}
}

function calculate(calcType){
	$("#radialSec").show();
	$("#barSec").show();
	$("#infoSec").show();
			
	var bmi, ht, wt, bmiType;
    var htFt, htIn, wtLbs;
    
	switch(calcType){
		case 'metric':            
			ht = parseInt($('#htMtSb').val());
			wt = parseInt($('#wtMtSb').val());           
			bmi = (wt) / ((ht/100)*(ht/100));
			bmi = bmi.toFixed(1);   
            break;
        case 'english':
            htFt = parseInt($('#htFtEnSb').val());
            htIn = parseInt($('#htInEnSb').val());
            ht = getHeightCm(htFt, htIn);
            wtLbs = $('#wtEnSb').val();
            wt = Math.round(wtLbs * 0.453592);
			bmi = (wt) / ((ht/100)*(ht/100));
			bmi = bmi.toFixed(1);      
            break;
        case 'other':
 			htFt = parseInt($('#othHtFt').val());
            htIn = parseInt($('#othHtIn').val());
            wt = parseInt($('#othWt').val());
            
            if(isNaN(htFt) || isNaN(htIn) || isNaN(wt)){
                hideResultArea();
                
                var msgVal;
                
                if ((isNaN(htFt) || isNaN(htIn)) && isNaN(wt)) {
                    msgVal = "***Please enter your height & weight.";   
                } else {
                    if (isNaN(htFt) || isNaN(htIn)) {
                        msgVal = "***Please enter your height.";   
                    }
                    if (isNaN(wt)) {
                        msgVal = "***Please enter your weight.";   
                    } 
                }
                                
                $("#msgArea").text(msgVal);
                $("#divMsgArea").show();    
                return;
            }
            
            $("#divMsgArea").hide();    
            ht = getHeightCm(htFt, htIn);    
            bmi = (wt) / ((ht/100)*(ht/100));
            bmi = bmi.toFixed(1);   
            break;
        default:
	}

	var radialObj = $('#radial').data('radialIndicator');
	radialObj.animate(bmi);  	
	reanimate_bar(bmi);
	
	var heartIcon;
	var heart = $("#heart");
	var hearDescVal;
	var heartDesc = $("#heartDesc");
			
	if(bmi>=0 && bmi <=18.4){
		heartIcon = "Images/heart-icon-underweight.png";
		hearDescVal = "Underweight (BMI less than 18.5)";
		bmiType = "underweight";
	}else if(bmi>=18.5 && bmi <=24.9){
		heartIcon = "Images/heart-icon-normal.png";	
		hearDescVal = "Healthy Weight (BMI 18.5 to 24.9)";	
		bmiType = "healthy";			
	}else if(bmi>=25 && bmi <=29.9){
		heartIcon = "Images/heart-icon-overweight.png";			
		hearDescVal = "Overweight (BMI 25 to 30)";			
		bmiType = "overweight";	
	}else{
		heartIcon = "Images/heart-icon-obese.png";		
		hearDescVal = "Obese (BMI 30 +)";	
		bmiType = "obese";	
	}		
	heart.attr('src', heartIcon);
	heartDesc.text(hearDescVal);
	
	//TIPS
	$("#jumboUnderWeight").hide();
	$("#jumboHealthy").hide();
	$("#jumboOverWeight").hide();
	$("#jumboObese").hide();
	
	switch(bmiType){
		case 'underweight':
			$("#jumboUnderWeight").show();
			break;
		case 'healthy':
			$("#jumboHealthy").show();
			break;
		case 'overweight':
			$("#jumboOverWeight").show();
			break;
		case 'obese':
			$("#jumboObese").show();
			break;				
	}
}

function hideResultArea() {
	$("#radialSec").hide();
	$("#barSec").hide();
	$("#infoSec").hide();    
	$("#jumboUnderWeight").hide();
	$("#jumboHealthy").hide();
	$("#jumboOverWeight").hide();
	$("#jumboObese").hide();    
}

function reanimate_bar(bmi){
	var bar = $('#bar');
	bar.barIndicator('destroy');
	var newData;
	if (bmi > 40){
		bmi = 40;
	}				
	
	var opt = {
		horBarHeight: 30,
		labelVisibility: 'hidden',
		numType: 'absolute',
		numMin: 0,
		numMax: 40,
		colorRange: true,
		colorRangeLimits: {
		newRangeOne: '0-18.4-blue',
		newRangeTwo: '18.5-24.9-green',
		newRangeThree: '25-29.9-#999900',			
		newRangeFour: '30-40-red',
		},
		milestones: {
			1: {
			mlPos: 0,
			mlId: false,
			mlDim: '200%',
			mlLabel: 'Underweight',
			mlLabelVis: 'visible',
			mlHoverRange: 15,
			mlLineWidth: 2
			},
			2: {
			mlPos: 18.5,
			mlId: false,
			mlDim: '200%',
			mlLabel: 'Healthy',
			mlLabelVis: 'visible',
			mlHoverRange: 15,
			mlLineWidth: 2
			},
			3: {
			mlPos: 25,
			mlId: false,
			mlDim: '200%',
			mlLabel: 'Overweight',
			mlLabelVis: 'visible',
			mlHoverRange: 15,
			mlLineWidth: 2
			},
			4: {
			mlPos: 30,
			mlId: false,
			mlDim: '200%',
			mlLabel: 'Obese',
			mlLabelVis: 'visible',
			mlHoverRange: 15,
			mlLineWidth: 2
			}
		}
	};	
	bar.barIndicator(opt);
	bar.barIndicator('loadNewData', [bmi]);
}

function setEnglishLimit(ftVal, inVal){	    
    ftVal = parseInt(ftVal);
    inVal = parseInt(inVal);	
    
    if (ftVal <= 4) {
        $("#htInEnSb").val(inVal);	
 		$("#htInEnSb").jqxNumberInput({ min: 3, max: 11 }); 
        if (inVal < 3) {
            $("#htInEnSb").val(3);	
            inVal = 3;        
        }      
    } else if (ftVal === 5) {
        $("#htInEnSb").val(inVal);		
        $("#htInEnSb").jqxNumberInput({ min: 0, max: 11 });         
    } else if (ftVal === 6) {
        $("#htInEnSb").jqxNumberInput({ min: 0, max: 7 });
        if (inVal > 7) {
            $("#htInEnSb").val(7);		
            inVal = 7;		
        }
    }
        
    var htCm = getHeightCm(ftVal, inVal);
    $("#htEn").slider('setValue', htCm);
}

function getHeightCm(ftVal, inVal){
	var htCm, feetIn, inch;
	feetIn = ftVal * 12;
	inch = feetIn + inVal;
	htCm = Math.round(inch * 2.54);	
	return htCm;
}

function isNumberKey(obj, evt, isAllowFloat){
    var keyCode = parseInt(evt.keyCode);
    
    if ((keyCode >= 48 && keyCode <= 57) || 
    (keyCode===46 || keyCode===190 || keyCode===8)) {
        if (isAllowFloat){  
            //Check if the text already contains the . character
            if ((obj.value.indexOf('.') >= 0) && (keyCode==46 || keyCode===190)) {
                return false;
            }
            
        } else {
           //Check if the . character is pressed
           if (keyCode==46 || keyCode===190) {
                return false;          
           }           
        }        
        return true;    
    } else {
        return false;
    }    
}

function setLimit(obj, evt){
    var ftVal, inVal;
    
    switch (obj.id){
        case 'othHtFt':
            ftVal = obj.value;
            inVal = $("#othHtIn").val();
            break;
        case 'othHtIn':
            inVal = obj.value;
            ftVal = $("#othHtFt").val();
            break;
        default:
            break;
    }
    
    ftVal = parseInt(ftVal);
    inVal = parseInt(inVal);
    
    if (ftVal <= 4) {
        if (obj.id === "othHtFt") {
            $("#othHtFt").val("4");    
            if (inVal <= 3 || isNaN(inVal)) {
                $("#othHtIn").val("3");            
            } else if (inVal >= 11) {
                $("#othHtIn").val("11");            
            }
        } else if (obj.id === "othHtIn") {
            if (inVal <= 3) {
                $("#othHtIn").val("3");    
            } else if (inVal >= 11) {
                $("#othHtIn").val("11");       
            }
        }
    } else if (ftVal === 5) {
        $("#othHtFt").val("5");
        if (obj.id === "othHtFt") {
            if (inVal <= 0 || isNaN(inVal)) {
                $("#othHtIn").val("0"); 
            } else if (inVal >= 11) {
                $("#othHtIn").val("11");      
            }
        } else if (obj.id === "othHtIn") {
            if (inVal <= 0) {
                $("#othHtIn").val("0");    
            } else if (inVal >= 11) {
                $("#othHtIn").val("11");       
            }
        }
    } else if (ftVal >= 6) {
        $("#othHtFt").val("6");
        if (obj.id === "othHtFt") {
            if (inVal <= 0 || isNaN(inVal)) {
                $("#othHtIn").val("0");        
            } else if (inVal >= 7) {
                $("#othHtIn").val("7");         
            }
        } else if (obj.id === "othHtIn") {
            if (inVal <= 0) {
                $("#othHtIn").val("0");    
            } else if (inVal >= 7) {
                $("#othHtIn").val("7");       
            }
        }
    }
}

function onKeyPress (obj, evt) {
    if (obj.id === "othHtFt") {
        return isNumberKey(obj, evt, false);        
    } else if (obj.id === "othHtIn") {
        return isNumberKey(obj, evt, false);     
    } else if (obj.id == "othWt") {
        return isNumberKey(obj, evt, false);     
    }
    return true;
}

function onInput (obj, evt) {
    if (obj.id === "othHtFt" || obj.id === "othHtIn") {
        setLimit(obj, evt);        
    }
}

function onChange(obj, evt){
    setLimitOthWt(obj, evt);
}

function setLimitOthWt(obj, evt) {
    var wtVal = parseInt(obj.value);
    if (wtVal<=30){
        wtVal = 30;       
        $("#othWt").val(wtVal);
    } else if (wtVal >= 150) {
        wtVal = 150;   
        $("#othWt").val(wtVal);
    }
}

function onMouseDown (obj, evt) {
    if (obj.id === "othHtFtBtnUp") {
        incrementFt();
        setLimit(document.getElementById("othHtFt"), null);
    } else if (obj.id === "othHtFtBtnDown") {
        decrementFt();        
        setLimit(document.getElementById("othHtFt"), null);
    } else if (obj.id === "othHtInBtnUp") {
        incrementIn();
    } else if (obj.id === "othHtInBtnDown") {
        decrementIn();
    } else if (obj.id === "othWtBtnUp") {
        incrementOthWt();
    } else if (obj.id === "othWtBtnDown") {
        decrementOthWt();
    }                             
    return true;
}

function incrementOthWt() {
    var wtVal;
    wtVal = parseInt($("#othWt").val());
    if (isNaN(wtVal)) {
        wtVal = 70;
    } else if (wtVal < 150) {
        wtVal++;       
    }
    $("#othWt").val(wtVal);
}

function decrementOthWt() {
    var wtVal;
    wtVal = parseInt($("#othWt").val());
    if (isNaN(wtVal)) {
        wtVal = 70;
    } else if (wtVal > 30) {
        wtVal--;       
    }
    $("#othWt").val(wtVal);    
}

function decrementIn() {
    var ftVal = parseInt($("#othHtFt").val());
    var inVal = parseInt($("#othHtIn").val());
    
    if (isNaN(ftVal)) {
        ftVal = 5; 
        if(isNaN(inVal)){
            inVal = 7;    
        }
    } else {
        if(ftVal>4){
            if (inVal>=1 && inVal <= 11) {
                inVal--;              
            } else {
                ftVal--;
                inVal = 11;
            }   
        } else {
             if (inVal >3 && inVal <= 11){
                inVal--;        
            }           
        }
    }
    $("#othHtFt").val(ftVal);
    $("#othHtIn").val(inVal);    
}

function incrementIn(){
    var ftVal = parseInt($("#othHtFt").val());
    var inVal = parseInt($("#othHtIn").val());
    
    
    if (isNaN(ftVal)) {
        ftVal = 5; 
        if(isNaN(inVal)){
            inVal = 7;    
        }
    } else {
        if(ftVal<6){
            if (inVal>=0 && inVal <= 10) {
                inVal++;              
            } else {
                ftVal++;
                inVal = 0;
            }   
        } else {
            if (inVal < 7){
                inVal++;        
            }
        }
    }    
    
    $("#othHtFt").val(ftVal);
    $("#othHtIn").val(inVal);
}

function incrementFt() {    
    var ftVal = parseInt($("#othHtFt").val());
    var inVal = parseInt($("#othHtIn").val());
    
    if (isNaN(ftVal)) {
        ftVal = 5;    
        if(isNaN(inVal)){
            inVal = 7;    
            $("#othHtIn").val(inVal);  
        }
    } else if (ftVal>=4 && ftVal <= 5){
        ftVal++;
    }
        
    $("#othHtFt").val(ftVal);
}

function decrementFt() {
    var ftVal = parseInt($("#othHtFt").val());
    var inVal = parseInt($("#othHtIn").val());
    
    if (isNaN(ftVal)) {
        ftVal = 5;       
        if(isNaN(inVal)){
            inVal = 7;
            $("#othHtIn").val(inVal);  
        }       
    } else if (ftVal>=5 && ftVal <= 6){
        ftVal--;
    }
    $("#othHtFt").val(ftVal);       
}

