function validate() {
    var e = document.getElementsByName("email")[0].value;
    var atindex = e.indexOf('@');
    var dotindex = e.lastIndexOf('.');
    if (atindex < 1 || dotindex >= e.lenght - 2 || dotindex - atindex < 3) {
        alert("Wrong email");
    }
}