let chessContainer = document.getElementById('Container')

for(i=0;i<8;i++){
    let box1=document.createElement('div');
    if(i%2==0){
        box1.style.backgroundColor ='white'
    }
    else{
        box1.style.backgroundColor ='black'
    }
    chessContainer.appendChild(box1)
}
for(i=0;i<8;i++){
    let box2=document.createElement('div');
    if(i%2==0){
        box2.style.backgroundColor ='black'
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
        box3.style.backgroundColor ='black'
    }
    chessContainer.appendChild(box3)
}

for(i=0;i<8;i++){
    let box4=document.createElement('div');
    if(i%2==0){
        box4.style.backgroundColor ='black'
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
        box5.style.backgroundColor ='black'
    }
    chessContainer.appendChild(box5)
}
   
    for(i=0;i<8;i++){
        let box6=document.createElement('div');
        if(i%2==0){
            box6.style.backgroundColor ='black'
        }
        else{
            box6.style.backgroundColor ='white'
        }
        chessContainer.appendChild(box6)
    }
    for(i=0;i<8;i++){
        let box7=document.createElement('div');
        if(i%2==0){
            box7.style.backgroundColor ='white'
        }
        else{
            box7.style.backgroundColor ='black'
        }
        chessContainer.appendChild(box7)
    }
    for(i=0;i<8;i++){
        let box8=document.createElement('div');
        if(i%2==0){
            box8.style.backgroundColor ='black'
        }
        else{
            box8.style.backgroundColor ='white'
        }
        chessContainer.appendChild(box8)
    }