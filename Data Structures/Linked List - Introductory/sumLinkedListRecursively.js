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

// All Test Cases Return True
console.log(sumLinkedListRecursively(null) === 0);
console.log(sumLinkedListRecursively(new ListNode()) === 0);
console.log(sumLinkedListRecursively(new ListNode(1)) === 1);
console.log(sumLinkedListRecursively(new ListNode(2)) === 2);
console.log(sumLinkedListRecursively(new ListNode(3, new ListNode(4))) === 7);
console.log(
	sumLinkedListRecursively(
		new ListNode(1, new ListNode(4, new ListNode(5)))
	) === 10
);
console.log(
	sumLinkedListRecursively(
		new ListNode(0, new ListNode(-1, new ListNode(1)))
	) === 0
);
console.log(
	sumLinkedListRecursively(
		new ListNode(-1, new ListNode(-2, new ListNode(-3)))
	) === -6
);
console.log(
	sumLinkedListRecursively(
		new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
	) === 10
);
console.log(
	sumLinkedListRecursively(
		new ListNode(10, new ListNode(20, new ListNode(30, new ListNode(40))))
	) === 100
);
