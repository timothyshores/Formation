/*

A collection of helper classes and functions for solving Linked List coding problems

*/

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

/*

Convert a linked list into a string

Examples
toArray(new Node(1)) === "1"
toArray(new Node(1, new Node(2))) === "1 -> 2"
toArray(new Node(1, new Node(2, new Node(3)))) === "1 -> 2 -> 3"

*/
const toString = (head) => {
	if (!head) return "<empty>";

	let parts = [];
	while (head) {
		parts.push(head.value);
		head = head.next;
	}

	return parts.join(" -> ");
};

/*

Convert a linked list into an array

Examples
toArray(new Node(1)) === [1]
toArray(new Node(1, new Node(2))) === [1, 2]
toArray(new Node(1, new Node(2, new Node(3)))) === [1, 2, 3]

*/
const toArray = (head) => {
	let pointer = head;
	const array = [];

	while (pointer != null) {
		array.push(pointer.value);
		pointer = pointer.next;
	}

	return array;
};
