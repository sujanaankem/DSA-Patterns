// Linked List Node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to detect cycle using Fast & Slow pointers
function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;          // move 1 step
        fast = fast.next.next;     // move 2 steps

        if (slow === fast) {
            return true; // cycle detected
        }
    }
    return false; // no cycle
}

// Example usage
function runExample() {
    let node1 = new ListNode(1);
    let node2 = new ListNode(2);
    let node3 = new ListNode(3);

    node1.next = node2;
    node2.next = node3;
    node3.next = node1; // creates a cycle

    let result = hasCycle(node1);
    document.getElementById("output").innerText = "Cycle detected: " + result;
}
