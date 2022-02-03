  var hours=document.getElementById("hr");
        var minutes=document.getElementById("min");
        var sec=document.getElementById("sec");
        var mili=document.getElementById("mili");
        var lap=document.getElementById("lap");
        var btn=document.getElementById("clear");
        var date = new Date('04-10-1998 00:00:00:00');
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var miliSecond = date.getMilliseconds();
        var timeFlag = 0;
        var count=0;
        var cnt=0;
        btn.style.visibility="hidden";
        document.getElementById("pause").style.visibility="hidden";
        document.getElementById("reset").style.visibility="hidden";
        
        function start(){
            timeFlag=1;
            document.getElementById("pause").style.visibility="";
            document.getElementById("reset").style.visibility="";
            if (count!=1) {
                watch();
            }
           
        }
        function pause(){
            
            timeFlag=0;
            count=0;
            if (cnt<5) {
            const li=document.createElement("li");
            const srno=document.createElement("span");
            const timeStamp=document.createElement("span");


            timeStamp.innerHTML=` &nbsp &nbsp ${hour} : ${minute} : ${second} : ${miliSecond}`;
            cnt=cnt+1;
            srno.innerHTML=`(`+cnt+`)`;
            lap.appendChild(li);
            li.appendChild(srno);  
            li.appendChild(timeStamp);  
        }
        else{
            btn.style.visibility="";
        }
           
        }

        function clearAll(){
            lap.innerHTML="";
            btn.style.visibility="hidden";
            cnt=0;
        }
        function reset(){

            timeFlag=0;
            document.getElementById("pause").style.visibility="hidden";
            document.getElementById("reset").style.visibility="hidden";
            hour=0;
            minute=0;
            second=0;
            miliSecond=0;
            count=0;
            mili.innerHTML="00";
            sec.innerHTML="00" + " :";
            minutes.innerHTML="00" + " :";
            hours.innerHTML="00" + " :";

        }

        function watch(){
            if (timeFlag==1) {
                miliSecond=miliSecond+1;
                if (miliSecond==100) {
                    miliSecond=0;
                    second=second+1;
                }
                if (second==60) {
                    second=0;
                    minute=minute+1;
                }
                if (minute==60) {
                   minute=0;
                   hour=hour+1;
                }
                if(miliSecond<10){
                mili.innerHTML="0"+miliSecond;
                 }
                 else{
                    mili.innerHTML=miliSecond;  
                 }
                 if(second<10){
                sec.innerHTML="0"+second + " :";
                 }
                 else{
                sec.innerHTML=second + " :";   
                 }
                 if(minute<10){
                minutes.innerHTML="0"+minute + " :";
                 }
                 else{
                minutes.innerHTML=minute + " :";   
                 }
                 if(hour<10){
                hours.innerHTML="0"+hour + " :";
                 }
                 else{
                hours.innerHTML=hour + " :";   
                 }
                
                setTimeout("watch()",10);
                count=1;
            }
           
        }