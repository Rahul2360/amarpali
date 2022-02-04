var price, product, sellingPrice;
var quantity, BuyPrice, time;

price = document.getElementById("price");
var btn = document.getElementById("btn");
var table = document.getElementById("createtabl");

var selling_price = {
    'RAM': 4000,
    'Hard Drive': 15000,
    'Graphic Card': 10000,
    'Mouse': 100,
    'Monitor': 8500,
    'Motherboard': 10000
}
var buying_price = {
    'RAM': 2000,
    'Hard Drive': 8000,
    'Graphic Card': 7000,
    'Mouse': 60,
    'Monitor': 5500,
    'Motherboard': 8000
}
$(document).ready(function() {
    $(function() {
        $('#datepicker').datepicker({
            endDate: 'today'
        });
    });
})

function priceFound(productName) {
    sellingPrice = selling_price[productName.value];
    price.value = sellingPrice;
    product = productName.value;
    BuyPrice = buying_price[productName.value];

}

var total;
var profit;

function total_and_profit() {
    total = selling_price * quantity;
    profit = selling_price - buying_price;
}


var sno = 1;
var x = 0;
var date_arr = [];
var product_arr = [];
var price_arr = [];
var sold_arr = [];
var total_arr = [];
var profit_arr = [];
var date_time;

function addrow() {
    total_and_profit();
    var form = document.getElementById('form')
    form.addEventListener('submit', function(event) {
        event.preventDefault() //prevents autosubmitting
        quantity = document.getElementById("quantity").value;

        var addRow = document.getElementById("createtable");
        var cel = addRow.insertRow(sno);
        var cel1 = cel.insertCell(0);
        var cel2 = cel.insertCell(1);
        var cel3 = cel.insertCell(2);
        var cel4 = cel.insertCell(3);
        var cel5 = cel.insertCell(4);
        var cel6 = cel.insertCell(5);
        var cel7 = cel.insertCell(6);

        date_arr[x] = date_time;
        product_arr[x] = product;
        price_arr[x] = selling_price;
        sold_arr[x] = quantity;
        total_arr[x] = total;
        profit_arr[x] = profit;

        cel1.innerHTML = sno;
        cel2.innerHTML = date_arr[x];
        cel3.innerHTML = product_arr[x];
        cel4.innerHTML = price_arr[x];
        cel5.innerHTML = sold_arr[x];
        cel6.innerHTML = total_arr[x];
        cel7.innerHTML = profit_arr[x];
        sno++;
        x++;
    })
}