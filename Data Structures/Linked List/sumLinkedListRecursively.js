/*

PROMPT 
Given a linked list, sum all elements in the list.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
• Given a linked list: 1 // returns 1

*/

class ListNode {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

const sumLinkedListRecursively = (node) => {
	// Base case
	if (!node) return 0;
	// Recursive case
	return node.value + sumLinkedListRecursively(node.next);
};
