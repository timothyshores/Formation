// Q. Given a linked list, return the kth element from the end of the list.
//    If the k exceeds the length of the list, return -1.

// Examples:
// Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 1 returns 10
// Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 7 returns -1

class ListNode {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

const kthFromLast = (head, k) => {
	let current = head;
	const nodes = [];

	while (current) {
		nodes.push(current.value);
		current = current.next;
	}

	return nodes[nodes.length - k] || -1;
}

// Test Data
const LL1 = new ListNode(
	13,
	new ListNode(
		1,
		new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))
	)
);
