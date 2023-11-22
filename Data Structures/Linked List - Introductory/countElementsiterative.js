// Given an unsorted linked list, count the number of elements (iteratively or recursively).

// Examples:
// • Given a linked list: 1 ➞ 4 ➞ 5 returns 3
// • Given a linked list: 0 returns 1

class ListNode {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

const count = (head) => {
	if (!head) return 0;

	let count = 0;

	while (head) {
		count++;
		head = head.next;
	}

	return count;
};

// All test cases return true
console.log(count(null) === 0);

console.log(count(new ListNode()) === 1);
console.log(count(new ListNode(0)) === 1);
console.log(count(new ListNode(-1)) === 1);

console.log(count(new ListNode(1, new ListNode(2))) === 2);
console.log(count(new ListNode(0, new ListNode(1))) === 2);
console.log(count(new ListNode(-1, new ListNode(0))) === 2);

console.log(count(new ListNode(1, new ListNode(2, new ListNode(3)))) === 3);
console.log(count(new ListNode(-1, new ListNode(-2, new ListNode(-3)))) === 3);
console.log(count(new ListNode(0, new ListNode(0, new ListNode(0)))) === 3);

console.log(
	count(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))) ===
		4
);
console.log(
	count(new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0))))) ===
		4
);
console.log(
	count(new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))))) ===
		4
);
console.log(
	count(
		new ListNode(-1, new ListNode(-1, new ListNode(-1, new ListNode(-1))))
	) === 4
);
