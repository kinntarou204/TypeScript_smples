var ItemNames:String[]=["コーヒー","紅茶","ほうじ茶"];
console.log(ItemNames);


var item1={
    id:1,
    name:"コーヒー",
    price:350,
}
var item2={
    id:2,
    name:"紅茶",
    price:400,
}
var item3={
    id:3,
    name:"ほうじ茶",
    price:300,
}
//var items:object[]=[item1,item2,item3];
var items=[item1,item2,item3];
console.log(items,typeof items)

var borderPrice=350;
var fileteritems=items.filter((item)=>item.price<=borderPrice);
console.log(fileteritems);

function calculateTotalPrice(price:number,amount:number):number {
    var TotalPrice=price*amount;
    return TotalPrice
}
var amount=5;
var Totalprice=calculateTotalPrice(item1.price,amount);
console.log(Totalprice);
