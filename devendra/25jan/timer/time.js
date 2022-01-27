var count = 0;
document.getElementById("stop").style.visibility = 'hidden';
document.getElementById("reset").style.visibility = 'hidden';

function start() {
    count = 1;
    if (count == 1) {
        document.getElementById("stop").style.visibility = 'visible';
        document.getElementById("reset").style.visibility = 'visible';
        document.getElementById("start").style.visibility = 'hidden';
        timer();
    }
}

function stop() {
    count = 0;
    document.getElementById("start").style.visibility = 'visible';
}

function reset() {
    count = 0;

    document.getElementById("hour").value = 0;
    document.getElementById("minute").value = 0;
    document.getElementById("second").value = 0;

    document.getElementById("stop").style.visibility = 'hidden';
    document.getElementById("reset").style.visibility = 'hidden';
    document.getElementById("start").style.visibility = 'visible';
}

function timer() {
    var hour = document.getElementById("hour").value;
    var minute = document.getElementById("minute").value;
    var second = document.getElementById("second").value;
    if (hour == 0 && minute == 0 && second == 0) {
        count = 0;
        alert("time is over.");
    }

    if (count == 1) {
        if (second == 0) {
            second = 60;
            second = second - 1;

            if (minute == 0) {
                hour = hour - 1;
                minute = 60;
                minute = minute - 1;
            }
            else {
                minute = minute - 1;
            }
        }
        else {
            second = second - 1;
        }

        document.getElementById("hour").value = hour;
        document.getElementById("minute").value = minute;
        document.getElementById("second").value = second;
        setTimeout("timer()", 1000);
    }
}