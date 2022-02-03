var s_no = [];
var date_arr = [];
var product_arr = [];
var price_arr = [];
var sold_arr = [];
var total_arr = [];
var profit_arr = [];
var n = 1;
var x = 0;
var product
var sell_price;
var buy_price;
var date_time;
var sold_products;
var total;
var profit;
var init_date = document.getElementById("date").value;
var init_time = document.getElementById("time").value;

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

function show_price() {
  product = document.getElementById("Product_list").value;
  sell_price = selling_price[product];
  buy_price = buying_price[product];
  document.getElementById("selling_price").value = sell_price;
}
function total_and_profit() {
  total = sell_price * sold_products;
  profit = sell_price - buy_price;
}

function show() {
  date_validation();
  sold_product_validation();
  total_and_profit();

  var addRow = document.getElementById("show");
  var new_row = addRow.insertRow(n);
  var cell1 = new_row.insertCell(0);
  var cell2 = new_row.insertCell(1);
  var cell3 = new_row.insertCell(2);
  var cell4 = new_row.insertCell(3);
  var cell5 = new_row.insertCell(4);
  var cell6 = new_row.insertCell(5);
  var cell7 = new_row.insertCell(6);

  date_arr[x] = date_time;
  product_arr[x] = product;
  price_arr[x] = sell_price;
  sold_arr[x] = sold_products;
  total_arr[x] = total;
  profit_arr[x] = profit;

  cell1.innerHTML = n;
  cell2.innerHTML = date_arr[x];
  cell3.innerHTML = product_arr[x];
  cell4.innerHTML = price_arr[x];
  cell5.innerHTML = sold_arr[x];
  cell6.innerHTML = total_arr[x];
  cell7.innerHTML = profit_arr[x];
  n++;
  x++;
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
  date_time = day + " " + month + " " + printing_date + " " + year + " " + time;

}

function sold_product_validation() {
  sold_products = document.getElementById("sold_products").value;
  if (sold_products <= 0) {
    alert("Please select number of products greater than 0.");
  }
}