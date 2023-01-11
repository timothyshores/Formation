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

