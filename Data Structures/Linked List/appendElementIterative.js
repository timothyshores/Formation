// Given a linked list, append an element with a target value to the list iteratively.

// Examples:
// Given a linked list: 1 ➞ 4 ➞ 5, target: 7 // returns 1 ➞ 4 ➞ 5 ➞ 7
// Given a linked list: 0, target 7 // returns 0 ➞ 7

class Node {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

const arrayify = (head) => {
	let pointer = head;
	const array = [];

	while (pointer != null) {
		array.push(pointer.value);
		pointer = pointer.next;
	}

	return array;
};

const append = (head, target) => {
	if (head === null) return new Node(target);

	let current = head;

	while (current.next) {
		current = current.next;
	}

	current.next = new Node(target);

	return head;
};
