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
    if (atindex < 1 || dotindex >= e.lenght - 2 || dotindex - atindex < 3) {
        alert("Wrong email");
    }
}

var form = document.getElementsById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault() //prevents autosubmitting
    var scale = document.getElementsByClassName('chart-scale').value
    console.log(scale)
})