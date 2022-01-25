var date = new Date(2018, 6, 5, 00, 00, 00, 00);
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var milisec = date.getMilliseconds();
var display_time = hr + " : " + min + " : " + sec + " : " + milisec;
document.getElementById("time").innerHTML = display_time;

var check = 0;
document.getElementById("pause").style.visibility = 'hidden';
document.getElementById("reset").style.visibility = 'hidden';

function start() {
    check = 1;
    if (check == 1) {
        document.getElementById("start").style.visibility = 'hidden';
        document.getElementById("pause").style.visibility = 'visible';
        document.getElementById("reset").style.visibility = 'visible';
    }

    stopwatch();
}

function pause() {
    check = 0;
    if (check == 0) {
        document.getElementById("pause").style.visibility = 'hidden';
        document.getElementById("start").style.visibility = 'visible';
    }

}

function reset() {
    check = 0;

    document.getElementById("pause").style.visibility = 'hidden';
    document.getElementById("reset").style.visibility = 'hidden';
    document.getElementById("start").style.visibility = 'visible';
    hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;
    document.getElementById("time").innerHTML = display_time;


}


function stopwatch() {
    if (check == 1) {
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
        var display_stopwatch = hr + " : " + min + " : " + sec + " : " + milisec;
        document.getElementById("time").innerHTML = display_stopwatch;
        setTimeout("stopwatch()", 10)
    }
}

function lap() {
    count = 0;
    if (count < 5) {
        const li = document.createElement("li");
        const number = document.createElement("span");
        const timestamp = document.createElement("span");


        timestamp.innerHTML = ` &nbsp &nbsp ${hr} : ${min} : ${sec} : ${milisec}`;
        count = count + 1;
        number.innerHTML = `#` + count;
        lap.appendChild(li);
        li.appendChild(number);
        li.appendChild(timestamp);
    }

}