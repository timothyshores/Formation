// Find the node 3/4ths length through the linked list.
// Assume that the LL has a length divisable by 4 e.g. 4, 8, 12, 16, 20, 24, ..., etc.
// Must be solved within a single pass in exactly O(1N) time. No double for loop with a counter
// How can this be solved in a single pass without a length variable and additional loop?

class Node {
	constructor(value = 0, next = null) {
		this.value = value;
		this.next = next;
	}
}

const findThirdQuarterNode = (head) => {};
