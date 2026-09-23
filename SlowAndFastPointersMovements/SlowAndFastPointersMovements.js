let arr = [];

// Generate 10 random numbers
function generateNumbers() {
    arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100)); // random 0-99
    }
    document.getElementById("numbers").innerText = arr.join(", ");
    document.getElementById("steps").innerHTML = "";
}

// Show how slow and fast pointers move
function showPointerMovement() {
    let stepsDiv = document.getElementById("steps");
    stepsDiv.innerHTML = "";

    let slow = 0; // start at index 0
    let fast = 0; // start at index 0
    let stepCount = 1;

    while (fast < arr.length) {
        // Move slow by 1 step
        slow += 1;

        // Move fast by 2 steps
        fast += 2;

        // Prepare output
        let slowVal = (slow < arr.length) ? arr[slow] : "out of bounds";
        let fastVal = (fast < arr.length) ? arr[fast] : "out of bounds";

        stepsDiv.innerHTML += `<p>Step ${stepCount}: 
            Slow pointer at index ${slow} → ${slowVal}, 
            Fast pointer at index ${fast} → ${fastVal}</p>`;

        stepCount++;
    }
}
