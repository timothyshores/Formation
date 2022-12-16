// Given an unsorted linked list, count the number of elements (iteratively or recursively).

// Examples:
// • Given a linked list: 1 ➞ 4 ➞ 5 // returns 3
// • Given a linked list: 0 // returns 1

class Node {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

const count = (head) => {
	if (!head) return 0;

	return 1 + count(head.next);
};

// Test Cases
console.log(count(null) === 0); // true
console.log(count(new Node()) === 1); // true
console.log(count(new Node(1, new Node(2))) === 2); // true
console.log(count(new Node(1, new Node(2, new Node(3)))) === 3); // true
console.log(count(new Node(1, new Node(2, new Node(3, new Node(4))))) === 4); // true
