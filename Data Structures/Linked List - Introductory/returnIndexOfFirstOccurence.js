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

const firstIndexInLL = (node, target) => {
	let index = 0;

	while (node) {
		if (node.val === target) return index;
		node = node.next;
		index++;
	}

	return -1;
};

// empty list
console.log(firstIndexInLL(null, 1));

// 1 node list with target
const oneNodeList = new Node(1);
console.log(firstIndexInLL(oneNodeList, 1));

// 1 node list without target
console.log(firstIndexInLL(new Node(), 1));

// list with all unique
const uniquesOneThroughFive = new Node(
	1,
	new Node(2, new Node(3, new Node(4, new Node(5))))
);
console.log(firstIndexInLL(uniquesOneThroughFive, 1) === 0); // true
console.log(firstIndexInLL(uniquesOneThroughFive, 2) === 1); // true
console.log(firstIndexInLL(uniquesOneThroughFive, 3) === 2); // true
console.log(firstIndexInLL(uniquesOneThroughFive, 5) === 4); // true
console.log(firstIndexInLL(uniquesOneThroughFive, 6) === -1); // true
console.log(firstIndexInLL(uniquesOneThroughFive, 9) === -1); // true

// list with duplicates of target
const duplicate1 = new Node(1, new Node(1)); // true
console.log(firstIndexInLL(duplicate1, 1) === 0); // true

const duplicate2 = new Node(1, new Node(2, new Node(2))); // true
console.log(firstIndexInLL(duplicate2, 2) === 1); // true

// list without target
console.log(firstIndexInLL(duplicate1, 0) === -1); // true
