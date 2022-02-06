var dayarray;
var montharray;
var date;
var currentDate;
var today;
var btn = document.getElementById('btn');
var table = document.getElementById('crtable');
var data = [];
var tempdata = [];
var n = 1;
var profit;
const fetchdata = document.getElementsByClassName('fetch');
var sell;
var select;
var inputdate;
var dateError;
var errorflag=0;
// console.log(fetchdata.length);
btn.addEventListener('click', (e) => {
    var sold = document.getElementById('sold').value | 0
    e.preventDefault()
    date = document.getElementById('date').value;
    if (date == "" || fetchdata[4].value == "") {
        errorflag=1;
        inputdate = document.getElementById('inputdate');
        dateError=document.createElement("span");
        dateError.innerHTML="&nbspdate and time cant be empty"
        dateError.style.color="red";
        inputdate.appendChild(dateError);

    }

    currentDate = new Date(date);
    today = new Date();
    if (currentDate > today) {
        errorflag=1;
        inputdate = document.getElementById('inputdate');
        dateError=document.createElement("span");
        dateError.innerHTML="&nbspinvalid date"
        dateError.style.color="red";
        inputdate.appendChild(dateError);

    }
    
    /* Another method*/
    else {
        dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat'];
        monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'];
        var day = currentDate.getDay();
        day = dayArray[day];
        var month = currentDate.getMonth();
        month = monthArray[month];
        var todaydate = currentDate.getDate();
        var year = currentDate.getFullYear();
    }
    if (sold<1) {
        errorflag=1;
        sell = document.getElementById('sell');
        var soldError=document.createElement("span");
        soldError.innerHTML="&nbspproduct cant be zero or less than zero"
        soldError.style.color="red";
        sell.appendChild(soldError);
        
    }
    for (let i = 0; i < fetchdata.length; i++) {
        data[i] = fetchdata[i].value;
    }

    var time = data[4];
    tempdata[0] = `${day} ${month} ${todaydate} ${year} ${time}`;
    tempdata[1] = data[0];
    tempdata[2] = data[1];
    tempdata[3] = data[2];
    tempdata[4] = tempdata[2] * tempdata[3];
    if (profit==null||profit.value=="") {
        errorflag=1;
        select = document.getElementById('select');
        var selectError=document.createElement("span");
        selectError.innerHTML="&nbspplease select the item"
        selectError.style.color="red";
        select.appendChild(selectError);
        // location.reload();
    }
    else if (profit.value == 'Monitor') {
        //  console.log(val.value);
        tempdata[5] = tempdata[4] - 5550 * data[2];;
    }
    else if (profit.value == 'Mother Board') {
        tempdata[5] = tempdata[4] - 8000 * data[2];
    }
    else if (profit.value == "Mouse") {
        tempdata[5] = tempdata[4] - 60 * data[2];
    }
    else if (profit.value == "Hard Disk") {
        tempdata[5] = tempdata[4] - 8000 * data[2];
    }
    else if (profit.value == "Graphic Card") {
        tempdata[5] = tempdata[4] - 7000 * data[2];
    }
    else if (profit.value == "Ram") {
        tempdata[5] = tempdata[4] - 2000 * data[2];
    }
    // console.log(tempdata);\
    if(errorflag==1){
        setTimeout(()=>{
        location.reload();
        },4000);
        }

    if (sold != 0 && currentDate < today && profit.value!=""  ) {
    dataedit();
    }
})
function dataedit() {
    var table = document.getElementById("crtable");
    var newrow = table.insertRow(n);
    var sr = newrow.insertCell(0);
    sr.innerHTML = n;
    sr.style.fontWeight = "bold";
    n = n + 1;

    for (let i = 0; i < tempdata.length; i++) {

        newrow.insertCell(i + 1).innerHTML = tempdata[i];

    }
}

function product(val) {
    profit = val;
    document.getElementById("price").setAttribute("style", "background-color:lightgrey; border-radius: 3px; ")
    //console.log(val.value);
    if(val.value==""){
        document.getElementById('price').value = '';
    }
    else if (val.value == 'Monitor') {
        //  console.log(val.value);
        document.getElementById('price').value = '8500';
    }
    else if (val.value == 'Mother Board') {
        document.getElementById('price').value = '10000';
    }
    else if (val.value == "Mouse") {
        document.getElementById('price').value = '100';
    }
    else if (val.value == "Hard Disk") {
        document.getElementById('price').value = '15000';
    }
    else if (val.value == "Graphic Card") {
        document.getElementById('price').value = '10000';
    }
    else if (val.value == "Ram") {
        document.getElementById('price').value = '4000';
    }
}

/*var price;
price=document.getElementById('price'); //another short approach from youtube
const SellingPrice= {
    'Ram':4000,
    'Hard Disk':15000,
    'Graphic Card':10000,
   'Mouse':100,
    'Monitor':8500,
    'Mother Board':10000,
    }
    const BuyingPrice= {
    'RAM':2000,
    'Hard Drive':8000,
    'Graphic Card':7000,
    'Mouse':60,
    'Monitor':5500,
    'Motherboard':8000,
    }
   function product(productName) {
        price.value=SellingPrice[productName.value];  
   }*/