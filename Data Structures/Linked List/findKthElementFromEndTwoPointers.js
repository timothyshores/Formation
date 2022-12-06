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
	let fastPointer = head;
	let slowPointer = head;

	for (let i = 0; i < k; i++) {
		fastPointer = fastPointer.next;
		if (fastPointer === null) return -1;
	}

	while (fastPointer) {
		fastPointer = fastPointer.next;
		slowPointer = slowPointer.next;
	}

	return slowPointer.value;
};

// Test Data
const LL1 = new ListNode(
	13,
	new ListNode(
		1,
		new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))
	)
);

// All test cases return true);
console.log(kthFromLast(LL1, 1) === 10);
console.log(kthFromLast(LL1, 2) === 7);
console.log(kthFromLast(LL1, 3) === 3);
console.log(kthFromLast(LL1, 4) === 5);
console.log(kthFromLast(LL1, 5) === 1);
console.log(kthFromLast(LL1, 7) === -1);
console.log(kthFromLast(LL1, 8) === -1);
console.log(kthFromLast(LL1, 999) === -1);
