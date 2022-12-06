// Given a sorted linked list of unique integers, check if the list contains an element with a target value.

// Examples:
// Given a linked list: 2 ➞ 3 ➞ 5, target: 2 // returns True
// Given a linked list: 2 ➞ 3 ➞ 5, target: 4  // returns False

class ListNode {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

const search = (head, target) => {};

const LL1 = new ListNode(
	1,
	new ListNode(
		2,
		new ListNode(
			3,
			new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(10))))
		)
	)
);
