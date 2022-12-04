// Prompt
// Given a linked list and a target value, return the index of the first occurrence of that value in the linked list. The index should be zero-indexed.

// Expected Runtime
// Time: O(N) to iterate through the length N list
// Space: O(1) to store a single variable

// Examples
// let list1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
// console.log(firstIndexInLL(list1, 9) === -1)
// console.log(firstIndexInLL(list1, 3) === 2)

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const firstIndexInLL = (node, target) => {};
