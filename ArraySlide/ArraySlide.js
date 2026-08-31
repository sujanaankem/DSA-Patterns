let number = [];
let sum = [];
function onClickCheck(){
    debugger;
    let Numbers = Number(document.getElementById("txtNumbers").value);
    number.push(Numbers);
    document.getElementById("pResult").innerHTML = number;
    document.getElementById("txtNumbers").value = "";   
}

function onClickAdd(){
    debugger;
    let arraySum = 0;
    for(i=0; i<number.length; i++){
        arraySum = arraySum + number[i];
    }
    sum.push(arraySum);
    document.getElementById("pAdd").innerHTML =`Sum : ${sum}`;
    document.getElementById("pMax").innerHTML =` max value : ${(Math.max(...number))}`;
}