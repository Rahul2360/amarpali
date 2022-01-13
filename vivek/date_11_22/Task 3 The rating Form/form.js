const inputs = document.getElementsByClassName("inp");
const formDetails = document.getElementById("details");
// const inputsArray=[];
// for (let i = 0; i < inputs.length; i++) {
//     inputsArray.push(inputs[i]); 
// }
var btn = document.getElementById("hide");
var show = document.getElementById("show");
// console.log(inputsArray[0]);
// var i;
btn.addEventListener("click", (event) => {
    // let textar=document.getElementsByTagName("textarea");
    // console.log(inputsa[i]);
    for (let i = 0; i < inputs.length; i++) {
        if ((inputs[i].style.display != "none")) {
            inputs[i].style.display = "none";
        }
        //     document.getElementsByClassName("inputs[i]");
        else if ((inputs[i].style.display == "none")) {
            inputs[i].style.display = "";
        }
    }
    // }  Total in 9 lines,better approach that getElementbyId :)
});
// show.addEventListener("click", (event) => {
//     // let textar=document.getElementsByTagName("textarea");
//     // console.log(inputsa[i]);
//     event.preventDefault();
//     for (let i = 19; i<=26; i++) {
//         if ((inputs[i].value!="")) {
//             console.log(inputs[i].value);
//         }
//         //     document.getElementsByClassName("inputs[i]");
//         else if ((inputs[i].value=="")) {
//             alert("Fill the input values");
//             break;
            
//         }
//         alert("Fill the input values");
//     }
//     // }  Total in 9 lines,better approach that getElementbyId :)
// });
formDetails.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    let value4 = document.getElementById("textarea").value
    let value5 = document.getElementById("name").value
    let value6 = document.getElementById("company").value
    let value7 = document.getElementById("city").value
    let value8 = document.getElementById("state").value
    let value9 = document.getElementById("email").value
    let value10 = document.getElementById("phone").value

 if (value4!="" && value6!="" && value7!="" && value5!="" && value8!="" && value9!="" && value10!="") {
    
    console.log("Name:-"+value5);
    console.log("Company:-"+value6);
    console.log("City/Town:-"+value7);
    console.log("State:-"+value8);
    console.log("Email:-"+value9);
    console.log("Phone:-"+value10);
    console.log("Comment:-"+value4);
}
else if (value4=="" && value6=="" && value7=="" && value5=="" && value8=="" && value9=="" && value10=="") {
    alert("Fill Values")
}
});

formDetails.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    let value1 = document.getElementById("Worse").checked
    let value2 = document.getElementById("Remained the same").checked
    let value3 = document.getElementById("Better").checked
       


    if (value1 == true) {
        let selectedValue1 = document.getElementById('Worse').value;
        console.log( "experience with ASI beocme:-"+ selectedValue1);
    }
    else if (value2 == true) {
        let selectedValue2 = document.getElementById('Remained the same').value;
        console.log("experience with ASI beocme:-"+selectedValue2);
    }
    else if (value3 == true) {
        let selectedValue3 = document.getElementById('Better').value;
        console.log("experience with ASI beocme:-"+selectedValue3);
    }
   
  

});
formDetails.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    let value1 = document.getElementById("Disagree").checked
    let value2 = document.getElementById("Strongly agree").checked
    let value3 = document.getElementById("Agree").checked
    let value4 = document.getElementById("Neigther agree nor disagree").checked
    let value5 = document.getElementById("Strongly disagree").checked



    if (value1 == true) {
        let selectedValue1 = document.getElementById('Disagree').value;
        console.log("ASI team response to your enquires in a timely manner:-"+selectedValue1);
    }
    else if (value2 == true) {
        let selectedValue2 = document.getElementById('Strongly agree').value;
        console.log("ASI team response to your enquires in a timely manner:-"+selectedValue2);
    }
    else if (value3 == true) {
        let selectedValue3 = document.getElementById('Agree').value;
        console.log("ASI team response to your enquires in a timely manner:-"+selectedValue3);
    }
    else if (value4 == true) {
        let selectedValue4 = document.getElementById('Neigther agree nor disagree').value;
        console.log("ASI team response to your enquires in a timely manner:-"+selectedValue4);
    }

    else if (value5 == true) {
            let selectedValue5 = document.getElementById('Strongly disagree').value;
            console.log("ASI team response to your enquires in a timely manner:-"+selectedValue5);
        }
        else {
            alert("Select Value")
        }
    
});
formDetails.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    let value1 = document.getElementById("Disag").checked
    let value2 = document.getElementById("Strong agree").checked
    let value3 = document.getElementById("Agr").checked
    let value4 = document.getElementById("Neigth agree nor disagree").checked
    let value5 = document.getElementById("Strong disagree").checked



    if (value1 == true) {
        let selectedValue1 = document.getElementById('Disag').value;
        console.log(" ASI repersentative well trend and knowledgeable :-"+selectedValue1);
    }
    else if (value2 == true) {
        let selectedValue2 = document.getElementById('Strong agree').value;
        console.log(" ASI repersentative well trend and knowledgeable :-"+selectedValue2);
    }
    else if (value3 == true) {
        let selectedValue3 = document.getElementById('Agr').value;
        console.log(" ASI repersentative well trend and knowledgeable :-"+selectedValue3);
    }
    else if (value4 == true) {
        let selectedValue4 = document.getElementById('Neigth agree nor disagree').value;
        console.log(" ASI repersentative well trend and knowledgeable :-"+selectedValue4);
    }

    else if (value5 == true) {
            let selectedValue5 = document.getElementById('Strong disagree').value;
            console.log(" ASI repersentative well trend and knowledgeable :-"+selectedValue5);
        }
    


});
formDetails.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    let value1 = document.getElementById("Very high quality").checked
    let value2 = document.getElementById("High quality").checked
    let value3 = document.getElementById("Neigther high nor low quality").checked
    let value4 = document.getElementById("Low quality").checked
    let value5 = document.getElementById("Very low quality").checked



    if (value1 == true) {
        let selectedValue1 = document.getElementById('Very high quality').value;
        console.log("Rate the quality of the content :-"+selectedValue1);
    }
    else if (value2 == true) {
        let selectedValue2 = document.getElementById('High quality').value;
        console.log("Rate the quality of the content :-"+selectedValue2);
    }
    else if (value3 == true) {
        let selectedValue3 = document.getElementById('Neigther high nor low quality').value;
        console.log("Rate the quality of the content :-"+selectedValue3);
    }
    else if (value4 == true) {
        let selectedValue4 = document.getElementById('Low quality').value;
        console.log("Rate the quality of the content :-"+selectedValue4);
    }

    else if (value5 == true) {
            let selectedValue5 = document.getElementById('Very low quality').value;
            console.log("Rate the quality of the content :-"+selectedValue5);
        }
    


});