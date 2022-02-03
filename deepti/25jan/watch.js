var date = new Date(2018, 6, 5, 00, 00, 00, 00);
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var milisec = date.getMilliseconds();
var display_time = hr + " : " + min + " : " + sec + " : " + milisec;
document.getElementById("display").innerHTML = display_time;

let displayhours = hr;
let displayminutes = min;
let displayseconds = sec;
let displaymiliseconds = milisec;
let checkstatus = "stopped";
let interval = null;
let lapNow = null;

function start() {
    milisec = milisec + 1;

    if (milisec == 100) {
        sec = sec + 1;
        milisec = 0;

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

    if (milisec < 10) {
        displaymiliseconds = "0" + milisec;
    } else {
        displaymiliseconds = milisec;
    }
    if (sec < 10) {
        displayseconds = "0" + sec;
    } else {
        displayseconds = sec;
    }
    if (min < 10) {
        displayminutes = "0" + min;
    } else {
        displayminutes = min;
    }
    if (hr < 10) {
        displayhours = "0" + hr;
    } else {
        displayhours = hr;
    }

    var display_stopwatch = displayhours + " : " + displayminutes + " : " + displayseconds + " : " + displaymiliseconds;
    document.getElementById("display").innerHTML = display_stopwatch;
}

function startStop() {
    if (checkstatus === "stopped") {
        interval = setInterval(start, 10);
        checkstatus = "started";
        document.getElementById('startbtn').innerHTML = "Stop";

    } else {
        window.clearInterval(interval);
        checkstatus = "stopped";
        document.getElementById('startbtn').innerHTML = "Start";
    }
}

function reset() {
    clearInterval(interval);
    hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;
    displayhours = 0;
    displayminutes = 0;
    displayseconds = 0;
    displaymiliseconds = 0;
    checkstatus = "stopped"
    document.getElementById("display").innerHTML = display_time;
    document.getElementById("laprecord").innerHTML = "";

}

function lap() {
    lapNow = displayhours + " : " + displayminutes + " : " + displayseconds + " : " + displaymiliseconds;
    document.getElementById('laprecord').innerHTML = document.getElementById('laprecord').innerHTML + "<p>" + lapNow + "</p>";
}