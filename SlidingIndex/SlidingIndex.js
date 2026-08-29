let array = [2,4,3,5,7,10,8];
let k= 3
function onClickCheck() {
    let bigArray = [];
    for (i = 0; i <= (array.length - k); i++) {
        let subArray = [];
        for (j = i; j < i + 3; j++) {
            subArray.push(array[j]);
            
        }
        bigArray.push(subArray);
    }
    console.log(bigArray);
}