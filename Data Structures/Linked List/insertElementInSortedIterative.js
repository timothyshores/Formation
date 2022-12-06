// Given a sorted linked list, insert an element in the appropriate position.

// Examples:
// • Given a linked list: 1 ➞ 3 ➞ 4, target: 2 // returns 1 ➞ 2 ➞ 3 ➞ 4
// • Given an empty linked list, target: 1  // returns 1

class Node {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

function arrayify(head) {
	let pointer = head;
	let array = [];

	while (pointer != null) {
		array.push(pointer.value);
		pointer = pointer.next;
	}

	return array;
}

function insert(head, target) {}
