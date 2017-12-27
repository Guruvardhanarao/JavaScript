var arr = [];

var l = arr.length;
function addEle() {
    var addEle = document.getElementById("addEle");
    arr[l] = document.getElementById("myTxt").value;
    var newDiv = document.createElement("div");
    newDiv.innerHTML = arr[l];
    
    addEle.appendChild(newDiv);
    console.log(l);
        
}

function arrLength() {
    var arrL = document.getElementById("arrL").value;
}