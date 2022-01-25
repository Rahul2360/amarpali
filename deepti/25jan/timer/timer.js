var date = new Date(2018, 6, 5, 00, 00, 00, 00);
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var display_time = hr + " : " + min + " : " + sec;
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

    startTimer();
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

    document.getElementById("time").innerHTML = display_time;
}

function startTimer() {
    check = setInterval(function() {
        if (hr.value == 00 && min.value == 0 && sec.value) {
            hr.value = 0;
            min.value = 0;
            sec.value = 0;
        } else if (sec.value != 0) {
            sec.value--;
        } else if (min.value != 0 && sec.value == 0) {
            sec.value = 59;
            min.value--;
        } else if (hr.value != 0 && min.value == 0) {
            min.value = 60;
            hr.value--;
        }
        return;

    }, 1000)
}