let chessContainer = document.getElementById('Container')

for(i=0;i<8;i++){
    let box1=document.createElement('div');
    box1.setAttribute('id',i+"a");
    box1.style.width="62.5px";
    box1.style.height="62.5px";
    box1.style.textAlign="center";
    box1.style.fontSize="28px";
    if(i%2==0){
        box1.style.backgroundColor ='white';
    }
    else{
        box1.style.backgroundColor ='green';
    }
    chessContainer.appendChild(box1);

    

}
for(i=0;i<8;i++){
    let box2=document.createElement('div');
    box2.innerHTML="&#9817"
    box2.style.fontSize="28px";
    box2.style.textAlign="center";
    box2.style.width="62.5px";
    box2.style.height="62.5px";
    if(i%2==0){
        box2.style.backgroundColor ='green';
       
    }
    else{
        box2.style.backgroundColor ='white';
        
    }
    chessContainer.appendChild(box2)
    
   
    
}
for(i=0;i<8;i++){
    let box3=document.createElement('div');
    box3.style.width="62.5px";
    box3.style.height="62.5px";
    if(i%2==0){
        box3.style.backgroundColor ='white';
    }
    else{
        box3.style.backgroundColor ='green';
    }
    chessContainer.appendChild(box3)

}

for(i=0;i<8;i++){
    let box4=document.createElement('div');
    box4.style.width="62.5px";
    box4.style.height="62.5px";
    if(i%2==0){
        box4.style.backgroundColor ='green';
    }
    else{
        box4.style.backgroundColor ='white';
    }
    chessContainer.appendChild(box4) 
}
for(i=0;i<8;i++){
    let box5=document.createElement('div');
    box5.style.width="62.5px";
    box5.style.height="62.5px";
    if(i%2==0){
        box5.style.backgroundColor ='white';
    }
    else{
        box5.style.backgroundColor ='green';
    }
    chessContainer.appendChild(box5)
}
   
    for(i=0;i<8;i++){
        let box6=document.createElement('div');
        box6.style.width="62.5px";
        box6.style.height="62.5px";
        if(i%2==0){
            box6.style.backgroundColor ='green';
        }
        else{
            box6.style.backgroundColor ='white';
        }
        chessContainer.appendChild(box6)
    }
    for(i=0;i<8;i++){
        let box7=document.createElement('div');
        box7.innerHTML="&#9823"
        box7.style.fontSize="28px";
        box7.style.textAlign="center";
        box7.style.width="62.5px";
        box7.style.height="62.5px";
        if(i%2==0){
            box7.style.backgroundColor ='white';
        }
        else{
            box7.style.backgroundColor ='green';
        }
        chessContainer.appendChild(box7)
    }
    for(i=0;i<8;i++){
        let box8=document.createElement('div');
        box8.setAttribute('id',i+"b");
        box8.style.width="62.5px";
        box8.style.height="62.5px";
        box8.style.textAlign="center";
        box8.style.fontSize="28px";
        if(i%2==0){
            box8.style.backgroundColor ='green';
        }
        else{
            box8.style.backgroundColor ='white';
        }
        chessContainer.appendChild(box8)
    }
    document.getElementById("0a").innerHTML="&#9814";
    document.getElementById("1a").innerHTML="&#9816";
    document.getElementById("2a").innerHTML="&#9815";
    document.getElementById("3a").innerHTML="&#9813";
    document.getElementById("4a").innerHTML="&#9812";
    document.getElementById("5a").innerHTML="&#9815";
    document.getElementById("6a").innerHTML="&#9816";
    document.getElementById("7a").innerHTML="&#9814";
    document.getElementById("0b").innerHTML="&#9820";
    document.getElementById("1b").innerHTML="&#9822";
    document.getElementById("2b").innerHTML="&#9821";
    document.getElementById("3b").innerHTML="&#9818";
    document.getElementById("4b").innerHTML="&#9819";
    document.getElementById("5b").innerHTML="&#9821";
    document.getElementById("6b").innerHTML="&#9822";
    document.getElementById("7b").innerHTML="&#9820";