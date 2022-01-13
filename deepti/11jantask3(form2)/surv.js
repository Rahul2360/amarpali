function selectBtn() {
    var sel = document.getElementById('DIVbtns').getElementsByTagName('div');
    for (var i = 0; i < sel.length; i++) {
        sel[i].style.backgroundColor = "yellow";
    }
    document.getElementById().style.backgroundColor = 'aqua';
}
console.log(sel);

function mandatory() {
    var a = document.getElementsByName("compname")[0].value;
    if (a == "") {
        alert("Company name must be filled out");
    }
}

function validate() {
    var e = document.getElementsByName("email")[0].value;
    var atindex = e.indexOf('@');
    var dotindex = e.lastIndexOf('.');
    if (atindex < 1 || dotindex >= e.length - 2 || dotindex - atindex < 3) {
        alert("Wrong email");
    }
}

var a;

function show_hide() {
    if (a == 1) {
        document.getElementById("name").style.display = "inline";
        document.getElementById("company").style.display = "inline";
        document.getElementById("state").style.display = "inline";
        document.getElementById("city").style.display = "inline";
        document.getElementById("number").style.display = "inline";
        document.getElementById("email").style.display = "inline";
        document.getElementById("big_text").style.display = "inline";
        document.getElementById("quality").style.display = "inline";
        document.getElementById("trainer").style.display = "inline";
        document.getElementById("manner").style.display = "inline";
        document.getElementById("experience").style.display = "inline";
        document.getElementById("rating").style.display = "inline";
        return a = 0;
    } else {
        document.getElementById("name").style.display = "none";
        document.getElementById("company").style.display = "none";
        document.getElementById("state").style.display = "none";
        document.getElementById("city").style.display = "none";
        document.getElementById("number").style.display = "none";
        document.getElementById("email").style.display = "none";
        document.getElementById("big_text").style.display = "none";
        document.getElementById("quality").style.display = "none";
        document.getElementById("trainer").style.display = "none";
        document.getElementById("manner").style.display = "none";
        document.getElementById("experience").style.display = "none";
        document.getElementById("rating").style.display = "none";
        return a = 1;
    }
}


var form = document.getElementsById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault() //prevents autosubmitting
    var scale = document.getElementsByClassName('chart-scale').value
    console.log(scale)
    var expe = document.getElementById("result").value
    console.log(expe)
})