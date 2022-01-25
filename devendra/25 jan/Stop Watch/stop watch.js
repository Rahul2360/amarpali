
var hour = '00';
var minute = '00';
var second = '00';
var mili_second = '00';
var display_time = hour + " : " + minute + " : " + second + " : " + mili_second;
document.getElementById("timer").innerHTML = display_time;
var hour2 = parseInt(hour);
var minute2 = parseInt(minute);
var second2 = parseInt(second);
var mili_second2 = parseInt(mili_second);

var check = 0;

function start() {
    check = 1;
    stop_watch();
}

function stop() {
    check = 0;
}

function reset() {
    check = 0;


    document.getElementById("timer").innerHTML = display_time;
}

function stop_watch() {
    if (check == 1) {
        mili_second2 = mili_second2 + 1;
        if (mili_second2 == 100) {
            second2 = second2 + 1;
            mili_second2 = +0;
        }
        if (second2 == 60) {
            minute2 = minute2 + 1;
            second2 = +0;
        }
        if (minute2 == 60) {
            hour2 = hour2 + 1;
            minute2 = +0;
        }

        var hour_string = hour2;
        var minute_string = minute2;
        var second_string = second2;
        var mili_second_string = mili_second2;
        if (hour2 < 10) {
            hour_string = '0' + hour_string;
        }
        if (minute2 < 10) {
            minute_string = '0' + minute_string;
        }
        if (second2 < 10) {
            second_string = '0' + second_string;
        }
        if (mili_second2 < 10) {
            mili_second_string = '0' + mili_second_string;
        }
        var display_stopwatch = hour_string + " : " + minute_string + " : " + second_string + " : " + mili_second_string;
        document.getElementById("timer").innerHTML = display_stopwatch;
        setTimeout("stop_watch()", 10);
    }
}