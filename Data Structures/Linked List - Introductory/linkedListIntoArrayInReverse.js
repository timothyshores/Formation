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

// empty list
console.log(JSON.stringify(createLLInReverse()));
console.log(JSON.stringify(createLLInReverse(new Node())));

// 1 node list
console.log(JSON.stringify(createLLInReverse(new Node(1))));
console.log(JSON.stringify(createLLInReverse(new Node(0))));
console.log(JSON.stringify(createLLInReverse(new Node(-1))));
console.log(JSON.stringify(createLLInReverse(new Node(99999))));

// odd-length list
console.log(
	JSON.stringify(createLLInReverse(new Node(1, new Node(2, new Node(3)))))
); // [3, 2, 1]

console.log(
	JSON.stringify(createLLInReverse(new Node(0, new Node(2, new Node(4)))))
); // [4, 2, 0]

// even-length list
console.log(JSON.stringify(createLLInReverse(new Node(1, new Node(2))))); // [2, 1]

console.log(JSON.stringify(createLLInReverse(new Node(2, new Node(1))))); // [1, 2]

let head = new Node(1, new Node(3, new Node(5, new Node(2))));
console.log(
	JSON.stringify(createLLInReverse(head)) === JSON.stringify([2, 5, 3, 1])
); // true

// list with duplicates
console.log(JSON.stringify(createLLInReverse(new Node(0, new Node(1))))); // [1, 0]

console.log(
	JSON.stringify(createLLInReverse(new Node(4, new Node(0, new Node(4)))))
); // [4, 0, 4]

console.log(
	JSON.stringify(createLLInReverse(new Node(0, new Node(0, new Node(0)))))
); // [0, 0, 0]
