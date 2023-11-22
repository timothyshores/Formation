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

function insert(head, target) {
	let current = head;

	if (!current) return new Node(target);

	while (current) {
		if (target + 1 === current.value) {
			let newHead = new Node(target);
			newHead.next = current;
			return newHead;
		} else if (current.value === target - 1) {
			let nodeAfterTarget = current.next;
			let newNode = new Node(target);
			current.next = newNode;
			newNode.next = nodeAfterTarget;
			return head;
		}
		current = current.next;
	}

	return head;
}

// Test Cases
const LL1 = new Node(1, new Node(3, new Node(4)));
const LL2 = new Node(-3, new Node(-2, new Node(-1)));
const LL3 = new Node(1, new Node(2, new Node(3)));

console.log(arrayify(insert(null, 1))); // [1]
console.log(arrayify(insert(new Node(0), 1))); // [0, 1]
console.log(arrayify(insert(new Node(2), 1))); // [0, 1]
console.log(arrayify(insert(LL1, 2))); // [1, 2, 3, 4]
console.log(arrayify(insert(LL3, 0))); // [0, 1, 2, 3]
console.log(arrayify(insert(LL3, 4))); // [1, 2, 3, 4]
console.log(arrayify(insert(LL2, 0))); // [-3, -2, -1, 0]
console.log(arrayify(insert(LL2, -4))); // [-4, -3, -2, -1]
