/*

Given a linked list, append an element with a target value to the list recursively.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5, target: 7 // returns 1 ➞ 4 ➞ 5 ➞ 7
• Given a linked list: 0, target 7 // returns 0 ➞ 7

*/

class Node {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

const arrayify = (head) => {
	let ptr = head;
	var array = [];
	while (ptr != null) {
		array.push(ptr.value);
		ptr = ptr.next;
	}
	return array;
};

const append = (head, target) => {
	if (!head) return new Node(target);

	head.next = append(head.next, target);
	return head;
};

// Test Cases
console.log(arrayify(append(null, 1))); // [1]
console.log(arrayify(append(new Node(), 7))); // [0, 7]
console.log(arrayify(append(new Node(1, new Node(2)), 3))); // [1, 2, 3]
console.log(arrayify(append(new Node(3, new Node(2)), 1))); // [3, 2, 1]
console.log(arrayify(append(new Node(1, new Node(2, new Node(3))), 4))); // [1, 2, 3, 4]
console.log(arrayify(append(new Node(1, new Node(4, new Node(5))), 7))); // [1, 4, 5, 7]
