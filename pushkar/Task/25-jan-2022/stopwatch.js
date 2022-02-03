    const date= new Date("05-9-1998 00:00:00:00");
    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    var milisecond=date.getMilliseconds();
    var timer=false;
    document.getElementById('stop').style.visibility="hidden";
    document.getElementById('reset').style.visibility="hidden";
    document.getElementById('lapbtn').style.visibility="hidden";
    function start(){
        timer=true;
        if(timer==true){
            document.getElementById('start').style.visibility="hidden";
            document.getElementById('stop').style.visibility="visible";
            document.getElementById('reset').style.visibility="visible";
            document.getElementById('lapbtn').style.visibility="visible";
        }

            stop_watch();
        
        
    }
    function stop(){
        timer=false;
        if(timer==false){
            document.getElementById('start').style.visibility="visible";
            document.getElementById('stop').style.visibility="hidden";
            document.getElementById('reset').style.visibility="visible";
        }
    }
    function reset(){
        timer=false;
        if(timer==false){
            document.getElementById('start').style.visibility="visible";
            document.getElementById('stop').style.visibility="hidden";
            document.getElementById('reset').style.visibility="hidden";
            document.getElementById('lapbtn').style.visibility="hidden";
            
        }
        second=0;
        minute=0;
        hour=0;
        milisecond=0;
        document.getElementById("hour").innerHTML="00";
        document.getElementById("minute").innerHTML="00";
        document.getElementById("second").innerHTML="00";
        document.getElementById("milisecond").innerHTML="00";
        clearAll();
    }
    function stop_watch(){
        if(timer==true){
            milisecond=milisecond+1;
        if(milisecond==100){
            second=second+1;
            milisecond=+0;
        }
        if(second==60){
            minute=minute+1;
            second=+0;
        }
        if(minute==60){
            hour=hour+1;
            minute=+0;
        }
        var hourstring=hour
        var minutestring=minute;
        var secondstring=second;
        var milisecondstring=milisecond;

        if(hour<10){
            hourstring="0"+hourstring;
        }
        if(minute<10){
            minutestring="0"+minutestring;
        }
        if(second<10){
            secondstring="0"+second;
        }
        document.getElementById("milisecond").innerHTML=milisecondstring;
        document.getElementById("second").innerHTML=secondstring;
        document.getElementById("minute").innerHTML=minutestring;
        document.getElementById("hour").innerHTML=hourstring;
        setTimeout("stop_watch()", 10);
        }
        else{

        }
        
    }
    var cnt=0;
    var lap=document.getElementById('lap');
    function getdata(){
        timer=true
        if(cnt<5 && timer==true){
            const li=document.createElement("li");
            const srno=document.createElement("span");
            console.log(`${hour} : ${minute}:${second}:${milisecond}`);
            cnt=cnt+1;
            srno.innerHTML=`#`+cnt +` ->> ${hour} : ${minute}:${second}:${milisecond}`;
            li.appendChild(srno);  
            lap.appendChild(li);

        }
        if(ctn==5){
// smothing to do
        }
        else{
            
        }
    }
    function clearAll(){

        lap.innerHTML="";
        cnt=0;
    }