var degree = 22.5;
var timer=30;
//var itemList = ["#oct1","#oct2"];
var items = [
    {item:"#oct1", rate:.5, id:null, deg:degree},
    {item:"#oct2", rate:.3, id:null, deg:degree},
    {item:"#oct3", rate:-.25, id:null, deg:degree}

];
var spinning = false;
var intId = null;

function rotateItem(){
    rotate();
    intId = setInterval(rotate,50);
}

function rotate() {
    for(var itemInt in items){
        var thisItem = items[itemInt];
        thisItem.deg+=thisItem.rate;
        $(thisItem.item).css({ 'WebkitTransform': 'rotate(' + thisItem.deg + 'deg)'});
        $(thisItem.item).css({ '-moz-transform': 'rotate(' + thisItem.deg + 'deg)'});
    }
}