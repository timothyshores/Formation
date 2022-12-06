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