// Prompt
// Given an array containing numbers, convert this to a singly linked list and return the head of the list.

// Expected Time Complexity: O(n) to iterate through the n length array
// Expected Space Complexity: O(n) to store n elements into nodes

// Examples
// console.log(toString(arrayToLL([1,2])) == "1 -> 2")
// console.log(toString(arrayToLL([1,2,3])) == "1 -> 2 -> 3")

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

function toString(head) {
	if (!head) return "<empty>";

	let parts = [];
	while (head) {
		parts.push(head.val);
		head = head.next;
	}

	return parts.join(" -> ");
}

/**
 * Converts an array of numbers into a singly linked list
 *
 * @param {number[]} array
 * @return {Node} head node
 */
const arrayToLL = (array) => {
	const { length } = array;

	if (length === 0) return null;

	let headNode = new Node(array[0]);
	let current = headNode;

	for (let i = 1; i < length; i++) {
		current.next = new Node(array[i]);
		current = current.next;
	}

	return headNode;
};
