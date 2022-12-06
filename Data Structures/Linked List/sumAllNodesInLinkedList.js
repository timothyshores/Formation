// Given a linked list, sum all elements in the list.

// Examples:
// Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
// Given a linked list: 1 // returns 1

class Node {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

const sum = (node) => {
	let sum = 0;

	while (node) {
		sum += node.value;
		node = node.next;
	}

	return sum;
};

// Empty Linked List
console.log(sum(null)); // 0
console.log(sum(new Node())); // 0

// Linked List with 1 node
console.log(sum(new Node(1))); // 1
console.log(sum(new Node(0))); // 0
console.log(sum(new Node(-1))); // -1

// Linked List with 2 nodes
console.log(sum(new Node(0, new Node(0)))); // 0
console.log(sum(new Node(1, new Node(1)))); // 2
console.log(sum(new Node(1, new Node(2)))); // 3
console.log(sum(new Node(-1, new Node(-1)))); // -2

// Linked List with 3 nodes
console.log(sum(new Node(1, new Node(2, new Node(3))))); // 6
console.log(sum(new Node(1, new Node(4, new Node(5))))); // 10
console.log(sum(new Node(-1, new Node(-5, new Node(-4))))); // -10
