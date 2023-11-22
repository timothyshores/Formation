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

Convert a linked list into an array

Examples
arrayify(new Node(1)) === [1]
arrayify(new Node(1, new Node(2))) === [1, 2]
arrayify(new Node(1, new Node(2, new Node(3)))) === [1, 2, 3]

*/
const arrayify = (head) => {
	let pointer = head;
	const array = [];

	while (pointer != null) {
		array.push(pointer.value);
		pointer = pointer.next;
	}

	return array;
};
