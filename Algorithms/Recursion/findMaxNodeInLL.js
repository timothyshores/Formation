// Return the max value in a Linked List using recursion and no iterative loops

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const findMaxNodeValue = (head) => {
	if (!head) return -Infinity;

	return Math.max(head.value, findMaxNodeValue(head.next));
};

// All test cases return true
console.log(findMaxNodeValue(new Node(1))); // 1
console.log(findMaxNodeValue(new Node(2))); // 2
console.log(findMaxNodeValue(new Node(1, new Node(2)))); // 2
console.log(findMaxNodeValue(new Node(1, new Node(2, new Node(3))))); // 3
console.log(findMaxNodeValue(new Node(3, new Node(2, new Node(1))))); // 3
console.log(findMaxNodeValue(new Node(1, new Node(3, new Node(2))))); // 3
