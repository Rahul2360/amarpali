var date = new Date('04-10-1998 00:00:00:00');
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var mili_second = date.getMilliseconds();
var display_time = hour + " : " + minute + " : " + second + " : " + mili_second;
document.getElementById("timer").innerHTML = display_time;
var my_array = [];
var i = 0;


var check = 0;
document.getElementById("stop").style.visibility = 'hidden';
document.getElementById("reset").style.visibility = 'hidden';
document.getElementById("show").style.display = 'none';
function start() {
    check = 1;
    if (check == 1) {
        document.getElementById("start").style.visibility = 'hidden';
        document.getElementById("stop").style.visibility = 'visible';
        document.getElementById("reset").style.visibility = 'visible';
    }

    stop_watch();
}

function stop() {
    check = 0;
    if (check == 0) {
        document.getElementById("stop").style.visibility = 'hidden';
        document.getElementById("start").style.visibility = 'visible';
    }
}

function reset() {
    check = 0;
    document.getElementById("stop").style.visibility = 'hidden';
    document.getElementById("reset").style.visibility = 'hidden';
    document.getElementById("start").style.visibility = 'visible';

    var lap = hour + ":" + minute + ":" + second + ":" + mili_second;
    hour = 0;
    minute = 0;
    second = 0;
    mili_second = 0;
    document.getElementById("timer").innerHTML = display_time;
    store(lap);
}

function stop_watch() {
    if (check == 1) {
        mili_second = mili_second + 1;
        if (mili_second == 100) {
            second = second + 1;
            mili_second = +0;
        }
        if (second == 60) {
            minute = minute + 1;
            second = +0;
        }
        if (minute == 60) {
            hour = hour + 1;
            minute = +0;
        }
        var display_stopwatch = hour + " : " + minute + " : " + second + " : " + mili_second;
        document.getElementById("timer").innerHTML = display_stopwatch;
        setTimeout("stop_watch()", 10);
    }
}


function store(lap) {

    if (i < 5) {
        my_array.push(lap);
        i++;
    }
    if (i >= 5) {
        my_array.shift();
        my_array.push(lap);
    }

}


function lap_history() {
    document.getElementById("show").style.display = 'inline';
    let text = "";
  for(var l=0; l<my_array.length; l++){
      
      text += (l+1)+": "+ my_array[l]+"<br>";
        document.getElementById("history").innerHTML = text;
      } 
     
    
}