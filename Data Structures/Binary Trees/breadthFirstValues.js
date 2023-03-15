/*

PROMPT

Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.

*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const breadthFirstValues = (root) => {
	// Handle null input edge case and return empty array
	if (!root) return [];

	// Nodes that need to be processed
	const queue = [root];

	// Initialize empty array to store value of nodes visited in breadth first search order
	const values = [];

	// Continue iterating until all nodes have been processed
	while (queue.length) {
		// Dequeue the front element from the queue and store in current variable
		const current = queue.pop();

		// Add the current node to the valuess array
		values.push(current.val);

		// If the current node has a left child, enqueue and add it to the back of the queue
		if (current.left) queue.unshift(current.left);

		// If the current node has a right child, enqueue and add it to the back of the queue
		if (current.right) queue.unshift(current.right);
	}

	return values;
};

// Test Cases
const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");
const e1 = new Node("e");
const f1 = new Node("f");

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(breadthFirstValues(a1)); // ['a', 'b', 'c', 'd', 'e', 'f']

const a2 = new Node("a");
const b2 = new Node("b");
const c2 = new Node("c");
const d2 = new Node("d");
const e2 = new Node("e");
const f2 = new Node("f");
const g2 = new Node("g");
const h2 = new Node("h");

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;
e2.left = g2;
f2.right = h2;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

console.log(breadthFirstValues(a2)); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const a3 = new Node("a");
const b3 = new Node("b");
const c3 = new Node("c");
const d3 = new Node("d");
const e3 = new Node("e");
const x3 = new Node("x");

a3.right = b3;
b3.left = c3;
c3.left = x3;
c3.right = d3;
d3.right = e3;

//      a
//       \
//        b
//       /
//      c
//    /  \
//   x    d
//         \
//          e

console.log(breadthFirstValues(a3)); // ['a', 'b', 'c', 'x', 'd', 'e']
console.log(breadthFirstValues(a3)); // ['a']
console.log(breadthFirstValues(null)); // []
