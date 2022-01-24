
function add() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var ans = num1 + num2;
    document.getElementById("result").innerHTML = ans;
}

function sub() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var ans = num1 - num2;
    document.getElementById("result").innerHTML = ans;
}

function mul() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var ans = num1 * num2;
    document.getElementById("result").innerHTML = ans;
}

function divide() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    if (num2 == 0) {
        document.getElementById("result").innerHTML = "please select second number > 0";
    }
    else {
        var ans = num1 / num2;
        document.getElementById("result").innerHTML = ans;
    }
}

function stu_name() {
    let roll = document.getElementById("roll").value;
    let names = ['Ashish', 'Aman', 'Balwant', 'Bhagwati', 'bhupendra', 'Deepti', 'Devendra', 'Himanshu', 'kartik', 'Kirti'];
    for (let i = 0; i < names.length; i++) {
        if (i == (roll - 1)) {
            document.getElementById("Name").innerHTML = names[i];
        }
    }
}
function marks() {
    var roll = document.getElementById("roll").value;
    var myobj = {
        1: 55,
        2: 70,
        3: 34,
        4: 74,
        5: 84,
        6: 83,
        7: 96,
        8: 77,
        9: 99,
        10: 65
    };

    document.getElementById("mark").innerHTML = myobj[roll];
}

function date_time() {
    let date = new Date();
    let dates = date.toLocaleDateString();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let show = hour + ':' + min + ':' + sec
    document.getElementById('time').innerHTML = show + " on date " + dates;
}

//string methods
var str = "My name is devendra singh negi";
console.log(str);
var str2 = str.slice(6,15);
console.log(str2);
console.log(str.replace("devendra" , "dev"));
console.log(str.toUpperCase());