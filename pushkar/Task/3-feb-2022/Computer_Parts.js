var price,product,priceProduct,printdate;
var soldItemNo,BuyPrice;
price=document.getElementById('price');
var btn=document.getElementById('btn');
var table=document.getElementById('crtable');
const SellingPrice= {
    'Ram':4000,
    'Hard Disk':15000,
    'Graphic Card':10000,
   'Mouse':100,
    'Monitor':8500,
    'Mother Board':10000,
    }
    //console.log(SellingPrice['Mouse']);
    const BuyingPrice= {
    'Ram':2000,
    'Hard Disk':8000,
    'Graphic Card':7000,
    'Mouse':60,
    'Monitor':5500,
    'Mother Board':8000,
    }
   function priceFound(productName) {
       priceProduct=SellingPrice[productName.value]; 
        price.value=priceProduct
        product=productName.value
        BuyPrice=BuyingPrice[productName.value]

   }
   
function checkForm(){
    event.preventDefault()
    soldItemNo=document.getElementById('soldItemNo').value;
    if(soldItemNo==0){
        alert("Product cannt be zero")
    }
    var todayDate=new Date();
    var date=document.getElementById('date').value;
    var comapre=new Date(date);
    printdate=todayDate.toString().slice(0,25);
    console.log(printdate);
    if(comapre>=todayDate){
        alert("Date is Invalid");
        document.getElementById('date').value=todayDate.toISOString().slice(0, 10) 
    }
    createTable()
}
var count=1;
var x;
function createTable(){
    
    var c_row=table.insertRow(count);
    var c_cell1=c_row.insertCell(0)
    var c_cell2=c_row.insertCell(1)
    var c_cell3=c_row.insertCell(2)
    var c_cell4=c_row.insertCell(3)
    var c_cell5=c_row.insertCell(4)
    var c_cell6=c_row.insertCell(5)
    var c_cell7=c_row.insertCell(6)
    c_cell1.innerHTML=count;
    c_cell2.innerHTML=printdate;
    c_cell3.innerHTML=product;
    c_cell4.innerHTML=priceProduct
    c_cell5.innerHTML=soldItemNo;
    var total=priceProduct*parseInt(soldItemNo);
    c_cell6.innerHTML=total
    c_cell7.innerHTML=total-BuyPrice;
    count++;
  

}
