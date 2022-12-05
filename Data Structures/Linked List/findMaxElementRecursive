class ListNode {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

const findMax = (node) => {
	if (node.next === null) return node.value;
	return Math.max(node.value, findMax(node.next));
};

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))));
var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))));
var LL3 = new ListNode(
	-1,
	new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11))))
);

console.log(findMax(LL1)); // 5
console.log(findMax(LL2)); // 7
console.log(findMax(LL3)); // 0
console.log(findMax(new ListNode(1))); // 1
