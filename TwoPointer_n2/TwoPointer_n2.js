let twoPointer = [];
let sum = [];
debugger;
function onClickCheck() {
    const input = document.getElementById("txtNumber").value;

    // Get numbers from input (comma separated)
     twoPointer = input.split(",").map(Number);
    
    let target = 10; // fixed target for demo

    for( i = 0; i < twoPointer.length; i++){

        for(j = i+1; j< twoPointer.length; j++){
            sum.push(twoPointer[i]+twoPointer[j]);
             if (twoPointer[i]+twoPointer[j] ==target) {
            alert( `✅ Pair found: ${twoPointer[i]} + ${twoPointer[j]} = ${target}`);
           
        }
    }
 }

}