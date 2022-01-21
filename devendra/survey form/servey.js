var a;
var naam = document.getElementById("name");
var company = document.getElementById("company");
var state = document.getElementById("state");
var city = document.getElementById("city");
var number = document.getElementById("number");
var email = document.getElementById("email");
var big_text = document.getElementById("big_text");
var quality = document.getElementById("quality");
var trainer = document.getElementById("trainer");
var manner = document.getElementById("manner");
var experience = document.getElementById("experience");
var rating = document.getElementById("rating");

var rradio1 = document.getElementById("exampleRadios1").checked;
var rradio2 = document.getElementById("exampleRadios2").checked;
var rradio3 = document.getElementById("exampleRadios3").checked;


function show_hide() {
    if (a == 1) {
        naam.style.display = "inline";
        company.style.display = "inline";
        state.style.display = "inline";
        city.style.display = "inline";
        number.style.display = "inline";
        email.style.display = "inline";
        big_text.style.display = "inline";
        quality.style.display = "inline";
        trainer.style.display = "inline";
        manner.style.display = "inline";
        experience.style.display = "inline";
        rating.style.display = "inline";
        return a = 0;
    }
    else {
        naam.style.display = "none";
        company.style.display = "none";
        state.style.display = "none";
        city.style.display = "none";
        number.style.display = "none";
        email.style.display = "none";
        big_text.style.display = "none";
        quality.style.display = "none";
        trainer.style.display = "none";
        manner.style.display = "none";
        experience.style.display = "none";
        rating.style.display = "none";
        return a = 1;
    }
}

const formDetails = document.getElementById("form_details");
formDetails.addEventListener("submit", async (ev) => {
   ev.preventDefault();

    

    var rradio1 = document.getElementById("exampleRadios1").checked;
    var rradio2 = document.getElementById("exampleRadios2").checked;
    var rradio3 = document.getElementById("exampleRadios3").checked;
    var rradio4 = document.getElementById("exampleRadios4").checked;
    var rradio5 = document.getElementById("exampleRadios5").checked;
    var rradio6 = document.getElementById("exampleRadios6").checked;
    var rradio7 = document.getElementById("exampleRadios7").checked;
    var rradio8 = document.getElementById("exampleRadios8").checked;
    var rradio9 = document.getElementById("exampleRadios9").checked;
    var rradio10 = document.getElementById("exampleRadios10").checked;
    var rradio11 = document.getElementById("exampleRadios11").checked;
    var rradio12 = document.getElementById("exampleRadios12").checked;
    var rradio13 = document.getElementById("exampleRadios13").checked;
    var rradio14 = document.getElementById("exampleRadios14").checked;
    var rradio15 = document.getElementById("exampleRadios15").checked;
    var rradio16 = document.getElementById("exampleRadios16").checked;
    var rradio17 = document.getElementById("exampleRadios17").checked;
    var rradio18 = document.getElementById("exampleRadios18").checked;



    //rating
    var radio1 = document.getElementById("radio1").checked;
    var radio2 = document.getElementById("radio2").checked;
    var radio3 = document.getElementById("radio3").checked;
    var radio4 = document.getElementById("radio4").checked;
    var radio5 = document.getElementById("radio5").checked;
    var radio6 = document.getElementById("radio6").checked;
    var radio7 = document.getElementById("radio7").checked;
    var radio8 = document.getElementById("radio8").checked;
    var radio9 = document.getElementById("radio9").checked;
    var radio10 = document.getElementById("radio10").checked;

    if (radio1 == true) {
        var rate1 = document.getElementById("radio1").value;
        console.log("Rating : " + rate1);
    }
    else if (radio2 == true) {
        var rate2 = document.getElementById("radio2").value;
        console.log("Rating : " + rate2);
    }
    else if (radio3 == true) {
        var rate3 = document.getElementById("radio3").value;
        console.log("Rating : " + rate3);
    }
    else if (radio4 == true) {
        var rate4 = document.getElementById("radio4").value;
        console.log("Rating : " + rate4);
    }
    else if (radio5 == true) {
        var rate5 = document.getElementById("radio5").value;
        console.log("Rating : " + rate5);
    }
    else if (radio6 == true) {
        var rate6 = document.getElementById("radio6").value;
        console.log("Rating : " + rate6);
    }
    else if (radio7 == true) {
        var rate7 = document.getElementById("radio7").value;
        console.log("Rating : " + rate7);
    }
    else if (radio8 == true) {
        var rate8 = document.getElementById("radio8").value;
        console.log("Rating : " + rate8);
    }
    else if (radio9 == true) {
        var rate9 = document.getElementById("radio9").value;
        console.log("Rating : " + rate9);
    }
    else if (radio10 == true) {
        var rate10 = document.getElementById("radio10").value;
        console.log("Rating : " + rate10);
    }
    else {
        alert("Please Rate.");
    }

    //1st
    if (rradio1 == true) {
        var selectedr1 = document.getElementById("exampleRadios1").value;
        console.log("Based on this meeting has your experience with ASI become?: " + selectedr1);

    }
    else if (rradio2 == true) {
        var selectedr2 = document.getElementById("exampleRadios2").value;
        console.log("Based on this meeting has your experience with ASI become?: " + selectedr2);
    }
    else if (rradio3 == true) {
        var selectedr3 = document.getElementById("exampleRadios3").value;
        console.log("Based on this meeting has your experience with ASI become?: " + selectedr3);
    }

    else {
        alert("select value from question 2.");
    }

    //2nd

    if (rradio4 == true) {
        var selectedr4 = document.getElementById("exampleRadios4").value;
        console.log("Does the ASI team respond to your inquiries in a timely manner: " + selectedr4);

    }
    else if (rradio5 == true) {
        var selectedr5 = document.getElementById("exampleRadios5").value;
        console.log("Does the ASI team respond to your inquiries in a timely manner: " + selectedr5);
    }
    else if (rradio6 == true) {
        var selectedr6 = document.getElementById("exampleRadios6").value;
        console.log("Does the ASI team respond to your inquiries in a timely manner: " + selectedr6);
    }

    else if (rradio7 == true) {
        var selectedr7 = document.getElementById("exampleRadios7").value;
        console.log("Does the ASI team respond to your inquiries in a timely manner: " + selectedr7);
    }
    else if (rradio8 == true) {
        var selectedr8 = document.getElementById("exampleRadios8").value;
        console.log("Does the ASI team respond to your inquiries in a timely manner: " + selectedr8);
    }

    else {
        alert("select value from question 3.");
    }

    //3rd

    if (rradio9 == true) {
        var selectedr9 = document.getElementById("exampleRadios9").value;
        console.log("Was the ASI representatives well trained and knowledgeable: " + selectedr9);

    }
    else if (rradio10 == true) {
        var selectedr10 = document.getElementById("exampleRadios10").value;
        console.log("Was the ASI representatives well trained and knowledgeable: " + selectedr10);
    }
    else if (rradio11 == true) {
        var selectedr11 = document.getElementById("exampleRadios11").value;
        console.log("Was the ASI representatives well trained and knowledgeable: " + selectedr11);
    }

    else if (rradio12 == true) {
        var selectedr12 = document.getElementById("exampleRadios12").value;
        console.log("Was the ASI representatives well trained and knowledgeable: " + selectedr12);
    }
    else if (rradio13 == true) {
        var selectedr13 = document.getElementById("exampleRadios13").value;
        console.log("Was the ASI representatives well trained and knowledgeable: " + selectedr13);
    }

    else {
        alert("select value from question 4.");
    }

    //4th

    if (rradio14 == true) {
        var selectedr14 = document.getElementById("exampleRadios14").value;
        console.log("Was the ASI representatives well trained and knowledgeable: " + selectedr14);

    }
    else if (rradio15 == true) {
        var selectedr15 = document.getElementById("exampleRadios15").value;
        console.log("Was the ASI representatives well trained and knowledgeable: " + selectedr15);
    }
    else if (rradio16 == true) {
        var selectedr16 = document.getElementById("exampleRadios16").value;
        console.log("Was the ASI representatives well trained and knowledgeable: " + selectedr16);
    }

    else if (rradio17 == true) {
        var selectedr17 = document.getElementById("exampleRadios17").value;
        console.log("Was the ASI representatives well trained and knowledgeable: " + selectedr17);
    }
    else if (rradio18 == true) {
        var selectedr18 = document.getElementById("exampleRadios18").value;
        console.log("Was the ASI representatives well trained and knowledgeable: " + selectedr18);
    }

    else {
        alert("select value from question 5.");
    }


    //Description
    console.log("discription:" + big_text.value);
    // personal details

    console.log("name:" + naam.value);
    console.log("company:" + company.value);
    console.log("state:" + state.value);
    console.log("city:" + city.value);
    console.log("number:" + number.value);
    console.log("email address:" + email.value);
    

})