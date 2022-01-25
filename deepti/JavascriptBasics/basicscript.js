/*Variables */
var a = 15;
var b = 20;
var c = a + b;
document.write("The value of a is ", a, "<br>");
document.write("The value of b is ", b, "<br>");
document.write("The value of c is ", c, "<br>");

{
    let bikename;
    bikename = "Yamaha";
    document.write(bikename, "<br>");
}
/*document.write(bikename);*/

const x = 5,
    y = 7;
const z = x + y;
document.write(z, "<br>");
/*x = x + 10;
document.write(x);*/

/*Data types */
var d = 5;
var e = "Hii People!";
var flag = true;
var p;
var num = null;
document.write(typeof(d), "<br>");
document.write(typeof(e), "<br>");
document.write(typeof(flag), "<br>");
document.write(typeof(p), "<br>");
document.write(typeof(null), "<br>");
/*type conversion */
var num = String(35);
console.log(num, typeof(num));
var str = Number("Hello");
console.log(str, typeof(str));
var str1 = Number("8976");
console.log(str1, typeof(str1));
var bool = Number(true);
console.log(bool, typeof(bool));
var number = parseInt('76.678');
console.log(number, typeof(number));
var number = parseFloat('76.678');
console.log(number, typeof(number));
var number = parseFloat('76.678');
console.log(number.toFixed(4), typeof(number));

/*Array */
var car = ["Maruti", "Honda", "Kia"];
car.push("Nissan");
car.pop();
car.push(20);
document.write(car, "<br>");
document.write(car[1], "<br>");
var fruits = new Array("Apple", "Mango", "Banana");
document.write(fruits, "<br>");

/*Arithmetic Operators */
var p = 6;
var q = 4;
document.write("Addition ", p + q, "<br>");
document.write("Subtraction ", p - q, "<br>");
document.write("Multiplication ", p * q, "<br>");
document.write("Division ", p / q, "<br>");
document.write("Modulus ", p % q, "<br>");
document.write("Increment ", ++p, "<br>");
document.write("Decrement ", --p, "<br>");
/*Assignment Operators */
var g = 8;
var h = g;
document.write("Value of h ", h, "<br>");
var a1 = 50;
a1 += 6;
document.write("Value of a1 ", a1, "<br>");
a1 -= 5;
document.write("Value of a1 ", a1, "<br>");
a1 *= 4;
document.write("Value of a1 ", a1, "<br>");
a1 /= 6;
document.write("Value of a1 ", a1, "<br>");
a1 %= 6;
document.write("Value of a1 ", a1, "<br>");
/*Conditional Statements */
var a2 = 8;
if (a2 % 2 == 0) {
    document.write("Even number", "<br>");
} else {
    document.write("Odd number", "<br>");
}
var month = 8;
switch (month) {
    case 1:
        document.write("January", "<br>");
        break;
    case 2:
        document.write("February", "<br>");
        break;
    case 3:
        document.write("March", "<br>");
        break;
    case 4:
        document.write("April", "<br>");
        break;
    case 5:
        document.write("May", "<br>");
        break;
    case 6:
        document.write("June", "<br>");
        break;
    case 7:
        document.write("July", "<br>");
        break;
    case 8:
        document.write("August", "<br>");
        break;
    case 9:
        document.write("September", "<br>");
        break;
    default:
        document.write("Wrong input", "<br>");

}
/*Loop */
for (var t = 1; t <= 5; t++) {
    document.write("<h5>" + 10 * t + "</h5>");
}
var s = 1;
while (s <= 10) {
    document.write("<h5>" + s + "</h5>");
    s += 2;
}
/*Function */
function sum(j, k) {
    var total = j + k;
    return total;
}
var output = sum(35, 14);
document.write(output, "<br>");
/*Objects */
var cars = {
    car_manufacturer: "Toyota",
    car_model: "Innova",
    price: 50000,

    drivedetails: function() {
        return ("This car comes with four wheel drive");
    }
}
document.write(cars.drivedetails(), "<br>");
/*Date formatting */
var now = new Date();
document.write(now, "<br>");
var gotodate = new Date(2019, 1, 22, 10, 33, 30, 0);
document.write(gotodate, "<br>");
var showdate = new Date("October 28 2005 7:30:15");
document.write(showdate, "<br>");
var now = new Date("2018");
document.write(now, "<br>");
/*String*/
let myString = 'JavaScriptBasics';
console.log(myString.charAt(7));