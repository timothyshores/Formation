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

const search = (head, target) => {
	if (!head || target < head.value) return false;

	let current = head;

	while (current) {
		if (target === current.value) return true;
		if (target < current.value) return false;
		current = current.next;
	}

	return false;
};

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

// All test cases return true
console.log(search(LL1, 1));
console.log(search(LL1, 2));
console.log(search(LL1, 3));
console.log(search(LL1, 5));
console.log(search(LL1, 6));
console.log(search(LL1, 7));
console.log(search(LL1, 10));
console.log(search(LL1, 0) === false);
console.log(search(LL1, 4) === false);
console.log(search(LL1, 8) === false);
console.log(search(null, 1) === false);
console.log(search(LL1, -1) === false);
console.log(search(LL1, 11) === false);
