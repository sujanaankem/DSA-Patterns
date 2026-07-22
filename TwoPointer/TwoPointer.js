// window.onload = function () {
//     const btn = document.getElementById("btnNumber");
//     const input = document.getElementById("txtNumber");
//     const divCheck = document.getElementById("divCheck");

//     btn.addEventListener("click", function () {
//         // Get numbers from input (comma separated)
//         let twoPointer = input.value.split(",").map(Number);

//         // Sort the array (important for two pointers)
//         twoPointer.sort((a, b) => a - b);

//         let target = 10; // fixed target for demo
//         let left = 0;
//         let right = twoPointer.length - 1;
//         let found = false;

//         while (left < right) {
//             let sum = twoPointer[left] + twoPointer[right];
//             if (sum === target) {
//                 divCheck.innerHTML = `✅ Pair found: ${twoPointer[left]} + ${twoPointer[right]} = ${target}`;
//                 found = true;
//                 break;
//             } else if (sum < target) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }

//         if (!found) {
//             divCheck.innerHTML = "❌ No pair adds up to " + target;
//         }
//     });
// };


let twoPointer = [];
debugger;
function onClickCheck() {
    const input = document.getElementById("txtNumber");
    const divCheck = document.getElementById("divCheck");

    // Get numbers from input (comma separated)
    let twoPointer = input.value.split(",").map(Number);

    // Sort the array (important for two pointers)
    twoPointer.sort((a, b) => a - b);

    let target = 10; // fixed target for demo
    let left = 0;
    let right = twoPointer.length - 1;
    let found = false;

    while (left < right) {
        let sum = twoPointer[left] + twoPointer[right];
        if (sum === target) {
            divCheck.innerHTML = `✅ Pair found: ${twoPointer[left]} + ${twoPointer[right]} = ${target}`;
            found = true;
            break;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    if (!found) {
        divCheck.innerHTML = "❌ No pair adds up to " + target;
    }
}
