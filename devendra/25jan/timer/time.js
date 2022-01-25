var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var date = new Date('04-10-1998 12:00:00')
var hour2 = date.getHours();
var minute2 = date.getMinutes();
var second2 = date.getSeconds();
hour.value = hour2;
minute.value = minute2;
second.value = second2;
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
    hour2 = 12;
    minute2 = 0;
    second2 = 0;
    hour.value = hour2;
    minute.value = minute2;
    second.value = second2;

    document.getElementById("stop").style.visibility = 'hidden';
    document.getElementById("reset").style.visibility = 'hidden';
    document.getElementById("start").style.visibility = 'visible';
}

function timer() {


    if (count == 1) {
        if (second2 == 0) {
            second2 = 60;
            second2 = second2 - 1;

            if (minute2 == 0) {
                hour2 = hour2 - 1;
                minute2 = 60;
                minute2 = minute2 - 1;
            }
            else {
                minute2 = minute2 - 1;
            }
        }
        else {
            second2 = second2 - 1;
        }
        hour.value = hour2;
        minute.value = minute2;
        second.value = second2;
        setTimeout("timer()", 1000);
    }
}