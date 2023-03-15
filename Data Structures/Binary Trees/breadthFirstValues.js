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
