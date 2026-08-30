let bigArray = [];
let subString = [];
function onClickCheck(){
    debugger;
    let Number = document.getElementById("txtNumbers").value;
    document.getElementById("pResult").innerHTML = Number;
    document.getElementById("txtNumbers").value = "";
    bigArray.push(Number);
}