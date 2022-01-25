var hr = 0;
var min = 0;
var sec = 0;
var millisec = 0;
var timer = false;


function start() {
    timer = true;
    stopwatch();

}

function pause() {
    timer = false;

}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    millisec = 0;
    document.getElementById("millisec").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";


}

function stopwatch() {
    if (timer == true) {
        millisec = millisec + 1;

        if (millisec == 100) {
            sec = sec + 1;
            millisec = 0;

        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        document.getElementById("millisec").innerHTML = millisec;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("min").innerHTML = min;
        document.getElementById("hr").innerHTML = hr;
        setTimeout("stopwatch()", 10)
    }
}