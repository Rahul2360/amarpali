var a;
var naam = document.getElementById("name");
var company = document.getElementById("company");
var state = document.getElementById("state");
var city = document.getElementById("city");
var number =  document.getElementById("number");
var email = document.getElementById("email");
var big_text = document.getElementById("big_text");
var quality = document.getElementById("quality");
var trainer = document.getElementById("trainer");
var manner = document.getElementById("manner");
var experience = document.getElementById("experience");
var rating = document.getElementById("rating");
function show_hide()
{
    if(a==1)
    {
        naam.style.display="inline";
        company.style.display="inline";
        state.style.display="inline";
        city.style.display="inline";
       number.style.display="inline";
        email.style.display="inline";
        big_text.style.display="inline";
        quality.style.display="inline";
       trainer.style.display="inline";
        manner.style.display="inline";
       experience.style.display="inline";
        rating.style.display="inline";
        return a=0;
    }
    else{
        naam.style.display="none";
        company.style.display="none";
        state.style.display="none";
        city.style.display="none";
        number.style.display="none";
        email.style.display="none";
        big_text.style.display="none";
        quality.style.display="none";
        trainer.style.display="none";
        manner.style.display="none";
        experience.style.display="none";
        rating.style.display="none";
        return a=1;
    }
}

function display_console(){
   
    console.log(naam.value);
    console.log(company.value);
    console.log(state.value);
    console.log(city.value);
    console.log(number.value);
    console.log(email.value);
    console.log(big_text.value);
    console.log(rating.value);
}