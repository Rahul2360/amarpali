
        var hour = document.getElementById("hr");
        var minute = document.getElementById("min");
        var second = document.getElementById("sec");
        var millisecond = document.getElementById("ms");
        var flag = false;
      

        function pause() {
            flag = false;
            document.getElementById("start").style.visibility="";
            
        }
        function reset() {
            flag = false;
            hour.value = 0;
            minute.value = 0;
            second.value = 0;
            millisecond.value = 0;
            document.getElementById("hr").innerHTML = "0" + hour;
            document.getElementById("min").innerHTML = "0" + minute;
            document.getElementById("sec").innerHTML = "0" + second;
            document.getElementById("ms").innerHTML = "0" + millisecond;
            document.getElementById("start").style.visibility="";
        }
        function start() {
            flag = true;
            timer();
            if ((millisecond.value == 0) && (second.value == 0) && (minute.value == 0) && (hour.value == 0)) {
                flag=false;
            document.getElementById("start").style.visibility="";}
            else 
            {
                document.getElementById("start").style.visibility="hidden";  
            }

        }
        function timer() {
            if (flag == true) {

                if ((millisecond.value == 0) && (second.value == 0) && (minute.value == 0) && (hour.value == 0)) {
                    hour.value = 0;
                    minute.value = 0;
                    second.value = 0;
                    millisecond.value = 0;
                    document.getElementById("hr").innerHTML =0;
                    document.getElementById("min").innerHTML = 0;
                    document.getElementById("sec").innerHTML = 0;
                    document.getElementById("ms").innerHTML = 0;
                   
                }
                else if
                    (millisecond.value != 0) {
                    millisecond.value--;
                }
                else if ((second.value !== 0) && (millisecond.value == 0) && (second.value > 0)) {

                    millisecond.value = 100;
                    second.value--;
                }
                else if ((minute.value !== 0) && (second.value == 0) && (minute.value > 0)) {


                    second.value = 60;
                    minute.value--;
                }
                else if ((hour.value !== 0) && (minute.value == 0) && (hour.value > 0) && (hour.value < 24)) {


                    minute.value = 60;
                    hour.value--;
                }

                document.getElementById("hr").innerHTML = hour.value;
                document.getElementById("min").innerHTML = minute.value;
                document.getElementById("sec").innerHTML = second.value;
                document.getElementById("ms").innerHTML = millisecond.value;


                setTimeout("timer()", 10);

            }
        }