var hour=0;
var minute=0;
var second=0;
var milisecond=0;

var  timer=false;
function start(){
    timer=true;
    stopWatch();
}
function stop(){
    timer=false;
}
function reset(){
    timer=false;
    second=0;
    minute=0;
    hour=0;
    milisecond=0;
    document.getElementById("hour").innerHTML="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("second").innerHTML="00";
    document.getElementById("milisecond").innerHTML="00";

}

function stopWatch(){
if(timer==true){
    milisecond= milisecond+1;
    if(milisecond==100){
        second=second+1;
        milisecond = 0;
    }
    if(second==60){
        minute=minute+1;
        second=0;
    }
    if(minute==60){
        hour=hour+1;
        minute=0;
    }
    //to show 00 type convert strig
    var hourstring=hour
    var minutestring=minute;
    var secondstring=second;
    var milisecondstring=milisecond;
    if(hour<10){
        hourstring="0"+hourstring;
    }
    if(minute<10){
        minutestring="0"+minutestring;
    }
    if(second<10){
        secondstring="0"+second;
    }
    document.getElementById("milisecond").innerHTML=milisecond;
    document.getElementById("minute").innerHTML=minutestring;
    document.getElementById("second").innerHTML=secondstring;
    document.getElementById("hour").innerHTML=hourstring;
    setTimeout("stopWatch()",10)
    }
}