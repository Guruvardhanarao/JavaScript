var myArr = new Array(5);
myArr[0] = "Ganesha";
myArr[1] = "Shiva";
myArr[2] = "Venkateswara";
myArr[3] = "Anjaneya";
myArr[4] = "Rama";
console.log("hiii");
function displayArray() {
    
    var arraydiv = document.getElementById("arraydiv");
    
    for(var i=0; i<myArr.length; i++) {
        var newdiv = document.createElement("div");
        newdiv.innerHTML = "item " +(i+1) + "is = " + myArr[i];
        arraydiv.appendChild(newdiv);
    }
}