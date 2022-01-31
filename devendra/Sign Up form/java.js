function Validate() {
    var a = document.getElementById("pass").value;
    var b = document.getElementById("re_pass").value;
    if (a != b) {
        document.getElementById("msg").innerHTML = "Password does not match";
        return false;
    }
    if (a == ""){
        document.getElementById("msg").innerHTML = "Please enter a password";
        return false;
    }

    if (a.length<5){
        document.getElementById("msg").innerHTML = "Please enter more than 5 characters";
        return false;
    }
    
}