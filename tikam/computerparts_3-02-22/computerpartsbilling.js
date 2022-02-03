var s_no = [];
var datearr = [];
var productarr = [];
var pricearr = [];
var soldarr = [];
var totalarr = [];
var profitarr = [];
var n = 1;
var x = 0;
var product
var price;
var buyprice;
var dateandtime;
var noofsoldproducts;
var total;
var profit;
var init_date = document.getElementById("date").value;
var init_time = document.getElementById("time").value;
var flag=false;
const selling_price = {
  'RAM': 4000,
  'Hard Drive': 15000,
  'Graphic Card': 10000,
  'Mouse': 100,
  'Monitor': 8500,
  'Motherboard': 10000
};

const buying_price = {
  'RAM': 2000,
  'Hard Drive': 8000,
  'Graphic Card': 7000,
  'Mouse': 60,
  'Monitor': 5500,
  'Motherboard': 8000
};

function change() {
  product = document.getElementById("Product").value;
  sellprice = selling_price[product];
  buyprice = buying_price[product];
  document.getElementById("price").value = sellprice;
}
function total_and_profit() {
    var noofsoldproducts=document.getElementById("noofsoldproducts").value;
  total = sellprice * noofsoldproducts;
  profit = total-(noofsoldproducts*buyprice);
}

function submit() {
  date_validation();
  sold_product_validation();
  total_and_profit();
    if(flag=true){
  var addRow = document.getElementById("table");
  var new_row = addRow.insertRow(n);
  var cell1 = new_row.insertCell(0);
  var cell2 = new_row.insertCell(1);
  var cell3 = new_row.insertCell(2);
  var cell4 = new_row.insertCell(3);
  var cell5 = new_row.insertCell(4);
  var cell6 = new_row.insertCell(5);
  var cell7 = new_row.insertCell(6);

  datearr[x] = dateandtime;
  productarr[x] = product;
  pricearr[x] = sellprice;
  soldarr[x] = soldproducts;
  totalarr[x] = total;
  profitarr[x] = profit;

  cell1.innerHTML = n;
  cell2.innerHTML = datearr[x];
  cell3.innerHTML = productarr[x];
  cell4.innerHTML = pricearr[x];
  cell5.innerHTML = soldarr[x];
  cell6.innerHTML = totalarr[x];
  cell7.innerHTML = profitarr[x];
  n++;
  x++;
}
}
function date_validation() {
  var date = document.getElementById("date").value;
  var selected_date = new Date(date);
  var today = new Date();
  if (selected_date > today) {
    alert("Invalid Date");
  }
  else {
    print_date_and_time(selected_date, date);
  }
}

function print_date_and_time(selected_date, date) {
  var day_array = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat'];
  var month_array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'];
  var day = selected_date.getDay();
  day = day_array[day];
  var month = selected_date.getMonth();
  month = month_array[month];
  var printing_date = selected_date.getDate();
  var year = selected_date.getFullYear();

  var time = document.getElementById("time").value;
  dateandtime = day + " " + month + " " + printing_date + " " + year + " " + time;
   
}

function sold_product_validation() {
  soldproducts = document.getElementById("noofsoldproducts").value;
  if (soldproducts <= 0) {
    alert("Please select number of products greater than 0.");
    flag=false;
  }
}