let chessContainer = document.getElementById('chessContainer')

for(i=0;i<8;i++){
    let box1=document.createElement('div');
    box1.style.fontSize="20px"
    box1.style.textAlign="center"
    if(i%2==0){
       
        if(i==0){
            box1.innerHTML="&#9814"
            
        }
        else if(i==2){
        box1.innerHTML="&#9815"
        }
        else if(i==4){
            box1.innerHTML="&#9812"
        }
        else{
            box1.innerHTML="&#9816"
        }
         box1.style.backgroundColor ='white'
        
    }
    else{
        box1.style.fontSize="20px"
        if(i==7){
            box1.innerHTML="&#9814"
        }
        else if(i==1){
            box1.innerHTML="&#9816"
            // box1.innerHTML.backgroundColor="white"
        }
        else if(i==3){
            box1.innerHTML="&#9813"
        }
        else if(i==5){
            box1.innerHTML="&#9815"
        }
        box1.style.backgroundColor ='skyblue'
    }
    chessContainer.appendChild(box1)
}

for(i=0;i<8;i++){
    let box2=document.createElement('div');
    box2.innerHTML="&#9812"
    box2.style.textAlign="center"
    box2.style.fontSize="20px"
    if(i%2==0){
        box2.style.fontSize="20px"
        box2.style.backgroundColor ='skyblue'
    }
    else{
        box2.style.backgroundColor ='white'
    }
    chessContainer.appendChild(box2)
}
for(i=0;i<8;i++){
    let box3=document.createElement('div');
    if(i%2==0){
        box3.style.backgroundColor ='white'
    }
    else{
        box3.style.backgroundColor ='skyblue'
    }
    chessContainer.appendChild(box3)
}

for(i=0;i<8;i++){
    let box4=document.createElement('div');
    if(i%2==0){
        box4.style.backgroundColor ='skyblue'
    }
    else{
        box4.style.backgroundColor ='white'
    }
    chessContainer.appendChild(box4) 
}
for(i=0;i<8;i++){
    let box5=document.createElement('div');
    if(i%2==0){
        box5.style.backgroundColor ='white'
    }
    else{
        box5.style.backgroundColor ='skyblue'
    }
    chessContainer.appendChild(box5)
}
   
    for(i=0;i<8;i++){
        let box6=document.createElement('div');
        if(i%2==0){
            box6.style.backgroundColor ='skyblue'
        }
        else{
            box6.style.backgroundColor ='white'
        }
        chessContainer.appendChild(box6)
    }
    for(i=0;i<8;i++){
        let box7=document.createElement('div');
        box7.innerHTML="&#9823"
        box7.style.textAlign="center"
        box7.style.fontSize="20px"
        if(i%2==0){
            box7.style.backgroundColor ='white'
        }
        else{
            box7.style.backgroundColor ='skyblue'
        }
        chessContainer.appendChild(box7)
    }
    for(i=0;i<8;i++){
        let box8=document.createElement('div');
        box8.style.fontSize="20px"
        box8.style.textAlign="center"
        if(i%2==0){
            if(i==0){
                box8.innerHTML="&#9820"
            }
            else if(i==2){
                box8.innerHTML="&#9821"

            }
            else if(i==4){
               box8.innerHTML="&#9818"
            }
            else{
                box8.innerHTML="&#9822"
            }
            box8.style.backgroundColor ='skyblue'
        }
        else{
            if(i==1){
                box8.innerHTML="&#9822"
            }
            else if(i==3){
                box8.innerHTML="&#9819"
            }
           else if(i==5){
                box8.innerHTML="&#9821"
            }
            else{
             box8.innerHTML="&#9821"
            }

            box8.style.backgroundColor ='white'
        }
        chessContainer.appendChild(box8)
    }