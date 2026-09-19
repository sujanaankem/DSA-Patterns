let array = [2,4,3,5,7,10,8];
let k= 3
function onClickCheck() {
debugger
    let bigArray = [];
    let sum = [];
    for (i = 0; i <= (array.length - k); i++) {
        let subArray = [];
        let arraySum = 0;
        for (j = i; j < i + k; j++) {
            subArray.push(array[j]);
            arraySum += array[j];
        }
        bigArray.push(subArray);
        sum.push(arraySum);
    }
    //console.log(bigArray);
    console.log("SubArray:", bigArray);
      console.log("Sum:", sum);
      console.log("MaxValue", Math.max(...sum));
}

let _btnCheck = document.getElementById("btnCheck");

addEventListener('click', onClickCheck);