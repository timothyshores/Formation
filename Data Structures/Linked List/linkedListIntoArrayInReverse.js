// Prompt
// Given a linked list, return an array with all the elements in reverse.

// Expected Time Complexity: O(N) to iterate through the length N list
// Expected Space Complexity: O(N) to store the length N list into an array

// Example
// 1 -> 3 -> 5 -> 2
// let head = new Node(1, new Node(3, new Node(5, new Node(2))))
// console.log(JSON.stringify(createLLInReverse(head))
// === JSON.stringify([2,5,3,1]))

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const createLLInReverse = (node) => {
	if (!node?.value && node?.value !== 0) return [];

	let array = [];

	// iterate through the linked list
	while (node) {
		// add each node's value into an array
		array.push(node.value);
		node = node.next;
	}

	// return the reversed array
	return array.reverse();
};
