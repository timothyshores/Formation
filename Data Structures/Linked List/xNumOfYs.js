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
