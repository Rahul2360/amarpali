const selling_price={
'RAM':4000,
'Hard Drive':15000,
'Graphic Card':10000,
'Mouse':100,
'Monitor':8500,
'Motherboard':10000
};

const buying_price={
  'RAM':2000,
  'Hard Drive':8000,
  'Graphic Card':7000,
  'Mouse':60,
  'Monitor':5500,
  'Motherboard':8000
  };

function show_price(){
  var product = document.getElementById("Product_list").value;
  document.getElementById("selling_price").value = selling_price[product];
}


function show(){
date_validation();
}

function date_validation(){
  var date = document.getElementById("date").value;
 var selected_date = new Date(date);
  var  today = new Date();
    if (selected_date > today) {
        alert("Invalid Date");
    }

    else {
       var day_array = ['Sun', 'Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat'];
       var month__array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'];
        var day = selected_date.getDay();
        day = day_array[day];
        var month = selected_date.getMonth();
        month = month_array[month];
        var dat = selected_date.getDate();
        var year = selected_date.getFullYear();
    }
}