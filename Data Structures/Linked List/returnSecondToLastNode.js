// Given a linked list, return the second to last element's value.

// Expected Time Complexity: O(N) to iterate through the length N list
// Expected Space Complexity: O(1) to store a constant number of variables

// Example 1
// 1 -> 2 => 1

// Example 2
// 1 -> 2 -> 3 -> 4 => 3

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const secondToLast = (head) => {};
