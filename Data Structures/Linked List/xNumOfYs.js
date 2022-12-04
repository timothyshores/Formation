// Prompt
// Given integers X and Y, return the head of a linked list with X nodes with value Y.

// Expected Runtime
// Time: O(X) to generate a length X list
// Space O(X) to store a length X list

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

function toString(head) {
	if (!head) return "<empty>";

	let parts = [];
	while (head) {
		parts.push(head.val);
		head = head.next;
	}

	return parts.join(" -> ");
}

const createLL = (count, value) => {
	if (count === 0) return null;

	// Create head node
	const headNode = new Node(value);
	let currentNode = headNode;

	// loop iterates count number of times
	while (count > 1) {
		currentNode.next = new Node(value);
		currentNode = currentNode.next;
		count--;
	}

	return headNode;
};

// X is zero
console.log(toString(createLL(0, 1))); // null
console.log(toString(createLL(0, 10))); // null

// X is one
console.log(toString(createLL(5, 3)) === "3 -> 3 -> 3 -> 3 -> 3"); // true
console.log(toString(createLL(6, 6)) === "6 -> 6 -> 6 -> 6 -> 6 -> 6"); // true

// X is two
console.log(toString(createLL(2, 0)) === "0 -> 0"); // true
console.log(toString(createLL(2, 1)) === "1 -> 1"); // true
console.log(toString(createLL(2, -1)) === "-1 -> -1"); // true

// X is a large number
console.log(toString(createLL(5, 1)) === "1 -> 1 -> 1 -> 1 -> 1"); // true
console.log(
	toString(createLL(10, 1)) === "1 -> 1 -> 1 -> 1 -> 1 -> 1 -> 1 -> 1 -> 1 -> 1"
); // true

// X == Y
console.log(toString(createLL(2, 2)) === "2 -> 2"); // true
console.log(toString(createLL(3, 3)) === "3 -> 3 -> 3"); // true
console.log(toString(createLL(4, 4)) === "4 -> 4 -> 4 -> 4"); // true

// Y is zero
console.log(toString(createLL(2, 0)) === "0 -> 0"); // true
console.log(toString(createLL(3, 0)) === "0 -> 0 -> 0"); // true
console.log(toString(createLL(4, 0)) === "0 -> 0 -> 0 -> 0"); // true

// Y is negative
console.log(toString(createLL(2, -10)) === "-10 -> -10"); // true
